"use client";

import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";

export default function Hero() {
  useEffect(() => {
    return renderCanvas("hero-canvas");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-5 md:px-8 pt-20">
      <canvas
        id="hero-canvas"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#E8400A]/6 blur-[160px] glow-pulse" />
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8400A]/4 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 py-24">
        <div className="flex flex-col justify-center">
          <div className="hero-anim hero-delay-50 inline-flex items-center gap-2 mb-7 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-[#E8400A]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A0A0A0]">
              Websites · Sichtbarkeit · KI Prozesse
            </span>
          </div>

          <h1
            className="hero-anim hero-delay-150 text-[2.55rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold italic leading-[1.05] tracking-tight mb-7"
          >
            Websites, Sichtbarkeit und KI Prozesse für Unternehmen
          </h1>

          <p
            className="hero-anim hero-delay-250 text-base md:text-xl text-[#D8D8D8] leading-relaxed max-w-2xl mb-5"
          >
            2fastmedia entwickelt moderne Websites, stärkt die Sichtbarkeit bei
            Google und integriert digitale Prozesse, die im Alltag wirklich
            entlasten. Für Unternehmen in NRW und deutschlandweit.
          </p>

          <p
            className="hero-anim hero-delay-300 text-sm md:text-base text-[#A0A0A0] leading-relaxed max-w-2xl mb-10"
          >
            Mit Sitz in NRW unterstützt 2fastmedia Unternehmen aus dem Ruhrgebiet
            und deutschlandweit.
          </p>

          <div className="hero-anim hero-delay-360 flex flex-wrap gap-3 mb-10">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Kostenloses Erstgespräch anfragen
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform duration-150">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              Website prüfen lassen
            </a>
          </div>

          <div className="hero-anim hero-delay-440 grid grid-cols-3 gap-4 max-w-xl">
            {[
              ["Direkt", "mit dem Team sprechen"],
              ["Überregional", "NRW & deutschlandweit"],
              ["Klar", "Website, SEO, KI"],
            ].map(([value, label]) => (
              <div key={value} className="border-l border-[#E8400A]/40 pl-4">
                <p className="text-lg font-extrabold text-white">{value}</p>
                <p className="text-xs text-[#A0A0A0] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-anim-right hero-delay-300r relative hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#141414]/90 border border-white/8 p-6 shadow-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
              Fokus
            </p>
            <div className="space-y-4">
              {[
                "Website mit klarer Botschaft",
                "Lokale SEO Grundlagen",
                "Kontaktwege ohne Reibung",
                "Sinnvolle KI Prozesse",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[#1C1C1C] border border-white/5 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-[#E8400A]" />
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#E8400A]/25 bg-[#E8400A]/10 p-4">
              <p className="text-sm text-white font-bold">Nächster Schritt</p>
              <p className="text-xs text-[#A0A0A0] leading-relaxed mt-1">
                Kurzes Erstgespräch, klare Einschätzung, kein Druck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
