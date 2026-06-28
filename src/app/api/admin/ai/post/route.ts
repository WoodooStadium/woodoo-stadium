import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const systemPrompt = `You are a copywriter for Woodoo Stadium — a Copenhagen atelier that handbuilds a single luxury foosball table called the Stadium 11-11. The brand voice is understated Nordic luxury: declarative sentences, no marketing adjectives, dry confidence. Think Bang & Olufsen meets Vipp. Write in English unless instructed otherwise.

Brand facts:
- The table is called the Stadium 11–11
- 732 individual components
- 130 engineering drawings
- 150 kilograms
- Brushed stainless steel 304
- Made in Copenhagen, Denmark
- Indoor and outdoor, all seasons
- One table, made to order
- Showroom in Ishøj, south of Copenhagen

Always return ONLY valid JSON. No explanation, no markdown code blocks, no surrounding text. Just the raw JSON object.`;

function extractJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

function normalizeTags(tags: unknown) {
  if (Array.isArray(tags)) {
    return tags.filter((tag) => typeof tag === "string").map((tag) => tag.trim()).filter(Boolean);
  }
  if (typeof tags === "string") {
    return tags.split(/[;,]/).map((tag) => tag.trim()).filter(Boolean);
  }
  return [];
}

export async function POST(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;
  if (adminSession !== "true") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const focusKeyword = String(body?.focus_keyword ?? body?.keyword ?? "").trim();
  const notes = String(body?.notes ?? "").trim();
  const referenceTitle = String(body?.title ?? "").trim();

  if (!focusKeyword && !referenceTitle) {
    return NextResponse.json({ message: "A keyword or title is required." }, { status: 400 });
  }

  const claudeKey = process.env.CLAUDE_API_KEY;
  if (!claudeKey) {
    return NextResponse.json({ message: "Claude API key is not configured." }, { status: 500 });
  }

  const userMessage = `Generate a complete SEO-optimised blog post for Woodoo Stadium in the brand voice described.

Inputs:
- Focus keyword: ${focusKeyword || "(none)"}
- Notes: ${notes || "No additional notes."}
- Admin title hint: ${referenceTitle || "(not provided)"}

Requirements:
- Page title: 50-60 characters, keyword-rich
- H1: Different from title, compelling, keyword-rich
- Body: 350-500 words, markdown with ## H2 and ### H3 headings, brand voice throughout, 1-2 internal links to /the-table or /for-business or /atelier#contact, 1 external source link where relevant
- Excerpt: 1-2 sentences, compelling summary
- Meta title: 50-60 characters
- Meta description: 150-160 characters, includes focus keyword, compelling
- Tags: 4-6 short keyword tags as array

Return ONLY this JSON object, nothing else:
{
  "title": "...",
  "h1": "...",
  "body": "...",
  "excerpt": "...",
  "meta_title": "...",
  "meta_description": "...",
  "tags": ["...", "..."]
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": claudeKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        { role: "user", content: userMessage }
      ],
    }),
  });

  const apiResult = await response.json().catch(() => null);
  const completion = String(apiResult?.content?.[0]?.text ?? "").trim();

  if (!response.ok || !completion) {
    const errorMessage = apiResult?.error?.message || "Claude generation failed.";
    return NextResponse.json({ message: errorMessage }, { status: response.status || 500 });
  }

  const parsed = extractJson(completion);
  if (!parsed) {
    return NextResponse.json({ message: "Unable to parse AI output." }, { status: 500 });
  }

  return NextResponse.json({
    post: {
      title: typeof parsed.title === "string" ? parsed.title : referenceTitle || focusKeyword,
      h1: typeof parsed.h1 === "string" ? parsed.h1 : "",
      body: typeof parsed.body === "string" ? parsed.body : "",
      excerpt: typeof parsed.excerpt === "string" ? parsed.excerpt : "",
      meta_title: typeof parsed.meta_title === "string" ? parsed.meta_title : "",
      meta_description: typeof parsed.meta_description === "string" ? parsed.meta_description : "",
      tags: normalizeTags(parsed.tags),
    },
  });
}