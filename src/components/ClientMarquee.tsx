import AnimateOnScroll from "./AnimateOnScroll";

const clients = [
  "impuls events",
  "Wir-machen-handwerk.de",
  "Carnetix",
  "Iron Mind",
  "AfS Akademie für Sicherheit",
  "HSR Bauunternehmen",
  "Fenja Flore",
  "Judoteam Voerde",
  "Helden Performance",
  "Blattwerk Hamminkeln",
  "SecureMesh",
  "Skool Festival",
  "Gesundheit im Gleichgewicht",
  "Kundenwerk24",
  "Mixed by Marcel Eich",
  "VersFinanz Konzept",
  "Rhino Solar",
  "Schwimmschule Wasserflitzer",
  "Die Sozialwerker",
  "Naturheilpraxis Petra Issel",
];

function MarqueeItem({ name }: { name: string }) {
  return (
    <div className="group flex items-center gap-4 px-8 py-2 shrink-0">
      {/* Dot separator */}
      <span className="w-1.5 h-1.5 rounded-full bg-[#E8400A]/40 group-hover:bg-[#E8400A] transition-colors duration-200" />
      <span className="text-sm font-semibold text-[#A0A0A0] group-hover:text-white transition-colors duration-200 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function ClientMarquee() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-20 border-y border-white/5 overflow-hidden bg-[#0D0D0D]">
      <AnimateOnScroll className="max-w-6xl mx-auto px-5 md:px-8 mb-10">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#A0A0A0]">
          Zufriedene Kunden
        </p>
      </AnimateOnScroll>

      {/* Marquee container */}
      <div className="marquee-wrapper relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {doubled.map((name, i) => (
            <MarqueeItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
