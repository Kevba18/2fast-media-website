import AnimateOnScroll from "./AnimateOnScroll";

const comparisons = [
  {
    before: '„Wir machen alles irgendwie“',
    after: "Klare Leistung, klare Zielgruppe, klare Anfrage",
    beforeDetail:
      "Breite, schwammige Aussagen schrecken ab. Wenn unklar ist, was du anbietest und für wen, holt sich der Besucher eine Empfehlung beim nächsten.",
    afterDetail:
      "Eine klare Positionierung macht dein Angebot sofort greifbar. Besucher verstehen in Sekunden, ob du der richtige Ansprechpartner bist – und nehmen Kontakt auf.",
    icon: "💡",
  },
  {
    before: "Schöne Seite, aber keine Struktur",
    after: "Website mit Suchlogik, Nutzerführung und Kontaktfokus",
    beforeDetail:
      "Gutes Design ohne saubere Seitenstruktur bringt keine Anfragen. Google versteht das Angebot nicht, und Besucher finden nicht, was sie suchen.",
    afterDetail:
      "Struktur, Inhalte und technische Grundlagen arbeiten zusammen. Die Website wird gefunden, überzeugt und führt Besucher gezielt zur Kontaktaufnahme.",
    icon: "🏗️",
  },
  {
    before: "Jede Anfrage kostet Zeit",
    after: "Kontaktformular mit Vorqualifizierung und sauberem Ablauf",
    beforeDetail:
      "Ohne Struktur im Anfrageprozess kostet jede Nachricht zu viel Zeit. Unklar, worum es geht, wie dringend es ist und ob es überhaupt passt.",
    afterDetail:
      "Ein gut strukturiertes Formular filtert vorab, was wichtig ist. Du weißt sofort, worum es geht, und kannst gezielt und effizient antworten.",
    icon: "⚡",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-28 px-5 md:px-8 bg-[#141414] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
            Vorher · Nachher
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Aus unklar wird{" "}
            <span className="text-[#E8400A]">überzeugend</span>
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-2xl mx-auto leading-relaxed">
            Diese drei Muster begegnen uns bei fast jedem Projekt – und mit der richtigen
            Struktur lassen sie sich gezielt lösen.
          </p>
        </AnimateOnScroll>

        <div className="space-y-6">
          {comparisons.map((item, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <div className="rounded-3xl border border-white/5 bg-[#0D0D0D] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before */}
                  <div className="p-7 md:p-8 border-b md:border-b-0 md:border-r border-white/5 relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-400">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                          <path d="M5 1l1.5 3h3l-2.4 1.8.9 3L5 7 2 8.8l.9-3L.5 4H3.5z" />
                        </svg>
                        Vorher
                      </span>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <p className="text-lg font-extrabold italic text-[#888] mb-3 line-through decoration-red-500/50">
                      {item.before}
                    </p>
                    <p className="text-sm text-[#666] leading-relaxed">{item.beforeDetail}</p>
                  </div>

                  {/* After */}
                  <div className="p-7 md:p-8 relative bg-[#141414]">
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/30 to-transparent" />
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8400A]/10 border border-[#E8400A]/25 text-xs font-bold text-[#E8400A]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Nachher
                      </span>
                    </div>
                    <p className="text-lg font-extrabold italic text-white mb-3">{item.after}</p>
                    <p className="text-sm text-[#A0A0A0] leading-relaxed">{item.afterDetail}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3} className="mt-12 text-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Kostenlose Einschätzung anfragen
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
