import DrawingViewer from "@/components/DrawingViewer";
import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { CardGrid, Card } from "@/components/CardGrid";

export const metadata: Metadata = {
  title: "Stadium 11–11 | Woodoo Stadium — Luksus rustfrit stål bordfodboldbord",
  description: "Stadium 11–11 er et præcisionsingeniøreret luksus bordfodboldbord. Håndbygget i København af glasblæst rustfrit stål. 732 komponenter. Inde og ude. Lavet til ordre.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/bordet",
    languages: { en: "https://woodoo-stadium.com/the-table" },
  },
};

const anatomyItems = [
  { title: "Ramme", description: "Fuldsvejst ramme. Én konstruktion, ikke samlet. Strukturen er objektet." },
  { title: "Spillebane", description: "Glasblæst rustfrit stål, lakeret i valgfri farve efter eller folieret. Oplyst med LED." },
  { title: "Stænger", description: "Præcisionsrør i blankglødet stål med titanium legering. Specialudviklede lejer. Boldens anslag bæres fyrre meter." },
  { title: "Spillere", description: "Rå eller poleret, CNC-bearbejdet, eller bygget til et custom design. Afbalanceret til spil, designet til tilstedeværelse." },
  { title: "Strøm", description: "Genopladelig batteripakke, eller strømudtag med stik. Dit valg." },
  { title: "Belysning", description: "Integreret i bordet. Oplyst point i valgfri farve. Hvidt eller varmt lys på banen." },
  { title: "Brandplader", description: "Indfældet og oplyst. Valgfri farver og kombinationer. Kan udskiftes efter behov" },
  { title: "Folieprint & Lakering", description: "Et valgfrit lag. Trykt, påsat & aftagelig - eller påført, hærdet & permanent." },
];

const specRows: [string, string][] = [
  ["MATERIALE", "Glasblæst rustfrit stål, A304 + A316"],
  ["VÆGT", "ca. 150 kg."],
  ["PLACERING", "Inde & ude, alle årstider"],
  ["LYS", "Mulighed for integreret LED på bane, point og brandplader"],
  ["KOMPONENTER", "732 enkeltdele. Leveret i sin endelige helhed."],
  ["TEGNINGER", "130 tekniske tegninger. Én sides brugsvejledning."],
  ["FINISH", "Glasblæst stål - lakering eller foliering er mulig efter ønske."],
];

const keyFigures = [
  { number: "732", label: "Enkeltkomponenter" },
  { number: "130", label: "Tekniske tegninger" },
  { number: "150kg", label: "Glasblæst rustfrit stål" },
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
              <span className="val" style={{ color: "#F2EEE5" }}>Ét objekt. Perfektioneret.</span>
            </div>
            <div className="hero-bleed__cta">
              <a href="/da/showroom#kontakt" className="btn btn--hero-filled">
                Forespørg om dit bord
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionHeading
            kicker="SPECIFIKATION"
            kickerIndex="N° 01"
            variant="dark"
            size="section"
            heading="Specifikationen"
          />
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
            <SectionHeading
              kicker="TEKNISK TEGNING"
              kickerIndex="N° 02"
              variant="dark"
              size="section"
              heading="Tegningen."
            />
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)", maxWidth: "480px" }}>
              130 tekniske tegninger. Nøjagtige mål og dokumentation deles ved forespørgsel.
            </p>
          </div>
          <DrawingViewer />
        </div>

        <div style={{ maxWidth: "1400px", margin: "64px auto 0" }}>
          <div className="grid-3-responsive" style={{
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
            <a href="/da/showroom#kontakt" className="btn btn--filled-on-dark">
              FORESPØRG OM DIT BORD
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08" }}>
        <div className="split-uneven" style={{
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
            <SectionHeading
              kicker="OBJEKTET"
              kickerIndex="N° 03"
              variant="dark"
              heading={<>Én konstruktion.<br /><em>Lavet individuelt.</em></>}
            />
            <p className="body" style={{ marginTop: "24px", color: "var(--mid-on-dark)", maxWidth: "42ch" }}>En fuldsvejst ramme i glasblæst rustfrit stål. Hvert element er overvejet, visse elementer er dit at specificere.</p>
          </div>
        </div>
        <CardGrid cols={4} variant="dark">
          {anatomyItems.map((item, index) => (
            <Card
              key={item.title}
              num={`0${index + 1}`}
              title={item.title}
              body={item.description}
            />
          ))}
        </CardGrid>
      </section>

      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Klar</span></div>
          <h2 className="h2 fade-up" data-delay="1">Alle forespørgsler besvares personligt.</h2>
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
