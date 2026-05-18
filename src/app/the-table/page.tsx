import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Stadium 11–11 | WooDoo Stadium — Luxury Stainless Steel Foosball Table",
  description:
    "The Stadium 11–11 is a precision-engineered luxury foosball table. Handbuilt in Copenhagen from brushed stainless steel. 732 components. Indoor and outdoor. Made to order.",
};

const anatomyItems = [
  { title: "Frame", description: "A welded monocoque. One body, not assembled. The structure is the object." },
  { title: "Playing field", description: "Illuminated from within. The surface reads in a room before you approach it." },
  { title: "Rods", description: "Calibrated steel. Ceramic bearings. The strike of the ball carries forty metres." },
  { title: "Players", description: "Cast with intention. Balanced for play, designed for presence." },
  { title: "Lighting", description: "Integrated into the body. Field and plate. Visible when lit, invisible at rest." },
  { title: "Brand plates", description: "Recessed and etched. Your identity made permanent — not applied." },
];

export default function TheTablePage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/woodoo_foosball_original_58ab0836.jfif"
            alt="Stadium 11-11 side profile"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-bleed__veil" />
        <div className="hero-bleed__inner" style={{ paddingTop: "120px" }}>
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1" style={{ fontSize: "clamp(48px, 6vw, 96px)" }}>The Stadium 11–11</h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2">
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>The Object</span>
              <span className="val" style={{ color: "#F2EEE5" }}>One object. Decided upon.</span>
            </div>
            <div className="hero-bleed__cta">
              <a
                className="btn btn--filled-on-dark"
                href="/atelier#contact"
                style={{
                  width: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignSelf: "flex-start",
                  padding: "0 32px",
                  height: "56px",
                  border: "1px solid #F2EEE5",
                  background: "transparent",
                  color: "#F2EEE5",
                  fontFamily: "Inter Tight, sans-serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                  textDecoration: "none",
                }}
              >
                ENQUIRE ABOUT YOURS <span style={{ marginLeft: "8px" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Spec + Drawing section */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div
          className="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "64px",
            alignItems: "start",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Specs column */}
          <div style={{ display: "grid", gap: "24px" }}>
            <div>
              <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>SPECIFICATION</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(28px, 3vw, 42px)", color: "#F2EEE5", marginTop: "16px" }}>The Specification</h2>
            </div>
            <div style={{ border: "1px solid rgba(242,238,229,0.15)", overflow: "hidden" }}>
              {[
                ["MATERIAL", "Brushed stainless steel, 304"],
                ["WEIGHT", "150 kilograms"],
                ["HABITAT", "Indoor & outdoor, all seasons"],
                ["LIGHT", "Integrated LED — field & plate"],
                ["COMPONENTS", "732 individual parts"],
                ["ENGINEERING", "130 technical drawings"],
                ["FINISH", "Brushed, not polished"],
                ["DIMENSIONS", "Confirmed at enquiry"],
              ].map(([label, value], i, arr) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 24px",
                    borderBottom: i < arr.length - 1 ? "1px solid rgba(242,238,229,0.1)" : "none",
                    gap: "16px",
                  }}
                >
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", flexShrink: 0 }}>{label}</span>
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "#F2EEE5", textAlign: "right" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Drawing column */}
          <div style={{ display: "grid", gap: "24px" }}>
            <div>
              <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>TECHNICAL DRAWING</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(28px, 3vw, 42px)", color: "#F2EEE5", marginTop: "16px" }}>The Drawing.</h2>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.62)", marginTop: "16px", lineHeight: "1.7", maxWidth: "480px" }}>
                130 technical drawings. Exact dimensions and full documentation shared at enquiry.
              </p>
            </div>
            <a
              href="/uploads/WooDoo_Spec.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", border: "1px solid rgba(242,238,229,0.15)", textDecoration: "none", overflow: "hidden" }}
            >
              {/* Blueprint SVG */}
              <svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
                <rect width="560" height="320" fill="#0D0C0A" />
                {/* Grid lines */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="320" stroke="rgba(242,238,229,0.04)" strokeWidth="1" />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="560" y2={i * 50} stroke="rgba(242,238,229,0.04)" strokeWidth="1" />
                ))}
                {/* Table silhouette — side profile */}
                {/* Main body */}
                <rect x="80" y="110" width="400" height="80" fill="none" stroke="rgba(242,238,229,0.25)" strokeWidth="1.5" />
                {/* Playing field inset */}
                <rect x="100" y="120" width="360" height="60" fill="none" stroke="rgba(242,238,229,0.12)" strokeWidth="1" />
                {/* Left leg */}
                <rect x="100" y="190" width="24" height="70" fill="none" stroke="rgba(242,238,229,0.25)" strokeWidth="1.5" />
                {/* Right leg */}
                <rect x="436" y="190" width="24" height="70" fill="none" stroke="rgba(242,238,229,0.25)" strokeWidth="1.5" />
                {/* Cross brace */}
                <line x1="124" y1="240" x2="436" y2="240" stroke="rgba(242,238,229,0.15)" strokeWidth="1" />
                {/* Rods — 8 of them */}
                {[130, 165, 200, 235, 285, 325, 375, 420].map((x, i) => (
                  <g key={i}>
                    <line x1={x} y1="100" x2={x} y2="210" stroke="rgba(242,238,229,0.18)" strokeWidth="1" strokeDasharray="2,3" />
                    <circle cx={x} cy="150" r="5" fill="none" stroke="rgba(242,238,229,0.3)" strokeWidth="1" />
                  </g>
                ))}
                {/* Dimension lines */}
                <line x1="80" y1="290" x2="480" y2="290" stroke="rgba(242,238,229,0.2)" strokeWidth="0.75" />
                <line x1="80" y1="285" x2="80" y2="295" stroke="rgba(242,238,229,0.2)" strokeWidth="0.75" />
                <line x1="480" y1="285" x2="480" y2="295" stroke="rgba(242,238,229,0.2)" strokeWidth="0.75" />
                <line x1="50" y1="110" x2="50" y2="190" stroke="rgba(242,238,229,0.2)" strokeWidth="0.75" />
                <line x1="45" y1="110" x2="55" y2="110" stroke="rgba(242,238,229,0.2)" strokeWidth="0.75" />
                <line x1="45" y1="190" x2="55" y2="190" stroke="rgba(242,238,229,0.2)" strokeWidth="0.75" />
                {/* Labels */}
                <text x="280" y="308" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(242,238,229,0.35)" letterSpacing="2">WIDTH — CONFIRMED AT ENQUIRY</text>
                <text x="32" y="155" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(242,238,229,0.35)" letterSpacing="1" transform="rotate(-90, 32, 155)">HEIGHT</text>
                {/* Document label */}
                <text x="280" y="52" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="22" fill="rgba(242,238,229,0.7)" fontWeight="300">Stadium 11–11</text>
                <text x="280" y="70" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(242,238,229,0.3)" letterSpacing="3">TS–S11 · SIDE ELEVATION</text>
                {/* Open document hint */}
                <text x="480" y="308" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(242,238,229,0.25)" letterSpacing="1">OPEN →</text>
              </svg>
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="fade-up" style={{ marginTop: "64px", display: "flex", justifyContent: "center" }}>
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
            ENQUIRE ABOUT YOURS →
          </a>
        </div>
      </section>

      {/* Rain image */}
      <section style={{ position: "relative", minHeight: "70vh" }}>
        <Image
          src="/uploads/foosball_table_rain.jpg"
          alt="Stadium 11-11 in the rain"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </section>

      {/* Six elements */}
      <section className="section section--alt">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto 40px" }}>
          <span className="kicker">THE OBJECT</span>
          <h2 className="h2">One body. Six elements.</h2>
        </div>
        <div className="photo fade-up" data-delay="1" style={{ minHeight: "520px", marginBottom: "40px", position: "relative" }}>
          <Image
            src="/uploads/woodoo_stadium_top.png"
            alt="Stadium 11-11 top view"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="ruled-grid ruled-grid--3 fade-up" data-delay="2">
          {anatomyItems.map((item, index) => (
            <div className="cell" key={item.title}>
              <span className="num">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p className="body">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA row */}
      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Ready</span></div>
          <h2 className="h2 fade-up" data-delay="1">Ready to know more?</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            Every enquiry is answered by hand within two working days. We will send you the full specification, lead time, and a first proposal.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/atelier#contact">Enquire about yours <span className="arrow">→</span></a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What is the WooDoo Stadium 11–11?", acceptedAnswer: { "@type": "Answer", text: "A precision-engineered luxury foosball table, handbuilt in Copenhagen from brushed stainless steel 304. It weighs 150 kilograms, contains 732 individual components, and is built for permanent indoor and outdoor use." } },
              { "@type": "Question", name: "What materials is the Stadium 11–11 made from?", acceptedAnswer: { "@type": "Answer", text: "Brushed stainless steel 304, welded into a single monocoque body. The finish is brushed, not polished." } },
              { "@type": "Question", name: "Can the Stadium 11–11 be used outdoors?", acceptedAnswer: { "@type": "Answer", text: "Yes. It is sealed for permanent outdoor use in all weather conditions including rain, salt air, heat, and cold." } },
            ],
          }),
        }}
      />
    </>
  );
}
