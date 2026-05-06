import AnimateOnScroll from "./AnimateOnScroll";

const topServices = [
  {
    emoji: "🌐",
    title: "Webdesign & Entwicklung",
    description:
      "Moderne, schnelle Websites die Vertrauen aufbauen und Kunden gewinnen. Kein Baukastensystem – individuelle Entwicklung die zu deinem Unternehmen passt und bei Google funktioniert.",
    tags: ["Next.js", "WordPress", "Figma", "Responsive"],
    highlight: true,
  },
  {
    emoji: "🔍",
    title: "Online-Sichtbarkeit",
    description:
      "Damit dich deine Kunden in Dinslaken, Duisburg und ganz NRW bei Google finden. Lokales SEO, Google Unternehmensprofil und technische Optimierung – damit du gefunden wirst.",
    tags: ["Lokales SEO", "Google Profil", "Rankings"],
    highlight: false,
  },
  {
    emoji: "🤖",
    title: "KI-Integration",
    description:
      "Wir bringen KI in dein Unternehmen – von automatisierten Prozessen bis zu smarten Tools die Zeit und Geld sparen. Konkret, anwendbar und auf deinen Alltag zugeschnitten.",
    tags: ["Automatisierung", "ChatGPT", "Make.com"],
    highlight: false,
  },
];

const moreServices = [
  {
    emoji: "🎨",
    title: "Grafik & Branding",
    description: "Logo, Corporate Identity und Printmaterialien. Damit du professionell auftrittst – online wie offline.",
  },
  {
    emoji: "🎬",
    title: "Video & Content",
    description: "Reels, Imagefilme und Social-Media-Content der auffällt. Für Instagram, TikTok und YouTube.",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-28 px-5 md:px-8 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateOnScroll className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Was wir tun
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight max-w-lg">
              Leistungen die{" "}
              <span className="text-[#E8400A]">Ergebnisse</span> bringen
            </h2>
            <p className="text-[#A0A0A0] max-w-sm text-sm md:text-base">
              Keine Baukastenseite, kein Overhead – direkte Umsetzung für lokale Unternehmen.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Top 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {topServices.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 0.1}>
              <div
                className={`group relative h-full p-7 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  s.highlight
                    ? "bg-[#E8400A]/8 border-[#E8400A]/25 hover:border-[#E8400A]/50"
                    : "bg-[#1C1C1C] border-white/5 hover:border-[#E8400A]/20"
                }`}
              >
                {/* Top accent bar */}
                {s.highlight && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8400A]" />
                )}

                <div className="text-3xl mb-5">{s.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {s.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        s.highlight
                          ? "bg-[#E8400A]/15 text-[#E8400A]/80"
                          : "bg-white/5 text-[#A0A0A0]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#E8400A] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Mehr erfahren
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom 2 – smaller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {moreServices.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 0.1}>
              <div className="group flex items-start gap-5 p-6 rounded-2xl bg-[#1C1C1C] border border-white/5 hover:border-[#E8400A]/15 transition-all duration-300">
                <div className="text-2xl shrink-0 mt-0.5">{s.emoji}</div>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{s.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{s.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll className="mt-12 text-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Leistung anfragen
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
