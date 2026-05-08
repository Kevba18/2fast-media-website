import { services } from "./site";

export type SeoPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  problem: string;
  solution: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "webdesign-dinslaken",
    title: "Webdesign Dinslaken | Websites für lokale Unternehmen",
    description:
      "Webdesign in Dinslaken für Unternehmen, Dienstleister und lokale Anbieter. Moderne Websites mit klarer Struktur, SEO Grundlagen und Fokus auf Anfragen.",
    h1: "Webdesign Dinslaken für Unternehmen, die online professionell auftreten wollen",
    intro:
      "Eine Website muss heute mehr leisten als gut aussehen. Sie muss erklären, Vertrauen schaffen, bei Google verstanden werden und den nächsten Schritt leicht machen.",
    problem:
      "Viele lokale Websites wirken veraltet, laden langsam oder erklären nicht klar genug, warum ein Kunde anfragen sollte. Das kostet Vertrauen und Sichtbarkeit.",
    solution:
      "2fastmedia entwickelt Websites mit sauberer Struktur, klaren Texten, moderner Gestaltung und technischen SEO Grundlagen. Direkt aus Dinslaken, ohne anonyme Agenturschleifen.",
    benefits: [
      "Klare Seitenstruktur für Besucher und Google",
      "Modernes Design im Look deines Unternehmens",
      "Mobile Darstellung für Smartphone und Tablet",
      "Kontaktwege, die schnell zur Anfrage führen",
    ],
    faqs: [
      {
        question: "Erstellt 2fastmedia Websites direkt in Dinslaken?",
        answer:
          "Ja. 2fastmedia sitzt in Dinslaken und unterstützt lokale Unternehmen aus Dinslaken und der Umgebung.",
      },
      {
        question: "Ist SEO bei einer neuen Website dabei?",
        answer:
          "Die technischen Grundlagen, Meta Daten und eine sinnvolle Struktur werden direkt mitgedacht.",
      },
    ],
  },
  {
    slug: "seo-dinslaken",
    title: "SEO Dinslaken | Google Sichtbarkeit für lokale Unternehmen",
    description:
      "SEO in Dinslaken für lokale Unternehmen: bessere Struktur, lokale Suchbegriffe, Inhalte, Meta Daten und technische Grundlagen für Google Sichtbarkeit.",
    h1: "SEO Dinslaken: besser gefunden werden, wenn Kunden suchen",
    intro:
      "Lokale SEO beginnt nicht mit Tricks, sondern mit einer Website, die Google und Menschen klar verstehen.",
    problem:
      "Wenn deine Website bei relevanten Suchbegriffen nicht auftaucht, gewinnen andere Anbieter die Anfragen. Oft liegt das an fehlender Struktur, schwachen Inhalten oder technischen Basics.",
    solution:
      "2fastmedia optimiert Seitenstruktur, Meta Daten, lokale Inhalte und technische Grundlagen, damit deine Leistungen in Dinslaken, Duisburg und Umgebung besser auffindbar werden.",
    benefits: [
      "Lokale Suchintentionen sauber abdecken",
      "Sprechende URLs und klare interne Verlinkung",
      "Meta Title und Description mit echtem Nutzen",
      "Vorbereitung für Search Console und Indexierung",
    ],
    faqs: [
      {
        question: "Kann SEO sofort Rankings garantieren?",
        answer:
          "Nein. Seriöse SEO verbessert die Grundlage und Chancen, aber Rankings hängen auch von Wettbewerb, Inhalt, Domain und Zeit ab.",
      },
      {
        question: "Ist lokale SEO für kleine Unternehmen sinnvoll?",
        answer:
          "Ja, besonders wenn Kunden regional suchen und deine Website klare Leistungen und Standorte kommuniziert.",
      },
    ],
  },
  {
    slug: "ki-beratung-dinslaken",
    title: "KI Beratung Dinslaken | KI Integration für Unternehmen",
    description:
      "KI Beratung und KI Integration in Dinslaken: sinnvolle Workflows, ChatGPT Prozesse und Automatisierungen für Unternehmen.",
    h1: "KI Beratung Dinslaken für sinnvolle Prozesse statt Spielerei",
    intro:
      "KI lohnt sich dann, wenn sie echte Arbeit abnimmt. Dafür braucht es klare Anwendungsfälle und eine Umsetzung, die in deinen Alltag passt.",
    problem:
      "Viele Unternehmen wissen, dass KI wichtig wird, aber nicht, wo sie anfangen sollen. Einzelne Tools bringen wenig, wenn sie nicht in bestehende Prozesse passen.",
    solution:
      "2fastmedia prüft wiederkehrende Aufgaben, entwickelt passende KI Workflows und richtet Prozesse ein, die verständlich und bedienbar bleiben.",
    benefits: [
      "Analyse sinnvoller KI Anwendungsfälle",
      "ChatGPT Prozesse für Texte, E-Mails und Wissen",
      "Automatisierungen für wiederkehrende Aufgaben",
      "Einrichtung und Einweisung ohne Fachchinesisch",
    ],
    faqs: [
      {
        question: "Brauche ich Vorwissen für KI Integration?",
        answer:
          "Nein. Ziel ist eine Lösung, die du im Alltag nutzen kannst, ohne selbst technisch tief einzusteigen.",
      },
      {
        question: "Welche Aufgaben kann KI übernehmen?",
        answer:
          "Zum Beispiel Entwürfe, Zusammenfassungen, E-Mail-Vorbereitung, interne Assistenten oder die Unterstützung wiederkehrender Abläufe.",
      },
    ],
  },
  {
    slug: "webdesign-duisburg",
    title: "Webdesigner Duisburg | Moderne Websites für Unternehmen",
    description:
      "Webdesigner für Duisburg und Umgebung: moderne Websites, Landingpages und SEO Grundlagen für lokale Unternehmen.",
    h1: "Webdesigner Duisburg für Websites, die Vertrauen und Anfragen bringen",
    intro:
      "Auch in Duisburg entscheiden viele Kunden online, ob sie Kontakt aufnehmen. Deine Website muss diesen Moment ernst nehmen.",
    problem:
      "Wenn Design, Inhalt und Kontaktführung nicht zusammenpassen, springen Besucher ab oder wählen den nächsten Anbieter.",
    solution:
      "2fastmedia erstellt Websites für Unternehmen aus Duisburg und der Region, die klar erklären, professionell wirken und auf Anfragen ausgelegt sind.",
    benefits: [
      "Strategische Startseiten und Landingpages",
      "Klarer Aufbau für lokale Dienstleistungen",
      "Design passend zu Marke und Zielgruppe",
      "Technische Grundlagen für Google",
    ],
    faqs: [
      {
        question: "Arbeitet 2fastmedia auch für Unternehmen aus Duisburg?",
        answer:
          "Ja. Duisburg gehört zum regionalen Fokus von 2fastmedia.",
      },
      {
        question: "Kann eine bestehende Website überarbeitet werden?",
        answer:
          "Ja. Je nach Zustand wird entschieden, ob ein Relaunch oder eine gezielte Optimierung sinnvoller ist.",
      },
    ],
  },
  {
    slug: "website-erstellen-lassen",
    title: "Website erstellen lassen | Moderne Website für dein Unternehmen",
    description:
      "Website erstellen lassen mit klarer Struktur, modernem Design, SEO Grundlagen und Fokus auf Kontaktanfragen. Direkt mit 2fastmedia sprechen.",
    h1: "Website erstellen lassen: klar, modern und auf Anfragen ausgelegt",
    intro:
      "Eine neue Website sollte nicht nur online sein. Sie sollte dein Angebot verständlich machen und Besuchern den Weg zur Anfrage erleichtern.",
    problem:
      "Viele Websites starten ohne klare Ziele. Dann entstehen schöne Seiten, die wenig erklären, kaum gefunden werden und keine Anfragen bringen.",
    solution:
      "2fastmedia verbindet Struktur, Text, Design, Technik und Conversion. So entsteht eine Website, die professionell wirkt und im Alltag nutzbar bleibt.",
    benefits: [
      "Klare Planung vor der Gestaltung",
      "Texte und Struktur mit Blick auf Suchintention",
      "Kontakt CTA an den richtigen Stellen",
      "Launch mit technischen SEO Grundlagen",
    ],
    faqs: [
      {
        question: "Wie lange dauert es, eine Website erstellen zu lassen?",
        answer:
          "Das hängt vom Umfang ab. Kleine Websites können oft in wenigen Wochen umgesetzt werden, wenn Inhalte und Entscheidungen zügig vorliegen.",
      },
      {
        question: "Kann ich später Inhalte ändern?",
        answer:
          "Das kann je nach Setup vorbereitet werden. Im Erstgespräch wird geklärt, wie viel du später selbst pflegen möchtest.",
      },
    ],
  },
];

export const seoPageServices = services.slice(0, 5);
