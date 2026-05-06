import AnimateOnScroll from "./AnimateOnScroll";

const problems = [
  {
    number: "01",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    headline: "Keine Website – oder eine die peinlich ist",
    body: "Ein veralteter oder fehlender Online-Auftritt kostet dich täglich potenzielle Kunden. In 2025 googlen Leute bevor sie anrufen.",
  },
  {
    number: "02",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803M10.5 7.5v6m3-3h-6" />
      </svg>
    ),
    headline: "Bei Google unsichtbar – Konkurrenz wird gefunden, du nicht",
    body: "95% der Nutzer klicken nur auf Seite 1. Wenn du dort nicht auftauchst, existierst du für deine Kunden im Internet schlicht nicht.",
  },
  {
    number: "03",
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    headline: "Kein Plan wie KI deinen Arbeitsalltag vereinfachen könnte",
    body: "Deine Konkurrenz automatisiert bereits Angebote, E-Mails und Kundenkommunikation. Das spart Stunden pro Woche – und du schaust noch zu.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <AnimateOnScroll className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Kommt dir das bekannt vor?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Kennen wir das?
          </h2>
        </AnimateOnScroll>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {problems.map((p, i) => (
            <AnimateOnScroll key={p.number} delay={i * 0.1}>
              <div className="group relative h-full p-7 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/25 transition-all duration-300 overflow-hidden">
                {/* Large number bg */}
                <span className="absolute top-4 right-5 text-7xl font-black text-white/[0.03] select-none leading-none">
                  {p.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#E8400A]/10 border border-[#E8400A]/15 flex items-center justify-center text-[#E8400A] mb-5 group-hover:bg-[#E8400A]/15 transition-colors duration-200">
                  {p.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">
                  {p.headline}
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">
                  {p.body}
                </p>

                {/* Bottom orange accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E8400A]/0 via-[#E8400A]/50 to-[#E8400A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Transition statement */}
        <AnimateOnScroll className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#E8400A]/60" />
            <p className="text-3xl md:text-4xl font-extrabold italic text-white">
              Das ist genau{" "}
              <span className="text-[#E8400A]">unser Job.</span>
            </p>
            <p className="text-[#A0A0A0] max-w-md text-center text-sm md:text-base mt-1">
              Wir lösen genau diese drei Probleme – schnell, direkt und ohne großes Blabla.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
