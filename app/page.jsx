"use client";

import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("maclar"); // TypeScript tipi silindi

  return (
    <main className="p-4">
      {/* Üst menü */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "maclar" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("maclar")}
        >
          Maçlar
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "sohbet" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("sohbet")}
        >
          Sohbet
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "analiz" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("analiz")}
        >
          Analiz
        </button>
      </div>

      {/* İçerik */}
      {tab === "maclar" && (
        <div>
          <h1 className="text-xl font-bold mb-4">Bugünkü Maçlar</h1>
          <p>Maç listesi buraya gelecek...</p>
        </div>
      )}
      {tab === "sohbet" && (
        <div>
          <h1 className="text-xl font-bold mb-4">Canlı Sohbet</h1>
          <p>Kullanıcılar burada mesajlaşabilecek...</p>
        </div>
      )}
      {tab === "analiz" && (
        <div>
          <h1 className="text-xl font-bold mb-4">Maç Analizleri</h1>
          <p>Analiz verileri burada görüntülenecek...</p>
        </div>
      )}
    </main>
  );
}
