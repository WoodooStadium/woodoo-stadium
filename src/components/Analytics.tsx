"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { useConsent } from "@/lib/consent";
import { GA_MEASUREMENT_ID, analyticsAllowed, trackEvent } from "@/lib/analytics";

/** Expires every _ga* cookie on the current host and on the root domain. */
function deleteGaCookies() {
  const host = window.location.hostname;
  const root = host.split(".").slice(-2).join(".");
  const domains = ["", host, `.${host}`, root, `.${root}`];
  const names = document.cookie
    .split(";")
    .map((c) => c.trim().split("=")[0])
    .filter((name) => name.startsWith("_ga"));
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

/**
 * Loads GA4 only after the visitor has accepted statistics cookies.
 * Page views come from GA4 itself: the initial one from gtag('config') and later ones from
 * enhanced measurement's history-change tracking, so no manual page_view is sent here.
 */
export default function Analytics() {
  const pathname = usePathname();
  const consent = useConsent();
  const allowed = analyticsAllowed(pathname);
  const wasGranted = useRef(false);

  // Pause GA when consent is withdrawn (or on admin pages), and remove its cookies on withdrawal.
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const flags = window as unknown as Record<string, boolean>;
    flags[`ga-disable-${GA_MEASUREMENT_ID}`] = !(consent === "granted" && allowed);
    if (consent === "granted") {
      wasGranted.current = true;
    } else if (wasGranted.current) {
      wasGranted.current = false;
      deleteGaCookies();
    }
  }, [consent, allowed]);

  // One delegated listener for mailto: clicks (trackEvent is a no-op without consent).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest?.('a[href^="mailto:"]')) trackEvent("click_email");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!allowed || consent !== "granted") return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{allow_google_signals:false,allow_ad_personalization_signals:false});`}
      </Script>
    </>
  );
}
