import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ConsentProvider from "@/components/ConsentProvider";
import { siteUrl } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2fastmedia | Websites, Sichtbarkeit und KI Prozesse",
  description:
    "2fastmedia entwickelt moderne Websites, stärkt Google Sichtbarkeit und integriert digitale Prozesse für Unternehmen in NRW und deutschlandweit.",
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
    title: "2fastmedia | Websites, Sichtbarkeit und KI Prozesse",
    description:
      "Moderne Websites, Google Sichtbarkeit und KI Prozesse für Unternehmen in NRW und deutschlandweit.",
    siteName: "2fastmedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "2fastmedia | Websites, Sichtbarkeit und KI Prozesse",
    description:
      "Moderne Websites, Google Sichtbarkeit und KI Prozesse für Unternehmen in NRW und deutschlandweit.",
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
      "Webdesign, SEO, Online Sichtbarkeit, KI Integration, Branding und Content für lokale Unternehmen.",
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
    <html lang="de" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen bg-[#0D0D0D] text-white antialiased">
        {children}
        <ConsentProvider />
      </body>
    </html>
  );
}
