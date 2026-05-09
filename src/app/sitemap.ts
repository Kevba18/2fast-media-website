import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/seo-pages";
import { siteUrl } from "@/lib/site";

const staticRoutes = [
  "",
  "/projekte",
  "/website-check",
  "/leistungen/webdesign",
  "/leistungen/online-sichtbarkeit",
  "/leistungen/ki-integration",
  "/leistungen/grafik-branding",
  "/leistungen/video-content",
  "/social-media-video-marketing",
  "/kontakt",
  "/impressum",
  "/datenschutz",
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
