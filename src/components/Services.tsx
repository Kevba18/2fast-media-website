import AnimateOnScroll from "./AnimateOnScroll";

const solutionAreas = [
  {
    number: "01",
    title: "Klar auftreten",
    text: "Website, Branding und Content geben deinem Unternehmen eine Form, die verständlich ist und zu deiner Arbeit passt.",
    detail: "Webdesign · Branding · Content",
    href: "/leistungen/webdesign",
  },
  {
    number: "02",
    title: "Einfacher arbeiten",
    text: "Wir machen wiederkehrende digitale Aufgaben sichtbar und bauen passende Abläufe, die dich im Alltag entlasten.",
    detail: "KI-Workflows · Automatisierung · Struktur",
    href: "/leistungen/ki-integration",
  },
  {
    number: "03",
    title: "Besser gefunden werden",
    text: "Eine klare Struktur und hilfreiche Inhalte sorgen dafür, dass Menschen und Suchmaschinen schneller verstehen, was du anbietest.",
    detail: "Sichtbarkeit · Seitenstruktur · Inhalte",
    href: "/leistungen/online-sichtbarkeit",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-[#141414] px-5 py-28 md:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Was wir dafür einsetzen
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight max-w-xl">
              Keine Einzellösung. Ein System, das zu deinem Alltag passt.
            </h2>
            <p className="text-[#A0A0A0] max-w-md text-sm md:text-base leading-relaxed">
              Das Ziel bestimmt den Weg. Je nach Ausgangslage verbinden wir Auftritt,
              Inhalte und digitale Abläufe zu einer Lösung, die wirklich nutzbar ist.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {solutionAreas.map((area, i) => (
            <AnimateOnScroll key={area.title} delay={i * 0.08}>
              <a
                href={area.href}
                className={`group relative h-full p-7 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                  i === 0
                    ? "bg-[#E8400A]/8 border-[#E8400A]/25 hover:border-[#E8400A]/50"
                    : "bg-[#1C1C1C] border-white/5 hover:border-[#E8400A]/20"
                }`}
              >
                {i === 0 && <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8400A]" />}
                <p className="text-xs font-bold text-[#E8400A] mb-4">{area.number}</p>
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {area.text}
                </p>
                <p className="mb-5 text-xs font-semibold tracking-wide text-[#777]">{area.detail}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#E8400A]">
                  Lösungen ansehen
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Unverbindlich besprechen
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
