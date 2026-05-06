import type { Metadata } from "next";
import Script from "next/script";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "KI-Integration & Automatisierung für Unternehmen NRW | 2fast Media Dinslaken",
  description:
    "KI konkret einsetzen: Automatisierte Prozesse, ChatGPT-Integration & smarte Tools für KMU in NRW. Zeit sparen, Kosten senken – sofort umsetzbar. Jetzt kostenlos anfragen.",
  keywords: [
    "KI Integration NRW",
    "Automatisierung Unternehmen",
    "ChatGPT Integration",
    "Make.com Automatisierung",
    "KI für KMU",
    "künstliche Intelligenz Dinslaken",
    "Prozessautomatisierung NRW",
    "KI Beratung Ruhrgebiet",
  ],
  alternates: { canonical: "https://2fastmedia.de/leistungen/ki-integration" },
  openGraph: {
    title: "KI-Integration & Automatisierung für Unternehmen NRW | 2fast Media",
    description:
      "KI konkret einsetzen: Automatisierte Prozesse & ChatGPT-Integration für KMU in NRW.",
    url: "https://2fastmedia.de/leistungen/ki-integration",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "KI-Integration & Automatisierung",
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
    "Wir bringen künstliche Intelligenz in deinen Unternehmensalltag – von automatisierten Prozessen bis zu smarten Tools mit ChatGPT und Make.com.",
  url: "https://2fastmedia.de/leistungen/ki-integration",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Für welche Unternehmen lohnt sich KI-Integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Für fast jedes Unternehmen, das wiederkehrende Aufgaben hat: E-Mail-Kommunikation, Angebotserstellung, Social-Media-Posts, Kundensupport, Terminplanung. Wir schauen uns gemeinsam an, wo KI bei dir den größten Hebel hat.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich technisches Wissen für KI-Tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Wir bauen die Automatisierungen so, dass du sie selbst bedienen kannst – ohne Programmierkenntnisse. Du bekommst auch eine Einweisung, damit alles im Alltag reibungslos funktioniert.",
      },
    },
    {
      "@type": "Question",
      name: "Was kostet eine KI-Integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Das hängt stark vom Umfang ab. Einfache Automatisierungen können bereits ab 300–500 € umgesetzt werden. Komplexere Systeme werden individuell kalkuliert. Im kostenlosen Erstgespräch erfährst du, was möglich ist und was es kostet.",
      },
    },
    {
      "@type": "Question",
      name: "Welche KI-Tools nutzt 2fast Media?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je nach Anwendungsfall setzen wir auf ChatGPT / OpenAI, Make.com (ehemals Integromat), Zapier, n8n oder spezialisierte Tools. Wir wählen immer die Lösung, die am besten zu deinem Workflow passt.",
      },
    },
  ],
};

const useCases = [
  { icon: "📧", title: "E-Mail-Automatisierung", text: "Standardanfragen automatisch beantworten, Leads kategorisieren und Follow-ups versenden ohne manuellen Aufwand." },
  { icon: "📄", title: "Angebote & Dokumente", text: "KI-gestützte Erstellung von Angeboten, Rechnungen oder Berichten – auf Knopfdruck statt in Stunden." },
  { icon: "📱", title: "Social-Media-Content", text: "Automatisch Beiträge generieren, planen und posten – abgestimmt auf deine Marke und Zielgruppe." },
  { icon: "💬", title: "Kundenkommunikation", text: "Chatbots und KI-Assistenten, die häufige Fragen beantworten und Termine buchen – rund um die Uhr." },
];

const steps = [
  { num: "01", title: "Prozess-Analyse", text: "Wir schauen uns deinen Arbeitsalltag an und identifizieren, wo KI am meisten Zeit und Kosten spart." },
  { num: "02", title: "Lösungsdesign", text: "Wir entwickeln ein konkretes Konzept: welche Tools, welche Automatisierungen, welcher Aufwand." },
  { num: "03", title: "Umsetzung & Integration", text: "Wir bauen die Automatisierungen und integrieren sie in deine bestehenden Systeme und Workflows." },
  { num: "04", title: "Einweisung & Support", text: "Du bekommst eine ausführliche Einweisung und weißt genau, wie du alles selbst nutzen und anpassen kannst." },
];

const faqs = [
  { q: "Für welche Unternehmen lohnt sich KI-Integration?", a: "Für fast jedes Unternehmen mit wiederkehrenden Aufgaben: E-Mail-Kommunikation, Angebotserstellung, Social-Media, Kundensupport, Terminplanung. Wir schauen uns an, wo KI bei dir den größten Hebel hat." },
  { q: "Brauche ich technisches Wissen?", a: "Nein. Wir bauen die Automatisierungen so, dass du sie selbst bedienen kannst – ohne Programmierkenntnisse. Du bekommst außerdem eine Einweisung." },
  { q: "Was kostet eine KI-Integration?", a: "Einfache Automatisierungen starten ab 300–500 €. Komplexere Systeme werden individuell kalkuliert. Im kostenlosen Erstgespräch erfährst du, was möglich ist und was es kostet." },
  { q: "Welche KI-Tools nutzt 2fast Media?", a: "Je nach Anwendungsfall: ChatGPT / OpenAI, Make.com, Zapier, n8n oder spezialisierte Tools. Wir wählen immer die Lösung, die am besten zu deinem Workflow passt." },
  { q: "Was passiert, wenn sich ein Tool verändert oder abschalten wird?", a: "Wir bauen auf etablierte Plattformen mit langer Lebensdauer. Sollte sich dennoch etwas ändern, helfen wir dir bei der Migration oder Anpassung." },
];

const otherServices = [
  { href: "/leistungen/webdesign", emoji: "🌐", title: "Webdesign & Entwicklung", text: "Schnelle, individuelle Websites" },
  { href: "/leistungen/online-sichtbarkeit", emoji: "🔍", title: "Online-Sichtbarkeit", text: "Lokales SEO & Google Profil" },
  { href: "/leistungen/grafik-branding", emoji: "🎨", title: "Grafik & Branding", text: "Logo, CI & Printmaterialien" },
  { href: "/leistungen/video-content", emoji: "🎬", title: "Video & Content", text: "Reels, Imagefilme & Social Media" },
];

export default function KiIntegrationPage() {
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
              <span className="text-white">KI-Integration</span>
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">KI-Integration & Automatisierung</p>
            <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tight mb-6 leading-tight">
              KI-Integration –{" "}
              <span className="text-[#E8400A]">Mehr Zeit für das Wesentliche</span>
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed mb-10">
              Wir bringen künstliche Intelligenz in deinen Unternehmensalltag – konkret, bezahlbar und auf deinen Workflow zugeschnitten. Für Unternehmen in Dinslaken, Duisburg und ganz NRW.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Kostenlos anfragen
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

      {/* Use Cases */}
      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Typische Anwendungsfälle</h2>
            <p className="text-[#A0A0A0] mt-3 max-w-xl">KI ist kein Selbstzweck – sondern ein Werkzeug das konkrete Probleme löst.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((u, i) => (
              <AnimateOnScroll key={u.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-white/5 h-full">
                  <div className="text-3xl mb-4">{u.icon}</div>
                  <h3 className="font-bold text-white mb-2">{u.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{u.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Warum KI */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-6">
              KI für kleine und mittlere Unternehmen – konkret statt abstrakt
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#A0A0A0] text-sm leading-relaxed">
              <div className="space-y-4">
                <p>
                  Viele Unternehmer hören das Buzzword KI und denken: zu teuer, zu komplex, nichts für mich. Das Gegenteil ist der Fall. Gerade kleine und mittlere Unternehmen profitieren enorm, weil sie keine eigene IT-Abteilung brauchen – sie brauchen jemanden der KI sinnvoll für sie einsetzt.
                </p>
                <p>
                  Stell dir vor, du antwortest auf keine Standard-E-Mail mehr manuell. Dein Social-Media-Kanal bespielt sich fast von alleine. Angebote werden in Minuten statt Stunden erstellt. Das ist heute alles möglich – und gar nicht so teuer.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Wir bei 2fast Media machen aus dem Hype echte Praxis. Wir schauen uns an, wie du heute arbeitest, und finden die Stellen wo Automatisierung am meisten bringt. Kein technisches Kauderwelsch – konkrete Lösungen, die du morgen nutzen kannst.
                </p>
                <p>
                  Unsere Tools der Wahl sind <strong className="text-white">Make.com</strong>, <strong className="text-white">ChatGPT / OpenAI</strong> und weitere bewährte Plattformen. Du musst nichts davon kennen – wir richten es ein und du nutzt das Ergebnis.
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
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Häufige Fragen zur KI-Integration</h2>
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
              Bereit, Zeit zu sparen mit <span className="text-[#E8400A]">smarter Automatisierung</span>?
            </h2>
            <p className="text-[#A0A0A0] mb-8 text-lg">
              Kostenloses Erstgespräch – wir zeigen dir konkret, wo KI in deinem Unternehmen Sinn macht.
            </p>
            <a
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[#E8400A] text-white font-bold text-lg hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Jetzt kostenlos anfragen
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
