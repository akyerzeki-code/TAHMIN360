// Canlı maç listesini API-Football'dan çeker ve sade formatta döner.
// Gerekli ortam değişkeni: API_FOOTBALL_KEY (Vercel Settings → Environment Variables)

export default async function handler(req, res) {
  try {
    const q = req?.query || {};
    const date = q.date || new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const league = q.league || "";   // opsiyonel: belirli lig ID'si (API-Football dokümantasyonundaki ID)
    const season = q.season || "";   // opsiyonel: 2025 gibi

    // İstek URL'si
    const url = new URL("https://v3.football.api-sports.io/fixtures");
    url.searchParams.set("date", date);
    if (league) url.searchParams.set("league", league);
    if (season) url.searchParams.set("season", season);

    const r = await fetch(url.toString(), {
      headers: { "x-apisports-key": process.env.API_FOOTBALL_KEY },
      // Next.js (Node 18+) ortamında fetch global; ek kurulum gerekmiyor
    });

    if (!r.ok) {
      const text = await r.text();
      return res.status(r.status).json({ error: "Upstream error", detail: text });
    }

    const data = await r.json();
    const rows = Array.isArray(data?.response) ? data.response : [];

    // İstenmeyen durumlar (iptal/ertelendi vs.) → liste dışında bırak
    const EXCLUDE = new Set(["CANC", "PST", "ABD", "SUSP", "AWD", "WO", "TBD"]);

    const items = rows
      .filter(m => !EXCLUDE.has(m?.fixture?.status?.short || ""))
      .map(m => {
        const d = new Date(m.fixture.date);
        const pad = n => String(n).padStart(2, "0");
        const dateStr = `${pad(d.getFullYear())}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
        const timeStr = `${pad(d.getHours())}:${pad(d.getMinutes())}`;

        const st = m.fixture?.status?.short || "";         // NS, 1H, HT, 2H, ET, P, FT...
        const elapsed = m.fixture?.status?.elapsed ?? null; // dakika (number | null)

        // Çıkıştaki "status" alanı kuralı:
        // - FT/AET/PEN  → "MS"
        // - HT          → "İY"
        // - 1H/2H/ET/P  → "NN’" (dakika)
        // - NS (başlamadı) → boş bırak
        let statusOut = "";
        if (st === "FT" || st === "AET" || st === "PEN") statusOut = "MS";
        else if (st === "HT") statusOut = "İY";
        else if (["1H", "2H", "ET", "P"].includes(st) && typeof elapsed === "number") statusOut = `${elapsed}’`;

        const gh = m.goals?.home;
        const ga = m.goals?.away;
        const scoreStr = (gh != null && ga != null) ? `${gh}-${ga}` : "";

        return {
          date: dateStr,
          time: timeStr,
          home: m.teams?.home?.name || "",
          away: m.teams?.away?.name || "",
          score: scoreStr,
          status: statusOut
        };
      });

    return res.status(200).json({ matches: items });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Server error" });
  }
}
