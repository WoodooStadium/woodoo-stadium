import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin" || pathname === "/admin/login") {
      return NextResponse.next();
    }

    const adminSession = request.cookies.get("admin_session")?.value;
    if (adminSession !== "true") {
      const loginUrl = new URL("/admin", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
