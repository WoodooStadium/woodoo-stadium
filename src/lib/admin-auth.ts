export function getAdminSessionCookie(request: Request) {
  const cookie = request.headers.get("cookie") ?? "";
  return cookie
    .split(";")
    .map((pair) => pair.trim().split("="))
    .find(([name]) => name === "admin_session")?.[1];
}

export function requireAdminCookie(request: Request) {
  const session = getAdminSessionCookie(request);
  if (session !== "true") {
    return false;
  }
  return true;
}
