export default function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-indigo-700">📱 TAHMİN360</h1>
      <p className="mt-4 text-lg text-gray-700">
        Hoş geldin! Buradan maç analizlerini, geçmiş sonuçları ve canlı maçları takip edebilirsin.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6">
        <a href="/guncel" className="p-6 bg-white shadow rounded-lg hover:bg-indigo-50">
          📅 Bugünün Güncel Maçları
        </a>
        <a href="/oynayan" className="p-6 bg-white shadow rounded-lg hover:bg-indigo-50">
          ⚽ Oynayan Maçlar
        </a>
        <a href="/gecmis" className="p-6 bg-white shadow rounded-lg hover:bg-indigo-50">
          📜 Geçmiş Maçlar
        </a>
        <a href="/analiz" className="p-6 bg-white shadow rounded-lg hover:bg-indigo-50">
          📊 Analiz Sayfası
        </a>
      </div>
    </div>
  );
}
