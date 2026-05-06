import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    name: "Vendvibe",
    category: "E-Commerce · Verkaufsautomaten",
    description: "Kompletter Markenaufbau und Webseite für eine Plattform für moderne Verkaufsautomaten im DACH-Raum.",
    gradient: "from-[#E8400A]/20 to-[#FF8C00]/10",
    accentColor: "#E8400A",
    tag: "Co-Gründung",
  },
  {
    name: "Wir machen Handwerk",
    category: "Handwerk · Koordination",
    description: "Digitales Generalunternehmen für Handwerkskoordination. Website, SEO und Lead-Generierung von Grund auf.",
    gradient: "from-[#2563EB]/20 to-[#1D4ED8]/5",
    accentColor: "#3B82F6",
    tag: "Website + SEO",
  },
  {
    name: "Lokaler Handwerksbetrieb",
    category: "Mittelstand · NRW",
    description: "Neugestaltung der digitalen Präsenz: neue Website, Google Ads und E-Mail-Automation. Ergebnis: +180% Anfragen.",
    gradient: "from-[#059669]/20 to-[#047857]/5",
    accentColor: "#10B981",
    tag: "+180% Anfragen",
  },
  {
    name: "B2B Consulting",
    category: "Beratung · LinkedIn",
    description: "LinkedIn-Strategie und Content-Automatisierung. Mehr Sichtbarkeit, weniger manueller Aufwand.",
    gradient: "from-[#7C3AED]/20 to-[#5B21B6]/5",
    accentColor: "#8B5CF6",
    tag: "3× Reichweite",
  },
];

export default function Projects() {
  return (
    <section id="projekte" className="py-28 px-5 md:px-8 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <AnimateOnScroll className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
              Unsere Arbeit
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
              Projekte &{" "}
              <span className="text-[#E8400A]">Referenzen</span>
            </h2>
          </div>
          <a
            href="#kontakt"
            className="shrink-0 group inline-flex items-center gap-2 text-sm font-semibold text-[#A0A0A0] hover:text-white transition-colors"
          >
            Alle anfragen
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <AnimateOnScroll key={p.name} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl bg-[#1C1C1C] border border-white/5 hover:border-white/10 transition-all duration-300 cursor-default">
                {/* Color block top */}
                <div className={`h-44 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  {/* Abstract decoration */}
                  <div
                    className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-20"
                    style={{ background: p.accentColor, filter: "blur(40px)" }}
                  />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: `${p.accentColor}25`, color: p.accentColor, border: `1px solid ${p.accentColor}30` }}
                    >
                      {p.tag}
                    </div>
                  </div>
                  {/* Large project name ghost */}
                  <div className="absolute top-4 left-6 text-4xl font-black italic text-white/5 select-none leading-none">
                    {p.name.split(" ")[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: p.accentColor }}>
                    {p.category}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2">{p.name}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{p.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-10 text-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#A0A0A0] hover:text-white border border-white/10 hover:border-white/25 px-6 py-3 rounded-full transition-all duration-200"
          >
            Alle Projekte ansehen
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
