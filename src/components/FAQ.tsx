"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    question: "Was kostet eine Website?",
    answer:
      "Das hängt vom Umfang ab. Eine professionelle Landingpage oder Unternehmensseite startet ab ca. 1.500 €. Komplexere Projekte mit Online-Shop, Buchungssystem oder individuellen Funktionen sind entsprechend mehr. Im ersten Gespräch bekommst du immer eine ehrliche Einschätzung – kostenlos und unverbindlich.",
  },
  {
    question: "Wie lange dauert ein Website-Projekt?",
    answer:
      "Eine einfache Unternehmensseite ist in der Regel in 2–4 Wochen fertig. Komplexere Projekte 4–8 Wochen. Ich arbeite schnell – der Name ist Programm. Was oft länger dauert: das Bereitstellen von Inhalten (Texte, Fotos) durch den Kunden. Wer liefert, bekommt schnell Ergebnisse.",
  },
  {
    question: "Macht ihr auch laufende Betreuung?",
    answer:
      "Ja. Ich biete monatliche Betreuungspakete an – von einfachem Hosting & Pflege bis zu aktivem SEO und Content-Marketing. So bleibt deine Website aktuell und deine Google-Sichtbarkeit wächst kontinuierlich.",
  },
  {
    question: "Ich bin kein Technik-Experte – ist das ein Problem?",
    answer:
      "Überhaupt nicht. Die meisten meiner Kunden haben keinen technischen Hintergrund. Ich erkläre alles verständlich, nehme dir den technischen Kram ab und übergebe dir am Ende eine Website die du selbst bedienen kannst – wenn du das möchtest.",
  },
  {
    question: "Warum 2fast Media und nicht eine große Agentur?",
    answer:
      "Weil du bei mir direkt mit dem Umsetzer sprichst. Keine langen Abstimmungsschleifen, kein Overhead, kein Junior-Entwickler der nach Feierabend deine Seite baut. Ich kenne den Mittelstand im Ruhrgebiet, ich lebe hier, ich verstehe deine Kunden. Und ich liefere schnell.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? "bg-[#1C1C1C] border-[#E8400A]/25"
          : "bg-[#141414] border-white/5 hover:border-white/10"
      }`}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        onClick={onClick}
      >
        <span className={`font-bold text-sm md:text-base transition-colors duration-150 ${isOpen ? "text-[#E8400A]" : "text-white"}`}>
          {question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
            isOpen
              ? "bg-[#E8400A] border-[#E8400A] text-white rotate-45"
              : "border-white/15 text-[#A0A0A0]"
          }`}
        >
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="px-6 pb-6 text-sm text-[#A0A0A0] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 px-5 md:px-8 bg-[#141414]">
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Häufige Fragen
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            FAQ
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 text-center">
          <p className="text-[#A0A0A0] text-sm mb-4">Noch eine Frage?</p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#E8400A] transition-colors"
          >
            Direkt fragen →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
