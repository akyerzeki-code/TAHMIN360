export default function Home() {
  // Örnek veri — buraya ileride API’den gelen maçlar gelecek
  const matches = [
    { date: "2025-08-15", time: "21:00", home: "Galatasaray", away: "Fenerbahçe", score: "2-1", status: "MS" },
    { date: "2025-08-15", time: "23:00", home: "Real Madrid", away: "Barcelona", score: "1-0", status: "İY" },
    { date: "2025-08-16", time: "20:30", home: "Liverpool", away: "Man City", score: "", status: "" },
  ];

  return (
    <div className="page">
      <div className="brand">TAHMİN360</div>
      <ul className="list">
        {matches.map((m, i) => (
          <li className="item" key={i}>
            <div className="left">
              {m.date} {m.time} — {m.home} vs {m.away}
            </div>
            <div className="right">
              {m.status ? `${m.score} ${m.status}` : ""}
            </div>
          </li>
        ))}
      </ul>
      <div className="muted">
        Maç verileri test amaçlıdır, otomatik güncellenecek.
      </div>
    </div>
  );
}
