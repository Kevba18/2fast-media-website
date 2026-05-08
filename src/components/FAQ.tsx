"use client";

import { useState } from "react";
import { homeFaqs } from "@/lib/site";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-5 md:px-8 bg-[#141414]">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Häufige Fragen vor dem ersten Projekt
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#A0A0A0] md:text-base">
            Kurz beantwortet, damit du besser einschätzen kannst, ob 2fastmedia
            zu deinem Vorhaben passt.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-[#1C1C1C] overflow-hidden">
            {homeFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.03] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#E8400A] transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#E8400A]/10 border-[#E8400A]/25" : ""
                      }`}
                    >
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-relaxed text-[#A0A0A0]">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll className="mt-10 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#E8400A] transition-colors"
          >
            Kostenloses Erstgespräch anfragen →
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
