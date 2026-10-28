import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: "/da/privatliv",
  title: "Privatliv & Cookies | Woodoo Stadium",
  description: "Sådan bruger Woodoo Stadium cookies og håndterer personoplysninger indsendt via forespørgselsformularer.",
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

export default function PrivatlivPage() {
  return (
    <section style={{ background: "#E6E3DA", padding: "96px 48px", minHeight: "70vh" }}>
      <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
        <span style={kicker}>Privatliv &amp; cookies</span>
        <h1
          className="h1"
          style={{
            fontSize: "clamp(36px, 4vw, 60px)",
            color: "#1A1814",
            lineHeight: 1.05,
            marginBottom: "8px",
          }}
        >
          Privatliv &amp; cookies
        </h1>
        <p style={{ ...bodyStyle, marginTop: "24px" }}>
          Vi indsamler så lidt som muligt: kun det, vi skal bruge for at svare dig, og en enkel statistik, så vi kan se, om der er interesse for siden.
        </p>

        <h2 style={h2Style}>Hvem er ansvarlig?</h2>
        <p style={bodyStyle}>
          Woodoo, CVR 41213663, København. Kontakt: {email}.
        </p>

        <h2 style={h2Style}>Når du skriver til os</h2>
        <p style={bodyStyle}>
          Når du udfylder kontakt- eller udlejningsformularen, modtager vi dit navn, din e-mail og din besked. Ved udlejning modtager vi også dit telefonnummer, din landsdel og din ønskede periode. Vi bruger oplysningerne kun til at svare dig og give dig et tilbud. Grundlaget er, at du selv henvender dig (databeskyttelsesforordningens art. 6, stk. 1, litra b og f). Oplysningerne gemmes hos vores databaseleverandør, og vi får en e-mail. Vi sletter forespørgsler senest 24 måneder efter sidste kontakt. Hvis du bliver kunde, opbevarer vi bogføringsmateriale i 5 år, som loven kræver.
        </p>

        <h2 style={h2Style}>Nyhedsbrev</h2>
        <p style={bodyStyle}>
          Hvis du tilmelder dig, gemmer vi din e-mailadresse, indtil du afmelder dig. Grundlaget er dit samtykke. Du kan afmelde dig når som helst ved at skrive til {email}.
        </p>

        <h2 style={h2Style}>Statistik</h2>
        <p style={bodyStyle}>
          Hvis du accepterer statistik, bruger vi Google Analytics til at tælle besøg og se, hvilke sider der er interessante. Det sætter cookies (_ga og _ga_...) og registrerer sidevisninger, enhedstype, cirka placering (land og by) og kilden til besøget. Vi bruger kun samlede tal. Vi har slået Googles annonce- og profilfunktioner fra, og data bruges ikke til annoncering. Data gemmes i 14 måneder. Google kan behandle data i USA. Grundlaget er dit samtykke. Du kan ændre dit valg når som helst under &quot;Cookieindstillinger&quot; nederst på siden. Siger du nej, indlæses der ingen Google-kode, og der måles intet.
        </p>

        <h2 style={h2Style}>Nødvendig lagring</h2>
        <p style={bodyStyle}>
          Siden husker dit cookievalg i din browsers lokale lager. Det er nødvendigt for at huske valget og indeholder ingen personoplysninger.
        </p>

        <h2 style={h2Style}>Hvem hjælper os?</h2>
        <p style={bodyStyle}>
          Vi bruger leverandører til database (Supabase, serverplacering i EU), hosting (Vercel), e-mail (Google Workspace og Resend) og statistik (Google, kun med dit samtykke). De behandler kun oplysninger efter vores instruks. Hostingleverandøren kan midlertidigt logge IP-adresser af sikkerhedsårsager. Når en leverandør behandler data uden for EU, sker det på grundlag af EU&apos;s godkendelser, fx Data Privacy Framework, eller standardkontrakter. Vi sælger ikke oplysninger.
        </p>

        <h2 style={h2Style}>Dine rettigheder</h2>
        <p style={bodyStyle}>
          Du kan bede om indsigt i, rettelse eller sletning af dine oplysninger, begrænsning af behandlingen, få dem udleveret eller gøre indsigelse. Du kan også trække et samtykke tilbage. Skriv til {email}. Du kan klage til Datatilsynet (datatilsynet.dk).
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
          Sidst opdateret: 28. oktober 2026.
        </p>
      </div>
    </section>
  );
}
