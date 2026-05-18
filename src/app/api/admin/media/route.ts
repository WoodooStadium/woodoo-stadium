import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import fs from "fs/promises";
import path from "path";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;
  if (adminSession !== "true") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const alt_text = String(formData.get("alt_text") ?? "");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ message: "File upload is required." }, { status: 400 });
  }

  const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9_.-]/g, "-")}`;
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadsDir, { recursive: true });

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(uploadsDir, filename);
  await fs.writeFile(filePath, fileBuffer);

  const url = `/uploads/${filename}`;
  const { data, error } = await (supabaseAdmin as any)
    .from("media")
    .insert({ url, filename, alt_text, type: "image", used_in: null })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
