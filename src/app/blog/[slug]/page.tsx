import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/supabase-types";
import { supabaseServerClient } from "@/lib/supabase";
import MarkdownRenderer from "@/components/MarkdownRenderer";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

async function getPost(slug: string) {
  const { data, error } = (await supabaseServerClient
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .single()) as { data: BlogPost | null; error: any };

  return { data, error };
}

async function getRelated(slug: string) {
  const { data } = (await supabaseServerClient
    .from("blog_posts")
    .select("*")
    .neq("slug", slug)
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .limit(3)) as { data: BlogPost[] | null; error: any };

  return data ?? [];
}

function formatDate(date: string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getPost(slug);
  if (!data) {
    return {
      title: "Post not found | Woodoo Stadium",
      description: "The requested blog post does not exist.",
    };
  }

  return {
    title: data.meta_title ?? data.title,
    description: data.meta_description ?? data.excerpt ?? "Notes from Woodoo Stadium workshop.",
    openGraph: {
      title: data.meta_title ?? data.title,
      description: data.meta_description ?? data.excerpt ?? "Notes from Woodoo Stadium workshop.",
      images: data.featured_image ? [{ url: data.featured_image }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const { data: post } = await getPost(slug);
  if (!post) notFound();

  const relatedPosts = await getRelated(slug);

  return (
    <>
      <section className="section section--alt section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">Atelier Journal</span>
          <h1 className="h1">{post.title}</h1>
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
            <span className="kicker">Related</span>
            <h2 className="h2">More from the journal.</h2>
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
                  <Link className="tlink" href={`/blog/${related.slug}`}>
                    Read the article <span className="arrow">→</span>
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
