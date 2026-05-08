import type { Metadata } from "next";
import SeoLandingPage from "@/components/SeoLandingPage";
import { seoPages } from "@/lib/seo-pages";
import { siteUrl } from "@/lib/site";

const page = seoPages.find((item) => item.slug === "ki-beratung-dinslaken")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: `${siteUrl}/${page.slug}` },
  openGraph: { title: page.title, description: page.description, url: `${siteUrl}/${page.slug}` },
};

export default function Page() {
  return <SeoLandingPage page={page} />;
}
