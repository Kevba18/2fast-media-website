import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt | 2fastmedia",
  description:
    "Kontaktiere 2fastmedia für Webdesign, SEO, KI-Integration, Branding und Content. Kostenloses Erstgespräch für Unternehmen in NRW und deutschlandweit.",
  alternates: { canonical: `${siteUrl}/kontakt` },
  openGraph: {
    title: "Kontakt | 2fastmedia",
    description:
      "Kostenloses Erstgespräch für moderne Websites, bessere Sichtbarkeit und sinnvolle KI-Prozesse.",
    url: `${siteUrl}/kontakt`,
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
