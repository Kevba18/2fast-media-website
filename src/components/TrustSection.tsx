import AnimateOnScroll from "./AnimateOnScroll";

const cards = [
  {
    number: "01",
    title: "Vertrauen",
    question: "Sieht dein Unternehmen online so hochwertig aus, wie du wirklich arbeitest?",
    text: "Besucher entscheiden in wenigen Sekunden, ob dein Unternehmen professionell wirkt. Ein veraltetes oder unklares Design kostet Anfragen – bevor du überhaupt die Chance hattest zu überzeugen.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 2.786.956 5.35 2.548 7.373M20.4 6A11.956 11.956 0 0121 12c0 2.786-.956 5.35-2.548 7.373M12 21a9.97 9.97 0 01-3.498-.635M12 21a9.97 9.97 0 003.498-.635" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sichtbarkeit",
    question: "Wird dein Angebot bei Google klar genug verstanden?",
    text: "Wenn Suchmaschinen nicht verstehen, was du anbietest und für wen, wirst du schlicht nicht gefunden. Sichtbarkeit entsteht nicht durch Glück, sondern durch klare Struktur, Inhalte und technische Grundlagen.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12a9.75 9.75 0 01-9.75 9.75M2.25 12H21.75M2.25 12a11.129 11.129 0 014.899-9.107M2.25 12a11.129 11.129 0 004.899 9.107M21.75 12a11.13 11.13 0 00-4.899-9.107M21.75 12a11.13 11.13 0 01-4.899 9.107M12.75 2.252a9.75 9.75 0 010 19.496M11.25 2.252a9.75 9.75 0 000 19.496" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Anfrage",
    question: "Findet der Besucher schnell und ohne Reibung zum nächsten Schritt?",
    text: "Selbst überzeugte Besucher brechen ab, wenn der Weg zur Anfrage unklar ist. Ein sauberes Kontaktformular, klare Handlungsaufforderungen und keine unnötigen Hürden machen den Unterschied.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function TrustSection() {
  return (
    <section className="py-28 px-5 md:px-8 bg-[#141414] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/30 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#E8400A]/4 blur-[140px]" />

      <div className="max-w-6xl mx-auto relative">
        <AnimateOnScroll className="mb-16 max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-5">
            Die entscheidende Wahrheit
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight leading-tight mb-6">
            Deine Website entscheidet,{" "}
            <span className="text-[#E8400A]">bevor du überhaupt gesprochen hast</span>
          </h2>
          <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed max-w-2xl">
            Viele Unternehmen verlieren Anfragen nicht wegen schlechter Arbeit, sondern weil ihre
            Website nicht schnell genug Vertrauen aufbaut. Besucher vergleichen in Sekunden, ob
            das Unternehmen professionell wirkt, ob das Angebot klar ist und ob der nächste Schritt
            einfach ist.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <AnimateOnScroll key={card.number} delay={i * 0.1}>
              <div className="relative group h-full rounded-3xl bg-[#0D0D0D] border border-white/5 p-7 hover:border-[#E8400A]/25 transition-all duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black italic text-[#E8400A]/15 leading-none select-none">
                    {card.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#E8400A]/10 border border-[#E8400A]/20 flex items-center justify-center text-[#E8400A] shrink-0">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-extrabold italic text-white mb-3">{card.title}</h3>
                <p className="text-sm font-semibold text-[#E8400A]/80 mb-4 leading-relaxed">
                  {card.question}
                </p>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{card.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3} className="mt-12 text-center">
          <a
            href="#website-check"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Jetzt Website prüfen lassen
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
