import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/supabase-types";
import { getBlogPosts } from "@/lib/db";

export const metadata: Metadata = {
  title: "Atelier Journal | WooDoo Stadium",
  description: "Notes from the WooDoo Stadium workshop and stories from the production of the Stadium 11–11.",
};

function formatDate(date: string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

export default async function BlogPage() {
  const response = (await getBlogPosts()) as { data: BlogPost[] | null; error: unknown };
  const posts = response.data?.filter((post) => post.status === "published") ?? [];

  return (
    <>
      <section className="section section--alt">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">Atelier Journal</span>
          <h1 className="h1">Atelier Journal</h1>
          <p className="lead">Notes from the workshop. Four times a year, sometimes more.</p>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="section section--no-top">
          <div className="fade-up" style={{ maxWidth: "60ch", margin: "0 auto" }}>
            <p className="body">The first entry is being written. Check back soon.</p>
          </div>
        </section>
      ) : (
        <section className="section section--no-top">
          <div className="posts-grid fade-up" data-delay="1">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                {post.featured_image ? (
                  <div className="post-image">
                    <Image
                      src={post.featured_image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ) : null}
                <div style={{ padding: "32px" }}>
                  <span className="caption">{formatDate(post.published_at)} · {post.language?.toUpperCase()}</span>
                  <h3>{post.title}</h3>
                  <p className="body">{post.excerpt ?? post.body.slice(0, 140) + "..."}</p>
                  <Link className="tlink" href={`/blog/${post.slug}`}>
                    Read the article <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
