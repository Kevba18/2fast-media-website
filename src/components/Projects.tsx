import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";
import { featuredProjects, type Project } from "@/lib/projects";

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

function StatusBadge({ status }: { status: string }) {
  const isLive = status === "Live Projekt";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
        isLive
          ? "bg-[#E8400A]/10 border border-[#E8400A]/25 text-[#E8400A]"
          : "bg-white/5 border border-white/10 text-[#666]"
      }`}
    >
      {isLive && <span className="w-1.5 h-1.5 rounded-full bg-[#E8400A] animate-pulse" />}
      {status}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group h-full flex flex-col rounded-2xl border border-white/8 bg-[#151515] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#E8400A]/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0D0D] shrink-0">
        <Image
          src={project.image}
          alt={`${project.title} Projektvorschau`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515]/50 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <StatusBadge status={project.status} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#555] mb-2">
          {project.category}
        </p>
        <h3 className="text-xl font-extrabold italic text-white mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-[#A0A0A0] leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full border border-white/8 bg-white/[0.03] text-[11px] font-semibold text-[#888]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#E8400A] hover:text-[#FF5520] transition-colors group/link"
          >
            Projekt ansehen
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover/link:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        ) : (
          <a href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#555] hover:text-white transition-colors group/link">
            Ähnliches Projekt anfragen
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover/link:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="referenzen" className="py-28 px-5 md:px-8 bg-[#101010]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <AnimateOnScroll className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Referenzen
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Ausgewählte Projekte
          </h2>
          <p className="mt-5 text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            Von lokalen Dienstleistern über Portale bis zu Premium Landingpages.
            Jedes Projekt folgt einem klaren Ziel: verständlich auftreten, Vertrauen
            schaffen und Anfragen einfacher machen.
          </p>
        </AnimateOnScroll>

        {/* Logo marquee */}
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
                  <Image src={reference.logo} alt={reference.alt} fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-contain opacity-75 grayscale brightness-0 invert" />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Project grid – featured 3 cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {featuredProjects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 0.06} className="h-full">
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Footer CTA */}
        <AnimateOnScroll delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-[#555] mb-3">Weitere Projekte werden laufend ergänzt</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/projekte"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#E8400A] transition-colors">
              Alle Projekte ansehen
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className="group-hover:translate-x-0.5 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
            <span className="hidden sm:block text-[#333]">·</span>
            <a href="#kontakt"
              className="text-sm font-semibold text-[#555] hover:text-white transition-colors">
              Ähnliches Projekt anfragen
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
