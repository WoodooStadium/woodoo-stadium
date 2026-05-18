import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD?.toString();

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const password = typeof body === "object" && body !== null ? (body as { password?: unknown }).password : undefined;
  const receivedPassword = typeof password === "string" ? password.trim() : "";
  const expectedPassword = ADMIN_PASSWORD?.trim() ?? "";

  console.log("[admin/login] received password:", JSON.stringify(receivedPassword));
  console.log("[admin/login] ADMIN_PASSWORD:", JSON.stringify(expectedPassword));

  if (!expectedPassword) {
    return NextResponse.json({ message: "Admin password is not configured." }, { status: 500 });
  }

  if (!receivedPassword || receivedPassword !== expectedPassword) {
    return NextResponse.json({ message: "Invalid password." }, { status: 401 });
  }

  const response = NextResponse.json({ message: "Authenticated." });
  response.cookies.set({
    name: "admin_session",
    value: "true",
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
