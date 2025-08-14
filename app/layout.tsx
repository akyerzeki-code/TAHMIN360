import "./globals.css";

export const metadata = {
  title: "TAHMİN360",
  description: "Gol analiz, oran karşılaştırma, canlı takip (demo).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
