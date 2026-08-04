export default function Hero() {
  return (
    <section className="relative min-h-[760px] flex items-center overflow-hidden px-5 pt-20 md:min-h-screen md:px-8">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-[#E8400A]/[0.07] blur-[160px]" />
        <div className="absolute bottom-0 right-[-10%] h-[500px] w-[500px] rounded-full bg-[#E8400A]/[0.04] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 py-24 lg:grid-cols-[1fr_420px] lg:gap-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 mb-7 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-[#E8400A]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#A0A0A0]">
              Digitale Entlastung für Unternehmen
            </span>
          </div>

          <h1
            className="text-[2.55rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold italic leading-[1.05] tracking-tight mb-7"
          >
            Weniger digitale
            <br />
            Baustellen. Mehr Zeit
            <br className="hidden sm:block" /> für dein Unternehmen.
          </h1>

          <p
            className="text-base md:text-xl text-[#D8D8D8] leading-relaxed max-w-2xl mb-5"
          >
            Wir machen digitale Arbeit klarer, einfacher und professioneller —
            vom Auftritt, der dein Unternehmen verständlich zeigt, bis zu
            Abläufen, die dir wiederkehrende Arbeit abnehmen.
          </p>

          <p
            className="text-sm md:text-base text-[#A0A0A0] leading-relaxed max-w-2xl mb-10"
          >
            Für Unternehmen, die nicht noch ein Technikprojekt managen wollen.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Projekt besprechen
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform duration-150">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#wirkung"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              So entsteht Entlastung
            </a>
          </div>

          <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              ["Klar", "eine Richtung statt zehn Tools"],
              ["Umsetzbar", "kein Konzept, das liegen bleibt"],
              ["Persönlich", "ein Ansprechpartner, ein Plan"],
            ].map(([value, label]) => (
              <div key={value} className="border-l border-[#E8400A]/40 pl-4 sm:min-h-16">
                <p className="text-lg font-extrabold text-white">{value}</p>
                <p className="text-xs text-[#A0A0A0] mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm rounded-3xl border border-white/8 bg-[#141414]/95 p-6 shadow-2xl">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A]">
                  Vom Aufwand zum Ablauf
                </p>
                <p className="mt-1 text-sm text-[#A0A0A0]">Digitale Arbeit, die mitdenkt.</p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8400A]/25 bg-[#E8400A]/10 text-[#E8400A]">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                </svg>
              </span>
            </div>
            <div className="space-y-3">
              {[
                ["01", "Unklare Website", "Klarer Auftritt"],
                ["02", "Manuelle Routine", "Einfacher Ablauf"],
                ["03", "Tool-Chaos", "System, das zusammenarbeitet"],
              ].map(([number, before, after]) => (
                <div key={number} className="rounded-2xl border border-white/5 bg-[#1C1C1C] p-4">
                  <div className="mb-3 flex items-center justify-between text-[10px] font-bold tracking-widest text-[#666]">
                    <span>{number}</span>
                    <span className="text-[#E8400A]">NEU GEDACHT</span>
                  </div>
                  <p className="text-xs text-[#777] line-through decoration-[#E8400A]/60">{before}</p>
                  <div className="my-2 h-px bg-white/5" />
                  <p className="text-sm font-semibold text-white">{after}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#E8400A]/20 bg-[#E8400A]/[0.08] px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-[#E8400A]" />
              <p className="text-sm font-semibold text-white">Mehr Klarheit im Tagesgeschäft</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
