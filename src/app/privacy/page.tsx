import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Cookies | Woodoo Stadium",
  description:
    "How Woodoo Stadium uses cookies and handles personal data submitted through enquiry forms.",
  alternates: {
    canonical: "https://woodoo-stadium.com/privacy",
    languages: { da: "https://woodoo-stadium.com/da/privatliv" },
  },
};

const kicker: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter Tight, sans-serif",
  fontSize: "11px",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "rgba(26,24,20,0.4)",
  marginBottom: "16px",
};

const h2Style: React.CSSProperties = {
  fontFamily: "Cormorant Garamond, serif",
  fontWeight: 300,
  fontSize: "clamp(22px, 2vw, 30px)",
  color: "#1A1814",
  lineHeight: 1.1,
  marginBottom: "16px",
  marginTop: "56px",
};

const bodyStyle: React.CSSProperties = {
  fontFamily: "Inter Tight, sans-serif",
  fontSize: "15px",
  color: "rgba(26,24,20,0.65)",
  lineHeight: "1.85",
  marginBottom: "16px",
};

export default function PrivacyPage() {
  return (
    <section style={{ background: "#E6E3DA", padding: "96px 48px", minHeight: "70vh" }}>
      <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
        <span style={kicker}>Privacy &amp; Cookies</span>
        <h1
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontWeight: 300,
            fontSize: "clamp(36px, 4vw, 60px)",
            color: "#1A1814",
            lineHeight: 1.05,
            marginBottom: "8px",
          }}
        >
          Privacy &amp; Cookies
        </h1>
        <p
          style={{
            fontFamily: "Inter Tight, sans-serif",
            fontSize: "12px",
            color: "rgba(26,24,20,0.35)",
            letterSpacing: "0.08em",
            marginBottom: "0",
          }}
        >
          Last updated: June 2026
        </p>

        <h2 style={h2Style}>Cookies</h2>
        <p style={bodyStyle}>
          This site uses only essential cookies — the minimum required for the site to function correctly. This includes a cookie that remembers when you have acknowledged this cookie notice, so you are not shown it repeatedly.
        </p>
        <p style={bodyStyle}>
          We do not use advertising cookies, analytics cookies, or any third-party tracking at this time. If we introduce analytics tools in the future, we will request your consent before doing so.
        </p>

        <h2 style={h2Style}>Personal data</h2>
        <p style={bodyStyle}>
          When you submit an enquiry or rental request through this site, the information you provide — your name, email address, phone number, and the content of your message — is stored securely via Supabase (servers located in the EU, Frankfurt region).
        </p>
        <p style={bodyStyle}>
          This data is used solely to respond to your enquiry. It is not sold, shared with third parties for marketing purposes, or used for any purpose beyond handling your request.
        </p>
        <p style={bodyStyle}>
          Newsletter sign-ups (email address only) are stored in the same system and used only to send the Atelier Journal — a short letter from the workshop, published a few times a year. You can ask to be removed at any time.
        </p>

        <h2 style={h2Style}>Data location</h2>
        <p style={bodyStyle}>
          All personal data submitted through this site is processed and stored within the European Union. No data is transferred outside the EU.
        </p>

        <h2 style={h2Style}>Your rights</h2>
        <p style={bodyStyle}>
          You have the right to access, correct, or request deletion of any personal data we hold about you. To exercise these rights, or if you have any questions about privacy, write to us at{" "}
          <a
            href="mailto:contact@woodoo-stadium.com"
            style={{ color: "#1A1814", borderBottom: "1px solid rgba(26,24,20,0.3)", textDecoration: "none" }}
          >
            contact@woodoo-stadium.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
