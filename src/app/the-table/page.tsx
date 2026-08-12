import DrawingViewer from "@/components/DrawingViewer";
import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { CardGrid, Card } from "@/components/CardGrid";

export const metadata: Metadata = {
  title: "The Stadium 11–11 | Woodoo Stadium — Luxury Stainless Steel Foosball Table",
  description: "The Stadium 11–11 is a precision-engineered luxury foosball table. Handbuilt in Copenhagen from bead-blasted stainless steel. 732 components. Indoor and outdoor. Made to order.",
};

const anatomyItems = [
  { title: "Frame", description: "A welded monocoque. One body, not assembled. The structure is the object." },
  { title: "Playing field", description: "Bead-blasted stainless steel, or painted to a colour of your choosing. Illuminated from within either way." },
  { title: "Rods", description: "Calibrated steel. Custom-engineered bearings. The strike of the ball carries forty metres." },
  { title: "Players", description: "Standard cast, CNC-machined, or built to a custom design. Balanced for play, designed for presence." },
  { title: "Power", description: "Rechargeable battery, or hardwired to a cable socket. Your call." },
  { title: "Lighting", description: "Integrated into the body. Field and plate. White, or any colour in the spectrum." },
  { title: "Brand plates", description: "Recessed and etched. Changeable to any identity you choose to carry." },
  { title: "Foil print", description: "An optional layer. Printed, applied, removable." },
];

const specRows: [string, string][] = [
  ["MATERIAL", "Bead-blasted stainless steel, 304"],
  ["WEIGHT", "150 kilograms"],
  ["HABITAT", "Indoor & outdoor, all seasons"],
  ["WARRANTY", "5-year warranty on the Stadium 11–11"],
  ["LIGHT", "Integrated LED — field & plate"],
  ["COMPONENTS", "732 individual parts"],
  ["ENGINEERING", "130 technical drawings"],
  ["FINISH", "Brushed, not polished"],
  ["DIMENSIONS", "Confirmed at enquiry"],
];

const keyFigures = [
  { number: "732", label: "Individual components" },
  { number: "130", label: "Technical drawings" },
  { number: "150kg", label: "Bead-blasted stainless steel" },
];

const SHOW_DELIVERIES = false; // TODO: flip to true once real delivery photos exist

export default function TheTablePage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table.jpg"
            alt="Stadium 11-11 — X-frame profile"
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
              Handbuilt in Copenhagen
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 1.02 }}>The Stadium 11–11</h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>The Object</span>
              <span className="val" style={{ color: "#F2EEE5" }}>One object. <em style={{ color: "var(--pine-on-dark)" }}>Decided upon.</em></span>
            </div>
            <div className="hero-bleed__cta">
              <a href="/atelier#contact" className="btn btn--hero-filled">
                Enquire about yours
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <SectionHeading
            kicker="SPECIFICATION"
            kickerIndex="N° 01"
            variant="dark"
            size="section"
            heading="The Specification"
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
              kicker="TECHNICAL DRAWING"
              kickerIndex="N° 02"
              variant="dark"
              size="section"
              heading="The Drawing."
            />
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)", maxWidth: "480px" }}>
              130 technical drawings. Exact dimensions and full documentation shared at enquiry.
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
            <a href="/atelier#contact" className="btn btn--filled-on-dark">
              ENQUIRE ABOUT YOURS
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
            alt="Rain detail on stainless steel"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 60%" }}
          />
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 48px" }}>
            <SectionHeading
              kicker="THE OBJECT"
              kickerIndex="N° 03"
              variant="dark"
              heading={<>One body.<br /><em>Made to order.</em></>}
            />
            <p className="body" style={{ marginTop: "24px", color: "var(--mid-on-dark)", maxWidth: "42ch" }}>A welded monocoque in bead-blasted stainless steel. Every element considered, every element yours to specify.</p>
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

      {SHOW_DELIVERIES && (
        <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
          <SectionHeading
            kicker="DELIVERIES"
            kickerIndex="N° 04"
            variant="dark"
            heading={<>Where it's <em>arrived.</em></>}
          />
          <div style={{ marginTop: "48px" }}>
            <CardGrid cols={3} variant="dark">
              <Card num="01" title="—" body="[PLACEHOLDER: Client — City — Month/year]" />
              <Card num="02" title="—" body="[PLACEHOLDER: Client — City — Month/year]" />
              <Card num="03" title="—" body="[PLACEHOLDER: Client — City — Month/year]" />
            </CardGrid>
          </div>
        </section>
      )}

      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Ready</span></div>
          <h2 className="h2 fade-up" data-delay="1">Every enquiry answered personally.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            We will send you the full specification, lead time, and a first proposal within two working days.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/atelier#contact">Enquire about yours</a>
        </div>
      </section>
    </>
  );
}