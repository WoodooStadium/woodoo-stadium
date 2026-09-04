import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Table Football for Public Space & Urban Architecture | Woodoo Stadium",
  description: "Stadium 11–11 turns public space into a space that moves people. Handcrafted in 100% stainless steel, built for year-round outdoor use. 5-year warranty.",
  alternates: {
    canonical: "https://woodoo-stadium.com/for-business/public-space",
    languages: { da: "https://woodoo-stadium.com/da/erhverv/byrum" },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Woodoo Stadium", item: "https://woodoo-stadium.com" },
        { "@type": "ListItem", position: 2, name: "For Business", item: "https://woodoo-stadium.com/for-business" },
        { "@type": "ListItem", position: 3, name: "Public Space & Architecture", item: "https://woodoo-stadium.com/for-business/public-space" },
      ],
    },
    {
      "@type": "Service",
      name: "Table Football for Public Space — Stadium 11–11",
      description: "A social infrastructure object for public spaces, squares, and outdoor areas. 100% stainless steel, handcrafted in Denmark, built for intensive public use and year-round outdoor conditions.",
      provider: { "@type": "Organization", name: "Woodoo Stadium", url: "https://woodoo-stadium.com" },
      areaServed: [{ "@type": "Country", name: "DK" }, { "@type": "Country", name: "DE" }, { "@type": "Country", name: "SE" }],
    },
  ],
};

const architectArguments = [
  { number: "01", stat: "Dwell time", description: "People stay longer. The space becomes a place people choose to be, not simply cross." },
  { number: "02", stat: "Movement", description: "A social object that invites activity — not just passive occupancy." },
  { number: "03", stat: "Durability", description: "Stainless steel withstands intensive public use and outdoor climates, year after year." },
  { number: "04", stat: "Social activation", description: "Eye contact happens across age and background. Exactly what public space should do." },
];

const proofStats = [
  { figure: "An official priority", text: "Urban design directly shapes how physically active a population is, European health guidance confirms.", source: "WHO Regional Office for Europe" },
  { figure: "Nearly half", text: "of Europeans already use parks and public space for physical activity when it's genuinely inviting.", source: "European Commission, 2022" },
  { figure: "45%", text: "of EU citizens report they never exercise or play sport, and one in three has insufficient physical activity.", source: "WHO/OECD, \"Step Up!\", 2023" },
  { figure: "80%+", text: "of the European population is projected to live in urban areas by 2030.", source: "WHO Regional Office for Europe" },
];

const customisationMethods = [
  { number: "01", title: "Coloured finish", description: "Matched to the public space's existing materials and colour palette." },
  { number: "02", title: "Custom LED lighting", description: "Creates safety and orientation after dark." },
  { number: "03", title: "Engraved plate", description: "The municipality's name, the area's history, or a local greeting." },
  { number: "04", title: "Furnished as a whole", description: "Placed naturally alongside benches, lighting, and planting." },
  { number: "05", title: "Flexible placement", description: "Fixed or movable — for permanent public space or a temporary activation." },
];

const trustPoints = [
  "Handcrafted in Denmark",
  "5-year warranty",
  "Indoor & outdoor",
];

export default function ForBusinessPublicSpacePage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/woodoo_foosball_original_93dbeb38.jfif"
            alt="Stadium 11-11 in public space by day"
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
              Public Space &amp; Architecture
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05 }}>
              The public space<br /><em style={{ color: "#F2EEE5" }}>that moves people.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>For Business</span>
              <span className="val" style={{ color: "#F2EEE5" }}>A social infrastructure object for public spaces, squares &amp; outdoor areas.</span>
            </div>
            <div className="hero-bleed__cta">
              <a
                href="/atelier#contact"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0 32px", height: "56px", border: "1px solid #F2EEE5", background: "#F2EEE5", color: "#0B0A08", fontFamily: "Inter Tight, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.28em", textDecoration: "none" }}
              >
                Send an enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>THE ARCHITECT&apos;S CASE</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Not just public space.<br /><em style={{ color: "var(--pine-on-dark)" }}>A space that moves people.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Many public spaces are designed to be crossed, not used. A bench, a paved square, a lawn — functional, but passive. They occupy space without activating it.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              The World Health Organization points directly at this: the design of the built environment directly shapes how physically active a population actually is. A Woodoo table turns a thoroughfare into a destination — a place that invites movement and encounter, not just passage.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              It is a 150-kilogram social anchor, designed to activate human interaction in physical spaces — and to become a permanent part of the city&apos;s infrastructure, not a seasonal installation.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>31%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>
                of Europeans report sedentary behaviour — a growing public health challenge across cities.<br />
                <em style={{ opacity: 0.6 }}>European Commission, 2022</em>
              </p>
            </div>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>~70%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>
                of studies found that changes to the built environment lead to measurable changes in physical activity.<br />
                <em style={{ opacity: 0.6 }}>Systematic review, Int. J. Behavioral Nutrition &amp; PA</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>WHAT IT DOES</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>A social gathering point.<br /><em style={{ color: "var(--pine-on-dark)" }}>What it does for public space.</em></h2>
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
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>THE PROOF</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Public space design<br /><em style={{ color: "var(--pine)" }}>moves citizens.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {proofStats.map((stat, index) => (
              <div
                key={index}
                style={{ padding: "64px 40px", borderRight: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none" }}
              >
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(36px,4vw,52px)", color: "var(--pine)", lineHeight: 1.1, marginBottom: "24px" }}>{stat.figure}</div>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>{stat.text}</p>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Source: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <div style={{ marginBottom: "64px" }}>
              <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>CUSTOMISATION</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>Fitted to the space.<br /><em style={{ color: "var(--pine-on-dark)" }}>Not a foreign object.</em></h2>
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
              &ldquo;Cities that design outdoor spaces with movement and play in mind see measurable gains in how active their citizens become.&rdquo;
            </p>
            <span style={{ display: "block", marginTop: "20px", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", color: "rgba(242,238,229,0.6)" }}>— WHO Regional Office for Europe, &ldquo;Urban Design for Health&rdquo;</span>
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
          <div className="fade-up"><span className="kicker">Ready</span></div>
          <h2 className="h2 fade-up" data-delay="1">All inquiries are answered personally.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            We&apos;re happy to bring the table for a viewing in your public space before any decision is made. Contact: <a href="mailto:contact@woodoo-stadium.com" style={{ color: "inherit" }}>contact@woodoo-stadium.com</a> · +45 20 11 57 42
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/atelier#contact">Send an inquiry →</a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
