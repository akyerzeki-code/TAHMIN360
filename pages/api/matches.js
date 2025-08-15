// pages/api/matches.js

export default async function handler(req, res) {
  try {
    // ---- Parametreler
    const q = req?.query || {};
    const date = (q.date || new Date().toISOString().slice(0, 10)).slice(0, 10); // YYYY-MM-DD
    const league = q.league ? String(q.league) : "";
    const season = q.season ? String(q.season) : "";

    // ---- API anahtarı kontrolü
    const apiKey = process.env.API_FOOTBALL_KEY || "";
    if (!apiKey) {
      // Build/SSG aşamalarında kırılmayı önlemek için boş sonuç döndürüyoruz
      return res.status(200).json({ matches: [] });
    }

    // ---- İstek URL'si
    const url = new URL("https://v3.football.api-sports.io/fixtures");
    url.searchParams.set("date", date);
    if (league) url.searchParams.set("league", league);
    if (season) url.searchParams.set("season", season);

    // ---- Upstream fetch
    const upstream = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "x-apisports-key": apiKey,
        "Accept": "application/json",
      },
    });

    // Upstream 200 değilse: metni da loglayalım, ama 200/boş dönelim ki UI kırılmasın
    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => "");
      console.error("Upstream error:", upstream.status, detail);
      return res.status(200).json({ matches: [] });
    }

    const raw = await upstream.json().catch(() => ({}));
    const rows = Array.isArray(raw?.response) ? raw.response : [];

    // İptal/ertelenen kısa kodlar (API-Football)
    const EXCLUDE = new Set(["CANC", "PST", "ABD", "SUSP", "AWD", "WO", "TBD"]);

    // ---- Güvenli map
    const items = rows
      .filter((m) => !EXCLUDE.has(m?.fixture?.status?.short || ""))
      .map((m) => {
        // Tarih/Saat
        const iso = m?.fixture?.date ? new Date(m.fixture.date) : null;
        const pad = (n) => String(n).padStart(2, "0");
        const dateStr = iso
          ? `${pad(iso.getFullYear())}-${pad(iso.getMonth() + 1)}-${pad(iso.getDate())}`
          : date; // yoksa istek tarihini koy
        const timeStr = iso
          ? `${pad(iso.getHours())}:${pad(iso.getMinutes())}`
          : "";

        // Statü
        const st = m?.fixture?.status?.short || ""; // NS, 1H, HT, 2H, ET, P, FT, AET, PEN...
        const elapsed = typeof m?.fixture?.status?.elapsed === "number"
          ? m.fixture.status.elapsed
          : null;

        let statusOut = "";
        if (st === "FT" || st === "AET" || st === "PEN") statusOut = "MS";
        else if (st === "HT") statusOut = "İY";
        else if (["1H", "2H", "ET", "P"].includes(st) && elapsed != null) statusOut = `${elapsed}’`;
        // NS vb. durumlarda boş kalsın

        // Skor
        const gh = m?.goals?.home;
        const ga = m?.goals?.away;
        const scoreStr = (gh != null && ga != null) ? `${gh}-${ga}` : "";

        return {
          date: dateStr,
          time: timeStr,
          home: m?.teams?.home?.name || "",
          away: m?.teams?.away?.name || "",
          score: scoreStr,
          status: statusOut,
        };
      });

    return res.status(200).json({ matches: items });
  } catch (err) {
    console.error("API route error:", err);
    // Son çare: 200/boş dön ki arayüz kırılmasın
    return res.status(200).json({ matches: [] });
  }
}
