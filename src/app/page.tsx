import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProblemSolution from "@/components/ProblemSolution";
import WebsiteCheck from "@/components/WebsiteCheck";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import KevinSection from "@/components/KevinSection";
import Process from "@/components/Process";
import JoelSection from "@/components/JoelSection";
import Audience from "@/components/Audience";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";
import { homeFaqs } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Vertrauen / Website entscheidet (NEU) */}
        <TrustSection />

        {/* 3. Problem / Warum gute Arbeit allein nicht reicht */}
        <ProblemSolution />

        {/* 4. Interaktiver Website-Check (NEU) */}
        <WebsiteCheck />

        {/* 5. Leistungen */}
        <Services />

        {/* 6. Vorher-Nachher (NEU) */}
        <BeforeAfter />

        {/* 7. Kevin persönlicher Bereich (NEU – ersetzt generische About-Sektion) */}
        <KevinSection />

        {/* 8. Ablauf / Prozess */}
        <Process />

        {/* 9. Joel & Social Media – dunkle Highlight-Sektion (NEU) */}
        <JoelSection />

        {/* 10. Für wen ist das Angebot */}
        <Audience />

        {/* 11. Referenzen & Case Studies */}
        <Projects />

        {/* 12. FAQ */}
        <FAQ />

        {/* 13. Kontakt – erweitertes Projektstart-Formular (NEU) */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
