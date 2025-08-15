import Head from "next/head";

export default function Home() {
  const matches = [
    // Örnek veriler (yayına geçmeden API ekleriz)
    { date: "15.08.2025", time: "20:00", home: "Galatasaray", away: "Fenerbahçe", score: "2 - 1", status: "MS" },
    { date: "15.08.2025", time: "21:00", home: "Real Madrid", away: "Barcelona",  score: "1 - 0", status: "İY" },
    { date: "15.08.2025", time: "22:00", home: "Liverpool",   away: "Man City",   score: "",      status: ""   },
  ];

  return (
    <>
      <Head>
        <title>TAHMIN360</title>
        <meta name="description" content="Gol analiz, oran karşılaştırma, canlı takip." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page">
        <h1 className="brand">TAHMIN360</h1>

        <ul className="list">
          {matches.map((m, i) => (
            <li key={i} className="item">
              <span className="left">
                {m.date} {m.time} — {m.home} vs {m.away}
              </span>
              {(m.status === "MS" || m.status === "İY") ? (
                <strong className="right">{m.score} {m.status}</strong>
              ) : (
                <span className="right" />
              )}
            </li>
          ))}
        </ul>

        {matches.length === 0 && <div className="muted">Bugün için veri bulunamadı.</div>}
      </main>
    </>
  );
}
