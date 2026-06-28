import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const { email } = body as Record<string, string>;

  if (!email?.trim()) {
    return NextResponse.json({ message: "Email is required." }, { status: 400 });
  }

  const { error } = await (supabaseAdmin as any).from("newsletter_subscribers").insert({
    email: email.trim(),
    language: "en",
  });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ message: "Failed to subscribe." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
