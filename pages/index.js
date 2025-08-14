export default function Home() {
  const matches = [
    {
      date: "14.08.2025",
      time: "20:00",
      home: "Galatasaray",
      away: "Fenerbahçe",
      score: "2 - 1",
      status: "MS"
    },
    {
      date: "14.08.2025",
      time: "21:00",
      home: "Real Madrid",
      away: "Barcelona",
      score: "1 - 0",
      status: "İY"
    },
    {
      date: "14.08.2025",
      time: "22:00",
      home: "Liverpool",
      away: "Manchester City",
      score: "",
      status: ""
    }
  ];

  return (
    <main style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 20 }}>TAHMİN360</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {matches.map((match, i) => (
          <li
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 12,
              marginBottom: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>
              {match.date} {match.time} — {match.home} vs {match.away}
            </span>
            {match.status && (
              <strong>
                {match.score} {match.status}
              </strong>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
