import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllPostSummaries } from "@/lib/blog-mdx";

export const metadata: Metadata = {
  title: "Atelier Journalen | Woodoo Stadium",
  description: "Nyheder fra Woodoo Stadium værkstedet og historier fra produktionen af Stadium 11–11.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/blog",
    languages: { en: "https://woodoo-stadium.com/blog" },
  },
};

function formatDate(date: string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("da-DK", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

export default function DaBlogPage() {
  const posts = getAllPostSummaries("da");

  return (
    <>
      <section className="section section--alt">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">Atelier Journal</span>
          <h1 className="h1">Atelier Journal</h1>
          <p className="lead">Noter fra værkstedet. Fire gange om året, sommetider mere.</p>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="section section--no-top">
          <div className="fade-up" style={{ maxWidth: "60ch", margin: "0 auto" }}>
            <p className="body">Den første artikel er ved at blive skrevet. Kom tilbage snart.</p>
          </div>
        </section>
      ) : (
        <section className="section section--no-top">
          <div className="posts-grid fade-up" data-delay="1">
            {posts.map((post) => (
              <article className="post-card" key={post.slug}>
                {post.featuredImage ? (
                  <div className="post-image">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ) : null}
                <div style={{ padding: "32px" }}>
                  {post.publishedAt ? <span className="caption">{formatDate(post.publishedAt)}</span> : null}
                  <h3>{post.title}</h3>
                  <p className="body">{post.excerpt ?? ""}</p>
                  <Link className="tlink" href={`/da/blog/${post.slug}`}>
                    Læs artiklen <span className="arrow">→</span>
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
