import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { projects, type Project } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projekte | 2fastmedia",
  description:
    "Ein Einblick in Websites, Landingpages, Portale und digitale Oberflächen, die mit 2fastmedia konzipiert und umgesetzt wurden.",
  alternates: { canonical: "https://2fastmedia.de/projekte" },
};

function StatusBadge({ status }: { status: string }) {
  const isLive = status === "Live Projekt";
  const isKonzept = status === "Konzeptansicht";
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
        isLive
          ? "bg-[#E8400A]/10 border border-[#E8400A]/25 text-[#E8400A]"
          : isKonzept
          ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
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
        <h2 className="text-xl font-extrabold italic text-white mb-3 leading-tight">
          {project.title}
        </h2>
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
          <Link href="/kontakt"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#555] hover:text-white transition-colors group/link">
            Ähnliches Projekt anfragen
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover/link:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ProjektePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0D0D0D] text-white">
        {/* Header */}
        <section className="pt-32 pb-16 px-5 md:px-8 bg-[#0D0D0D]">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/"
              className="mb-10 inline-flex text-sm font-semibold text-[#A0A0A0] transition-colors hover:text-white"
            >
              ← Zurück zur Startseite
            </Link>
            <div className="mt-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
                Referenzen
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold italic tracking-tight mb-6">
                Ausgewählte Projekte
              </h1>
              <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed max-w-3xl">
                Ein Einblick in Websites, Landingpages, Portale und digitale Oberflächen,
                die mit 2fastmedia konzipiert und umgesetzt wurden.
              </p>
            </div>

          </div>
        </section>

        {/* Project grid */}
        <section className="py-16 px-5 md:px-8 bg-[#101010]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {projects.map((project, i) => (
                <AnimateOnScroll key={project.title} delay={i * 0.05} className="h-full">
                  <ProjectCard project={project} />
                </AnimateOnScroll>
              ))}
            </div>

            {/* Footer CTA */}
            <AnimateOnScroll delay={0.2} className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-white/8 bg-[#141414] px-8 py-6">
                <div className="text-left">
                  <p className="text-base font-bold text-white">Eigenes Projekt starten?</p>
                  <p className="text-sm text-[#A0A0A0] mt-0.5">Kurze Anfrage genügt — kein langer Fragebogen.</p>
                </div>
                <Link
                  href="/kontakt"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-colors"
                >
                  Projekt anfragen
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
