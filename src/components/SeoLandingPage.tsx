import type { SeoPage } from "@/lib/seo-pages";
import { seoPageServices } from "@/lib/seo-pages";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function SeoLandingPage({ page }: { page: SeoPage }) {
  return (
    <main>
      <section className="pt-32 pb-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <nav className="flex items-center gap-2 text-xs text-[#A0A0A0] mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <span className="text-white">{page.h1}</span>
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
              2fastmedia
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tight mb-6 leading-tight">
              {page.h1}
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed mb-10">
              {page.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200">
                Kostenloses Erstgespräch anfragen
              </Link>
              <Link href="/#leistungen" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:border-white/30 transition-all duration-200">
                Leistungen ansehen
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimateOnScroll>
            <div className="h-full rounded-3xl bg-[#1C1C1C] border border-white/5 p-7">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">Problem</p>
              <h2 className="text-3xl font-extrabold italic tracking-tight mb-4">Warum viele Websites nicht genug leisten</h2>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">{page.problem}</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className="h-full rounded-3xl bg-[#1C1C1C] border border-[#E8400A]/20 p-7">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">Lösung</p>
              <h2 className="text-3xl font-extrabold italic tracking-tight mb-4">Was 2fastmedia anders macht</h2>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">{page.solution}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">
              Leistungen, die dafür relevant sind
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {seoPageServices.map((service, i) => (
              <AnimateOnScroll key={service.title} delay={i * 0.06}>
                <Link href={service.href} className="block h-full rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/20 p-6 transition-colors">
                  <h3 className="font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{service.description}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">
              Ablauf und Vorteile
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-[#1C1C1C] border border-white/5 p-6">
              <h3 className="font-bold text-white mb-4">Ablauf</h3>
              <div className="space-y-3 text-sm text-[#A0A0A0] leading-relaxed">
                <p>1. Ziele und aktuelle Situation klären</p>
                <p>2. Struktur, Inhalte und Kontaktwege planen</p>
                <p>3. Design, Umsetzung und SEO Grundlagen erstellen</p>
                <p>4. Launch, Prüfung und nächste Schritte festlegen</p>
              </div>
            </div>
            <div className="rounded-2xl bg-[#1C1C1C] border border-white/5 p-6">
              <h3 className="font-bold text-white mb-4">Vorteile</h3>
              <div className="space-y-3">
                {page.benefits.map((benefit) => (
                  <p key={benefit} className="flex gap-3 text-sm text-[#A0A0A0] leading-relaxed">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#E8400A] shrink-0" />
                    {benefit}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">
              Häufige Fragen
            </h2>
          </AnimateOnScroll>
          <div className="space-y-3">
            {page.faqs.map((faq) => (
              <AnimateOnScroll key={faq.question}>
                <div className="rounded-2xl bg-[#141414] border border-white/5 p-6">
                  <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{faq.answer}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-5">
              Lass uns prüfen, was für dich sinnvoll ist
            </h2>
            <p className="text-[#A0A0A0] leading-relaxed mb-8">
              Kurzes Erstgespräch, klare Einschätzung, keine unnötige Verkaufsrunde.
            </p>
            <Link href="/#kontakt" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200">
              Kontakt aufnehmen
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
