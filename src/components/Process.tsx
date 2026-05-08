import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    title: "Ziele klären",
    text: "Wir schauen, welche Anfragen du gewinnen willst, welche Leistungen wichtig sind und wo deine aktuelle Website bremst.",
  },
  {
    title: "Struktur und Inhalte planen",
    text: "Aus Angebot, Zielgruppe und Suchintention entsteht eine klare Seitenstruktur mit verständlichen Texten.",
  },
  {
    title: "Design und Umsetzung",
    text: "Die Website wird modern gestaltet, technisch sauber umgesetzt und auf mobile Nutzung ausgelegt.",
  },
  {
    title: "SEO Grundlagen und Launch",
    text: "Meta Daten, interne Verlinkung, Sitemap, robots.txt, Formulare und Tracking-Grundlagen werden sauber vorbereitet.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="py-28 px-5 md:px-8 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Ablauf
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Klarer Prozess statt offener Baustelle
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-2xl leading-relaxed">
            Ein gutes Website-Projekt braucht Entscheidungen, aber keinen
            unnötigen Aufwand auf deiner Seite.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <AnimateOnScroll key={step.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-[#1C1C1C] border border-white/5 p-6">
                <p className="text-sm font-black text-[#E8400A] mb-8">0{i + 1}</p>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{step.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-white font-bold hover:border-[#E8400A]/50 hover:bg-[#E8400A]/10 transition-all duration-200"
          >
            Projekt besprechen
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
