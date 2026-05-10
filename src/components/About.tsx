import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const points = [
  "Kleine Agentur mit klarer Verantwortung statt anonymer Großprozess",
  "Webdesign, SEO und KI werden zusammen gedacht",
  "Überregionaler Fokus mit Sitz in NRW",
  "Klare Umsetzung ohne unnötige Buzzwords",
];

export default function About() {
  return (
    <section id="warum" className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden bg-[#141414] border border-white/5 p-8 min-h-[420px] flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E8400A]/10 via-transparent to-transparent" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
                2fastmedia
              </p>
              <div className="w-24 h-24 rounded-3xl overflow-hidden border-2 border-[#E8400A]/25 mb-6">
                <Image
                  src="/pics/2fastmedia.png"
                  alt="2fastmedia Team"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-2xl font-extrabold italic text-white">2fastmedia</p>
              <p className="text-sm text-[#A0A0A0] mt-2">
                Kleine digitale Agentur mit Sitz in NRW
              </p>
            </div>
            <p className="relative text-sm text-[#A0A0A0] leading-relaxed">
              Keine anonyme Agentur. Klare Ansprechpartner, klare Umsetzung,
              sichtbare Ergebnisse.
            </p>
          </div>
        </AnimateOnScroll>

        <div>
          <AnimateOnScroll>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
              Warum 2fastmedia
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight mb-7 leading-tight">
              Strategie genug, um richtig zu bauen. Direkt genug, um schnell umzusetzen.
            </h2>
            <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed mb-8">
              Mit Sitz in NRW unterstützt 2fastmedia Unternehmen aus dem
              Ruhrgebiet und deutschlandweit dabei, online professioneller
              aufzutreten, besser gefunden zu werden und digitale Prozesse
              sinnvoll zu verbessern.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {points.map((point, i) => (
              <AnimateOnScroll key={point} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-[#141414] border border-white/5 p-5">
                  <span className="text-sm font-bold text-[#E8400A]">0{i + 1}</span>
                  <p className="mt-3 text-sm font-semibold text-white leading-relaxed">
                    {point}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={0.25}>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 text-white font-bold hover:text-[#E8400A] transition-colors duration-200"
            >
              Mehr Anfragen gewinnen
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform duration-150">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
