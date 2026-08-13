import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export interface PostFrontmatter {
  title: string;
  excerpt: string | null;
  featuredImage: string | null;
  author: string | null;
  publishedAt: string | null;
  metaTitle: string | null;
  metaDescription: string | null;
  focusKeyword: string | null;
  tags: string[];
  alternateSlug: string | null;
}

export interface PostSummary extends PostFrontmatter {
  slug: string;
  lang: "en" | "da";
}

export interface Post extends PostSummary {
  contentHtml: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function langDir(lang: "en" | "da") {
  return path.join(CONTENT_DIR, lang);
}

// Shift heading levels so body # → h2, ## → h3, ### → h4.
// Title is the page's h1 — body headings must not compete at h1.
function shiftHeadings(md: string): string {
  return md.replace(/^(#{1,5})(?= )/gm, (_, h) =>
    "#".repeat(Math.min((h as string).length + 1, 6))
  );
}

function parseFrontmatter(data: Record<string, unknown>, slug: string, lang: "en" | "da"): PostSummary {
  return {
    slug,
    lang,
    title: (data.title as string) ?? "",
    excerpt: (data.excerpt as string) ?? null,
    featuredImage: (data.featuredImage as string) ?? null,
    author: (data.author as string) ?? null,
    publishedAt: (data.publishedAt as string) ?? null,
    metaTitle: (data.metaTitle as string) ?? null,
    metaDescription: (data.metaDescription as string) ?? null,
    focusKeyword: (data.focusKeyword as string) ?? null,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    alternateSlug: (data.alternateSlug as string) ?? null,
  };
}

export function getAllPostSlugs(lang: "en" | "da"): string[] {
  const dir = langDir(lang);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPostSummaries(lang: "en" | "da"): PostSummary[] {
  return getAllPostSlugs(lang)
    .map((slug) => {
      const raw = fs.readFileSync(path.join(langDir(lang), `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return parseFrontmatter(data as Record<string, unknown>, slug, lang);
    })
    .sort((a, b) => {
      if (!a.publishedAt && !b.publishedAt) return 0;
      if (!a.publishedAt) return 1;
      if (!b.publishedAt) return -1;
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
}

export async function getPostBySlug(
  slug: string,
  lang: "en" | "da"
): Promise<Post | null> {
  const filePath = path.join(langDir(lang), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(shiftHeadings(content));

  return {
    ...parseFrontmatter(data as Record<string, unknown>, slug, lang),
    contentHtml: processed.toString(),
  };
}
