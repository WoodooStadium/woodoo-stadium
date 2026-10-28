import { getConsent } from "./consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const rawId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** GA4 measurement ID, or "" when it is missing or malformed (it is interpolated into an inline script). */
export const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(rawId) ? rawId : "";

/** True when analytics may run at all: a valid ID, a production build, and not an admin page. */
export function analyticsAllowed(pathname: string | null): boolean {
  return Boolean(GA_MEASUREMENT_ID) && process.env.NODE_ENV === "production" && !pathname?.startsWith("/admin");
}

type EventParams = Record<string, string | number | boolean>;

/** Sends a GA4 event only when consent is granted and gtag has loaded; otherwise does nothing. Never pass personal data. */
export function trackEvent(name: string, params?: EventParams) {
  if (typeof window === "undefined" || getConsent() !== "granted" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params ?? {});
}
