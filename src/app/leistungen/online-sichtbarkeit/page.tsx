import type { Metadata } from "next";
import Script from "next/script";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "SEO & Online-Sichtbarkeit Dinslaken – Lokales SEO NRW | 2fast Media",
  description:
    "Damit dein Unternehmen bei Google gefunden wird. Lokales SEO, Google Unternehmensprofil & technische Optimierung für Dinslaken & NRW. Kostenlose SEO-Analyse anfragen.",
  keywords: [
    "SEO Dinslaken",
    "Lokales SEO NRW",
    "Google Sichtbarkeit",
    "Google Unternehmensprofil",
    "SEO Duisburg",
    "Online-Sichtbarkeit Ruhrgebiet",
    "lokale Suche Google",
    "SEO Agentur NRW",
  ],
  alternates: { canonical: "https://2fastmedia.de/leistungen/online-sichtbarkeit" },
  openGraph: {
    title: "SEO & Online-Sichtbarkeit Dinslaken – Lokales SEO NRW | 2fast Media",
    description:
      "Damit dein Unternehmen bei Google gefunden wird. Lokales SEO, Google Unternehmensprofil & technische Optimierung für Dinslaken & NRW.",
    url: "https://2fastmedia.de/leistungen/online-sichtbarkeit",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online-Sichtbarkeit & Lokales SEO",
  provider: {
    "@type": "LocalBusiness",
    name: "2fast Media",
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
    "Lokales SEO, Google Unternehmensprofil-Optimierung und technische SEO für Unternehmen in Dinslaken, Duisburg und NRW.",
  url: "https://2fastmedia.de/leistungen/online-sichtbarkeit",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wie lange dauert es bis ich bei Google ranke?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Erste Verbesserungen im Ranking sind oft nach 4–8 Wochen sichtbar. Für stabile Top-Positionen sollte man mit 3–6 Monaten rechnen – je nach Wettbewerb und Ausgangssituation.",
      },
    },
    {
      "@type": "Question",
      name: "Was ist lokales SEO und warum ist es wichtig?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lokales SEO sorgt dafür, dass dein Unternehmen bei Suchen mit lokalem Bezug (z. B. 'Friseur Dinslaken') weit oben erscheint. Gerade für Handwerker, Dienstleister und Einzelhändler ist das der effektivste Weg zu neuen Kunden.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet SEO bei 2fast Media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir bieten sowohl Einmal-Optimierungen als auch monatliche SEO-Betreuung an. Die genauen Kosten besprechen wir im kostenlosen Erstgespräch, nachdem wir deine aktuelle Sichtbarkeit analysiert haben.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich ein Google Unternehmensprofil?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja, absolut. Das Google Unternehmensprofil (früher Google My Business) ist für lokale Unternehmen einer der wichtigsten Rankingfaktoren und komplett kostenlos. Wir optimieren es für maximale Sichtbarkeit.",
      },
    },
  ],
};

const benefits = [
  { icon: "📍", title: "Google Maps & Local Pack", text: "Wir optimieren dein Google Unternehmensprofil, damit du in den lokalen Suchergebnissen prominent erscheinst." },
  { icon: "🔎", title: "Keyword-Strategie", text: "Wir recherchieren die Suchbegriffe, die deine potenziellen Kunden in Dinslaken und Umgebung wirklich eingeben." },
  { icon: "⚙️", title: "Technische SEO", text: "Ladezeiten, Core Web Vitals, mobile Darstellung – wir sorgen dafür, dass Google deine Website liebt." },
  { icon: "📝", title: "Inhaltliche Optimierung", text: "Texte, Überschriften und Strukturen werden auf relevante Keywords ausgerichtet ohne dabei unnatürlich zu klingen." },
];

const steps = [
  { num: "01", title: "Kostenlose SEO-Analyse", text: "Wir schauen uns deine aktuelle Sichtbarkeit, deine Wettbewerber und dein Google Profil genau an." },
  { num: "02", title: "Strategie & Keyword-Plan", text: "Basierend auf der Analyse erstellen wir einen konkreten Plan welche Keywords du angreifen solltest." },
  { num: "03", title: "Technische & inhaltliche Optimierung", text: "Wir setzen die Maßnahmen um: von Ladezeiten über Meta-Tags bis zu lokalen Landingpages." },
  { num: "04", title: "Monitoring & Berichte", text: "Du bekommst regelmäßige Reports zu deinen Rankings und siehst genau, was sich verbessert hat." },
];

const faqs = [
  { q: "Wie lange dauert es bis ich bei Google ranke?", a: "Erste Verbesserungen sind oft nach 4–8 Wochen sichtbar. Für stabile Top-Positionen sollte man mit 3–6 Monaten rechnen – je nach Wettbewerb und Ausgangssituation." },
  { q: "Was ist lokales SEO und warum ist es wichtig?", a: "Lokales SEO sorgt dafür, dass dein Unternehmen bei Suchen mit lokalem Bezug weit oben erscheint. Für Handwerker, Dienstleister und Einzelhändler ist das der effektivste Weg zu neuen Kunden." },
  { q: "Was kostet SEO bei 2fast Media?", a: "Wir bieten Einmal-Optimierungen und monatliche Betreuung an. Die Kosten besprechen wir im kostenlosen Erstgespräch nach einer Analyse deiner aktuellen Sichtbarkeit." },
  { q: "Brauche ich ein Google Unternehmensprofil?", a: "Ja, absolut. Das Google Unternehmensprofil ist für lokale Unternehmen einer der wichtigsten Rankingfaktoren – und komplett kostenlos. Wir optimieren es für maximale Sichtbarkeit." },
  { q: "Kann ich SEO und eine neue Website zusammen beauftragen?", a: "Ja – und das empfehlen wir sogar. Wenn wir die Website entwickeln, bauen wir technisches SEO direkt mit ein. Das spart Zeit und Kosten." },
];

const otherServices = [
  { href: "/leistungen/webdesign", emoji: "🌐", title: "Webdesign & Entwicklung", text: "Schnelle, individuelle Websites" },
  { href: "/leistungen/ki-integration", emoji: "🤖", title: "KI-Integration", text: "Automatisierung & smarte Tools" },
  { href: "/leistungen/grafik-branding", emoji: "🎨", title: "Grafik & Branding", text: "Logo, CI & Printmaterialien" },
  { href: "/leistungen/video-content", emoji: "🎬", title: "Video & Content", text: "Reels, Imagefilme & Social Media" },
];

export default function OnlineSichtbarkeitPage() {
  return (
    <>
      <Script id="schema-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <nav className="flex items-center gap-2 text-xs text-[#A0A0A0] mb-8" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white transition-colors">Startseite</a>
              <span>/</span>
              <a href="/#leistungen" className="hover:text-white transition-colors">Leistungen</a>
              <span>/</span>
              <span className="text-white">Online-Sichtbarkeit</span>
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">Online-Sichtbarkeit & SEO</p>
            <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tight mb-6 leading-tight">
              Damit dich Kunden in{" "}
              <span className="text-[#E8400A]">Dinslaken bei Google finden</span>
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed mb-10">
              Lokales SEO, Google Unternehmensprofil-Optimierung und technische Verbesserungen – damit dein Unternehmen in Dinslaken, Duisburg und ganz NRW bei Google oben steht und mehr Anfragen bekommt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Kostenlose SEO-Analyse
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
              <a
                href="/#leistungen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:border-white/30 transition-all duration-200"
              >
                Alle Leistungen
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Was du von uns bekommst</h2>
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

      {/* Warum SEO */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-6">
              Warum Online-Sichtbarkeit für lokale Unternehmen entscheidend ist
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#A0A0A0] text-sm leading-relaxed">
              <div className="space-y-4">
                <p>
                  Über 80 % der Menschen suchen online, bevor sie ein lokales Unternehmen kontaktieren. Wer bei Google auf Seite 2 oder weiter hinten landet, existiert für die meisten potenziellen Kunden schlicht nicht.
                </p>
                <p>
                  In Dinslaken, Duisburg und dem Ruhrgebiet ist der lokale Wettbewerb in vielen Branchen noch überschaubar. Genau jetzt ist der richtige Zeitpunkt, sich einen Vorsprung bei Google aufzubauen – bevor die Konkurrenz es tut.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Lokales SEO unterscheidet sich von klassischer SEO: Es geht darum, bei Suchanfragen mit Stadtbezug zu erscheinen und in Google Maps sichtbar zu sein. Das <strong className="text-white">Google Unternehmensprofil</strong> ist dabei das mächtigste kostenlose Werkzeug.
                </p>
                <p>
                  Wir kombinieren technische Optimierung, lokale Landingpages und ein gepflegtes Google Profil zu einer Strategie, die messbare Ergebnisse liefert. Kein Versprechen ohne Analyse.
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
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">So gehen wir vor</h2>
            <p className="text-[#A0A0A0] mt-3 max-w-xl">Von der Analyse bis zu messbaren Rankings – strukturiert und transparent.</p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Häufige Fragen zur Online-Sichtbarkeit</h2>
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
              Bereit, bei Google <span className="text-[#E8400A]">gefunden zu werden</span>?
            </h2>
            <p className="text-[#A0A0A0] mb-8 text-lg">
              Kostenlose SEO-Analyse für dein Unternehmen in Dinslaken, Duisburg & NRW. Wir schauen uns an wo du stehst und was möglich ist.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#E8400A] text-white font-bold text-lg hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Kostenlose Analyse anfragen
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Andere Leistungen */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-10">
            <h2 className="text-2xl font-extrabold italic tracking-tight">Weitere Leistungen von 2fast Media</h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s, i) => (
              <AnimateOnScroll key={s.href} delay={i * 0.07}>
                <a
                  href={s.href}
                  className="group flex items-start gap-4 p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/20 transition-all duration-200"
                >
                  <span className="text-2xl">{s.emoji}</span>
                  <div>
                    <p className="font-bold text-white text-sm group-hover:text-[#E8400A] transition-colors">{s.title}</p>
                    <p className="text-xs text-[#A0A0A0] mt-0.5">{s.text}</p>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
