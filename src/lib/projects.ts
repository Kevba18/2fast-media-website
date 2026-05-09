export type Project = {
  title: string;
  url: string | null;
  category: string;
  description: string;
  tags: string[];
  image: string;
  status: "Live Projekt" | "Projektvorschau" | "Konzeptansicht";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Wir machen Handwerk",
    url: "https://wir-machen-handwerk.de",
    category: "Webdesign · Portal Konzept · B2B Website",
    description:
      "Moderner B2B-Auftritt für Hausverwaltungen und Versicherungen mit digitaler Schadenmeldung und strukturierter Auftragsabwicklung.",
    tags: ["Webdesign", "Portal Konzept", "B2B", "UX Struktur", "Conversion"],
    image: "/projects/wir_machen_handwerk_website_hero.png",
    status: "Live Projekt",
    featured: true,
  },
  {
    title: "Chapter Zero Studios",
    url: null,
    category: "Branding · Webdesign · Creative Direction",
    description:
      "Dunkler, cinematic Webauftritt mit starker Typografie, rotem Akzent und klarem Fokus auf Videografie, Artists und Brands.",
    tags: ["Webdesign", "Brand Look", "Hero Konzept", "Responsive Struktur"],
    image: "/projects/chapter-zero-studios-website-hero.png",
    status: "Projektvorschau",
    featured: true,
  },
  {
    title: "WMH Portal",
    url: null,
    category: "App Design · Dashboard · UX · B2B System",
    description:
      "Digitales Portal zur strukturierten Verwaltung von Fällen, Partnern, Dokumenten und Prozessen für interne Teams.",
    tags: ["App Design", "Dashboard", "UX", "B2B Portal", "Dark UI"],
    image: "/projects/wir_machen_handwerk_portal_dashboard.png",
    status: "Konzeptansicht",
    featured: false,
  },
  {
    title: "KI fiziert",
    url: null,
    category: "Landingpage · Weiterbildungsmarketing · Conversion",
    description:
      "Landingpage für eine geförderte KI-Weiterbildung mit klarer Nutzenkommunikation, Förderhinweisen und starker Conversion-Führung.",
    tags: ["Landingpage", "Webdesign", "Conversion", "Weiterbildung", "UX Struktur"],
    image: "/projects/ki_fiziert_weiterbildung_landingpage.png",
    status: "Live Projekt",
    featured: false,
  },
  {
    title: "HSR Bauunternehmen",
    url: "https://hsr-bauunternehmen.de",
    category: "Webdesign · Handwerker Website · Lokale Dienstleistung",
    description:
      "Klarer Auftritt für Handwerksarbeiten in Duisburg: Trockenbau, Malerarbeiten, Innenausbau und Kellersanierung mit direkter Kontaktführung.",
    tags: ["Webdesign", "Handwerk", "Lokale Website", "Leistungsstruktur", "Duisburg"],
    image: "/projects/hsr_bauunternehmen_website_hero.png",
    status: "Live Projekt",
    featured: false,
  },
  {
    title: "Podologie Retreat",
    url: "https://podologen-retreat.de",
    category: "Landingpage · Retreat Website · Premium Design",
    description:
      "Emotionale Landingpage für ein exklusives Retreat mit hochwertiger Bildsprache, ruhiger Farbwelt und klarer Bewerbungsführung.",
    tags: ["Landingpage", "Premium Design", "Event", "Retreat", "Conversion"],
    image: "/projects/podologie_retreat_landingpage_hero.png",
    status: "Live Projekt",
    featured: false,
  },
  {
    title: "Der Eventbegleiter",
    url: "https://der-eventbegleiter.de",
    category: "Webdesign · Eventbranche · Dienstleister",
    description:
      "Professioneller Webauftritt für einen erfahrenen Eventbegleiter mit klarer Leistungsübersicht und direkter Kontaktführung.",
    tags: ["Webdesign", "Event", "Dienstleister", "Kontaktführung"],
    image: "/projects/der-eventbegleiter.png",
    status: "Live Projekt",
    featured: false,
  },
  {
    title: "2fast Media Events",
    url: "https://event.2fastmedia.de",
    category: "Landingpage · Eventmarketing · Conversion",
    description:
      "Gezielte Eventseite für 2fast Media mit klarem Fokus auf Anmeldung, Programm und Mehrwert für Teilnehmer.",
    tags: ["Landingpage", "Event", "Webdesign", "Conversion"],
    image: "/projects/impulse-events.png",
    status: "Live Projekt",
    featured: false,
  },
  {
    title: "Schwimmschule Wasserflitzer",
    url: "https://schwimmschule-wasserflitzer.de/",
    category: "Webdesign · Struktur · Lokale Sichtbarkeit",
    description:
      "Klarer Webauftritt für Kinderschwimmkurse im Ruhrgebiet. Fokus auf Vertrauen, einfacher Standortwahl und direkter Kursanfrage.",
    tags: ["Webdesign", "Lokale Sichtbarkeit", "Mobile Optimierung", "Kontaktführung"],
    image: "/projects/wasserflitzer-preview.jpeg",
    status: "Live Projekt",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
