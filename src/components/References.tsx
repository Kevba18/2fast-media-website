const references = [
  {
    name: "Vendvibe",
    category: "E-Commerce · Verkaufsautomaten",
    description:
      "Co-Gründung und digitaler Aufbau einer Plattform für moderne Verkaufsautomaten und Verkaufscontainer im DACH-Raum.",
    result: "Von 0 auf Launch in 3 Monaten",
  },
  {
    name: "Wir machen Handwerk",
    category: "Handwerk · Koordination",
    description:
      "Digitales Generalunternehmen für Handwerkskoordination – Markenaufbau, Website und Lead-Generierung von Grund auf.",
    result: "Komplettes Digitalsetup aufgebaut",
  },
  {
    name: "Lokales KMU",
    category: "Mittelstand · NRW",
    description:
      "Neuaufstellung der digitalen Präsenz eines etablierten Unternehmens: neue Website, Google Ads und E-Mail-Automation.",
    result: "+180% qualifizierte Anfragen",
  },
  {
    name: "B2B Dienstleister",
    category: "Consulting · LinkedIn",
    description:
      "LinkedIn-Strategie und Content-Automatisierung für einen Unternehmensberater – mehr Sichtbarkeit, weniger manueller Aufwand.",
    result: "3x mehr Profilaufrufe in 60 Tagen",
  },
];

const testimonials = [
  {
    quote:
      "Kevin hat unsere Website komplett neu gedacht – nicht nur optisch, sondern strategisch. Seither kommen Anfragen rein, ohne dass wir aktiv akquirieren müssen.",
    author: "Geschäftsführer, Handwerksbetrieb NRW",
  },
  {
    quote:
      "Endlich jemand, der nicht nur Slides macht, sondern auch umsetzt. Die Zusammenarbeit ist pragmatisch und das Ergebnis spricht für sich.",
    author: "Gründerin, B2B SaaS Startup",
  },
];

export default function References() {
  return (
    <section id="referenzen" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-[#6ee7f7] mb-4">
            Ergebnisse zählen
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Referenzen
          </h2>
          <p className="mt-4 text-[#a3a3a3] max-w-xl">
            Ausgewählte Projekte und Ventures, die zeigen wie ich arbeite.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="p-7 rounded-2xl bg-[#111] border border-white/5 hover:border-[#6ee7f7]/15 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{ref.name}</h3>
                  <p className="text-xs text-[#6ee7f7]/70 mt-1">{ref.category}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-[#6ee7f7]/10 text-[#6ee7f7] font-medium whitespace-nowrap ml-4">
                  {ref.result}
                </span>
              </div>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                {ref.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl bg-gradient-to-br from-[#6ee7f7]/5 to-transparent border border-[#6ee7f7]/10"
            >
              <svg
                className="text-[#6ee7f7]/30 mb-4"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.47-.878 1.16-1.53 2.07-1.958.59-.28 1.07-.4 1.44-.36.37.04.54.17.51.38-.03.17-.11.29-.25.37.13.07.29.09.48.06.41-.06.72-.29.94-.69.18-.34.26-.7.26-1.09 0-.54-.17-.97-.5-1.31-.33-.34-.78-.53-1.35-.56-.76-.04-1.48.18-2.14.67-.87.63-1.56 1.52-2.07 2.67-.46 1.01-.69 2.02-.69 3.01 0 1.23.35 2.24 1.04 3.03.69.79 1.64 1.18 2.84 1.18.93 0 1.7-.28 2.31-.83.61-.55.92-1.26.92-2.14zm8.1 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.47-.878 1.16-1.53 2.07-1.958.59-.28 1.07-.4 1.44-.36.37.04.54.17.51.38-.03.17-.11.29-.25.37.13.07.29.09.48.06.41-.06.72-.29.94-.69.18-.34.26-.7.26-1.09 0-.54-.17-.97-.5-1.31-.33-.34-.78-.53-1.35-.56-.76-.04-1.48.18-2.14.67-.87.63-1.56 1.52-2.07 2.67-.46 1.01-.69 2.02-.69 3.01 0 1.23.35 2.24 1.04 3.03.69.79 1.64 1.18 2.84 1.18.93 0 1.7-.28 2.31-.83.61-.55.92-1.26.92-2.14z" />
              </svg>
              <p className="text-white/80 leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-sm text-[#a3a3a3]">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
