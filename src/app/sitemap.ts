import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo-pages";
import { siteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/leistungen/webdesign",
  "/leistungen/online-sichtbarkeit",
  "/leistungen/ki-integration",
  "/leistungen/grafik-branding",
  "/leistungen/video-content",
  // Social Media & Video Kooperationsseite (Freigabe durch Kevin erforderlich)
  "/social-media-video-marketing",
  // SEO-Unterseiten – geplant, noch nicht alle aktiv
  // "/webdesign-nrw",
  // "/website-relaunch",
  // "/seo-lokale-unternehmen",
  // "/ki-integration-unternehmen",
  // "/landingpages-kampagnen",
  // "/branding-grafikdesign",
  // "/content-erstellung",
  // "/webdesign-handwerker",
  // "/webdesign-dienstleister",
  // "/webdesign-praxen-studios",
  // "/referenzen",
  // "/website-check",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...seoPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
