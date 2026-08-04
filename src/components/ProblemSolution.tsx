import AnimateOnScroll from "./AnimateOnScroll";

const problems = [
  {
    number: "01",
    headline: "Der digitale Auftritt erzählt nicht klar genug, wer du bist",
    body: "Website, Texte oder Gestaltung wirken oft nicht so professionell wie die eigentliche Arbeit. Das schafft Rückfragen, Unsicherheit und unnötige Erklärungen.",
  },
  {
    number: "02",
    headline: "Wiederkehrende Arbeit wird jedes Mal neu erledigt",
    body: "Anfragen sortieren, Informationen zusammensuchen, Texte vorbereiten oder intern nachfassen: Kleine Routinen summieren sich jeden Tag.",
  },
  {
    number: "03",
    headline: "Tools gibt es genug – aber keinen Ablauf, der trägt",
    body: "Neue Programme helfen nicht automatisch. Erst wenn Website, Kommunikation und Prozesse zusammenpassen, entsteht wirkliche Entlastung.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="wirkung" className="bg-[#0D0D0D] px-5 py-28 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Wo Zeit verloren geht
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Zeit geht selten in einer großen Aufgabe verloren.
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Sie verschwindet in kleinen digitalen Baustellen: unklaren Informationen,
            manuellen Routinen und Werkzeugen, die nicht zusammenspielen.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <AnimateOnScroll key={p.number} delay={i * 0.1}>
              <div className="group relative h-full p-7 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/25 transition-all duration-300 overflow-hidden">
                <span
                  className="absolute top-4 right-5 text-7xl font-black text-white/[0.03] select-none leading-none"
                  aria-hidden="true"
                >
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
