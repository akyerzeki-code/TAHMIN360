import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-indigo-700 text-white p-4 flex gap-6">
        <Link href="/">🏠 Anasayfa</Link>
        <Link href="/guncel">📅 Güncel Maçlar</Link>
        <Link href="/oynayan">⚽ Oynayan Maçlar</Link>
        <Link href="/gecmis">📜 Geçmiş Maçlar</Link>
        <Link href="/analiz">📊 Analiz</Link>
      </nav>

      {/* Sayfa içerikleri */}
      <main className="p-6">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
