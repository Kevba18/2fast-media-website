"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-5 md:px-8 pt-20">
      {/* Background: subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#E8400A]/6 blur-[160px] glow-pulse" />
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8400A]/4 blur-[140px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 py-24">
        {/* LEFT – Main content */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow badge */}
          <motion.div {...fadeUp(0.05)} className="inline-flex items-center gap-2 mb-7 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-[#E8400A]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A0A0A0]">
              Webdesign · SEO · KI · Dinslaken
            </span>
          </motion.div>

          {/* H1 – the hook */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-[2.75rem] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-extrabold italic leading-[1.05] tracking-tight mb-7"
          >
            Deine Website
            <br />
            kostet dich{" "}
            <span className="text-[#E8400A]">gerade Kunden.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-base md:text-lg text-[#A0A0A0] leading-relaxed max-w-xl mb-10"
          >
            2fast Media baut moderne Websites, sorgt für Google-Sichtbarkeit
            und integriert KI – für Unternehmen im Ruhrgebiet die online
            endlich{" "}
            <span className="text-white font-medium">gefunden werden wollen</span>.
          </motion.p>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.32)} className="flex flex-wrap gap-3 mb-10">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Projekt starten
              <svg
                width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                className="group-hover:translate-x-1 transition-transform duration-150"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#projekte"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              Projekte ansehen
            </a>
          </motion.div>

          {/* Social proof numbers */}
          <motion.div {...fadeUp(0.4)} className="flex items-center gap-8">
            <div>
              <p className="text-2xl font-extrabold text-white">20+</p>
              <p className="text-xs text-[#A0A0A0] mt-0.5">Zufriedene Kunden</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl font-extrabold text-white">5★</p>
              <p className="text-xs text-[#A0A0A0] mt-0.5">Bewertungen</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl font-extrabold text-white">100%</p>
              <p className="text-xs text-[#A0A0A0] mt-0.5">Direktkontakt</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT – Visual + floating card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Abstract blob / phone mockup background */}
          <div className="relative w-[380px] h-[420px]">
            {/* Glow backdrop */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#E8400A]/15 via-[#1C1C1C] to-[#141414] border border-white/5" />

            {/* Abstract decorative lines */}
            <div className="absolute inset-6 rounded-2xl border border-[#E8400A]/10" />
            <div className="absolute inset-12 rounded-xl border border-white/5" />

            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#E8400A]/15 border border-[#E8400A]/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="36" height="36" fill="none" stroke="#E8400A" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                </div>
                <p className="text-[#A0A0A0] text-sm font-medium">Deine neue Website</p>
                <p className="text-white font-bold mt-1">wartet auf dich.</p>
              </div>
            </div>

            {/* Floating stat: top-right */}
            <div className="absolute -top-4 -right-6 bg-[#141414] border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-xs text-[#A0A0A0] mb-1">Anfragen pro Monat</p>
              <p className="text-lg font-extrabold text-[#E8400A]">+180%</p>
            </div>

            {/* Floating stat: bottom-left */}
            <div className="absolute -bottom-4 -left-6 bg-[#141414] border border-white/10 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-xs text-[#A0A0A0] mb-1">Ladezeit</p>
              <p className="text-lg font-extrabold text-white">{"< 2s"}</p>
            </div>
          </div>

          {/* Floating testimonial card */}
          <div className="animate-float absolute -bottom-8 -right-4 w-64 bg-[#1C1C1C] border border-white/8 rounded-2xl p-4 shadow-2xl">
            {/* Stars */}
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="#E8400A">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-xs text-white/80 leading-relaxed italic mb-3">
              &ldquo;Endlich eine Website die wirklich Kunden bringt. Hätte ich früher machen sollen!&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#E8400A]/20 border border-[#E8400A]/30 flex items-center justify-center text-xs font-bold text-[#E8400A]">
                M
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Markus R.</p>
                <p className="text-[10px] text-[#A0A0A0]">Handwerksbetrieb, NRW</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] tracking-widest uppercase text-[#A0A0A0]/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="16" height="16" fill="none" stroke="#A0A0A0" strokeWidth="1.5" viewBox="0 0 24 24" className="opacity-40">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
