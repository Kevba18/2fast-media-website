import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Webdesign Dinslaken – Professionelle Website erstellen lassen | 2fastmedia",
  description:
    "Individuelle Webseiten für Unternehmen in Dinslaken, Duisburg & NRW. Schnelle, moderne Websites die bei Google ranken. Kein Baukastensystem – jetzt kostenlos anfragen.",
  keywords: [
    "Webdesign Dinslaken",
    "Website erstellen lassen Dinslaken",
    "Webdesign Duisburg",
    "Webdesign NRW",
    "Webentwicklung Dinslaken",
    "professionelle Website",
    "Next.js Webentwicklung",
    "Website Agentur NRW",
  ],
  alternates: { canonical: "https://2fastmedia.de/leistungen/webdesign" },
  openGraph: {
    title: "Webdesign Dinslaken – Professionelle Website erstellen lassen | 2fastmedia",
    description:
      "Individuelle Webseiten für Unternehmen in Dinslaken & NRW. Schnell, modern, Google-optimiert.",
    url: "https://2fastmedia.de/leistungen/webdesign",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Webdesign & Webentwicklung",
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
    "Individuelle Webseiten für Unternehmen in Dinslaken, Duisburg und ganz NRW. Kein Baukastensystem – professionelle Entwicklung mit Next.js, optimiert für Google.",
  url: "https://2fastmedia.de/leistungen/webdesign",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet eine professionelle Website in Dinslaken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine individuelle Website bei 2fastmedia startet ab 800 €. Der genaue Preis hängt von Umfang, Funktionen und Design ab. Im kostenlosen Erstgespräch erstellst du ein transparentes Angebot.",
      },
    },
    {
      "@type": "Question",
      name: "Wie lange dauert die Entwicklung einer Website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eine einfache Unternehmenswebsite ist typischerweise in 2–3 Wochen fertig. Bei komplexeren Projekten mit vielen Seiten oder Sonderfunktionen sind es 4–6 Wochen.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich meine Website später selbst bearbeiten?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Auf Wunsch wird ein einfaches CMS integriert, sodass du Texte und Bilder selbst aktualisieren kannst – ohne Programmierkenntnisse.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist der Unterschied zu Baukastensystemen wie Wix oder Jimdo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baukastensysteme sind langsam, generisch und technisch limitiert. Individuelle Entwicklung bedeutet: schnellere Ladezeiten, besseres Google-Ranking, kein monatliches Abo und ein Design das wirklich zu deinem Unternehmen passt.",
      },
    },
    {
      "@type": "Question",
      name: "Macht 2fastmedia auch Online-Shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, wir entwickeln auch E-Commerce-Lösungen mit Shopify oder WooCommerce. Sprich uns im Erstgespräch an.",
      },
    },
  ],
};

const benefits = [
  {
    icon: "⚡",
    title: "Blitzschnell geladen",
    text: "Auf schnelle Ladezeiten, saubere technische Struktur und mobile Nutzung optimiert. Google und deine Nutzer honorieren das.",
  },
  {
    icon: "📱",
    title: "Mobile-first",
    text: "Über 70 % der Nutzer surfen mobil. Deine Website sieht auf jedem Gerät perfekt aus.",
  },
  {
    icon: "🔍",
    title: "SEO von Anfang an",
    text: "Technische SEO, Meta-Tags, strukturierte Daten – alles ist bereits beim Build sauber eingebaut.",
  },
  {
    icon: "🎨",
    title: "Individuelles Design",
    text: "Kein Template von der Stange. Jede Website wird auf dein Unternehmen, deine Zielgruppe und deine Marke zugeschnitten.",
  },
];

const steps = [
  { num: "01", title: "Erstgespräch & Analyse", text: "Wir besprechen deine Ziele, Zielgruppe und Wettbewerber. Kostenlos und unverbindlich." },
  { num: "02", title: "Konzept & Design", text: "Du bekommst Wireframes und einen Designentwurf zur Freigabe, bevor eine Zeile Code geschrieben wird." },
  { num: "03", title: "Entwicklung & Testing", text: "Saubere Entwicklung mit Next.js oder WordPress. Ausgiebige Tests auf allen Geräten und Browsern." },
  { num: "04", title: "Launch & Support", text: "Wir gehen live und bleiben für Fragen und Anpassungen erreichbar. Kein Projekt endet mit dem Launch." },
];

const faqs = [
  { q: "Was kostet eine professionelle Website in Dinslaken?", a: "Eine individuelle Website bei 2fastmedia startet ab 800 €. Der genaue Preis hängt von Umfang, Funktionen und Design ab. Im kostenlosen Erstgespräch erstellst du ein transparentes Angebot." },
  { q: "Wie lange dauert die Entwicklung?", a: "Eine einfache Unternehmenswebsite ist typischerweise in 2–3 Wochen fertig. Bei komplexeren Projekten sind es 4–6 Wochen." },
  { q: "Kann ich die Website später selbst bearbeiten?", a: "Ja. Auf Wunsch wird ein einfaches CMS integriert, sodass du Texte und Bilder selbst aktualisieren kannst – ohne Programmierkenntnisse." },
  { q: "Was ist der Unterschied zu Wix oder Jimdo?", a: "Baukastensysteme sind langsam, generisch und technisch limitiert. Individuelle Entwicklung bedeutet schnellere Ladezeiten, besseres Google-Ranking und kein monatliches Abo." },
  { q: "Macht 2fastmedia auch Online-Shops?", a: "Ja, wir entwickeln E-Commerce-Lösungen mit Shopify oder WooCommerce. Sprich uns im Erstgespräch an." },
];

const otherServices = [
  { href: "/leistungen/online-sichtbarkeit", emoji: "🔍", title: "Online-Sichtbarkeit", text: "Lokales SEO & Google Unternehmensprofil" },
  { href: "/leistungen/ki-integration", emoji: "🤖", title: "KI-Integration", text: "Automatisierung & smarte Tools" },
  { href: "/leistungen/grafik-branding", emoji: "🎨", title: "Grafik & Branding", text: "Logo, CI & Printmaterialien" },
  { href: "/leistungen/video-content", emoji: "🎬", title: "Video & Content", text: "Reels, Imagefilme & Social Media" },
];

export default function WebdesignPage() {
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
              <span className="text-white">Webdesign</span>
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">Webdesign & Entwicklung</p>
            <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tight mb-6 leading-tight">
              Webdesign Dinslaken –{" "}
              <span className="text-[#E8400A]">Websites die Kunden gewinnen</span>
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed mb-10">
              Individuelle Webseiten für Unternehmen in Dinslaken, Duisburg und ganz NRW. Kein Baukastensystem – professionelle Entwicklung, die bei Google rankt und Besucher in Kunden verwandelt.
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
                href="/#projekte"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:border-white/30 transition-all duration-200"
              >
                Referenzen ansehen
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">
              Was du von deiner neuen Website bekommst
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-white/5 h-full">
                  <div className="text-3xl mb-4">{b.icon}</div>
                  <h3 className="font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{b.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Warum individuelle Entwicklung */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-6">
              Warum kein Baukasten-System?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#A0A0A0] text-sm leading-relaxed">
              <div className="space-y-4">
                <p>
                  Wix, Jimdo und Squarespace klingen verlockend – bis du merkst, dass deine Website bei Google kaum auftaucht, auf dem Smartphone komisch aussieht und im Laufe der Zeit immer mehr kostet.
                </p>
                <p>
                  Baukastensysteme erzeugen aufgeblähten Code, langsame Ladezeiten und ein Design das jeder kennt. Für ein lokales Unternehmen in Dinslaken oder Duisburg ist das ein echter Wettbewerbsnachteil.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Mit einer individuell entwickelten Website bist du unabhängig von monatlichen Abogebühren, hast volle Kontrolle über dein Design und profitierst von technischer Überlegenheit, die sich direkt im Google-Ranking niederschlägt.
                </p>
                <p>
                  2fastmedia entwickelt mit <strong className="text-white">Next.js</strong> – einer der modernsten Technologien für schnelle, SEO-freundliche Websites. Das Ergebnis: auf schnelle Ladezeiten optimierte, technisch sauber aufgebaute Seiten mit einem Fundament, auf dem du langfristig aufbauen kannst.
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
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">So läuft ein Projekt ab</h2>
            <p className="text-[#A0A0A0] mt-3 max-w-xl">Vom ersten Gespräch bis zum Launch – transparent, strukturiert und ohne überraschende Zusatzkosten.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Häufige Fragen zum Webdesign</h2>
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
              Bereit für eine Website die <span className="text-[#E8400A]">wirklich funktioniert</span>?
            </h2>
            <p className="text-[#A0A0A0] mb-8 text-lg">
              Kostenloses Erstgespräch – kein Angebot ohne vorherige Absprache. Für Unternehmen in Dinslaken, Duisburg und ganz NRW.
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
