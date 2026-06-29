import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/supabase-types";
import { getBlogPostBySlugAndLanguage, getBlogPostsByLanguage } from "@/lib/db";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(date: string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("da-DK", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getBlogPostBySlugAndLanguage(slug, "da") as { data: BlogPost | null; error: any };
  if (!data) return { title: "Artikel ikke fundet | Woodoo Stadium" };

  return {
    title: data.meta_title ?? data.title,
    description: data.meta_description ?? data.excerpt ?? "Noter fra Woodoo Stadium værkstedet.",
    alternates: {
      canonical: `https://woodoo-stadium.com/da/blog/${slug}`,
      languages: { "en": `https://woodoo-stadium.com/blog/${slug}` },
    },
    openGraph: {
      title: data.meta_title ?? data.title,
      description: data.meta_description ?? data.excerpt ?? "",
      images: data.featured_image ? [{ url: data.featured_image }] : [],
    },
  };
}

export default async function DaBlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const { data: post } = await getBlogPostBySlugAndLanguage(slug, "da") as { data: BlogPost | null; error: any };
  if (!post) notFound();

  const response = await getBlogPostsByLanguage("da") as { data: BlogPost[] | null; error: any };
  const relatedPosts = (response.data ?? [])
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="section section--alt section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">Atelier Journal</span>
          <h1 className="h1 post-title">{post.title}</h1>
          <p className="caption">{formatDate(post.published_at)} · {post.author ?? "Woodoo"} · {(post.tags || []).join(", ")}</p>
        </div>
      </section>

      {post.featured_image ? (
        <section className="section section--no-top">
          <div className="photo fade-up" style={{ minHeight: "520px" }}>
            <Image
              src={post.featured_image}
              alt={post.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </section>
      ) : null}

      <section className="section section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <MarkdownRenderer content={post.body} />
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="section section--no-top">
          <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto 40px" }}>
            <span className="kicker">Relateret</span>
            <h2 className="h2">Mere fra journalen.</h2>
          </div>
          <div className="posts-grid fade-up" data-delay="1">
            {relatedPosts.map((related) => (
              <article className="post-card" key={related.slug}>
                {related.featured_image ? (
                  <div className="post-image">
                    <Image
                      src={related.featured_image}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ) : null}
                <div style={{ padding: "32px" }}>
                  <span className="caption">{formatDate(related.published_at)}</span>
                  <h3>{related.title}</h3>
                  <p className="body">{related.excerpt ?? related.body.slice(0, 140) + "..."}</p>
                  <Link className="tlink" href={`/da/blog/${related.slug}`}>
                    Læs artiklen <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}