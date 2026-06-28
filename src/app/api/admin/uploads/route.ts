import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".avif", ".jfif"]);

export async function GET(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;
  if (adminSession !== "true") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const uploadsDir = join(process.cwd(), "public", "uploads");
  try {
    const files = await readdir(uploadsDir);
    const images = files
      .filter((file) => IMAGE_EXTS.has(file.slice(file.lastIndexOf(".")).toLowerCase()))
      .sort()
      .map((file) => `/uploads/${encodeURIComponent(file)}`);
    return NextResponse.json(images);
  } catch {
    return NextResponse.json([]);
  }
}
