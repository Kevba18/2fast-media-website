import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    title: "Alltag verstehen",
    text: "Wir schauen auf dein Unternehmen, deinen Auftritt und die digitalen Stellen, die gerade unnötig Zeit oder Nerven kosten.",
  },
  {
    title: "Richtung festlegen",
    text: "Wir priorisieren. Was braucht zuerst Klarheit? Was kann einfacher werden? Und was wäre nur zusätzliche Technik ohne Wirkung?",
  },
  {
    title: "Passend umsetzen",
    text: "Von Website und Design bis zu hilfreichen digitalen Abläufen: Alles wird so gebaut, dass es zu deinem Team und Alltag passt.",
  },
  {
    title: "Einfach weiterarbeiten",
    text: "Du bekommst keine Übergabe voller Fragezeichen, sondern eine Lösung, mit der du arbeiten kannst und einen klaren nächsten Schritt.",
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
            Digitale Veränderung, ohne dass du ein Technikprojekt managen musst
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-2xl leading-relaxed">
            Gute Lösungen entstehen gemeinsam — aber ohne unnötige Schleifen,
            Fachsprache oder zusätzliche Baustellen auf deiner Seite.
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
            Projekt gemeinsam einordnen
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
