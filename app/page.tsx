'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Ball({ className = "w-16 h-16" }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="50" cy="50" r="48" fill="#fff" stroke="#111" strokeWidth="3" />
      <polygon points="50,25 35,40 40,60 60,60 65,40" fill="#111" />
      <g fill="none" stroke="#111" strokeWidth="2">
        <path d="M50 25 L20 35 L25 60 L40 60" />
        <path d="M50 25 L80 35 L75 60 L60 60" />
        <path d="M35 40 L20 70 L40 85 L50 70" />
        <path d="M65 40 L80 70 L60 85 L50 70" />
      </g>
    </svg>
  );
}

export default function Page() {
  const [stage, setStage] = useState(0);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timers: any[] = [];
    timers.push(setTimeout(() => setStage(1), 2000));
    timers.push(setTimeout(() => setStage(2), 5300));
    timers.push(setTimeout(() => setShowMain(true), 7000));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <AnimatePresence mode="wait">
        {!showMain ? (
          <motion.div
            key="splash"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black"
              aria-hidden
            />
            <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
              <div className="absolute -top-1/3 left-1/4 h-[120%] w-40 rotate-12 bg-white/10 blur-3xl" />
              <div className="absolute -top-1/4 right-1/5 h-[120%] w-32 -rotate-12 bg-white/10 blur-3xl" />
            </div>

            {stage === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-extrabold tracking-tight">TAHMİN360</div>
                <p className="mt-4 text-neutral-300">Gol analiz, oran karşılaştırma, canlı takip.</p>
              </motion.div>
            )}

            {stage === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-emerald-700/30 via-emerald-500/10 to-transparent" />
                <div className="absolute bottom-24 left-1/2 h-1 w-64 -translate-x-1/2 bg-white/30 blur-[1px]" />
                <div className="absolute bottom-16 left-1/2 h-1 w-80 -translate-x-1/2 bg-white/20 blur-[1px]" />

                <motion.div
                  className="absolute bottom-24 left-0"
                  initial={{ x: -120 }}
                  animate={{ x: "60%" }}
                  transition={{ duration: 2.6, ease: "easeOut" }}
                >
                  <div className="flex items-end gap-4">
                    <div className="h-24 w-12 rounded bg-white/80" />
                    <Ball className="w-12 h-12" />
                  </div>
                </motion.div>
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.4, opacity: 0 }}
                  animate={{ scale: [0.4, 1.6, 1.2, 1], opacity: [0, 1, 1, 1] }}
                  transition={{ times: [0, 0.6, 0.8, 1], duration: 1.2, ease: "easeOut" }}
                >
                  <Ball className="w-44 h-44 drop-shadow-[0_0_35px_rgba(255,255,255,0.6)]" />
                </motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  <div className="relative">
                    <div className="absolute -inset-8 bg-white/10 blur-2xl rounded-full" />
                    <div className="absolute -inset-16 bg-white/5 blur-3xl rounded-full" />
                    <div className="relative text-5xl md:text-7xl font-extrabold tracking-tight">TAHMİN360</div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <MainScreen />
        )}
      </AnimatePresence>
    </div>
  );
}

function MainScreen() {
  const [tab, setTab] = useState<"maclar" | "sohbet" | "analiz">("maclar");
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 backdrop-blur bg-neutral-950/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-xl">TAHMİN360</div>
          <nav className="flex items-center gap-2">
            {[
              { k: "maclar", t: "Maçlar" },
              { k: "analiz", t: "Analiz" },
              { k: "sohbet", t: "Sohbet" },
            ].map((i) => (
              <button
                key={i.k}
                onClick={() => setTab(i.k as any)}
                className={`px-3 py-1.5 rounded-2xl text-sm transition ${
                  tab === i.k ? "bg-white text-black" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {i.t}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {tab === "maclar" && <MatchesTab />}
        {tab === "analiz" && <AnalizTab />}
        {tab === "sohbet" && <ChatTab />}
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-8 text-xs text-neutral-400">
        © {new Date().getFullYear()} Tahmin360 – Deneme Sürümü. Bu sayfa demo veriler içerir.
      </footer>
    </div>
  );
}

function BallSmall({ className = "w-6 h-6" }) {
  return <Ball className={className} />;
}

function MatchesTab() {
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

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {demo.map((m, idx) => (
        <div key={idx} className="rounded-2xl p-4 bg-white text-neutral-900 shadow">
          <div className="flex items-center justify-between">
            <div className="text-xs font-medium text-neutral-500">{m.lig} · {m.tarih}</div>
            <div className="text-xs">Güven: {(m.guven * 100).toFixed(0)}%</div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div className="text-lg font-semibold">{m.ev} – {m.dep}</div>
            <BallSmall />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
            <div className="rounded-lg border border-neutral-200 p-2 text-center">
              2.5 ÜST<br/><span className="font-bold">{m.oran.ust25.toFixed(2)}</span>
            </div>
            <div className="rounded-lg border border-neutral-200 p-2 text-center">
              3.5 ÜST<br/><span className="font-bold">{m.oran.ust35.toFixed(2)}</span>
            </div>
            <div className="rounded-lg border border-neutral-200 p-2 text-center">
              KG VAR<br/><span className="font-bold">{m.oran.kgvar.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm">Öneri: <span className="font-semibold">{m.tahmin}</span></span>
            <button className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-sm">Kupona Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalizTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Oran & Skor Analizi (Demo)</h2>
      <div className="rounded-2xl p-4 bg-white text-neutral-900 shadow">
        <div className="text-sm text-neutral-600">Seçilen maçlar için geçmiş skorlar, oran karşılaştırmaları ve yüzde olasılıklar burada görünecek.</div>
        <ul className="mt-3 list-disc pl-6 text-sm">
          <li>Nesine uyumlu oran alanları</li>
          <li>Maçkolik geçmiş skor/performans</li>
          <li>2.5/3.5/4.5 üst-alt ve KG VAR/YOK olasılıkları</li>
        </ul>
      </div>
      <div className="rounded-2xl p-4 bg-white text-neutral-900 shadow">
        <h3 className="font-semibold">Bugünkü Güçlü Sinyaller (Örnek)</h3>
        <div className="mt-2 grid md:grid-cols-3 gap-2 text-sm">
          {["3.5 ÜST", "KG VAR", "4.5 ÜST"].map((s, i) => (
            <div key={i} className="rounded-lg border border-neutral-200 p-3 text-center">{s}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatTab() {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([
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
    <div className="grid grid-rows-[1fr_auto] rounded-2xl overflow-hidden bg-white text-neutral-900 shadow min-h-[420px]">
      <div className="p-4 space-y-2 overflow-auto">
        {messages.map((m, idx) => (
          <div key={idx} className="text-sm">
            <span className="font-semibold mr-2">{m.user}:</span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-neutral-200 p-2 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Maça özel yorum yazın (küfür yasaktır)"
          className="flex-1 rounded-xl border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-800"
        />
        <button onClick={send} className="px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm">Gönder</button>
      </div>
    </div>
  );
}
