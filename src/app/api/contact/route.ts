import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";

const TYPE_LABELS: Record<string, string> = {
  general: "General enquiry",
  quote: "Request a quote",
  showroom: "Private viewing",
};

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const { name, email, company, message, type } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
  }

  const enquiryType = ["quote", "showroom", "general"].includes(type) ? type : "general";

  // ── 1. Save to Supabase (primary — must always succeed) ──────────────────────
  const { error } = await (supabaseAdmin as any).from("enquiries").insert({
    name: name.trim(),
    email: email.trim(),
    company: company?.trim() || null,
    message: message.trim(),
    type: enquiryType,
    status: "new",
  });

  if (error) {
    return NextResponse.json({ message: "Failed to submit enquiry." }, { status: 500 });
  }

  // ── 2. Send email via Resend (secondary — graceful failure) ──────────────────
  // Email will NOT be sent until: (a) RESEND_API_KEY is added to env, and
  // (b) the domain woodoo-stadium.com is verified in the Resend dashboard.
  // Enquiry is already saved in Supabase above — no lead is lost if this fails.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Woodoo Stadium <contact@woodoo-stadium.com>",
        to: "contact@woodoo-stadium.com",
        replyTo: email.trim(),
        subject: `New enquiry — ${name.trim()}`,
        html: `
          <div style="font-family: sans-serif; color: #1a1814; max-width: 600px;">
            <h2 style="font-size: 20px; margin-bottom: 24px;">New enquiry</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; width: 140px; color: #7f7365; font-size: 13px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${name.trim()}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">E-mail</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;"><a href="mailto:${email.trim()}" style="color: #1a1814;">${email.trim()}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${company?.trim() || "—"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">Enquiry type</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${TYPE_LABELS[enquiryType]}</td></tr>
            </table>
            <div style="margin-top: 24px;"><p style="color: #7f7365; font-size: 13px; margin-bottom: 8px;">Message</p><p style="font-size: 15px; line-height: 1.7; white-space: pre-line;">${message.trim()}</p></div>
            <p style="margin-top: 32px; font-size: 12px; color: #a39b90;">Reply directly to this e-mail to contact ${name.trim()}.</p>
          </div>
        `,
      });
    } catch (emailError) {
      // Log but do NOT return an error — the Supabase save already succeeded.
      console.error("[contact] Resend error (non-fatal):", emailError);
    }
  } else {
    console.warn("[contact] RESEND_API_KEY is not set. Email not sent; enquiry saved in Supabase.");
  }

  return NextResponse.json({ success: true });
}
