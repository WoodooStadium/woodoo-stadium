/**
 * One-time export: pull all published blog posts from Supabase
 * and write each as content/blog/{lang}/{slug}.mdx
 *
 * Run from project root: node scripts/export-blog.mjs
 * Safe: read-only from Supabase. Does NOT modify the blog_posts table.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "../node_modules/@supabase/supabase-js/dist/index.cjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// ── Read env ──────────────────────────────────────────────────────────────────
const envRaw = fs.readFileSync(path.join(root, ".env.local"), "utf8");
const env = Object.fromEntries(
  envRaw
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  { auth: { persistSession: false } }
);

// ── Unambiguous EN↔DA slug pairs ──────────────────────────────────────────────
// Only pairs that are genuinely unambiguous from title/topic matching.
const DA_TO_EN = {
  "hvad-er-et-bordfodboldbord":      "what-is-a-foosball-table",
  "udendoers-bordfodboldbord-guide":  "outdoor-foosball-table-buying-guide",
  "luksus-bordfodboldbord":           "luxury-foosball-table",
  "bordfodboldbord-lavet-i-danmark":  "foosball-table-made-in-denmark",
  "hvem-opfandt-bordfodbold":         "who-invented-foosball-history",
  "regler-bordfodbold":               "foosball-rules-official-guide",
  "udendoers-bordfodbold-hele-aaret": "outdoor-table-football-year-round",
  "bordfodboldbord-kontor":           "foosball-table-for-office",
  "bordfodbold-med-logo-branded":     "branded-foosball-table",
};
// Build reverse map
const EN_TO_DA = Object.fromEntries(
  Object.entries(DA_TO_EN).map(([da, en]) => [en, da])
);

// ── YAML helpers ──────────────────────────────────────────────────────────────
function yamlScalar(value) {
  if (value === null || value === undefined) return "null";
  const s = String(value);
  // Quote strings that contain YAML-special characters
  if (/[:#\[\]{}&*!|>'"%@`]/.test(s) || s.includes("\n") || s.trim() !== s) {
    return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return s;
}

function yamlArray(arr) {
  if (!arr || arr.length === 0) return "[]";
  return `[${arr.map((v) => yamlScalar(v)).join(", ")}]`;
}

// ── Build frontmatter string ──────────────────────────────────────────────────
function buildFrontmatter(post, lang) {
  const altSlug =
    lang === "da"
      ? (DA_TO_EN[post.slug] ?? null)
      : (EN_TO_DA[post.slug] ?? null);

  const lines = [
    `title: ${yamlScalar(post.title)}`,
    `excerpt: ${yamlScalar(post.excerpt)}`,
    `featuredImage: ${yamlScalar(post.featured_image)}`,
    `author: ${yamlScalar(post.author)}`,
    `publishedAt: ${yamlScalar(post.published_at)}`,
    `metaTitle: ${yamlScalar(post.meta_title)}`,
    `metaDescription: ${yamlScalar(post.meta_description)}`,
    `focusKeyword: ${yamlScalar(post.focus_keyword)}`,
    `tags: ${yamlArray(post.tags)}`,
    `alternateSlug: ${yamlScalar(altSlug)}`,
  ];

  return `---\n${lines.join("\n")}\n---\n`;
}

// ── Fetch and write ───────────────────────────────────────────────────────────
async function exportLanguage(lang) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("language", lang)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error(`[${lang}] Supabase error:`, error.message);
    process.exit(1);
  }

  const dir = path.join(root, "content", "blog", lang);
  fs.mkdirSync(dir, { recursive: true });

  for (const post of data) {
    const frontmatter = buildFrontmatter(post, lang);
    const body = (post.body ?? "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const content = frontmatter + "\n" + body + "\n";
    const outPath = path.join(dir, `${post.slug}.mdx`);
    fs.writeFileSync(outPath, content, "utf8");
    console.log(`[${lang}] ✓ ${post.slug}.mdx`);
  }

  return data.length;
}

const enCount = await exportLanguage("en");
const daCount = await exportLanguage("da");
console.log(`\nExport complete: ${enCount} EN + ${daCount} DA = ${enCount + daCount} total posts.`);
