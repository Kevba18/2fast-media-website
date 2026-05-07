import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const references = [
  { name: "AfS – Akademie für Sicherheit", logo: "/references/akademie-fuer-sicherheit-afs-logo.webp", alt: "AfS – Akademie für Sicherheit Logo" },
  { name: "Blattwerk Hamminkeln", logo: "/references/blattwerk-hamminkeln-logo.png", alt: "Blattwerk Hamminkeln Logo" },
  { name: "Carnetix", logo: "/references/carnetix-logo.png", alt: "Carnetix Logo" },
  { name: "Die Sozialwerker®", logo: "/references/die-sozialwerker-logo.png", alt: "Die Sozialwerker Logo" },
  { name: "Fenja Flore", logo: "/references/fenja-flore-logo.png", alt: "Fenja Flore Logo" },
  { name: "Gesundheit im Gleichgewicht", logo: "/references/gesundheit-im-gleichgewicht-logo.png", alt: "Gesundheit im Gleichgewicht Logo" },
  { name: "Helden Performance by Sahar", logo: "/references/helden-performance-by-sahar-logo.png", alt: "Helden Performance by Sahar Logo" },
  { name: "HSR Bauunternehmen", logo: "/references/hsr-bauunternehmen-logo.png", alt: "HSR Bauunternehmen Logo" },
  { name: "Impuls Events", logo: "/references/impuls-events-logo.png", alt: "Impuls Events Logo" },
  { name: "Iron Mind – Performance for Leaders", logo: "/references/iron-mind-performance-for-leaders-logo.png", alt: "Iron Mind – Performance for Leaders Logo" },
  { name: "Judoteam Voerde", logo: "/references/judoteam-voerde-logo.png", alt: "Judoteam Voerde Logo" },
  { name: "Kundenwerk24", logo: "/references/kundenwerk24-logo.png", alt: "Kundenwerk24 Logo" },
  { name: "Mixed By", logo: "/references/mixed-by-logo.png", alt: "Mixed By Logo" },
  { name: "Naturheilpraxis Issel", logo: "/references/naturheilpraxis-issel-logo.png", alt: "Naturheilpraxis Issel Logo" },
  { name: "Schwimmschule Wasserflitzer", logo: "/references/schwimmschule-wasserflitzer-logo.png", alt: "Schwimmschule Wasserflitzer Logo" },
  { name: "SecureMesh", logo: "/references/securemesh-logo.png", alt: "SecureMesh Logo" },
  { name: "Skool Festival", logo: "/references/skool-festival-logo.png", alt: "Skool Festival Logo" },
  { name: "VersFinanz Konzept", logo: "/references/versfinanz-konzept-logo.png", alt: "VersFinanz Konzept Logo" },
  { name: "Wir machen Handwerk", logo: "/references/wir-machen-handwerk-logo.png", alt: "Wir machen Handwerk Logo" },
];

const firstRow = references.slice(0, 10);
const secondRow = references.slice(10);

/**
 * Case Studies – Struktur für weitere Projekte vorbereitet.
 * Felder: title, url, category, description, tags, image, status,
 *         ausgangslage (optional), umsetzung (optional), ergebnis (optional), leistungen (optional)
 *
 * Neue Einträge können einfach unten ergänzt werden, sobald Freigabe und Daten vorliegen.
 */
const projects = [
  {
    title: "Schwimmschule Wasserflitzer",
    url: "https://schwimmschule-wasserflitzer.de/",
    category: "Webdesign · Struktur · Lokale Sichtbarkeit",
    description:
      "Für die Schwimmschule Wasserflitzer entstand ein klar strukturierter Webauftritt für Kinderschwimmkurse im Ruhrgebiet. Im Fokus stehen Vertrauen, einfache Standortwahl, ein freundlicher erster Eindruck und eine direkte Anfrage für Kursplätze.",
    tags: ["Webdesign", "Lokale Sichtbarkeit", "Mobile Optimierung", "Kontaktführung"],
    image: "/projects/wasserflitzer-preview.jpeg",
    status: "Live Projekt",
    ausgangslage: "Keine professionelle Online-Präsenz für Kursanmeldungen",
    umsetzung: "Klare Startseite, standortbezogene Unterseiten, direktes Anfrageformular",
    ergebnis: "Strukturierter Auftritt mit klarer Nutzerführung für Eltern",
    leistungen: ["Webdesign", "Seitenstruktur", "Mobile Optimierung", "Kontaktformular"],
  },
  // Weitere Case Studies – Vorlage für neue Einträge:
  // {
  //   title: "Kundenname",
  //   url: "https://...",
  //   category: "Kategorie",
  //   description: "Beschreibung",
  //   tags: ["Tag1", "Tag2"],
  //   image: "/projects/dateiname.jpg",
  //   status: "Live Projekt",
  //   ausgangslage: "Was war das Problem?",
  //   umsetzung: "Was wurde gemacht?",
  //   ergebnis: "Was hat es gebracht?",
  //   leistungen: ["Leistung1", "Leistung2"],
  // },
];

function LogoItem({ reference }: { reference: (typeof references)[number] }) {
  return (
    <div className="relative mx-8 h-14 w-36 shrink-0 md:mx-10 md:h-16 md:w-44">
      <Image
        src={reference.logo}
        alt={reference.alt}
        fill
        sizes="176px"
        className="object-contain opacity-75 grayscale brightness-0 invert transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof references; reverse?: boolean }) {
  return (
    <div className="reference-marquee marquee-wrapper relative flex overflow-hidden py-5">
      <div className={`animate-marquee ${reverse ? "animate-marquee-reverse" : ""}`}>
        {[...items, ...items].map((reference, index) => (
          <LogoItem key={`${reference.name}-${index}`} reference={reference} />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="referenzen" className="py-28 px-5 md:px-8 bg-[#101010]">
      <div className="max-w-6xl mx-auto">
        {/* Logo marquee */}
        <AnimateOnScroll className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Referenzen
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Referenzen und Projekte
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Ein Auszug aus Marken und Unternehmen, für die 2fastmedia bereits Websites,
            Designs, Inhalte oder digitale Prozesse umgesetzt hat.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="relative overflow-hidden border-y border-white/8 bg-[#121212] py-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#101010] to-transparent md:w-32" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#101010] to-transparent md:w-32" />
            <MarqueeRow items={firstRow} />
            <MarqueeRow items={secondRow} reverse />
            <div className="reference-static-grid hidden grid-cols-2 gap-x-8 gap-y-8 px-6 py-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {references.map((reference) => (
                <div key={reference.name} className="relative h-14 w-full">
                  <Image src={reference.logo} alt={reference.alt} fill sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-contain opacity-75 grayscale brightness-0 invert" />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Case Studies */}
        <AnimateOnScroll className="mt-24">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
              Case Studies
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
              Ausgewählte Arbeiten
            </h2>
            <p className="mt-5 text-[#A0A0A0] leading-relaxed">
              Einblicke in ausgewählte Projekte, bei denen 2fastmedia Websites, Struktur, Design
              und digitale Sichtbarkeit umgesetzt hat.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/8 bg-[#151515] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26)] transition-all duration-500 hover:-translate-y-1 hover:border-[#E8400A]/28 md:p-8"
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/60 to-transparent" />
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="flex h-full flex-col justify-center">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[#E8400A]/25 bg-[#E8400A]/10 px-3 py-1 text-xs font-bold text-[#E8400A]">
                        {project.status}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A0A0A0]">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-extrabold italic tracking-tight text-white md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-sm leading-7 text-[#B8B8B8] md:text-base">
                      {project.description}
                    </p>

                    {/* Ausgangslage / Umsetzung / Ergebnis */}
                    {(project.ausgangslage || project.umsetzung || project.ergebnis) && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {project.ausgangslage && (
                          <div className="rounded-xl bg-[#1A1A1A] border border-white/5 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#555] mb-1.5">Ausgangslage</p>
                            <p className="text-xs text-[#A0A0A0] leading-relaxed">{project.ausgangslage}</p>
                          </div>
                        )}
                        {project.umsetzung && (
                          <div className="rounded-xl bg-[#1A1A1A] border border-white/5 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#555] mb-1.5">Umsetzung</p>
                            <p className="text-xs text-[#A0A0A0] leading-relaxed">{project.umsetzung}</p>
                          </div>
                        )}
                        {project.ergebnis && (
                          <div className="rounded-xl bg-[#1A1A1A] border border-white/5 p-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#E8400A]/60 mb-1.5">Ergebnis</p>
                            <p className="text-xs text-[#A0A0A0] leading-relaxed">{project.ergebnis}</p>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag}
                          className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-[#D8D8D8]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                      <a href={project.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#E8400A] px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-[#FF5520] hover:shadow-[0_14px_35px_rgba(232,64,10,0.22)]">
                        Projekt ansehen
                      </a>
                      <a href={project.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/12 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:border-white/30 hover:bg-white/[0.04]">
                        Website öffnen
                      </a>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#0B0B0B] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                    <div className="flex items-center gap-3 border-b border-white/8 px-3 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                      </div>
                      <div className="min-w-0 flex-1 rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-center text-[11px] font-medium text-[#A0A0A0]">
                        {project.url.replace("https://", "").replace(/\/$/, "")}
                      </div>
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#111] md:aspect-[16/9]">
                      <Image src={project.image} alt={`${project.title} Website Vorschau`}
                        fill sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mehr Case Studies CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-[#555] mb-2">Weitere Case Studies werden ergänzt</p>
            <a href="#kontakt"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#E8400A] transition-colors">
              Direkt anfragen
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className="group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
