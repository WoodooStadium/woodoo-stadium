"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { setConsent, useConsent, useHydrated } from "@/lib/consent";

// Layout lives in globals.css (.cookie-notice): compact box bottom-left on desktop, slim bar on mobile.
// Both buttons share one class so neither is visually preferred.
export default function CookieNotice() {
  const hydrated = useHydrated();
  const consent = useConsent();
  const pathname = usePathname();
  const isDanish = pathname?.startsWith("/da") ?? false;
  const firstButton = useRef<HTMLButtonElement>(null);
  const visible = hydrated && consent === null;

  // Move keyboard focus to the first choice when the notice appears (no focus trap).
  useEffect(() => {
    if (visible) firstButton.current?.focus({ preventScroll: true });
  }, [visible]);

  // Render nothing on the server/during hydration, and nothing once a choice is stored
  if (!visible) return null;

  return (
    <div className="cookie-notice" role="dialog" aria-label={isDanish ? "Valg om statistik" : "Statistics choice"}>
      <p className="cookie-notice__title">{isDanish ? "Må vi tælle dig med?" : "Mind if we count you in?"}</p>
      <p className="cookie-notice__text">
        {isDanish
          ? "Vi bruger enkel statistik til at se, om nogen overhovedet gider bordfodbold i rustfrit stål. Ingen annoncer, kun samlede tal."
          : "We use simple statistics to see whether anyone cares about stainless steel foosball. No ads, just totals."}{" "}
        <a href={isDanish ? "/da/privatliv" : "/privacy"}>{isDanish ? "Læs mere" : "Read more"}</a>
      </p>
      <div className="cookie-notice__actions">
        <button ref={firstButton} type="button" className="cookie-notice__btn" onClick={() => setConsent("granted")}>
          {isDanish ? "Ja, tæl mig med" : "Count me in"}
        </button>
        <button type="button" className="cookie-notice__btn" onClick={() => setConsent("denied")}>
          {isDanish ? "Nej tak" : "No thanks"}
        </button>
      </div>
    </div>
  );
}
