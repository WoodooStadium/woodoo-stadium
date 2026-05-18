import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

const resources = [
  "site_settings",
  "pages",
  "media",
  "sections",
  "configurator_categories",
  "configurator_options",
  "blog_posts",
  "blog_keywords",
  "enquiries",
  "showroom_bookings",
  "newsletter_subscribers",
  "faq_items",
] as const;

type ResourceName = (typeof resources)[number];

function validateResource(name: string | null): name is ResourceName {
  return !!name && resources.includes(name as ResourceName);
}

export async function GET(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;
  if (adminSession !== "true") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const resource = request.nextUrl.searchParams.get("resource");
  if (!validateResource(resource)) {
    return NextResponse.json({ message: "Resource not found." }, { status: 400 });
  }

  const { data, error } = await (supabaseAdmin as any).from(resource).select("*").order("id", { ascending: false });
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;
  if (adminSession !== "true") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const resource = request.nextUrl.searchParams.get("resource");
  if (!validateResource(resource)) {
    return NextResponse.json({ message: "Resource not found." }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  if (body.id) {
    const id = body.id;
    const payload = { ...body };
    delete payload.id;
    const { data, error } = await (supabaseAdmin as any).from(resource).update(payload).eq("id", id).select().single();
    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
  }

  const payload = { ...body };
  delete payload.id;
  const { data, error } = await (supabaseAdmin as any).from(resource).insert(payload).select().single();
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;
  if (adminSession !== "true") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const resource = request.nextUrl.searchParams.get("resource");
  if (!validateResource(resource)) {
    return NextResponse.json({ message: "Resource not found." }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || !body.id) {
    return NextResponse.json({ message: "Missing id for deletion." }, { status: 400 });
  }

  const { error } = await (supabaseAdmin as any).from(resource).delete().eq("id", body.id);
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ deleted: true });
}
