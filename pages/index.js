import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("maclar");
  const today = new Date().toISOString().slice(0, 10);
  const demo = [
    {
      lig: "Türkiye Süper Lig",
      tarih: today,
      ev: "Galatasaray",
      dep: "Fenerbahçe",
      oran: { ust25: 1.70, ust35: 2.40, kgvar: 1.55 },
      tahmin: "3.5 ÜST",
      guven: 0.68,
    },
    {
      lig: "Premier League",
      tarih: today,
      ev: "Man City",
      dep: "Liverpool",
      oran: { ust25: 1.62, ust35: 2.25, kgvar: 1.50 },
      tahmin: "KG VAR & 2.5 ÜST",
      guven: 0.72,
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#0a0a0a",
      color: "#fff",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
    },
    container: { maxWidth: 1080, margin: "0 auto", padding: 16 },
    header: {
      position: "sticky",
      top: 0,
      backdropFilter: "blur(6px)",
      background: "rgba(10,10,10,0.7)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      zIndex: 10,
    },
    headerInner: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "12px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    brand: { fontWeight: 800, fontSize: 20, letterSpacing: 0.2 },
    tabs: { display: "flex", gap: 8 },
    tabBtn: (active) => ({
      padding: "8px 12px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.15)",
      background: active ? "#fff" : "rgba(255,255,255,0.08)",
      color: active ? "#000" : "#fff",
      fontSize: 14,
    }),
    grid: {
      display: "grid",
      gap: 16,
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    },
    card: {
      background: "#fff",
      color: "#111",
      borderRadius: 16,
      boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      padding: 16,
    },
    row: { display: "flex", alignItems: "center", justifyContent: "space-between" },
    muted: { color: "#667085", fontSize: 12, fontWeight: 600 },
    oddsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 8,
      marginTop: 12,
      fontSize: 14,
    },
    oddBox: {
      border: "1px solid #e5e7eb",
      borderRadius: 10,
      textAlign: "center",
      padding: 8,
      background: "#fafafa",
    },
    addBtn: {
      padding: "8px 12px",
      borderRadius: 10,
      background: "#111",
      color: "#fff",
      fontSize: 14,
      border: "none",
    },
    footer: {
      maxWidth: 1080,
      margin: "0 auto",
      padding: "24px 16px",
      color: "#98a2b3",
      fontSize: 12,
    },
    section: { background: "#fff", color: "#111", borderRadius: 16, padding: 16 },
    list: { marginTop: 8, paddingLeft: 18, fontSize: 14 },
    inputWrap: {
      display: "grid",
      gridTemplateRows: "1fr auto",
      minHeight: 320,
      overflow: "hidden",
      borderRadius: 16,
      background: "#fff",
      color: "#111",
    },
    chatArea: { padding: 12, overflow: "auto" },
    chatRow: { fontSize: 14, marginBottom: 6 },
    chatBold: { fontWeight: 700, marginRight: 8 },
    chatInputRow: {
      borderTop: "1px solid #e5e7eb",
      padding: 8,
      display: "flex",
      gap: 8,
    },
    input: {
      flex: 1,
      border: "1px solid #d0d5dd",
      borderRadius: 12,
      padding: "10px 12px",
      outline: "none",
    },
    send: { padding: "10px 14px", borderRadius: 12, background: "#111", color: "#fff", border: "none" },
  };

  return (
    <div style={styles.page}>
      {/* Üst Çubuk */}
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>TAHMİN360</div>
          <div style={styles.tabs}>
            <button style={styles.tabBtn(tab === "maclar")} onClick={() => setTab("maclar")}>Maçlar</button>
            <button style={styles.tabBtn(tab === "analiz")} onClick={() => setTab("analiz")}>Analiz</button>
            <button style={styles.tabBtn(tab === "sohbet")} onClick={() => setTab("sohbet")}>Sohbet</button>
          </div>
        </div>
      </div>

      <main style={styles.container}>
        {tab === "maclar" && (
          <div style={styles.grid}>
            {demo.map((m, i) => (
              <div key={i} style={styles.card}>
                <div style={styles.row}>
                  <div style={styles.muted}>{m.lig} · {m.tarih}</div>
                  <div style={styles.muted}>Güven: {(m.guven * 100).toFixed(0)}%</div>
                </div>
                <div style={{ ...styles.row, marginTop: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{m.ev} – {m.dep}</div>
                </div>
                <div style={styles.oddsGrid}>
                  <div style={styles.oddBox}>2.5 ÜST<br/><b>{m.oran.ust25.toFixed(2)}</b></div>
                  <div style={styles.oddBox}>3.5 ÜST<br/><b>{m.oran.ust35.toFixed(2)}</b></div>
                  <div style={styles.oddBox}>KG VAR<br/><b>{m.oran.kgvar.toFixed(2)}</b></div>
                </div>
                <div style={{ ...styles.row, marginTop: 12 }}>
                  <span style={{ fontSize: 14 }}>Öneri: <b>{m.tahmin}</b></span>
                  <button style={styles.addBtn}>Kupona Ekle</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "analiz" && (
          <div style={{ display: "grid", gap: 16 }}>
            <div style={styles.section}>
              <h2 style={{ fontSize: 18, fontWeight: 700 }}>Oran & Skor Analizi (Demo)</h2>
              <ul style={styles.list}>
                <li>Nesine uyumlu oran alanları</li>
                <li>Maçkolik geçmiş skor/performans</li>
                <li>2.5/3.5/4.5 üst-alt ve KG VAR/YOK olasılıkları</li>
              </ul>
            </div>
            <div style={styles.section}>
              <h3 style={{ fontSize: 16, fontWeight: 600 }}>Bugünkü Güçlü Sinyaller (Örnek)</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 8, marginTop: 8 }}>
                {["3.5 ÜST", "KG VAR", "4.5 ÜST"].map((s, i) => (
                  <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 12, textAlign: "center", background: "#fafafa" }}>{s}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "sohbet" && <Chat styles={styles} />}
      </main>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} Tahmin360 – Deneme Sürümü. Bu sayfa demo veriler içerir.
      </footer>
    </div>
  );
}

function Chat({ styles }) {
  const [messages, setMessages] = useState([
    { user: "Mod", text: "Küfür kesinlikle yasaktır. Analizlerinizi saygılı şekilde paylaşın." },
    { user: "Ali", text: "GS-FB maçında 2.5 üst bence mantıklı." },
  ]);
  const [input, setInput] = useState("");

  function send() {
    const t = input.trim();
    if (!t) return;
    setMessages((m) => [...m, { user: "Sen", text: t }]);
    setInput("");
  }

  return (
    <div style={styles.inputWrap}>
      <div style={styles.chatArea}>
        {messages.map((m, i) => (
          <div key={i} style={styles.chatRow}>
            <span style={styles.chatBold}>{m.user}:</span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>
      <div style={styles.chatInputRow}>
        <input
          style={styles.input}
          placeholder="Maça özel yorum yazın (küfür yasaktır)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <button style={styles.send} onClick={send}>Gönder</button>
      </div>
    </div>
  );
}
