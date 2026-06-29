import DrawingViewer from "@/components/DrawingViewer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Stadium 11–11 | Woodoo Stadium — Luxury Stainless Steel Foosball Table",
  description: "The Stadium 11–11 is a precision-engineered luxury foosball table. Handbuilt in Copenhagen from brushed stainless steel. 732 components. Indoor and outdoor. Made to order.",
};

const anatomyItems = [
  { title: "Frame", description: "A welded monocoque. One body, not assembled. The structure is the object." },
  { title: "Playing field", description: "Brushed stainless steel, or painted to a colour of your choosing. Illuminated from within either way." },
  { title: "Rods", description: "Calibrated steel. Custom-engineered bearings. The strike of the ball carries forty metres." },
  { title: "Players", description: "Standard cast, CNC-machined, or built to a custom design. Balanced for play, designed for presence." },
  { title: "Power", description: "Rechargeable battery, or hardwired to a cable socket. Your call." },
  { title: "Lighting", description: "Integrated into the body. Field and plate. White, or any colour in the spectrum." },
  { title: "Brand plates", description: "Recessed and etched. Changeable to any identity you choose to carry." },
  { title: "Foil print", description: "An optional layer. Printed, applied, removable." },
];

const specRows: [string, string][] = [
  ["MATERIAL", "Brushed stainless steel, 304"],
  ["WEIGHT", "150 kilograms"],
  ["HABITAT", "Indoor & outdoor, all seasons"],
  ["LIGHT", "Integrated LED — field & plate"],
  ["COMPONENTS", "732 individual parts"],
  ["ENGINEERING", "130 technical drawings"],
  ["FINISH", "Brushed, not polished"],
  ["DIMENSIONS", "Confirmed at enquiry"],
];

const keyFigures = [
  { number: "732", label: "Individual components" },
  { number: "130", label: "Technical drawings" },
  { number: "150kg", label: "Brushed stainless steel" },
];

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
              <span className="val" style={{ color: "#F2EEE5" }}>One object. Decided upon.</span>
            </div>
            <div className="hero-bleed__cta">
              <a
                href="/atelier#contact"
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
                Enquire about yours
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>SPECIFICATION</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(28px, 3vw, 42px)", color: "#F2EEE5", marginTop: "16px" }}>The Specification</h2>
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
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>TECHNICAL DRAWING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(28px, 3vw, 42px)", color: "#F2EEE5", marginTop: "16px" }}>The Drawing.</h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.62)", marginTop: "16px", lineHeight: "1.7", maxWidth: "480px" }}>
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
            
              <a 
              href="/atelier#contact"
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
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>THE OBJECT</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(36px, 4vw, 64px)", color: "#F2EEE5", lineHeight: 1.05, margin: "0 0 24px" }}>One body.<br /><em>Made to order.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.75)", lineHeight: "1.8", margin: 0, maxWidth: "42ch" }}>A welded monocoque in brushed stainless steel. Every element considered, every element yours to specify.</p>
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
          <div className="fade-up"><span className="kicker">Ready</span></div>
          <h2 className="h2 fade-up" data-delay="1">Every enquiry answered by hand.</h2>
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