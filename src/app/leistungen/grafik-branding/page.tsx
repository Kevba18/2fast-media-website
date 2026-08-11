import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Logo & Corporate Design Dinslaken – Grafikdesign NRW | 2fastmedia",
  description:
    "Professionelles Logo, Corporate Identity & Grafikdesign für Unternehmen in Dinslaken & NRW. Damit du online und offline einen starken ersten Eindruck machst. Jetzt anfragen.",
  keywords: [
    "Logo erstellen Dinslaken",
    "Corporate Design NRW",
    "Grafikdesign Dinslaken",
    "Logo Design Duisburg",
    "Branding Agentur NRW",
    "Corporate Identity Ruhrgebiet",
    "Printdesign NRW",
    "Logogestaltung Dinslaken",
  ],
  alternates: { canonical: "https://2fastmedia.de/leistungen/grafik-branding" },
  openGraph: {
    title: "Logo & Corporate Design Dinslaken – Grafikdesign NRW | 2fastmedia",
    description:
      "Professionelles Logo, Corporate Identity & Grafikdesign für Unternehmen in Dinslaken & NRW.",
    url: "https://2fastmedia.de/leistungen/grafik-branding",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Grafik & Branding",
  provider: {
    "@type": "LocalBusiness",
    name: "2fastmedia",
    url: "https://2fastmedia.de",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dinslaken",
      addressRegion: "NRW",
      addressCountry: "DE",
    },
  },
  areaServed: ["Dinslaken", "Duisburg", "Ruhrgebiet", "NRW"],
  description:
    "Logo, Corporate Identity und Printmaterialien für Unternehmen in Dinslaken, Duisburg und NRW.",
  url: "https://2fastmedia.de/leistungen/grafik-branding",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet ein professionelles Logo in Dinslaken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein professionelles Logo bei 2fastmedia startet ab 416,50 € inklusive gesetzlicher Umsatzsteuer (350 € netto). Inklusive mehrerer Entwürfe, Revisionen und Lieferung aller benötigten Dateiformate (PNG, SVG, PDF).",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zwischen Logo und Corporate Identity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein Logo ist das visuelle Erkennungszeichen. Eine Corporate Identity (CI) geht weiter: sie umfasst Farbpalette, Typografie, Bildsprache und die Regeln wie das alles eingesetzt wird – auf der Website, in Flyern, auf Social Media.",
      },
    },
    {
      "@type": "Question",
      name: "Bekomme ich alle Dateiformate für das Logo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Du bekommst dein Logo in allen gängigen Formaten: PNG (mit und ohne Hintergrund), SVG (skalierbar), PDF und auf Wunsch auch als AI- oder EPS-Datei.",
      },
    },
    {
      "@type": "Question",
      name: "Macht 2fastmedia auch Printmaterialien wie Visitenkarten oder Flyer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir gestalten Visitenkarten, Flyer, Briefpapier, Schilder, Rollups und weitere Printmaterialien – druckfertig und aufeinander abgestimmt.",
      },
    },
  ],
};

const deliverables = [
  { icon: "✏️", title: "Logo-Design", text: "Einzigartiges Logo mit mehreren Entwurfsvorschlägen. Lieferung in allen Dateiformaten (PNG, SVG, PDF)." },
  { icon: "🎨", title: "Corporate Identity", text: "Farbpalette, Typografie und Gestaltungsregeln – damit dein Auftritt überall konsistent wirkt." },
  { icon: "🖨️", title: "Printmaterialien", text: "Visitenkarten, Flyer, Briefpapier, Rollup – druckfertig gestaltet und auf deine CI abgestimmt." },
  { icon: "📐", title: "Brand Guidelines", text: "Ein kompaktes Dokument das zeigt, wie deine Marke richtig eingesetzt wird – für dich und dein Team." },
];

const steps = [
  { num: "01", title: "Briefing & Analyse", text: "Wir lernen dein Unternehmen, deine Zielgruppe und deinen Wettbewerb kennen. Kein Design ohne Strategie." },
  { num: "02", title: "Konzept & Entwürfe", text: "Du bekommst mehrere Designrichtungen zur Auswahl – mit Erklärungen zur Idee hinter jedem Entwurf." },
  { num: "03", title: "Verfeinerung & Freigabe", text: "Wir arbeiten gemeinsam den Favoriten aus, bis alles stimmt. Inklusive Revisionsrunden." },
  { num: "04", title: "Lieferung aller Dateien", text: "Du bekommst alle Dateiformate die du brauchst – für Web, Print und Social Media." },
];

const faqs = [
  { q: "Was kostet ein professionelles Logo in Dinslaken?", a: "Ein professionelles Logo bei 2fastmedia startet ab 416,50 € inklusive gesetzlicher Umsatzsteuer (350 € netto). Inklusive mehrerer Entwürfe, Revisionen und Lieferung aller Dateiformate (PNG, SVG, PDF)." },
  { q: "Was ist der Unterschied zwischen Logo und Corporate Identity?", a: "Ein Logo ist das visuelle Erkennungszeichen. Eine Corporate Identity geht weiter: Farbpalette, Typografie, Bildsprache und die Regeln wie alles eingesetzt wird – auf der Website, in Flyern, auf Social Media." },
  { q: "Bekomme ich alle Dateiformate?", a: "Ja. Du bekommst dein Logo in allen gängigen Formaten: PNG, SVG, PDF und auf Wunsch AI/EPS. Für Agenturen und Druckereien geeignet." },
  { q: "Macht 2fastmedia auch Printmaterialien?", a: "Ja. Visitenkarten, Flyer, Briefpapier, Schilder, Rollups und weiteres – druckfertig und auf deine CI abgestimmt." },
  { q: "Kann ich das Logo auch mit einer neuen Website kombinieren?", a: "Absolut – und das empfehlen wir. Logo und Website aus einer Hand bedeutet ein einheitliches Bild und spart Abstimmungsaufwand." },
];

const otherServices = [
  { href: "/leistungen/webdesign", emoji: "🌐", title: "Webdesign & Entwicklung", text: "Schnelle, individuelle Websites" },
  { href: "/leistungen/online-sichtbarkeit", emoji: "🔍", title: "Online-Sichtbarkeit", text: "Lokales SEO & Google Profil" },
  { href: "/leistungen/ki-integration", emoji: "🤖", title: "KI-Integration", text: "Automatisierung & smarte Tools" },
  { href: "/leistungen/video-content", emoji: "🎬", title: "Video & Content", text: "Reels, Imagefilme & Social Media" },
];

export default function GrafikBrandingPage() {
  return (
    <>
      <Script id="schema-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <nav className="flex items-center gap-2 text-xs text-[#A0A0A0] mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Startseite</Link>
              <span>/</span>
              <Link href="/#leistungen" className="hover:text-white transition-colors">Leistungen</Link>
              <span>/</span>
              <span className="text-white">Grafik & Branding</span>
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">Grafik & Branding</p>
            <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tight mb-6 leading-tight">
              Logo & Corporate Design –{" "}
              <span className="text-[#E8400A]">Deine Marke professionell</span>
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed mb-10">
              Professionelles Logo, Corporate Identity und Printmaterialien für Unternehmen in Dinslaken, Duisburg und NRW. Damit du online und offline einen starken ersten Eindruck machst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Kostenlos anfragen
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/#leistungen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:border-white/30 transition-all duration-200"
              >
                Alle Leistungen
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Was du bekommst</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {deliverables.map((d, i) => (
              <AnimateOnScroll key={d.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-white/5 h-full">
                  <div className="text-3xl mb-4">{d.icon}</div>
                  <h3 className="font-bold text-white mb-2">{d.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{d.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Warum professionelles Branding */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-6">
              Warum professionelles Branding kein Luxus ist
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#A0A0A0] text-sm leading-relaxed">
              <div className="space-y-4">
                <p>
                  Menschen treffen Kaufentscheidungen in Sekunden – und dabei spielt das visuelle Erscheinungsbild eine entscheidende Rolle. Ein selbst erstelltes Logo aus dem Internet-Generator signalisiert: hier wird nicht investiert.
                </p>
                <p>
                  Ein professionelles Logo und eine durchgängige Corporate Identity hingegen bauen sofort Vertrauen auf. Sie kommunizieren Kompetenz, bevor du auch nur ein Wort gesagt hast.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Gutes Branding ist kein einmaliges Projekt – es ist die Grundlage für alles was danach kommt: Website, Social Media, Visitenkarten, Fahrzeugbeschriftungen, Arbeitskleidung.
                </p>
                <p>
                  Bei 2fastmedia denken wir Branding von Anfang an zusammen mit deiner digitalen Präsenz. Damit Logo, Website und Content eine einheitliche Sprache sprechen – für lokale Unternehmen in <strong className="text-white">Dinslaken und NRW</strong>.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">So entsteht dein Branding</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-white/5 h-full">
                  <span className="text-[#E8400A] font-extrabold text-2xl italic">{s.num}</span>
                  <h3 className="font-bold text-white mt-3 mb-2">{s.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{s.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Häufige Fragen zu Grafik & Branding</h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimateOnScroll key={f.q} delay={i * 0.07}>
                <div className="p-6 rounded-2xl bg-[#141414] border border-white/5">
                  <h3 className="font-bold text-white mb-2">{f.q}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{f.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-4">
              Bereit für ein <span className="text-[#E8400A]">Branding das überzeugt</span>?
            </h2>
            <p className="text-[#A0A0A0] mb-8 text-lg">
              Kostenloses Erstgespräch für Unternehmen in Dinslaken, Duisburg und NRW. Gemeinsam entwickeln wir dein unverwechselbares Erscheinungsbild.
            </p>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#E8400A] text-white font-bold text-lg hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Jetzt kostenlos anfragen
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Andere Leistungen */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-2xl font-extrabold italic tracking-tight">Weitere Leistungen von 2fastmedia</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s, i) => (
              <AnimateOnScroll key={s.href} delay={i * 0.07}>
                <Link
                  href={s.href}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/20 transition-all duration-200"
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <div>
                    <p className="font-bold text-white text-sm group-hover:text-[#E8400A] transition-colors">{s.title}</p>
                    <p className="text-xs text-[#A0A0A0] mt-0.5">{s.text}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
