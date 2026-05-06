import AnimateOnScroll from "./AnimateOnScroll";

const testimonials = [
  {
    quote:
      "Kevin hat unsere Website von Grund auf neu gebaut – nicht nur optisch, sondern strategisch. Seit dem Launch kommen Anfragen rein, ohne dass wir aktiv akquirieren müssen.",
    name: "Markus R.",
    company: "Handwerksbetrieb, Dinslaken",
    initial: "M",
  },
  {
    quote:
      "Endlich jemand der nicht nur redet, sondern auch umsetzt. Das Ergebnis war in kurzer Zeit sichtbar – mehr Google-Sichtbarkeit, mehr Anrufe. Ich kann 2fast Media nur empfehlen.",
    name: "Sandra K.",
    company: "Gesundheitspraxis, NRW",
    initial: "S",
  },
  {
    quote:
      "Ich war skeptisch ob sich eine neue Website lohnt. Nach drei Monaten hatte ich das Doppelte an Anfragen. Kevin hat genau gewusst was er tut und es schnell umgesetzt.",
    name: "Thomas B.",
    company: "B2B Dienstleister, Duisburg",
    initial: "T",
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#E8400A">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="py-28 px-5 md:px-8 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-16 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Was Kunden sagen
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight">
            Echte <span className="text-[#E8400A]">Ergebnisse</span>,
            <br />echte Stimmen
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 0.1}>
              <div className="flex flex-col h-full p-7 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#E8400A]/15 transition-all duration-300">
                {/* Quote mark */}
                <div className="text-5xl font-black text-[#E8400A]/20 leading-none mb-4 select-none">
                  &ldquo;
                </div>

                <Stars />

                <p className="text-sm text-white/75 leading-relaxed mt-4 flex-1 italic">
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-[#E8400A]/15 border border-[#E8400A]/25 flex items-center justify-center text-sm font-black text-[#E8400A]">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-[#A0A0A0]">{t.company}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
