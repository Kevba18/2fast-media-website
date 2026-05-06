import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webdesign & KI-Integration Dinslaken | 2fast Media",
  description:
    "2fast Media – Professionelles Webdesign, Online-Sichtbarkeit & KI-Integration für Unternehmen im Ruhrgebiet. Jetzt kostenloses Erstgespräch buchen.",
  keywords: [
    "Webdesign Dinslaken",
    "Webdesign Duisburg",
    "SEO Ruhrgebiet",
    "KI-Integration NRW",
    "Webdesign Agentur NRW",
    "Google Sichtbarkeit",
    "2fast Media",
    "Webentwicklung Dinslaken",
  ],
  authors: [{ name: "Kevin Balfanz", url: "https://2fastmedia.de" }],
  creator: "2fast Media",
  metadataBase: new URL("https://2fastmedia.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://2fastmedia.de",
    title: "Webdesign & KI-Integration Dinslaken | 2fast Media",
    description:
      "Professionelles Webdesign, Online-Sichtbarkeit & KI-Integration für Unternehmen im Ruhrgebiet.",
    siteName: "2fast Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign & KI-Integration Dinslaken | 2fast Media",
    description:
      "Professionelles Webdesign, Online-Sichtbarkeit & KI-Integration für Unternehmen im Ruhrgebiet.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://2fastmedia.de" },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "2fast Media",
  description:
    "Professionelles Webdesign, Online-Sichtbarkeit und KI-Integration für Unternehmen im Ruhrgebiet.",
  url: "https://2fastmedia.de",
  email: "info@2fastmedia.de",
  founder: { "@type": "Person", name: "Kevin Balfanz" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dinslaken",
    addressRegion: "NRW",
    addressCountry: "DE",
  },
  areaServed: ["Dinslaken", "Duisburg", "Ruhrgebiet", "NRW"],
  serviceType: ["Webdesign", "SEO", "KI-Integration", "Online-Marketing"],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen bg-[#0D0D0D] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
