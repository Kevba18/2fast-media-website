import { services } from "@/lib/site";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Services() {
  return (
    <section id="leistungen" className="py-28 px-5 md:px-8 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#E8400A] mb-4">
            Leistungen
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-extrabold italic tracking-tight max-w-xl">
              Alles, was dein digitaler Auftritt wirklich braucht
            </h2>
            <p className="text-[#A0A0A0] max-w-md text-sm md:text-base leading-relaxed">
              Webdesign, SEO, KI Integration, Branding und Content greifen
              ineinander. Du bekommst keine Einzelleistung ohne Blick aufs Ganze.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.08}>
              <a
                href={service.href}
                className={`group relative h-full p-7 rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col ${
                  i === 0
                    ? "bg-[#E8400A]/8 border-[#E8400A]/25 hover:border-[#E8400A]/50"
                    : "bg-[#1C1C1C] border-white/5 hover:border-[#E8400A]/20"
                }`}
              >
                {i === 0 && <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E8400A]" />}
                <p className="text-xs font-bold text-[#E8400A] mb-4">0{i + 1}</p>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#E8400A]">
                  Mehr erfahren
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll className="mt-12 text-center">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E8400A] text-white font-bold hover:bg-[#FF5520] transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Projekt besprechen
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
