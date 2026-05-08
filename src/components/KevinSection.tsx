import AnimateOnScroll from "./AnimateOnScroll";

const strengths = [
  {
    label: "Direkte Kommunikation",
    text: "Keine Agenturschleifen, keine unklaren Zuständigkeiten – du sprichst direkt mit den Menschen, die dein Projekt umsetzen.",
  },
  {
    label: "Strategie & Umsetzung in einer Hand",
    text: "Von der Positionierung bis zur fertigen Website wird jeder Schritt strukturiert mitgedacht.",
  },
  {
    label: "Webdesign, SEO & KI verbunden",
    text: "Diese drei Bereiche werden nicht isoliert gedacht, sondern als ein digitaler Auftritt zusammengebaut.",
  },
  {
    label: "Keine unnötigen Buzzwords",
    text: "Klare Sprache, klare Ziele. Du verstehst immer, was warum gemacht wird.",
  },
];

export default function KevinSection() {
  return (
    <section id="warum" className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">

        {/* Left: Kevin card / placeholder */}
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden bg-[#141414] border border-white/5 p-8 min-h-[480px] flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8400A]/8 via-transparent to-transparent pointer-events-none" />

            {/* Foto-Platzhalter */}
            <div className="relative flex-1 flex flex-col">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
                Direkt mit 2fastmedia arbeiten
              </p>

              {/* Avatar placeholder */}
              <div className="w-28 h-28 rounded-3xl bg-[#E8400A]/10 border-2 border-[#E8400A]/20 flex items-center justify-center mb-6 self-start">
                {/* Replace with <Image src="/kevin.jpg" .../> as soon as photo is available */}
                <svg width="48" height="48" fill="none" stroke="#E8400A" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <p className="text-2xl font-extrabold italic text-white mb-1">Kevin Balfanz</p>
              <p className="text-sm text-[#E8400A] font-semibold mb-1">Gründer & Digitalstratege</p>
              <p className="text-sm text-[#A0A0A0]">2fastmedia · Dinslaken, NRW</p>

              {/* Foto-Hinweis */}
              <div className="mt-6 rounded-2xl bg-[#1C1C1C] border border-white/5 px-4 py-3">
                <p className="text-xs text-[#666]">
                  📸 Foto wird ergänzt – Platzhalter aktiv
                </p>
              </div>
            </div>

            <div className="relative mt-6 pt-6 border-t border-white/5">
              <p className="text-sm text-[#A0A0A0] leading-relaxed">
                Keine anonyme Agentur. Klarer Ansprechpartner, klare Umsetzung,
                sichtbare Ergebnisse.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Right: Text + strengths */}
        <div>
          <AnimateOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
              Warum 2fastmedia
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight mb-6 leading-tight">
              Direkt mit 2fastmedia arbeiten –{" "}
              <span className="text-[#E8400A]">nicht mit einer anonymen Agentur</span>
            </h2>
            <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed mb-10">
              Bei 2fastmedia sprichst du direkt mit Menschen, die dein Projekt verstehen,
              strukturieren und mit umsetzen. Keine langen Agenturschleifen, keine unklaren
              Zuständigkeiten, kein unnötiges Fachchinesisch. Stattdessen bekommst du einen
              klaren digitalen Auftritt, der Webdesign, Sichtbarkeit und KI-Prozesse sinnvoll
              miteinander verbindet.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {strengths.map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-[#141414] border border-white/5 p-5 hover:border-[#E8400A]/20 transition-colors duration-200">
                  <span className="text-sm font-bold text-[#E8400A]">0{i + 1}</span>
                  <p className="mt-2 text-sm font-bold text-white mb-1">{s.label}</p>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">{s.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.28}>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Direkt anfragen
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className="group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
