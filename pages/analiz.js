import { useState } from "react";

export default function Analiz() {
  const [takim1, setTakim1] = useState("");
  const [takim2, setTakim2] = useState("");
  const [analiz, setAnaliz] = useState("");

  const analizEt = () => {
    if (takim1 && takim2) {
      setAnaliz(
        `${takim1} ile ${takim2} arasında oynanacak maç için tahmin: 
        Bol gollü geçmesi bekleniyor ⚽ (2.5 ÜST yüksek ihtimal).`
      );
    } else {
      setAnaliz("⚠️ Lütfen iki takım adı giriniz!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-4">📊 Maç Analizi</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Ev Sahibi Takım"
          value={takim1}
          onChange={(e) => setTakim1(e.target.value)}
          className="border p-2 mr-2 rounded"
        />
        <input
          type="text"
          placeholder="Deplasman Takım"
          value={takim2}
          onChange={(e) => setTakim2(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={analizEt}
          className="ml-2 px-4 py-2 bg-green-600 text-white rounded"
        >
          Analiz Et
        </button>
      </div>

      {analiz && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p>{analiz}</p>
        </div>
      )}

      <div className="mt-6">
        <a href="/" className="text-blue-600 underline">⬅️ Ana Sayfaya Dön</a>
      </div>
    </div>
  );
}
