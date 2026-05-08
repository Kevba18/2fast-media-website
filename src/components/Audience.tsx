import AnimateOnScroll from "./AnimateOnScroll";

const fits = [
  "Lokale Dienstleister und Handwerksbetriebe",
  "Praxen, Studios und beratende Unternehmen",
  "Selbstständige mit erklärungsbedürftiger Leistung",
  "Unternehmen, die Website, SEO und KI zusammen verbessern wollen",
];

const notFits = [
  "Wenn nur ein beliebiges Template ohne Strategie gesucht wird",
  "Wenn Referenzen oder Ergebnisse erfunden werden sollen",
  "Wenn kurzfristige Ranking-Garantien erwartet werden",
];

export default function Audience() {
  return (
    <section id="fuer-wen" className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-14 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Für wen es passt
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Für Unternehmen, die online ernst genommen werden wollen
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <AnimateOnScroll>
            <div className="rounded-3xl bg-[#141414] border border-[#E8400A]/20 p-7 h-full">
              <h3 className="text-xl font-bold text-white mb-5">Passt gut, wenn du...</h3>
              <div className="space-y-3">
                {fits.map((item) => (
                  <p key={item} className="flex gap-3 text-sm text-[#D8D8D8] leading-relaxed">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#E8400A] shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <div className="rounded-3xl bg-[#141414] border border-white/5 p-7 h-full">
              <h3 className="text-xl font-bold text-white mb-5">Eher nicht passend, wenn...</h3>
              <div className="space-y-3">
                {notFits.map((item) => (
                  <p key={item} className="flex gap-3 text-sm text-[#A0A0A0] leading-relaxed">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white/25 shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
