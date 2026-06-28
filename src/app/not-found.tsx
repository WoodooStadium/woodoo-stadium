import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Woodoo Stadium",
  description: "This page does not exist.",
};

export default function NotFoundPage() {
  return (
    <main className="section section--dark section--no-top" style={{ minHeight: "calc(100vh - 160px)", display: "grid", placeItems: "center" }}>
      <div style={{ textAlign: "center", maxWidth: "72ch", margin: "0 auto" }}>
        <h1 className="h1" style={{ marginBottom: "24px" }}>404</h1>
        <p className="body" style={{ color: "var(--ink-on-dark)", marginBottom: "32px" }}>
          This page does not exist.
        </p>
        <Link className="tlink tlink--on-dark" href="/">
          Return to homepage <span className="arrow">→</span>
        </Link>
      </div>
    </main>
  );
}
