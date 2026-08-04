import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { formatPostDate, getAllPosts, reader } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | 2fastmedia Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage],
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    notFound();
  }

  const content = await post.content();

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0D0D0D] pt-28 text-white">
        <article className="mx-auto w-full max-w-4xl px-6 pb-20 sm:px-8 lg:px-10">
          <header>
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/58">
              <span className="rounded-full border border-[#E8400A]/40 bg-[#E8400A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#E8400A]">
                {post.category}
              </span>
              <time dateTime={post.publishDate}>
                {formatPostDate(post.publishDate)}
              </time>
              <span>{post.author}</span>
            </div>
            <h1 className="mt-7 text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/68">
              {post.description}
            </p>
          </header>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg bg-[#1C1C1C]">
            <Image
              src={post.coverImage}
              alt={`${post.title} Cover`}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-12 space-y-7 text-lg leading-8 text-white/74 [&_a]:text-[#E8400A] [&_a]:underline [&_blockquote]:border-l-2 [&_blockquote]:border-[#E8400A] [&_blockquote]:pl-5 [&_h2]:pt-6 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:pt-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-white [&_img]:rounded-lg [&_li]:ml-5 [&_ol]:list-decimal [&_p]:text-white/74 [&_strong]:text-white [&_ul]:list-disc">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
