import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bordfodbold til byrum & offentlige arealer | Woodoo Stadium",
  description: "Stadium 11–11 forvandler byrum til bevægelsesrum. Håndbygget i 100% rustfrit stål, bygget til dansk vejr og intensiv offentlig brug. 5 års garanti.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/erhverv/byrum",
    languages: { en: "https://woodoo-stadium.com/for-business/public-space" },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Woodoo Stadium", item: "https://woodoo-stadium.com/da" },
        { "@type": "ListItem", position: 2, name: "Erhverv", item: "https://woodoo-stadium.com/da/erhverv" },
        { "@type": "ListItem", position: 3, name: "Byrum & Arkitektur", item: "https://woodoo-stadium.com/da/erhverv/byrum" },
      ],
    },
    {
      "@type": "Service",
      name: "Bordfodbold til byrum — Stadium 11–11",
      description: "Socialt infrastrukturobjekt til byrum, pladser og offentlige udearealer. 100% rustfrit stål, håndbygget i Danmark, bygget til intensiv offentlig brug og dansk vejr.",
      provider: { "@type": "Organization", name: "Woodoo Stadium", url: "https://woodoo-stadium.com" },
      areaServed: { "@type": "Country", name: "DK" },
    },
  ],
};

const architectArguments = [
  { number: "01", stat: "Opholdstid", description: "Folk bliver længere. Rummet bliver et sted man vælger, ikke krydser." },
  { number: "02", stat: "Bevægelse", description: "Et socialt objekt der inviterer til aktivitet — ikke kun stillesiddende ophold." },
  { number: "03", stat: "Holdbarhed", description: "Rustfrit stål klarer intensiv offentlig brug og dansk vejr, år efter år." },
  { number: "04", stat: "Social aktivering", description: "Blikket mødes på tværs af alder og baggrund. Præcis det byrum skal kunne." },
];

const proofStats = [
  { figure: "198.000", text: "svar i Danmarks største kortlægning af bevægelsesvaner — 98 kommunerapporter om borgernes brug af udendørs rum.", source: "SDU, Danmark i Bevægelse, 2026" },
  { figure: "1,5 mio. kr.", text: "har Københavns Kommune afsat til at aktivere byens rum med nye sociale og kunstneriske elementer.", source: "Københavns Kommune, Handleplan" },
  { figure: "Direkte sammenhæng", text: "Indretningen af byens rum påvirker, hvor fysisk aktive borgerne er, viser landsdækkende kortlægning.", source: "Sundhedsstyrelsen, 2019" },
  { figure: "“Påvirker trivslen”", text: "Indretningen af byen og byrummet påvirker rigtig mange borgeres trivsel og sundhed.", source: "Sara Lindhardt, Sundhedsstyrelsen" },
];

const customisationMethods = [
  { number: "01", title: "Farvet finish", description: "Matchet til byrummets øvrige materialer og farvepalet." },
  { number: "02", title: "Custom LED-lys", description: "Skaber tryghed og orientering, når mørket falder på." },
  { number: "03", title: "Indgraveret plade", description: "Kommunens navn, områdets historie eller en lokal hilsen." },
  { number: "04", title: "Møbleret som en helhed", description: "Placeres naturligt sammen med bænke, belysning og beplantning." },
  { number: "05", title: "Fleksibel placering", description: "Fast eller flytbar — til permanent byrum eller midlertidig aktivering." },
];

const trustPoints = [
  "Håndbygget i Danmark",
  "5 års garanti",
  "Indendørs & udendørs",
];

export default function DaErhvervByrumPage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/woodoo_foosball_original_93dbeb38.jfif"
            alt="Stadium 11-11 i byrum om dagen"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 50%" }}
          />
        </div>
        <div className="hero-bleed__veil" style={{ background: "linear-gradient(180deg, rgba(11,10,8,0.6) 0%, rgba(11,10,8,0.2) 40%, rgba(11,10,8,0.7) 100%)" }} />
        <div className="hero-bleed__inner" style={{ paddingTop: "140px" }}>
          <div className="hero-bleed__title fade-up" data-delay="1">
            <span style={{ display: "block", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(242,238,229,0.65)", marginBottom: "20px" }}>
              Byrum &amp; Arkitektur
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05 }}>
              Byrummet der<br /><em style={{ color: "#F2EEE5" }}>skaber bevægelse.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Erhverv</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Socialt infrastrukturobjekt til byrum, pladser og udearealer.</span>
            </div>
            <div className="hero-bleed__cta">
              <a
                href="/da/showroom#kontakt"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0 32px", height: "56px", border: "1px solid #F2EEE5", background: "#F2EEE5", color: "#0B0A08", fontFamily: "Inter Tight, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.28em", textDecoration: "none" }}
              >
                Send en forespørgsel
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>ARKITEKTARGUMENTET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Ikke bare et byrum.<br /><em style={{ color: "var(--pine-on-dark)" }}>Et bevægelsesrum.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Mange byrum er designet til at blive krydset, ikke brugt. En bænk, en flisebelagt plads, en græsplæne — funktionelle, men passive. De optager rum uden at aktivere det.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Sundhedsstyrelsen peger direkte på det: indretningen af byens rum påvirker, hvor fysisk aktive borgerne rent faktisk er. Et Woodoo-bord vender rummet fra gennemgang til destination — et sted der inviterer til bevægelse og møde, ikke bare passage.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              Det er et socialt ankerpunkt på 150 kilo, designet til at aktivere menneskelig interaktion i fysiske rum — og til at blive en permanent del af byens infrastruktur, ikke en sæsoninstallation.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>45%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>
                af EU's borgere angiver, at de aldrig dyrker motion eller sport — og hver tredje har utilstrækkelig fysisk aktivitet.<br />
                <em style={{ opacity: 0.6 }}>WHO/OECD, "Step Up!", 2023</em>
              </p>
            </div>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>80%+</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>
                af den europæiske befolkning ventes at bo i byer i 2030 — derfor er byrummets indretning en direkte sundhedsindsats.<br />
                <em style={{ opacity: 0.6 }}>WHO Regional Office for Europe</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>HVAD DET GØR</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>Et socialt samlingspunkt.<br /><em style={{ color: "var(--pine-on-dark)" }}>Hvad det gør for byrummet.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
            {architectArguments.map((item, index) => (
              <div key={item.stat} style={{ padding: "40px 32px", borderRight: index < 3 ? "1px solid rgba(242,238,229,0.1)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", display: "block", marginBottom: "20px" }}>{item.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "24px", color: "#F2EEE5", margin: "0 0 16px" }}>{item.stat}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.75)", lineHeight: "1.7", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#E6E3DA", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "80px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>BEVISET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Byrummets design<br /><em style={{ color: "var(--pine)" }}>flytter borgerne.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {proofStats.map((stat, index) => (
              <div
                key={index}
                style={{ padding: "64px 40px", borderRight: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none" }}
              >
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(36px,4vw,52px)", color: "var(--pine)", lineHeight: 1.1, marginBottom: "24px" }}>{stat.figure}</div>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>{stat.text}</p>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Kilde: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <div style={{ marginBottom: "64px" }}>
              <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>TILPASNING</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>Tilpasset byrummet.<br /><em style={{ color: "var(--pine-on-dark)" }}>Ikke et fremmedelement.</em></h2>
            </div>
            <div style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
              {customisationMethods.map((method) => (
                <div
                  key={method.title}
                  style={{ padding: "24px 0", borderBottom: "1px solid rgba(242,238,229,0.1)", display: "flex", gap: "24px", alignItems: "flex-start" }}
                >
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", flexShrink: 0, paddingTop: "3px" }}>{method.number}</span>
                  <div>
                    <h3 style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EEE5", margin: "0 0 6px" }}>{method.title}</h3>
                    <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "30px", color: "rgba(242,238,229,0.85)", lineHeight: 1.4, maxWidth: "460px" }}>
              "Kommunerne kan sikre bedre muligheder for bevægelse ved at indrette udearealer, så de indbyder til leg og ophold for alle aldre."
            </p>
            <span style={{ display: "block", marginTop: "20px", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", color: "rgba(242,238,229,0.6)" }}>— Sundhedsstyrelsen, "Omgivelsernes betydning for fysisk aktivitet"</span>
          </div>
        </div>
      </section>

      <section style={{ background: "#1A1814", padding: "64px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "48px", flexWrap: "wrap", justifyContent: "center" }}>
          {trustPoints.map((point) => (
            <span key={point} style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(242,238,229,0.55)" }}>{point}</span>
          ))}
        </div>
      </section>

      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Klar</span></div>
          <h2 className="h2 fade-up" data-delay="1">Alle forespørgsler besvares personligt.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            Vi kommer gerne forbi med bordet til en fremvisning i jeres byrum, inden en beslutning skal træffes. Kontakt: <a href="mailto:contact@woodoo-stadium.com" style={{ color: "inherit" }}>contact@woodoo-stadium.com</a> · +45 20 11 57 42
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/da/showroom#kontakt">Send en forespørgsel →</a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
