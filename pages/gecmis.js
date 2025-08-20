export default function Gecmis() {
  const bugunBiten = [
    { id: 1, ev: "Fenerbahçe", dep: "Beşiktaş", skor: "3 - 1", oran: "2.5 ÜST" },
    { id: 2, ev: "Liverpool", dep: "Manchester City", skor: "2 - 2", oran: "KG VAR" },
  ];

  const gecmisSezon = [
    { id: 1, ev: "Real Madrid", dep: "Barcelona", skor: "2 - 1", oran: "MS 1" },
    { id: 2, ev: "PSG", dep: "Lyon", skor: "4 - 2", oran: "3.5 ÜST" },
    { id: 3, ev: "Milan", dep: "Inter", skor: "1 - 1", oran: "KG VAR" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-700 mb-4">📜 Gün İçinde Biten Maçlar</h1>
      <table className="w-full border-collapse border border-gray-300 mb-8">
        <thead>
          <tr className="bg-red-100">
            <th className="border p-2">Ev Sahibi</th>
            <th className="border p-2">Deplasman</th>
            <th className="border p-2">Skor</th>
            <th className="border p-2">Oran</th>
          </tr>
        </thead>
        <tbody>
          {bugunBiten.map((mac) => (
            <tr key={mac.id} className="text-center">
              <td className="border p-2">{mac.ev}</td>
              <td className="border p-2">{mac.dep}</td>
              <td className="border p-2">{mac.skor}</td>
              <td className="border p-2">{mac.oran}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-xl font-bold text-gray-700 mb-4">📅 Geçmiş Sezonlardan Örnek Maçlar</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Ev Sahibi</th>
            <th className="border p-2">Deplasman</th>
            <th className="border p-2">Skor</th>
            <th className="border p-2">Oran</th>
          </tr>
        </thead>
        <tbody>
          {gecmisSezon.map((mac) => (
            <tr key={mac.id} className="text-center">
              <td className="border p-2">{mac.ev}</td>
              <td className="border p-2">{mac.dep}</td>
              <td className="border p-2">{mac.skor}</td>
              <td className="border p-2">{mac.oran}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <a href="/" className="text-blue-600 underline">⬅️ Ana Sayfaya Dön</a>
      </div>
    </div>
  );
}
