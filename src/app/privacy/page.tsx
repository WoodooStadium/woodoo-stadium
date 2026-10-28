import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/privacy",
  title: "Privacy & Cookies | Woodoo Stadium",
  description: "How Woodoo Stadium uses cookies and handles personal data submitted through enquiry forms.",
});

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

const linkStyle: React.CSSProperties = {
  color: "#1A1814",
  borderBottom: "1px solid rgba(26,24,20,0.3)",
  textDecoration: "none",
};

const email = (
  <a href="mailto:contact@woodoo-stadium.com" style={linkStyle}>
    contact@woodoo-stadium.com
  </a>
);

export default function PrivacyPage() {
  return (
    <section style={{ background: "#E6E3DA", padding: "96px 48px", minHeight: "70vh" }}>
      <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
        <span style={kicker}>Privacy &amp; cookies</span>
        <h1
          className="h1"
          style={{
            fontSize: "clamp(36px, 4vw, 60px)",
            color: "#1A1814",
            lineHeight: 1.05,
            marginBottom: "8px",
          }}
        >
          Privacy &amp; cookies
        </h1>
        <p style={{ ...bodyStyle, marginTop: "24px" }}>
          We collect as little as possible: only what we need to reply to you, and simple statistics so we can see whether there is interest in the site.
        </p>

        <h2 style={h2Style}>Who is responsible?</h2>
        <p style={bodyStyle}>
          Woodoo, CVR 41213663, Copenhagen, Denmark. Contact: {email}.
        </p>

        <h2 style={h2Style}>When you write to us</h2>
        <p style={bodyStyle}>
          When you fill in the contact or rental form, we receive your name, e-mail and message. For rentals we also receive your phone number, region and preferred period. We use this only to reply to you and give you a quote. The basis is that you contact us yourself (GDPR art. 6(1)(b) and (f)). The information is stored with our database provider, and we receive an e-mail. We delete enquiries no later than 24 months after our last contact. If you become a customer, we keep accounting records for 5 years, as the law requires.
        </p>

        <h2 style={h2Style}>Newsletter</h2>
        <p style={bodyStyle}>
          If you subscribe, we store your e-mail address until you unsubscribe. The basis is your consent. You can unsubscribe at any time by writing to {email}.
        </p>

        <h2 style={h2Style}>Statistics</h2>
        <p style={bodyStyle}>
          If you accept statistics, we use Google Analytics to count visits and see which pages are of interest. It sets cookies (_ga and _ga_...) and records page views, device type, approximate location (country and city) and the source of the visit. We only use aggregated figures. We have switched off Google&apos;s advertising and profile features, and the data is not used for advertising. Data is kept for 14 months. Google may process data in the USA. The basis is your consent. You can change your choice at any time under &quot;Cookie settings&quot; at the bottom of the page. If you say no, no Google code is loaded and nothing is measured.
        </p>

        <h2 style={h2Style}>Necessary storage</h2>
        <p style={bodyStyle}>
          The site remembers your cookie choice in your browser&apos;s local storage. This is necessary to remember the choice and contains no personal data.
        </p>

        <h2 style={h2Style}>Who helps us?</h2>
        <p style={bodyStyle}>
          We use providers for database (Supabase, servers in the EU), hosting (Vercel), e-mail (Google Workspace and Resend) and statistics (Google, only with your consent). They process information only on our instructions. The hosting provider may temporarily log IP addresses for security reasons. When a provider processes data outside the EU, this is based on EU approvals, such as the Data Privacy Framework, or standard contractual clauses. We do not sell information.
        </p>

        <h2 style={h2Style}>Your rights</h2>
        <p style={bodyStyle}>
          You can ask for access to, correction or deletion of your information, restriction of processing, to receive it in a portable format, or to object. You can also withdraw consent. Write to {email}. You can complain to the Danish Data Protection Agency (datatilsynet.dk).
        </p>

        <p
          style={{
            fontFamily: "Inter Tight, sans-serif",
            fontSize: "12px",
            color: "rgba(26,24,20,0.35)",
            letterSpacing: "0.08em",
            marginTop: "56px",
            marginBottom: "0",
          }}
        >
          Last updated: 28 October 2026.
        </p>
      </div>
    </section>
  );
}
