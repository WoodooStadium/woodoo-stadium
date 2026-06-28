import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privatliv & Cookies | Woodoo Stadium",
  description:
    "Sådan bruger Woodoo Stadium cookies og håndterer personoplysninger indsendt via forespørgselsformularer.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/privatliv",
    languages: { en: "https://woodoo-stadium.com/privacy" },
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

export default function PrivatlivPage() {
  return (
    <section style={{ background: "#E6E3DA", padding: "96px 48px", minHeight: "70vh" }}>
      <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
        <span style={kicker}>Privatliv &amp; Cookies</span>
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
          Privatliv &amp; Cookies
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
          Sidst opdateret: juni 2026
        </p>

        <h2 style={h2Style}>Cookies</h2>
        <p style={bodyStyle}>
          Siden bruger kun nødvendige cookies — det minimum, der kræves for, at siden fungerer korrekt. Det inkluderer en cookie, der husker, at du har set cookie-beskeden, så du ikke vises den igen.
        </p>
        <p style={bodyStyle}>
          Vi bruger ikke reklame-cookies, analyse-cookies eller tredjeparts-sporing. Hvis vi på et tidspunkt indfører analyseværktøjer, vil vi bede om dit samtykke, inden de tages i brug.
        </p>

        <h2 style={h2Style}>Personoplysninger</h2>
        <p style={bodyStyle}>
          Når du sender en forespørgsel eller en udlejningsanmodning via siden, gemmes de oplysninger, du angiver — navn, e-mailadresse, telefonnummer og besked — sikkert via Supabase (servere placeret i EU, Frankfurt).
        </p>
        <p style={bodyStyle}>
          Disse oplysninger bruges udelukkende til at besvare din henvendelse. De sælges ikke, deles ikke med tredjepart til markedsføringsformål og bruges ikke til andet end at håndtere din forespørgsel.
        </p>
        <p style={bodyStyle}>
          Tilmeldinger til nyhedsbrevet (kun e-mailadresse) gemmes i samme system og bruges udelukkende til at sende Atelier Journal — et kort brev fra værkstedet, som udkommer et par gange om året. Du kan til enhver tid bede os om at fjerne dig.
        </p>

        <h2 style={h2Style}>Databehandling</h2>
        <p style={bodyStyle}>
          Alle personoplysninger, der indsendes via siden, behandles og opbevares inden for EU. Ingen data overføres uden for EU.
        </p>

        <h2 style={h2Style}>Dine rettigheder</h2>
        <p style={bodyStyle}>
          Du har ret til at få indsigt i, berigtiget eller slettet de personoplysninger, vi har om dig. Skriv til os på{" "}
          <a
            href="mailto:contact@woodoo-stadium.com"
            style={{ color: "#1A1814", borderBottom: "1px solid rgba(26,24,20,0.3)", textDecoration: "none" }}
          >
            contact@woodoo-stadium.com
          </a>
          , hvis du har spørgsmål om dine data eller dit privatliv.
        </p>
      </div>
    </section>
  );
}
