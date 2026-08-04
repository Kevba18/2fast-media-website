import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | 2fastmedia",
  description:
    "Impulse zu Websites, Online Sichtbarkeit, Content und KI-Prozessen von 2fastmedia.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0D0D0D] pt-28 text-white">
        <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E8400A]">
              Blog
            </p>
            <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              Gedanken für bessere Websites, Sichtbarkeit und digitale Abläufe.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Praktische Einblicke aus Projekten, Strategie und Umsetzung.
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {posts.map(({ slug, entry }) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="group overflow-hidden rounded-lg border border-white/10 bg-[#141414] transition duration-300 hover:-translate-y-1 hover:border-[#E8400A]/70 hover:bg-[#181818]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1C1C]">
                    <Image
                      src={entry.coverImage}
                      alt=""
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full border border-[#E8400A]/40 bg-[#0D0D0D]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#E8400A] backdrop-blur">
                      {entry.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <time
                      dateTime={entry.publishDate}
                      className="text-sm text-white/52"
                    >
                      {formatPostDate(entry.publishDate)}
                    </time>
                    <h2 className="mt-3 text-2xl font-semibold tracking-normal text-white transition group-hover:text-[#E8400A]">
                      {entry.title}
                    </h2>
                    <p className="mt-4 line-clamp-3 text-base leading-7 text-white/64">
                      {entry.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="mt-14 rounded-lg border border-white/10 bg-[#141414] p-8 text-white/68">
              Noch keine Blogartikel vorhanden.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
