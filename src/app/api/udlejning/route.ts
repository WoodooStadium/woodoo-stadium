import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Ugyldig forespørgsel." }, { status: 400 });
  }

  const { navn, email, telefon, landsdel, typeLeje, datoPeriode, besked } = body as Record<string, string>;

  if (!navn?.trim() || !email?.trim()) {
    return NextResponse.json({ message: "Navn og e-mail er påkrævet." }, { status: 400 });
  }

  // Build tagged message — stores all rental fields in the existing message column.
  // Using [UDLEJNING] prefix so enquiries are identifiable without schema changes.
  const taggedMessage = [
    "[UDLEJNING]",
    `Telefon: ${telefon?.trim() || "—"}`,
    `Landsdel: ${landsdel?.trim() || "—"}`,
    `Type leje: ${typeLeje?.trim() || "—"}`,
    `Dato/periode: ${datoPeriode?.trim() || "—"}`,
    besked?.trim() ? `\nBesked:\n${besked.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  // ── 1. Save to Supabase (primary — must always succeed) ──────────────────────
  const { error: dbError } = await (supabaseAdmin as any).from("enquiries").insert({
    name: navn.trim(),
    email: email.trim(),
    company: null,
    message: taggedMessage,
    type: "general",
    status: "new",
  });

  if (dbError) {
    console.error("[udlejning] Supabase insert error:", dbError.message);
    return NextResponse.json({ message: "Der opstod en fejl. Prøv venligst igen." }, { status: 500 });
  }

  // ── 2. Send email via Resend (secondary — graceful failure) ──────────────────
  // Email will NOT be sent until: (a) RESEND_API_KEY is added to env, and
  // (b) the domain woodoo-stadium.com is verified in the Resend dashboard.
  // Enquiry is already saved in Supabase above — no lead is lost if this fails.
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Woodoo Stadium <udlejning@woodoo-stadium.com>",
        to: "contact@woodoo-stadium.com",
        replyTo: email.trim(),
        subject: `Ny udlejningsforespørgsel — ${navn.trim()}`,
        html: `
          <div style="font-family: sans-serif; color: #1a1814; max-width: 600px;">
            <h2 style="font-size: 20px; margin-bottom: 24px;">Ny udlejningsforespørgsel</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; width: 140px; color: #7f7365; font-size: 13px;">Navn</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${navn.trim()}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">E-mail</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;"><a href="mailto:${email.trim()}" style="color: #1a1814;">${email.trim()}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">Telefon</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${telefon?.trim() || "—"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">Landsdel</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${landsdel?.trim() || "—"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">Type leje</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${typeLeje?.trim() || "—"}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; color: #7f7365; font-size: 13px;">Dato/periode</td><td style="padding: 10px 0; border-bottom: 1px solid #e6ded3; font-size: 15px;">${datoPeriode?.trim() || "—"}</td></tr>
            </table>
            ${besked?.trim() ? `<div style="margin-top: 24px;"><p style="color: #7f7365; font-size: 13px; margin-bottom: 8px;">Besked</p><p style="font-size: 15px; line-height: 1.7; white-space: pre-line;">${besked.trim()}</p></div>` : ""}
            <p style="margin-top: 32px; font-size: 12px; color: #a39b90;">Svar direkte på denne e-mail for at kontakte ${navn.trim()}.</p>
          </div>
        `,
      });
    } catch (emailError) {
      // Log but do NOT return an error — the Supabase save already succeeded.
      console.error("[udlejning] Resend error (non-fatal):", emailError);
    }
  } else {
    console.warn("[udlejning] RESEND_API_KEY is not set. E-mail ikke sendt; forespørgsel gemt i Supabase.");
  }

  return NextResponse.json({ success: true });
}
