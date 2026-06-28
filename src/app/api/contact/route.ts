import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, message, type } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
  }

  const { error } = await (supabaseAdmin as any).from("enquiries").insert({
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || null,
    message: message.trim(),
    type: ["quote", "showroom", "general"].includes(type) ? type : "general",
    status: "new",
  });

  if (error) {
    return NextResponse.json({ message: "Failed to submit enquiry." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
