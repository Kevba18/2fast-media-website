import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kostenloser Website-Check | 2fastmedia",
  description:
    "Finde in 5 Schritten heraus, wie gut deine Website aufgestellt ist – und wo die größten Potenziale für mehr Sichtbarkeit und Anfragen liegen.",
  alternates: { canonical: `${siteUrl}/website-check` },
  openGraph: {
    title: "Kostenloser Website-Check | 2fastmedia",
    description:
      "Finde in 5 Schritten heraus, wie gut deine Website aufgestellt ist – und wo die größten Potenziale für mehr Sichtbarkeit und Anfragen liegen.",
    url: `${siteUrl}/website-check`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
