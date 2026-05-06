import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "20+", label: "Kunden" },
  { value: "5★", label: "Bewertungen" },
  { value: "3", label: "Unternehmensbereiche" },
];

export default function About() {
  return (
    <section id="ueber-mich" className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – photo placeholder */}
          <AnimateOnScroll y={20}>
            <div className="relative">
              {/* Main image area */}
              <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] rounded-3xl overflow-hidden bg-[#141414] border border-white/5">
                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8400A]/10 via-[#1C1C1C] to-[#0D0D0D]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-[#E8400A]/15 border-2 border-[#E8400A]/25 flex items-center justify-center">
                    <span className="text-4xl font-black italic text-[#E8400A]">K</span>
                  </div>
                  <p className="text-[#A0A0A0] text-sm">Foto folgt</p>
                </div>

                {/* Orange side bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#E8400A]" />
              </div>

              {/* Location chip */}
              <div className="absolute -bottom-5 left-8 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1C1C1C] border border-white/10 shadow-xl">
                <span>📍</span>
                <span className="text-sm font-semibold text-white">Dinslaken, NRW</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right – text */}
          <div>
            <AnimateOnScroll>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
                Wer steckt dahinter
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight mb-8 leading-tight">
                Kein Agentur-Bullshit.{" "}
                <br />
                <span className="text-[#E8400A]">Nur Ergebnisse.</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <div className="space-y-4 text-[#A0A0A0] text-sm md:text-base leading-relaxed mb-8">
                <p>
                  Ich bin <strong className="text-white font-bold">Kevin</strong>,
                  Digitaldienstleister aus Dinslaken. Seit Jahren helfe ich
                  lokalen Unternehmen im Ruhrgebiet dabei, online sichtbar zu
                  werden – mit Websites die wirklich konvertieren, Google-Präsenz
                  die Kunden bringt und KI-Tools die den Alltag vereinfachen.
                </p>
                <p>
                  Du redest direkt mit mir.{" "}
                  <strong className="text-white">Kein Projektmanager dazwischen,
                  keine Praktikanten.</strong> Nur jemand der liefert.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Stats */}
            <AnimateOnScroll delay={0.2} className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl bg-[#141414] border border-white/5 text-center"
                >
                  <p className="text-2xl font-black text-[#E8400A] mb-1">{s.value}</p>
                  <p className="text-xs text-[#A0A0A0]">{s.label}</p>
                </div>
              ))}
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.3}>
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 text-white font-bold hover:text-[#E8400A] transition-colors duration-200"
              >
                Lass uns sprechen
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  className="group-hover:translate-x-1 transition-transform duration-150">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
