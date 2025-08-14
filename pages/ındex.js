import { useEffect, useState } from "react";

export default function Home() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetch(`/api/matches?date=${today}`) // istersen &league=XXX&season=YYYY ekleyebilirsin
      .then((r) => r.json())
      .then((d) => setMatches(d.matches || []))
      .catch(() => setMatches([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ marginBottom: 20 }}>TAHMİN360</h1>

      {loading && <div>Yükleniyor…</div>}

      {!loading && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {matches.map((m, i) => (
            <li
              key={i}
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 12,
                marginBottom: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
              }}
            >
              <span>
                {m.date} {m.time} — {m.home} vs {m.away}
              </span>

              {/* Başlamadıysa boş, İY veya MS ise skor + etiket */}
              {(m.status === "MS" || m.status === "İY") ? (
                <strong>{m.score} {m.status}</strong>
              ) : (
                <span style={{ width: 60 }} />
              )}
            </li>
          ))}

          {matches.length === 0 && (
            <li style={{ opacity: 0.7 }}>Bugün için veri bulunamadı.</li>
          )}
        </ul>
      )}
    </main>
  );
}
