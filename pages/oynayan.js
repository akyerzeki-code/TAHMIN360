export default function Oynayan() {
  const maclar = [
    { id: 1, ev: "Galatasaray", dep: "Trabzonspor", dakika: "55'", skor: "2 - 1" },
    { id: 2, ev: "Chelsea", dep: "Arsenal", dakika: "38'", skor: "0 - 0" },
    { id: 3, ev: "Juventus", dep: "Inter", dakika: "72'", skor: "1 - 2" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">⚽ Şu An Oynanan Maçlar</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-100">
            <th className="border p-2">Ev Sahibi</th>
            <th className="border p-2">Deplasman</th>
            <th className="border p-2">Dakika</th>
            <th className="border p-2">Skor</th>
          </tr>
        </thead>
        <tbody>
          {maclar.map((mac) => (
            <tr key={mac.id} className="text-center">
              <td className="border p-2">{mac.ev}</td>
              <td className="border p-2">{mac.dep}</td>
              <td className="border p-2">{mac.dakika}</td>
              <td className="border p-2 font-bold">{mac.skor}</td>
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
