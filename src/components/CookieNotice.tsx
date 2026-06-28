"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const COOKIE_NAME = "woodoo_cookie_notice";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function setCookie(name: string, value: string, maxAge: number) {
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

export default function CookieNotice() {
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();
  const isDanish = pathname?.startsWith("/da") ?? false;

  useEffect(() => {
    setMounted(true);
    if (getCookie(COOKIE_NAME) === "dismissed") {
      setDismissed(true);
    }
  }, []);

  const dismiss = () => {
    setCookie(COOKIE_NAME, "dismissed", COOKIE_MAX_AGE);
    setDismissed(true);
  };

  // Render nothing until mounted (avoids SSR/hydration mismatch)
  // and nothing if already dismissed
  if (!mounted || dismissed) return null;

  return (
    <div
      role="region"
      aria-label={isDanish ? "Cookie-besked" : "Cookie notice"}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0B0A08",
        borderTop: "1px solid rgba(242,238,229,0.15)",
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "32px",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          fontFamily: "Inter Tight, sans-serif",
          fontSize: "13px",
          color: "rgba(242,238,229,0.65)",
          lineHeight: "1.6",
          margin: 0,
          maxWidth: "72ch",
        }}
      >
        {isDanish ? (
          <>
            Vi bruger kun nødvendige cookies, for at siden fungerer. Ved at fortsætte accepterer du dette.{" "}
            <a
              href="/da/privatliv"
              style={{
                color: "#F2EEE5",
                borderBottom: "1px solid rgba(242,238,229,0.35)",
                paddingBottom: "1px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              Læs mere
            </a>
          </>
        ) : (
          <>
            We use only essential cookies to make this site work. By continuing, you accept this.{" "}
            <a
              href="/privacy"
              style={{
                color: "#F2EEE5",
                borderBottom: "1px solid rgba(242,238,229,0.35)",
                paddingBottom: "1px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              Read more
            </a>
          </>
        )}
      </p>

      <button
        onClick={dismiss}
        style={{
          flexShrink: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          height: "44px",
          padding: "0 28px",
          background: "#F2EEE5",
          color: "#0B0A08",
          border: "none",
          fontFamily: "Inter Tight, sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "opacity 0.2s ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        {isDanish ? "Forstået" : "Got it"}
      </button>
    </div>
  );
}
