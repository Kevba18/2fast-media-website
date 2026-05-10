import Image from "next/image";

const references = [
  { name: "AfS – Akademie für Sicherheit", logo: "/references/akademie-fuer-sicherheit-afs-logo.webp", alt: "AfS – Akademie für Sicherheit Logo" },
  { name: "Blattwerk Hamminkeln", logo: "/references/blattwerk-hamminkeln-logo.png", alt: "Blattwerk Hamminkeln Logo" },
  { name: "Carnetix", logo: "/references/carnetix-logo.png", alt: "Carnetix Logo" },
  { name: "Die Sozialwerker®", logo: "/references/die-sozialwerker-logo.png", alt: "Die Sozialwerker Logo" },
  { name: "Fenja Flore", logo: "/references/fenja-flore-logo.png", alt: "Fenja Flore Logo" },
  { name: "Gesundheit im Gleichgewicht", logo: "/references/gesundheit-im-gleichgewicht-logo.png", alt: "Gesundheit im Gleichgewicht Logo" },
  { name: "Helden Performance by Sahar", logo: "/references/helden-performance-by-sahar-logo.png", alt: "Helden Performance by Sahar Logo" },
  { name: "HSR Bauunternehmen", logo: "/references/hsr-bauunternehmen-logo.png", alt: "HSR Bauunternehmen Logo" },
  { name: "Impuls Events", logo: "/references/impuls-events-logo.png", alt: "Impuls Events Logo" },
  { name: "Iron Mind – Performance for Leaders", logo: "/references/iron-mind-performance-for-leaders-logo.png", alt: "Iron Mind – Performance for Leaders Logo" },
  { name: "Judoteam Voerde", logo: "/references/judoteam-voerde-logo.png", alt: "Judoteam Voerde Logo" },
  { name: "Kundenwerk24", logo: "/references/kundenwerk24-logo.png", alt: "Kundenwerk24 Logo" },
  { name: "Mixed By", logo: "/references/mixed-by-logo.png", alt: "Mixed By Logo" },
  { name: "Naturheilpraxis Issel", logo: "/references/naturheilpraxis-issel-logo.png", alt: "Naturheilpraxis Issel Logo" },
  { name: "Schwimmschule Wasserflitzer", logo: "/references/schwimmschule-wasserflitzer-logo.png", alt: "Schwimmschule Wasserflitzer Logo" },
  { name: "SecureMesh", logo: "/references/securemesh-logo.png", alt: "SecureMesh Logo" },
  { name: "Skool Festival", logo: "/references/skool-festival-logo.png", alt: "Skool Festival Logo" },
  { name: "VersFinanz Konzept", logo: "/references/versfinanz-konzept-logo.png", alt: "VersFinanz Konzept Logo" },
  { name: "Wir machen Handwerk", logo: "/references/wir-machen-handwerk-logo.png", alt: "Wir machen Handwerk Logo" },
];

const firstRow = references.slice(0, 10);
const secondRow = references.slice(10);

function LogoItem({ reference }: { reference: (typeof references)[number] }) {
  return (
    <div className="relative mx-8 h-14 w-36 shrink-0 md:mx-10 md:h-16 md:w-44">
      <Image
        src={reference.logo}
        alt={reference.alt}
        fill
        sizes="176px"
        className="object-contain opacity-75 grayscale brightness-0 invert transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof references; reverse?: boolean }) {
  return (
    <div className="reference-marquee marquee-wrapper relative flex overflow-hidden py-5">
      <div className={`animate-marquee ${reverse ? "animate-marquee-reverse" : ""}`}>
        {[...items, ...items].map((reference, index) => (
          <LogoItem key={`${reference.name}-${index}`} reference={reference} />
        ))}
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <div className="relative overflow-hidden border-y border-white/8 bg-[#121212] py-2 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E8400A]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0D0D0D] to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0D0D0D] to-transparent md:w-32" />
      <MarqueeRow items={firstRow} />
      <MarqueeRow items={secondRow} reverse />
    </div>
  );
}
