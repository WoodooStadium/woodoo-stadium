import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designer Furniture for Hotel Lobby | Woodoo Stadium",
  description: "The Stadium 11–11 transforms a hotel lobby into a destination. A designer foosball table for hotels — with integrated lighting and logo etched into bead-blasted steel. Handcrafted in Denmark.",
  alternates: {
    canonical: "https://woodoo-stadium.com/for-business/hotels",
    languages: { da: "https://woodoo-stadium.com/da/erhverv/hoteller" },
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
        { "@type": "ListItem", position: 3, name: "Hotels & Hospitality", item: "https://woodoo-stadium.com/for-business/hotels" },
      ],
    },
    {
      "@type": "Service",
      name: "Designer foosball table for hotel lobbies — Stadium 11–11",
      description: "A social infrastructure object for hotel lobbies, outdoor terraces, and social spaces. Logo etched directly into bead-blasted steel. Handcrafted in Denmark.",
      provider: { "@type": "Organization", name: "Woodoo Stadium", url: "https://woodoo-stadium.com" },
      areaServed: [{ "@type": "Country", name: "DK" }, { "@type": "Country", name: "DE" }, { "@type": "Country", name: "SE" }],
      offers: [
        { "@type": "Offer", name: "Standard table, full ownership", price: "79000", priceCurrency: "DKK", priceSpecification: { "@type": "PriceSpecification", price: 79000, priceCurrency: "DKK", valueAddedTaxIncluded: false } },
        { "@type": "Offer", name: "Long-term lease (min. 3 months)", price: "9500", priceCurrency: "DKK", priceSpecification: { "@type": "PriceSpecification", price: 9500, priceCurrency: "DKK", valueAddedTaxIncluded: false } },
      ],
    },
  ],
};

const lobbyArguments = [
  { number: "01", stat: "Dwell time", description: "Guests stay longer. The lobby becomes a place people choose to be in, not a space they pass through on the way to their room." },
  { number: "02", stat: "Organic reach", description: "A singular object becomes content. Guests photograph and share it — before anyone has thought to market it." },
  { number: "03", stat: "Brand permanence", description: "Your hotel's identity etched directly into bead-blasted steel. A permanent part of the room, present in every photograph taken in the space." },
  { number: "04", stat: "Social activation", description: "Eye contact happens. Strangers start talking. That is the experience guests write about in reviews — and the reason they come back." },
];

const stats = [
  { figure: "98%", text: "of travellers cite amenities as a key factor when choosing accommodation.", source: "Amadeus Travel Dream Report" },
  { figure: "25%", text: "more social-media-driven bookings for hotels with distinctive design elements.", source: "Hospitality Design Industry Analysis, 2026" },
  { figure: "83%", text: "book a hotel after seeing photos posted by other travellers on social media.", source: "Amadeus Hospitality" },
  { figure: "40%", text: "of millennial travellers rank a hotel's \"Instagrammability\" as decisive — higher than local attractions.", source: "Millennial Travel Survey, UK" },
];

const brandingMethods = [
  { number: "01", title: "Illuminated brand plates", description: "Logo cut and backlit in the steel. Visible in daylight and in the evening — and in every photograph taken near it." },
  { number: "02", title: "Coloured playing surface", description: "The field painted in your hotel's design palette, matched to the interior." },
  { number: "03", title: "Custom LED colour", description: "The table's light calibrated to your lobby's mood — warm, cool, or a specific hue." },
  { number: "04", title: "Personalised finish", description: "Bead-blasted steel, matte black, or another surface expression matched to your space." },
  { number: "05", title: "Branded balls", description: "A detail guests notice — and take with them." },
];

const pricingRows = [
  { label: "STANDARD TABLE, FULL OWNERSHIP", price: "DKK 79,000", note: "excl. VAT" },
  { label: "LONG-TERM LEASE (min. 3 months)", price: "DKK 9,500/mo.", note: "excl. VAT" },
  { label: "BRANDING (plates + lighting + surface)", price: "By arrangement", note: "" },
];

const included = [
  "Handcrafted in Denmark",
  "5-year warranty",
  "Indoor & outdoor rated",
];

export default function ForBusinessHotelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media" style={{ background: "#0B0A08" }} />
        <div className="hero-bleed__veil" style={{ background: "linear-gradient(180deg, rgba(11,10,8,0.6) 0%, rgba(11,10,8,0.2) 40%, rgba(11,10,8,0.7) 100%)" }} />
        <div className="hero-bleed__inner" style={{ paddingTop: "140px" }}>
          <div className="hero-bleed__title fade-up" data-delay="1">
            <span style={{ display: "block", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(242,238,229,0.65)", marginBottom: "20px" }}>
              Hotels &amp; Hospitality
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05 }}>
              The lobby guests<br /><em>never forget.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>For Business</span>
              <span className="val" style={{ color: "#F2EEE5" }}>A design object for hotel lobbies, outdoor terraces &amp; social spaces.</span>
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

      {/* Opening */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>THE HOTEL CASE</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Not just furniture.<br /><em style={{ color: "var(--pine-on-dark)" }}>A destination.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Most hotel lobbies have the same problem. The furniture is designed to be sat in, not to make something happen. A guest checks in, finds a seat, reaches for their phone. The space carries on as decor.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              A Woodoo table changes the physics of a room. When someone sits down to play, the phone goes away. Eye contact happens. People who checked in twenty minutes apart are suddenly in a game together — while the rest of the lobby watches, then waits for their turn.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              That is not a fortunate accident. It is the architecture of the object. A 150-kilogram social anchor built to activate human interaction in physical spaces — and designed to be a permanent part of the room, not an installation for a season.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>83%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.5)", lineHeight: "1.6", margin: 0 }}>
                book a hotel after seeing photos posted by other travellers on social media.<br />
                <em style={{ opacity: 0.6 }}>Amadeus Hospitality</em>
              </p>
            </div>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>40%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.5)", lineHeight: "1.6", margin: 0 }}>
                of millennial travellers rank a hotel&apos;s &ldquo;Instagrammability&rdquo; as decisive — higher than local attractions.<br />
                <em style={{ opacity: 0.6 }}>Millennial Travel Survey, UK</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-card grid */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>WHAT IT DOES</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>What it does<br /><em style={{ color: "var(--pine-on-dark)" }}>for your lobby.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
            {lobbyArguments.map((item, index) => (
              <div key={item.stat} style={{ padding: "40px 32px", borderRight: index < 3 ? "1px solid rgba(242,238,229,0.1)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", display: "block", marginBottom: "20px" }}>{item.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "24px", color: "#F2EEE5", margin: "0 0 16px" }}>{item.stat}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.6)", lineHeight: "1.7", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — The Proof */}
      <section style={{ background: "#E6E3DA", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "80px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>THE PROOF</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Design<br /><em style={{ color: "var(--pine)" }}>drives bookings.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: "64px 40px",
                  borderRight: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none",
                }}
              >
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(64px,7vw,96px)", color: "var(--pine)", lineHeight: 1, marginBottom: "24px" }}>{stat.figure}</div>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>{stat.text}</p>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Source: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>DESIGN &amp; BRANDING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Your hotel&apos;s identity.<br /><em style={{ color: "var(--pine-on-dark)" }}>Cut right in.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              The Stadium 11–11&apos;s integrated LED system is fully adjustable — colour, warmth, and intensity matched to your existing interior, day or evening. It is not a lighting fixture added to the table. It is part of the same design object.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "28px" }}>
              Five ways to embed your hotel&apos;s visual identity permanently into the steel — not applied, not wrapped, not removable.
            </p>
            <div style={{ padding: "24px", background: "rgba(242,238,229,0.04)", border: "1px solid rgba(242,238,229,0.1)" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "18px", color: "#F2EEE5", lineHeight: 1.4, margin: "0 0 12px" }}>
                &ldquo;85% can recall the specific sender behind a branded physical object they have held in their hands.&rdquo;
              </p>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(242,238,229,0.35)", margin: 0 }}>ASI Research · Journal of Vision</p>
            </div>
          </div>
          <div>
            <div style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
              {brandingMethods.map((method) => (
                <div
                  key={method.title}
                  style={{ padding: "24px 0", borderBottom: "1px solid rgba(242,238,229,0.1)", display: "flex", gap: "24px", alignItems: "flex-start" }}
                >
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", flexShrink: 0, paddingTop: "3px" }}>{method.number}</span>
                  <div>
                    <h3 style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EEE5", margin: "0 0 6px" }}>{method.title}</h3>
                    <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.55)", lineHeight: "1.6", margin: 0 }}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div className="two-col two-col--start">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>PRICING &amp; PRACTICAL</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Ownership —<br /><em style={{ color: "var(--pine-on-dark)" }}>or try it first.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "32px" }}>
              Two ways in — both without long-term commitment if you would rather start small. We send full specifications and a first proposal within two working days.
            </p>
            <div style={{ border: "1px solid rgba(242,238,229,0.15)", overflow: "hidden" }}>
              {pricingRows.map(({ label, price, note }, i) => (
                <div
                  key={label}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 20px", borderBottom: i < pricingRows.length - 1 ? "1px solid rgba(242,238,229,0.1)" : "none", gap: "16px", flexWrap: "wrap" }}
                >
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", flexShrink: 0 }}>{label}</span>
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "#F2EEE5", textAlign: "right" }}>
                    {price}
                    {note && <span style={{ fontSize: "10px", color: "rgba(242,238,229,0.4)", marginLeft: "6px" }}>{note}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>INCLUDED</span>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {included.map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(242,238,229,0.4)", flexShrink: 0, lineHeight: 1.6 }}>—</span>
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.65)", lineHeight: "1.6" }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.4)", lineHeight: "1.7" }}>
              Delivery and installation within Denmark is included in the price. Outside Denmark, calculated separately by location.
            </p>
            <div style={{ marginTop: "32px" }}>
              <a
                href="/atelier#contact"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0 32px", height: "56px", background: "#F2EEE5", color: "#0B0A08", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.28em", textDecoration: "none", fontWeight: 500 }}
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Ready</span></div>
          <h2 className="h2 fade-up" data-delay="1">Every enquiry answered personally.</h2>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.4, maxWidth: "52ch", marginBottom: "16px" }} className="fade-up" data-delay="2">
            Every dream needs a field. Here is yours.
          </p>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            We send full specifications and a first proposal within two working days. Contact: <a href="mailto:contact@woodoo-stadium.com" style={{ color: "inherit" }}>contact@woodoo-stadium.com</a>
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/atelier#contact">Send an enquiry →</a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
