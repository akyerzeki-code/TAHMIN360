exportdefaultasyncfunction handler(req, res) {
  try {
    const q = req?.query || {};
    const date = q.date || new Date().toISOString().slice(0, 10);
    const league = q.league || "";
    const season = q.season || "";

    const url = new URL("https://v3.football.api-sports.io/fixtures");
    url.searchParams.set("date", date);
    if (league) url.searchParams.set("league", league);
    if (season) url.searchParams.set("season", season);

    const r = await fetch(url.toString(), {
      headers: { "x-apisports-key": process.env.API_FOOTBALL_KEY },
    });

    if (!r.ok) {
      const text = await r.text();
      return res.status(r.status).json({ error: "Upstream error", detail: text });
    }
    const data = await r.json();

    const items = (data.response || []).map((m) => {
      const d = new Date(m.fixture.date);
      const pad = (n) => String(n).padStart(2, "0");
      const dateStr = `${pad(d.getDate())}.${pad(d.getMonth()+1)}.${d.getFullYear()}`;
      const timeStr = `${pad(d.getHours())}:${pad(d.getMinutes())}`;

      const st = m.fixture?.status?.short || ""; // NS, 1H, HT, 2H, FT...
      let statusOut = "";
      if (st === "FT" || st === "AET" || st === "PEN") statusOut = "MS";
      else if (st === "HT") statusOut = "İY";

      const gh = m.goals?.home ?? "";
      const ga = m.goals?.away ?? "";
      const scoreStr = (gh !== "" && ga !== "") ? `${gh} - ${ga}` : "";

      return {
        date: dateStr,
        time: timeStr,
        home: m.teams?.home?.name || "",
        away: m.teams?.away?.name || "",
        score: scoreStr,
        status: statusOut,
      };
    });

    res.status(200).json({ matches: items });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
}
