import AnimateOnScroll from "./AnimateOnScroll";

const problems = [
  {
    number: "01",
    headline: "Deine Website wirkt nicht wie dein Unternehmen",
    body: "Viele lokale Anbieter sind fachlich stark, wirken online aber austauschbar oder veraltet. Das kostet Vertrauen, bevor ein Gespräch entsteht.",
  },
  {
    number: "02",
    headline: "Google versteht nicht klar genug, wofür du gefunden werden willst",
    body: "Ohne saubere Struktur, lokale Inhalte und technische Grundlagen bleiben relevante Suchbegriffe oft ungenutzt.",
  },
  {
    number: "03",
    headline: "Digitale Prozesse kosten mehr Zeit als nötig",
    body: "Anfragen, Inhalte, E-Mails oder interne Abläufe lassen sich oft mit einfachen KI-Workflows deutlich besser vorbereiten.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="problem" className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Das Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Gute Arbeit reicht online nicht mehr aus
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Kunden vergleichen dich online, bevor sie anrufen. Wenn Website,
            Inhalte und Sichtbarkeit nicht zusammenpassen, gehen passende Anfragen
            an andere Anbieter.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <AnimateOnScroll key={p.number} delay={i * 0.1}>
              <div className="group relative h-full p-7 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/25 transition-all duration-300 overflow-hidden">
                <span className="absolute top-4 right-5 text-7xl font-black text-white/[0.03] select-none leading-none">
                  {p.number}
                </span>
                <p className="text-xs font-bold text-[#E8400A] mb-4">{p.number}</p>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  {p.headline}
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{p.body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
