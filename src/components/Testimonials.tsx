import AnimateOnScroll from "./AnimateOnScroll";

// TODO (Kevin): Platzhalter durch echte Kundenstimmen ersetzen, bevor die
// Seite deployed wird. Wichtig: Jede Stimme braucht ein konkretes Ergebnis
// (Anfragen, gesparte Stunden, Umsatz) — kein reines Lob.
const testimonials = [
  {
    quote:
      "Seit die neue Website online ist, kommen jede Woche 2–3 qualifizierte Anfragen rein — vorher kam über die alte Seite praktisch nichts.",
    result: "2–3 Anfragen pro Woche",
    name: "Vorname Nachname",
    company: "Firma, Ort",
  },
  {
    quote:
      "Die Angebots-Vorlagen und die automatische Anfrage-Sortierung sparen mir locker einen halben Tag pro Woche. Das Wochenende gehört wieder mir.",
    result: "ca. 5 Stunden pro Woche gespart",
    name: "Vorname Nachname",
    company: "Firma, Ort",
  },
  {
    quote:
      "Kevin hat nicht einfach eine Website gebaut, sondern erst verstanden, wie wir Kunden gewinnen. Genau das merkt man am Ergebnis.",
    result: "Platz 1 bei Google für den wichtigsten Suchbegriff",
    name: "Vorname Nachname",
    company: "Firma, Ort",
  },
];

export default function Testimonials() {
  return (
    <section id="stimmen" className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Kundenstimmen
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Was sich für Kunden konkret verändert hat
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Keine Werbeversprechen, sondern Ergebnisse aus echten Projekten —
            in Anfragen und gesparten Stunden.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.result} delay={i * 0.08} className="h-full">
              <figure className="h-full flex flex-col rounded-2xl bg-[#1C1C1C] border border-white/5 p-7">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#E8400A]/60 mb-5"
                  aria-hidden="true"
                >
                  <path d="M9.6 4.8C6 7.2 3.9 10.2 3.9 13.8c0 3 1.9 5.4 4.6 5.4 2.3 0 4-1.7 4-4 0-2.2-1.6-3.8-3.7-3.8-.4 0-.9.1-1 .1.3-1.9 2-4.1 3.9-5.3L9.6 4.8zm9.9 0c-3.6 2.4-5.7 5.4-5.7 9 0 3 1.9 5.4 4.6 5.4 2.3 0 4-1.7 4-4 0-2.2-1.6-3.8-3.7-3.8-.4 0-.9.1-1 .1.3-1.9 2-4.1 3.9-5.3l-2.1-1.4z" />
                </svg>
                <blockquote className="text-sm md:text-base text-[#D8D8D8] leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <div className="mt-6 rounded-xl border border-[#E8400A]/25 bg-[#E8400A]/10 px-4 py-3">
                  <p className="text-sm font-bold text-white">{t.result}</p>
                </div>
                <figcaption className="mt-5">
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-[#A0A0A0] mt-0.5">{t.company}</p>
                </figcaption>
              </figure>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
