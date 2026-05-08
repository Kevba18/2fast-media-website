import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Social Media & Video Marketing | 2fastmedia",
  description:
    "Professionelle Videoproduktion, Social-Media-Content und Reichweitenaufbau für Unternehmen, Künstler und Events – von der Strategie bis zur Umsetzung.",
  alternates: { canonical: `${siteUrl}/social-media-video-marketing` },
  openGraph: {
    title: "Social Media & Video Marketing | 2fastmedia",
    description:
      "Professionelle Videoproduktion, Social-Media-Content und Reichweitenaufbau für Unternehmen, Künstler und Events – von der Strategie bis zur Umsetzung.",
    url: `${siteUrl}/social-media-video-marketing`,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
