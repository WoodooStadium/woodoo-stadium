import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const systemPrompt = `You are a copywriter for WooDoo Stadium — a Copenhagen atelier that handbuilds a single luxury foosball table called the Stadium 11-11. The brand voice is understated Nordic luxury: declarative sentences, no marketing adjectives, dry confidence. Think Bang & Olufsen meets Vipp. Write in English unless instructed otherwise.`;

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
    return tags
      .split(/[;,]/)
      .map((tag) => tag.trim())
      .filter(Boolean);
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

  const prompt = `${systemPrompt}\n\nHuman: Generate a complete SEO-optimised blog post in the WooDoo brand voice. Use the following inputs:
- Focus keyword: ${focusKeyword || "(none)"}
- Notes: ${notes || "No additional notes."}
- Admin title: ${referenceTitle || "(not provided)"}

Return only valid JSON with these keys: title, h1, body, excerpt, meta_title, meta_description, tags. The body should include a complete article with proper H2 and H3 headings, and use markdown formatting. Suggested tags should be an array of short terms. Do not include any explanation or surrounding text.`;

  const response = await fetch("https://api.anthropic.com/v1/complete", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": claudeKey,
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      prompt,
      max_tokens_to_sample: 1300,
      temperature: 0.2,
      stop_sequences: ["\n\nHuman:"],
    }),
  });

  const apiResult = await response.json().catch(() => null);
  const completion = String(apiResult?.completion ?? apiResult?.text ?? "").trim();

  if (!response.ok || !completion) {
    const errorMessage = apiResult?.error?.message || apiResult?.message || "Claude generation failed.";
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
