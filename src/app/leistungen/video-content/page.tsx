import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Video & Social Media Content Dinslaken – Reels & Imagefilm NRW | 2fastmedia",
  description:
    "Professionelle Reels, Imagefilme und Social-Media-Content für Instagram, TikTok & YouTube. Für Unternehmen in Dinslaken, Duisburg & ganz NRW. Jetzt anfragen.",
  keywords: [
    "Video Content Dinslaken",
    "Reels NRW",
    "Imagefilm Dinslaken",
    "Social Media Content Ruhrgebiet",
    "Instagram Reels NRW",
    "TikTok Video Unternehmen",
    "Videoproduktion Duisburg",
    "Content Marketing NRW",
  ],
  alternates: { canonical: "https://2fastmedia.de/leistungen/video-content" },
  openGraph: {
    title: "Video & Social Media Content Dinslaken – Reels & Imagefilm NRW | 2fastmedia",
    description:
      "Professionelle Reels, Imagefilme und Social-Media-Content für Instagram, TikTok & YouTube.",
    url: "https://2fastmedia.de/leistungen/video-content",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Video & Content",
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
    "Reels, Imagefilme und Social-Media-Content für Instagram, TikTok und YouTube. Für Unternehmen in Dinslaken, Duisburg und NRW.",
  url: "https://2fastmedia.de/leistungen/video-content",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was kostet ein Imagefilm in Dinslaken?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ein einfacher Imagefilm startet bei 2fastmedia ab 500 €. Der genaue Preis hängt von Länge, Drehtagen, Animationen und Nachbearbeitung ab. Im kostenlosen Erstgespräch besprechen wir deine Vorstellungen und erstellen ein Angebot.",
      },
    },
    {
      "@type": "Question",
      name: "Für welche Plattformen produziert 2fastmedia Videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wir produzieren für Instagram Reels, TikTok, YouTube, LinkedIn und deine Website. Jedes Format wird plattformgerecht optimiert – Hochformat für Social Media, Querformat für YouTube und Websites.",
      },
    },
    {
      "@type": "Question",
      name: "Brauche ich selbst eine Kamera oder Equipment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nein. Wir bringen alles mit: Kamera, Licht, Ton. Du musst nur du selbst sein – wir sorgen dafür, dass alles gut aussieht und du dich vor der Kamera wohlfühlst.",
      },
    },
    {
      "@type": "Question",
      name: "Kann ich regelmäßig Content bekommen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. Wir bieten Content-Pakete für regelmäßige Erstellung an – z. B. monatlich eine bestimmte Anzahl Reels oder Posts. So bleibt dein Kanal aktiv, ohne dass du selbst die Zeit investieren musst.",
      },
    },
  ],
};

const formats = [
  { icon: "📱", title: "Instagram & TikTok Reels", text: "Kurze, aufmerksamkeitsstarke Videoformate die auf sozialen Plattformen performen und deine Reichweite aufbauen." },
  { icon: "🎬", title: "Imagefilm", text: "Professioneller Unternehmensfilm für deine Website, Messen oder Präsentationen. Zeigt wer du bist und was du machst." },
  { icon: "📸", title: "Foto & Produktfotos", text: "Hochwertige Fotos für Website, Social Media und Print – professionell beleuchtet und nachbearbeitet." },
  { icon: "📅", title: "Content-Pakete", text: "Regelmäßiger Content auf Basis fester Pakete – damit dein Social-Media-Kanal aktiv bleibt ohne deinen Aufwand." },
];

const steps = [
  { num: "01", title: "Content-Strategie", text: "Wir besprechen, welche Formate, Themen und Plattformen für dein Unternehmen und deine Zielgruppe am besten passen." },
  { num: "02", title: "Drehtag bei dir", text: "Wir kommen zu dir und drehen alles was wir brauchen. Effizient geplant, damit du wenig Zeit verlierst." },
  { num: "03", title: "Schnitt & Bearbeitung", text: "Professioneller Schnitt, Farbkorrektur, Musik und Texte/Untertitel – für jede Plattform im richtigen Format." },
  { num: "04", title: "Lieferung & Freigabe", text: "Du bekommst alle Videos zur Freigabe und nach deinem Okay die druckfertigen Enddateien zum Download." },
];

const faqs = [
  { q: "Was kostet ein Imagefilm in Dinslaken?", a: "Ein einfacher Imagefilm startet ab 500 €. Der genaue Preis hängt von Länge, Drehtagen und Nachbearbeitung ab. Im kostenlosen Erstgespräch besprechen wir deine Vorstellungen." },
  { q: "Für welche Plattformen produziert ihr Videos?", a: "Für Instagram Reels, TikTok, YouTube, LinkedIn und deine Website. Jedes Format wird plattformgerecht optimiert – Hochformat für Social Media, Querformat für YouTube." },
  { q: "Brauche ich selbst Equipment?", a: "Nein. Wir bringen Kamera, Licht und Ton mit. Du musst nur du selbst sein – wir sorgen dafür, dass alles gut aussieht." },
  { q: "Kann ich regelmäßig Content bekommen?", a: "Ja. Wir bieten Content-Pakete für monatlich regelmäßige Erstellung an. So bleibt dein Kanal aktiv, ohne dass du selbst Zeit investieren musst." },
  { q: "Kann ich Video & Webdesign zusammen beauftragen?", a: "Ja – und das macht besonders Sinn. Wenn wir Imagefilm und Website gemeinsam realisieren, sorgen wir für ein einheitliches Bild in Bild und Design." },
];

const otherServices = [
  { href: "/leistungen/webdesign", emoji: "🌐", title: "Webdesign & Entwicklung", text: "Schnelle, individuelle Websites" },
  { href: "/leistungen/online-sichtbarkeit", emoji: "🔍", title: "Online-Sichtbarkeit", text: "Lokales SEO & Google Profil" },
  { href: "/leistungen/ki-integration", emoji: "🤖", title: "KI-Integration", text: "Automatisierung & smarte Tools" },
  { href: "/leistungen/grafik-branding", emoji: "🎨", title: "Grafik & Branding", text: "Logo, CI & Printmaterialien" },
];

export default function VideoContentPage() {
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
              <span className="text-white">Video & Content</span>
            </nav>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">Video & Content</p>
            <h1 className="text-4xl md:text-6xl font-extrabold italic tracking-tight mb-6 leading-tight">
              Video & Content –{" "}
              <span className="text-[#E8400A]">Dein Unternehmen in Szene gesetzt</span>
            </h1>
            <p className="text-lg md:text-xl text-[#A0A0A0] max-w-2xl leading-relaxed mb-10">
              Reels, Imagefilme und Social-Media-Content für Instagram, TikTok und YouTube. Professionell produziert in Dinslaken, Duisburg und ganz NRW – damit du auffällst.
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

      {/* Formate */}
      <section className="py-20 px-5 md:px-8 bg-[#141414]">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Video- & Content-Formate</h2>
            <p className="text-[#A0A0A0] mt-3 max-w-xl">Vom kurzen Reel bis zum professionellen Imagefilm – für jeden Bedarf das richtige Format.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {formats.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-[#1C1C1C] border border-white/5 h-full">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-relaxed">{f.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Video */}
      <section className="py-20 px-5 md:px-8 bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight mb-6">
              Warum Video für lokale Unternehmen so wichtig geworden ist
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#A0A0A0] text-sm leading-relaxed">
              <div className="space-y-4">
                <p>
                  Social-Media-Algorithmen bevorzugen Videocontent massiv. Ein Reel von einem Handwerksbetrieb aus Dinslaken kann problemlos Tausende Aufrufe erreichen – und damit potenzielle Kunden, die du mit klassischer Werbung nie erreichst.
                </p>
                <p>
                  Video schafft Vertrauen. Wenn potenzielle Kunden dich, dein Team und deine Arbeit in einem kurzen Video sehen, entsteht Nähe und Vertrauen – lang bevor sie dich kontaktieren.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Ein professioneller Imagefilm auf deiner Website erhöht nachweislich die Verweildauer und die Conversion-Rate. Menschen kaufen von Menschen – und ein gutes Video zeigt genau das.
                </p>
                <p>
                  2fastmedia produziert Video-Content der zu deinem Unternehmen passt: authentisch, professionell und ohne aufwendige Vorbereitung auf deiner Seite. Wir kommen zu dir nach <strong className="text-white">Dinslaken oder ins Ruhrgebiet</strong> und machen alles klar.
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
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">So läuft eine Video-Produktion ab</h2>
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
            <h2 className="text-3xl md:text-4xl font-extrabold italic tracking-tight">Häufige Fragen zu Video & Content</h2>
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
              Bereit, dein Unternehmen{" "}
              <span className="text-[#E8400A]">in Szene zu setzen</span>?
            </h2>
            <p className="text-[#A0A0A0] mb-8 text-lg">
              Kostenloses Erstgespräch für Unternehmen in Dinslaken, Duisburg und NRW. Wir besprechen, welche Formate und welcher Aufwand für dich Sinn machen.
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
