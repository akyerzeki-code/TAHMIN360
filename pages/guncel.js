export default function Guncel() {
  const maclar = [
    { id: 1, ev: "Galatasaray", dep: "Fenerbahçe", saat: "20:00", oran: "2.5 Üst 1.70" },
    { id: 2, ev: "Real Madrid", dep: "Barcelona", saat: "22:00", oran: "KG Var 1.55" },
    { id: 3, ev: "Manchester City", dep: "Liverpool", saat: "19:30", oran: "3.5 Üst 2.10" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">📅 Bugünün Güncel Maçları</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-indigo-100">
            <th className="border p-2">Ev Sahibi</th>
            <th className="border p-2">Deplasman</th>
            <th className="border p-2">Saat</th>
            <th className="border p-2">Oran</th>
          </tr>
        </thead>
        <tbody>
          {maclar.map((mac) => (
            <tr key={mac.id} className="text-center">
              <td className="border p-2">{mac.ev}</td>
              <td className="border p-2">{mac.dep}</td>
              <td className="border p-2">{mac.saat}</td>
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
