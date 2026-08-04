import type { Metadata } from "next";
import "./globals.css";
import ConsentProvider from "@/components/ConsentProvider";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "2fastmedia | Weniger digitale Baustellen. Mehr Zeit.",
  description:
    "2fastmedia macht digitale Arbeit für Unternehmen klarer, einfacher und professioneller — mit Websites, Inhalten und hilfreichen digitalen Abläufen.",
  keywords: [
    "Webdesign NRW",
    "Webdesign Duisburg",
    "SEO Ruhrgebiet",
    "KI-Integration NRW",
    "Webdesign Agentur NRW",
    "Google Sichtbarkeit",
    "2fastmedia",
    "Webentwicklung NRW",
  ],
  authors: [{ name: "2fastmedia", url: "https://2fastmedia.de" }],
  creator: "2fastmedia",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    title: "2fastmedia | Weniger digitale Baustellen. Mehr Zeit.",
    description:
      "Websites, Inhalte und digitale Abläufe, die Unternehmen spürbar entlasten.",
    siteName: "2fastmedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "2fastmedia | Weniger digitale Baustellen. Mehr Zeit.",
    description:
      "Websites, Inhalte und digitale Abläufe, die Unternehmen spürbar entlasten.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: {
    icon: "/logo/favicon-2fastmedia.jpg",
    apple: "/logo/favicon-2fastmedia.jpg",
  },
};

const schemaOrg = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "2fastmedia",
    url: siteUrl,
    email: "info@2fastmedia.de",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "2fastmedia",
    description:
      "Websites, Inhalte und digitale Abläufe für Unternehmen, die weniger digitale Baustellen und mehr Klarheit im Alltag wollen.",
    url: siteUrl,
    email: "info@2fastmedia.de",
    areaServed: ["Dinslaken", "Duisburg", "Wesel", "Oberhausen", "Voerde", "Hünxe", "Ruhrgebiet", "NRW"],
    serviceType: ["Webdesign", "SEO", "KI Integration", "Branding", "Content"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "2fastmedia",
    url: siteUrl,
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen bg-[#0D0D0D] text-white antialiased">
        {children}
        <ConsentProvider />
      </body>
    </html>
  );
}
