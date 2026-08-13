import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPostSlugs, getAllPostSummaries, getPostBySlug } from "@/lib/blog-mdx";

const BASE = "https://woodoo-stadium.com";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs("da").map((slug) => ({ slug }));
}

function formatDate(date: string | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("da-DK", { month: "long", day: "numeric", year: "numeric" }).format(new Date(date));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "da");
  if (!post) return { title: "Artikel ikke fundet | Woodoo Stadium" };

  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt ?? "Noter fra Woodoo Stadium værkstedet.",
    alternates: {
      canonical: `${BASE}/da/blog/${slug}`,
      ...(post.alternateSlug
        ? { languages: { en: `${BASE}/blog/${post.alternateSlug}` } }
        : {}),
    },
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt ?? "",
      images: post.featuredImage ? [{ url: post.featuredImage }] : [],
    },
  };
}

export default async function DaBlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "da");
  if (!post) notFound();

  const relatedPosts = getAllPostSummaries("da")
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt ?? post.metaDescription ?? "",
        author: { "@type": "Person", name: post.author ?? "Woodoo Stadium" },
        publisher: {
          "@type": "Organization",
          name: "Woodoo Stadium",
          url: BASE,
        },
        ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
        ...(post.featuredImage ? { image: post.featuredImage } : {}),
        url: `${BASE}/da/blog/${slug}`,
        inLanguage: "da",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Woodoo Stadium", item: BASE },
          { "@type": "ListItem", position: 2, name: "Journal", item: `${BASE}/da/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/da/blog/${slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <section className="section section--alt section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">Atelier Journal</span>
          <h1 className="h1 post-title">{post.title}</h1>
          {(post.publishedAt || post.author || post.tags.length > 0) && (
            <p className="caption">
              {[
                post.publishedAt ? formatDate(post.publishedAt) : null,
                post.author ?? "Woodoo",
                post.tags.length > 0 ? post.tags.join(", ") : null,
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
        </div>
      </section>

      {post.featuredImage ? (
        <section className="section section--no-top">
          <div className="photo fade-up" style={{ minHeight: "520px" }}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </section>
      ) : null}

      <section className="section section--no-top">
        <div
          className="fade-up markdown"
          style={{ maxWidth: "72ch", margin: "0 auto" }}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
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
                {related.featuredImage ? (
                  <div className="post-image">
                    <Image
                      src={related.featuredImage}
                      alt={related.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                  </div>
                ) : null}
                <div style={{ padding: "32px" }}>
                  {related.publishedAt ? <span className="caption">{formatDate(related.publishedAt)}</span> : null}
                  <h3>{related.title}</h3>
                  <p className="body">{related.excerpt ?? ""}</p>
                  <Link className="tlink" href={`/da/blog/${related.slug}`}>
                    Læs artiklen <span className="arrow">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
