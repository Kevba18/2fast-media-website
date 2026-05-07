import AnimateOnScroll from "./AnimateOnScroll";

const pillars = [
  {
    number: "01",
    title: "Strategie & Website",
    items: [
      "Landingpages & Angebotsstruktur",
      "Kontaktführung & Conversion",
      "SEO-Basis & technische Struktur",
      "Funnel-Aufbau & Zielführung",
    ],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Video & Social Media",
    items: [
      "Reels & Kurzvideoformate",
      "Musikvideos & Künstlercontent",
      "Eventcontent & Kampagnen",
      "Instagram, TikTok, YouTube",
    ],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Reichweite & Wirkung",
    items: [
      "Sichtbarkeit aufbauen",
      "Echte Reichweite statt Likes",
      "Kampagnenergebnisse messen",
      "Reichweitendaten werden aktuell ergänzt",
    ],
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const platforms = [
  { name: "Instagram", color: "#E1306C" },
  { name: "TikTok", color: "#69C9D0" },
  { name: "YouTube", color: "#FF0000" },
  { name: "LinkedIn", color: "#0A66C2" },
  { name: "Spotify-Umfeld", color: "#1DB954" },
];

export default function JoelSection() {
  return (
    <section className="relative py-28 px-5 md:px-8 bg-[#050505] overflow-hidden">
      {/* Strong dark background with accent gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8400A]/60 to-transparent" />
        <div className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full bg-[#E8400A]/8 blur-[160px]" />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#E8400A]/6 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Badge */}
        <AnimateOnScroll>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8400A]/15 border border-[#E8400A]/30 text-xs font-bold text-[#E8400A] uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8400A] animate-pulse" />
              Kooperation
            </span>
            <span className="text-xs text-[#666] font-semibold tracking-widest uppercase">
              Website trifft Reichweite
            </span>
          </div>
        </AnimateOnScroll>

        {/* Headline */}
        <AnimateOnScroll delay={0.05}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold italic tracking-tight leading-[1.05] mb-6">
            Websites, die überzeugen.{" "}
            <br className="hidden md:block" />
            <span className="text-[#E8400A]">Content, der gesehen wird.</span>
          </h2>
          <p className="text-[#A0A0A0] text-base md:text-lg leading-relaxed max-w-3xl mb-16">
            2fastmedia verbindet strategische Websites, SEO-Struktur und KI-Prozesse mit Social
            Media Content, Video-Produktion und echter Sichtbarkeit. Zusammen mit Joel entsteht ein
            Angebot für Unternehmen, Künstler, Events und Marken, die online nicht nur gut aussehen,
            sondern Reichweite aufbauen wollen.
          </p>
        </AnimateOnScroll>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {pillars.map((p, i) => (
            <AnimateOnScroll key={p.number} delay={i * 0.1}>
              <div className="relative group h-full rounded-3xl bg-[#111] border border-white/5 p-7 hover:border-[#E8400A]/30 transition-all duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-5xl font-black italic text-[#E8400A]/12 leading-none select-none">
                    {p.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#E8400A]/10 border border-[#E8400A]/20 flex items-center justify-center text-[#E8400A] shrink-0">
                    {p.icon}
                  </div>
                </div>

                <h3 className="text-xl font-extrabold italic text-white mb-5">{p.title}</h3>
                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#888]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8400A]/60 shrink-0" />
                      {item === "Reichweitendaten werden aktuell ergänzt" ? (
                        <span className="italic text-[#555]">{item}</span>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Joel placeholder card */}
        <AnimateOnScroll delay={0.15}>
          <div className="rounded-3xl bg-[#111] border border-white/5 p-7 md:p-10 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#E8400A] mb-4">
                  Die Köpfe dahinter
                </p>
                <h3 className="text-3xl font-extrabold italic text-white mb-4">
                  Kevin & Joel
                </h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
                  Kevin bringt die digitale Strategie, Website-Struktur, SEO und KI-Prozesse.
                  Joel bringt die Kreativproduktion: Videos, Reels, Social-Media-Content und
                  das Gespür für Reichweite. Zusammen decken sie den kompletten digitalen
                  Auftritt ab – von der ersten Suche bis zur viralen Kampagne.
                </p>

                {/* Platforms */}
                <div className="flex flex-wrap gap-2">
                  {platforms.map((pl) => (
                    <span
                      key={pl.name}
                      className="px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-xs font-semibold text-[#D8D8D8]"
                    >
                      {pl.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Joel placeholder */}
              <div className="rounded-2xl bg-[#0A0A0A] border border-white/5 p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-[#E8400A]/8 border border-[#E8400A]/15 flex items-center justify-center mx-auto mb-4">
                  <svg width="36" height="36" fill="none" stroke="#E8400A" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-white mb-1">Joel</p>
                <p className="text-xs text-[#555]">Video & Social Media</p>
                <p className="text-xs text-[#444] mt-3 italic">
                  Foto & Referenzdaten werden ergänzt
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Stats placeholder */}
        <AnimateOnScroll delay={0.2}>
          <div className="rounded-3xl bg-[#0A0A0A] border border-white/5 p-7 md:p-10 mb-10">
            <p className="text-xs font-bold tracking-widest uppercase text-[#555] mb-6 text-center">
              Reichweitendaten werden aktuell ergänzt
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Views gesamt", value: "—" },
                { label: "Produzierte Videos", value: "—" },
                { label: "Aktive Kampagnen", value: "—" },
                { label: "Plattformen", value: "5+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-black italic text-[#E8400A]/60 mb-1">{stat.value}</p>
                  <p className="text-xs text-[#555] font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTAs */}
        <AnimateOnScroll delay={0.25} className="flex flex-wrap gap-4 justify-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#E8400A] text-white font-bold text-sm hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Social Media Projekt besprechen
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
              className="group-hover:translate-x-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <a
            href="/social-media-video-marketing"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/15 text-white font-semibold text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-200"
          >
            Mehr erfahren
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
