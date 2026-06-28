import DrawingViewer from "@/components/DrawingViewer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stadium 11–11 | Woodoo Stadium — Luksus rustfrit stål bordfodboldbord",
  description: "Stadium 11–11 er et præcisionsingeniøreret luksus bordfodboldbord. Håndbygget i København af børstet rustfrit stål. 732 komponenter. Inde og ude. Lavet til ordre.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/bordet",
    languages: { en: "https://woodoo-stadium.com/the-table" },
  },
};

const anatomyItems = [
  { title: "Ramme", description: "En svejset monocoque. Én konstruktion, ikke samlet. Strukturen er objektet." },
  { title: "Spillebane", description: "Børstet rustfrit stål, eller malet i en farve efter dit valg. Oplyst indefra under alle omstændigheder." },
  { title: "Stænger", description: "Kalibreret stål. Specialudviklede lejer. Boldens anslag bæres fyrre meter." },
  { title: "Spillere", description: "Standard støbt, CNC-bearbejdet, eller bygget til et custom design. Afbalanceret til spil, designet til tilstedeværelse." },
  { title: "Strøm", description: "Genopladeligt batteri, eller hardwired til en kabelboks. Dit valg." },
  { title: "Belysning", description: "Integreret i bordet. Oplyst point og bane. Hvidt eller varmt lys på banen, pointlys efter dit valg" },
  { title: "Brandplader", description: "Indfældet og oplyst. Kan udskiftes efter behov" },
  { title: "Folieprint", description: "Et valgfrit lag. Trykt, påsat, aftagelig." },
];

const specRows: [string, string][] = [
  ["MATERIALE", "Børstet rustfrit stål, 304"],
  ["VÆGT", "150 kilogram"],
  ["PLACERING", "Inde & ude, alle årstider"],
  ["LYS", "Integreret LED — bane & point"],
  ["KOMPONENTER", "732 enkeltdele"],
  ["TEGNINGER", "130 tekniske tegninger"],
  ["FINISH", "Børstet stål"],
];

const keyFigures = [
  { number: "732", label: "Enkeltkomponenter" },
  { number: "130", label: "Tekniske tegninger" },
  { number: "150kg", label: "Børstet rustfrit stål" },
];

export default function DaBordetPage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table.jpg"
            alt="Stadium 11-11 — X-ramme profil"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 15%", filter: "brightness(1.08) contrast(1.06) saturate(1.05)" }}
          />
        </div>
        <div
          className="hero-bleed__veil"
          style={{
            background: "linear-gradient(180deg, rgba(11,10,8,0.55) 0%, rgba(11,10,8,0.15) 30%, rgba(11,10,8,0.25) 60%, rgba(11,10,8,0.85) 100%)",
          }}
        />
        <div className="hero-bleed__inner" style={{ paddingTop: "140px" }}>
          <div className="hero-bleed__title fade-up" data-delay="1">
            <span
              style={{
                display: "block",
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                color: "rgba(242,238,229,0.65)",
                marginBottom: "20px",
              }}
            >
              Håndbygget i København
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 1.02 }}>Stadium 11–11</h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Objektet</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Ét objekt. Besluttet.</span>
            </div>
            <div className="hero-bleed__cta">
              <a
                href="/da/showroom#kontakt"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  padding: "0 36px",
                  height: "56px",
                  border: "1px solid #F2EEE5",
                  background: "#F2EEE5",
                  color: "#0B0A08",
                  fontFamily: "Inter Tight, sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
              >
                Forespørg om dit bord
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>SPECIFIKATION</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(28px, 3vw, 42px)", color: "#F2EEE5", marginTop: "16px" }}>Specifikationen</h2>
          </div>
          <div style={{ border: "1px solid rgba(242,238,229,0.15)", overflow: "hidden", marginTop: "24px" }}>
            {specRows.map(([label, value], i) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 24px", borderBottom: i < specRows.length - 1 ? "1px solid rgba(242,238,229,0.1)" : "none", gap: "16px" }}>
                <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", flexShrink: 0 }}>{label}</span>
                <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "#F2EEE5", textAlign: "right" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth: "1400px", margin: "96px auto 0" }}>
          <div style={{ marginBottom: "32px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>TEKNISK TEGNING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(28px, 3vw, 42px)", color: "#F2EEE5", marginTop: "16px" }}>Tegningen.</h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.62)", marginTop: "16px", lineHeight: "1.7", maxWidth: "480px" }}>
              130 tekniske tegninger. Nøjagtige mål og fuld dokumentation deles ved forespørgsel.
            </p>
          </div>
          <DrawingViewer />
        </div>

        <div style={{ maxWidth: "1400px", margin: "64px auto 0" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(242,238,229,0.12)",
            borderBottom: "1px solid rgba(242,238,229,0.12)",
            marginBottom: "48px",
          }}>
            {keyFigures.map((item, i) => (
              <div key={item.number} style={{ padding: "40px 32px", borderRight: i < keyFigures.length - 1 ? "1px solid rgba(242,238,229,0.12)" : "none", textAlign: "center" }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "72px", color: "#F2EEE5", lineHeight: 1, marginBottom: "12px" }}>{item.number}</div>
                <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>{item.label}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="/da/showroom#kontakt"
              style={{
                width: "100%",
                maxWidth: "520px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 32px",
                height: "56px",
                border: "1px solid rgba(242,238,229,0.3)",
                background: "transparent",
                color: "#F2EEE5",
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                textDecoration: "none",
              }}
            >
              FORESPØRG OM DIT BORD
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          minHeight: "500px",
        }}>
          <div style={{ position: "relative", minHeight: "400px" }}>
            <Image
              src="/uploads/woodoo_stadium_side.png"
              alt="Regn på rustfrit stål — detalje"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 60%" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 48px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>OBJEKTET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(36px, 4vw, 64px)", color: "#F2EEE5", lineHeight: 1.05, margin: "0 0 24px" }}>Én konstruktion.<br /><em>Lavet individuelt.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.75)", lineHeight: "1.8", margin: 0, maxWidth: "42ch" }}>En svejset monocoque i børstet rustfrit stål. Hvert element er overvejet, hvisse elementer er dit at specificere.</p>
          </div>
        </div>
        <div className="elements-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(242,238,229,0.1)" }}>
          {anatomyItems.map((item, index) => (
            <div
              key={item.title}
              className="fade-up"
              style={{
                padding: "48px 36px",
                borderRight: index % 4 !== 3 ? "1px solid rgba(242,238,229,0.1)" : "none",
                borderBottom: index < 4 ? "1px solid rgba(242,238,229,0.1)" : "none",
              }}
            >
              <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", display: "block", marginBottom: "24px", letterSpacing: "0.1em" }}>0{index + 1}</span>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "26px", color: "#F2EEE5", margin: "0 0 16px" }}>{item.title}</h3>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.55)", lineHeight: "1.7", margin: 0 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Klar</span></div>
          <h2 className="h2 fade-up" data-delay="1">Alle forespørgsler besvares i hånden.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            Vi sender dig den fulde specifikation, leveringstid og et første forslag inden for to arbejdsdage.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/da/showroom#kontakt">Forespørg om dit bord</a>
        </div>
      </section>
    </>
  );
}
