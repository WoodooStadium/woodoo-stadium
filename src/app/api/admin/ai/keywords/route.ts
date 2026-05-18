import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const suffixes = [
  "experience",
  "venue",
  "luxury",
  "event",
  "booking",
  "stadium",
  "party",
  "corporate",
  "entertainment",
  "VIP",
];

export async function POST(request: NextRequest) {
  const adminSession = request.cookies.get("admin_session")?.value;
  if (adminSession !== "true") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const seed = String(body?.seed ?? "").trim();

  if (!seed) {
    return NextResponse.json({ message: "Seed keyword is required." }, { status: 400 });
  }

  const keywords = suffixes.map((suffix, index) => ({
    keyword: `${seed} ${suffix}`,
    search_volume: null,
    difficulty: null,
    competitor_url: null,
    notes: null,
  }));

  return NextResponse.json({ keywords });
}
