import { useSyncExternalStore } from "react";

export type Consent = "granted" | "denied";

const STORAGE_KEY = "woodoo_consent";
export const CONSENT_EVENT = "woodoo-consent-change";

export function getConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function notify(value: Consent | null) {
  try {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
  } catch {
    // ignore
  }
}

export function setConsent(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage blocked: the choice still applies for this page view
  }
  notify(value);
}

export function clearConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
  notify(null);
}

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange); // choice made in another tab
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** Current consent; always null during server render and hydration. */
export function useConsent(): Consent | null {
  return useSyncExternalStore(subscribe, getConsent, () => null);
}

const noopSubscribe = () => () => {};

/** False during server render and hydration, true once running in the browser. */
export function useHydrated(): boolean {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}
