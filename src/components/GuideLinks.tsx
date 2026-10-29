import Link from "next/link";
import { getAllPostSummaries } from "@/lib/blog-mdx";

type GuideTone = "dark" | "graphite" | "light";

interface GuideLinksProps {
  lang: "da" | "en";
  slugs: string[];
  // Match the background of the section directly above: dark #0B0A08, graphite #1A1814, light #F2EEE5.
  tone?: GuideTone;
}

const EXCERPT_MAX = 110;

// Cut at the last word boundary before the limit and add an ellipsis.
function truncate(text: string, max = EXCERPT_MAX): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max + 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : clean.slice(0, max)).replace(/[\s,.;:–—-]+$/, "")}…`;
}

// Hand-picked blog links for core pages. Title and excerpt come from the post frontmatter.
// Layout and hover colours live in globals.css (.guide-links).
export default function GuideLinks({ lang, slugs, tone = "dark" }: GuideLinksProps) {
  const summaries = new Map(getAllPostSummaries(lang).map((post) => [post.slug, post]));
  const posts = slugs.flatMap((slug) => {
    const post = summaries.get(slug);
    if (!post) {
      // Surfaces typos during `next build` / dev; skipped silently otherwise.
      if (process.env.NEXT_PHASE === "phase-production-build" || process.env.NODE_ENV !== "production") {
        console.warn(`[GuideLinks] Unknown ${lang} blog slug "${slug}" — skipped.`);
      }
      return [];
    }
    return [post];
  });

  if (posts.length === 0) return null;

  const base = lang === "da" ? "/da/blog" : "/blog";

  return (
    <section className={`guide-links guide-links--${tone}`}>
      <div className="guide-links__inner">
        <div className="guide-links__head">
          <span className="guide-links__kicker">Atelier Journal</span>
          <h2 className="guide-links__title">Guides</h2>
        </div>
        <ul className="guide-links__list">
          {posts.map((post) => (
            <li key={post.slug} className="guide-links__item">
              <h3 className="guide-links__name">
                <Link href={`${base}/${post.slug}`}>{post.title}</Link>
              </h3>
              {post.excerpt ? <p className="guide-links__excerpt">{truncate(post.excerpt)}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
