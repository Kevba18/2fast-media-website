import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

export const reader = createReader(process.cwd(), keystaticConfig);

export type BlogPost = Awaited<
  ReturnType<typeof reader.collections.posts.all>
>[number];

const dateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function formatPostDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00`));
}

export async function getAllPosts() {
  const posts = await reader.collections.posts.all();

  return posts.sort((a, b) => {
    return (
      new Date(b.entry.publishDate).getTime() -
      new Date(a.entry.publishDate).getTime()
    );
  });
}
