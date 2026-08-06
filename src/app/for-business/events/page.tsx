import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branded Foosball Table Hire for Corporate Events | Woodoo Stadium",
  description: "Bring the Stadium 11–11 to your next corporate event, trade show, or client activation. Custom-branded foosball table for international placements — pricing on request. Built in Copenhagen.",
  alternates: {
    canonical: "https://woodoo-stadium.com/for-business/events",
    languages: { da: "https://woodoo-stadium.com/da/erhverv/events" },
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
        { "@type": "ListItem", position: 3, name: "Events & Agencies", item: "https://woodoo-stadium.com/for-business/events" },
      ],
    },
    {
      "@type": "Service",
      name: "Branded foosball table hire for corporate events — Stadium 11–11",
      description: "Custom-branded foosball table rental for corporate events, trade shows, team building, and client activations. Logo etched into bead-blasted steel.",
      provider: { "@type": "Organization", name: "Woodoo Stadium", url: "https://woodoo-stadium.com" },
      areaServed: [{ "@type": "Country", name: "DK" }, { "@type": "Country", name: "DE" }, { "@type": "Country", name: "SE" }],
    },
  ],
};

const eventArguments = [
  { number: "01", stat: "Dwell time", description: "People stay longer. A reception area becomes a destination. A trade stand becomes a reason to stop, rather than pass through." },
  { number: "02", stat: "Organic reach", description: "The table gets photographed and shared — on Instagram, LinkedIn, and in group chats — before anyone has written a word about it." },
  { number: "03", stat: "Brand permanence", description: "Your client's logo etched directly into steel. Not a vinyl wrap. Not a sticker. Part of the object itself — present in every photograph taken in the room." },
  { number: "04", stat: "Social activation", description: "Eye contact happens. Conversations start without introduction. Strangers become teammates. That is not a side effect. It is the architecture." },
];

const stats = [
  { figure: "78%", text: "recall a brand after an experiential interaction — versus only seconds of recall after digital advertising.", source: "Zipdo Experiential Marketing Research, 2026" },
  { figure: "82%", text: "say interactive experiences are the most memorable form of brand contact.", source: "Zipdo Experiential Marketing Research, 2026" },
  { figure: "3×", text: "higher brand recall from experiential marketing compared to traditional advertising.", source: "Zipdo Experiential Marketing Research, 2026" },
  { figure: "85%", text: "are more likely to purchase after participating in an experiential activation.", source: "Freeman Experience Report, 2025" },
  { figure: "64%", text: "of event attendees prefer tangible, interactive experiences over apps and screens.", source: "Freeman Experience Report, 2025" },
  { figure: "5–12 min", text: "average dwell time at an interactive stand, versus seconds at a static one.", source: "Exhibitor Magazine" },
];

const eventTypes = [
  { label: "Summer parties" },
  { label: "Christmas parties" },
  { label: "Team building" },
  { label: "Conferences & kick-offs" },
  { label: "Client events" },
  { label: "Trade fairs & showrooms" },
];

const brandingMethods = [
  { number: "01", title: "Illuminated brand plates", description: "Logo etched and backlit in the steel — visible day and night, in every photograph." },
  { number: "02", title: "Branded playing field", description: "The field painted in your client's precise brand colours." },
  { number: "03", title: "Custom LED colour", description: "The table's integrated lighting matched to the brand palette." },
  { number: "04", title: "Branded balls", description: "Logo printed directly on the playing ball — taken home by guests." },
  { number: "05", title: "Campaign message", description: "A short tagline or slogan cut into the steel or set on the playing field." },
];

const pricingRows = [
  { label: "FIXED PLACEMENT (3+ months)", price: "Contact for pricing", note: "" },
  { label: "BRANDING (plates + playing field)", price: "By arrangement", note: "" },
];

const included = [
  "Insurance for the full placement period",
  "Deposit (refunded on return)",
];

const SHOW_CASE_STUDIES = false; // TODO: flip to true once real case studies are ready

export default function ForBusinessEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media" style={{ background: "#0B0A08" }} />
        <div className="hero-bleed__veil" style={{ background: "linear-gradient(180deg, rgba(11,10,8,0.6) 0%, rgba(11,10,8,0.2) 40%, rgba(11,10,8,0.7) 100%)" }} />
        <div className="hero-bleed__inner" style={{ paddingTop: "140px" }}>
          <div className="hero-bleed__title fade-up" data-delay="1">
            <span style={{ display: "block", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(242,238,229,0.65)", marginBottom: "20px" }}>
              Events &amp; Agencies
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05 }}>
              The piece they talk about<br /><em>on the way home.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>For Business</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Branded foosball table rental for corporate events, trade shows &amp; client activations.</span>
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
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>THE EVENT CASE</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Not just an event.<br /><em style={{ color: "var(--pine-on-dark)" }}>A gathering point.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Screens demand attention. Any event can hire a screen, a photo booth, or a DJ. What separates an event people remember from an event people attend is a moment of genuine human connection — and that does not happen by itself.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              When a guest sits down to play, the phone disappears. Eye contact happens. The body moves. People who did not know each other three minutes earlier are now teammates. Everyone in the room stops what they are doing and watches — not because they were asked to, but because they cannot help it.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              That is not a coincidence. It is the architecture of the object. A social infrastructure piece built to activate human interaction in physical spaces — whether that is a corporate summer party, a branded client activation, or an international trade show stand.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>85%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.5)", lineHeight: "1.6", margin: 0 }}>
                can recall a specific sender behind a branded physical object they have held in their hands.<br />
                <em style={{ opacity: 0.6 }}>ASI Research · Journal of Vision</em>
              </p>
            </div>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>5–12 min</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.5)", lineHeight: "1.6", margin: 0 }}>
                average dwell time at an interactive stand, versus seconds at a static one.<br />
                <em style={{ opacity: 0.6 }}>Exhibitor Magazine</em>
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
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>What it does<br /><em style={{ color: "var(--pine-on-dark)" }}>for your event.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
            {eventArguments.map((item, index) => (
              <div key={item.stat} style={{ padding: "40px 32px", borderRight: index < 3 ? "1px solid rgba(242,238,229,0.1)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", display: "block", marginBottom: "20px" }}>{item.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "24px", color: "#F2EEE5", margin: "0 0 16px" }}>{item.stat}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.6)", lineHeight: "1.7", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — The Evidence */}
      <section style={{ background: "#E6E3DA", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "80px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>THE EVIDENCE</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Experience<br /><em style={{ color: "var(--pine)" }}>builds memory.</em></h2>
          </div>
          <div className="grid-3-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: "64px 40px",
                  borderRight: index % 3 !== 2 ? "1px solid rgba(26,24,20,0.12)" : "none",
                  borderBottom: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none",
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

      {/* Passive vs. Active */}
      <section style={{ background: "#E6E3DA", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>N°04 — Passive vs. Active</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Most branded objects are seen.<br /><em style={{ color: "var(--pine)" }}>This one is played.</em></h2>
          </div>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(20px, 2.5vw, 28px)", color: "rgba(26,24,20,0.7)", lineHeight: 1.5, maxWidth: "72ch", marginBottom: "72px" }}>
            The best promotional merchandise in the world still works the same way — someone notices a logo, and moves on. Nothing asks them to stop, gather, or stay.
          </p>
          <div className="grid-3-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            <div style={{ padding: "64px 40px", borderRight: "1px solid rgba(26,24,20,0.12)" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(64px,7vw,96px)", color: "var(--pine)", lineHeight: 1, marginBottom: "24px" }}>3,300</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>Average brand impressions a promotional product generates over its lifetime — each one a passing glance.</p>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Source: ASI Global Advertising Impressions Study, 2026</p>
            </div>
            <div style={{ padding: "64px 40px", borderRight: "1px solid rgba(26,24,20,0.12)" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(64px,7vw,96px)", color: "var(--pine)", lineHeight: 1, marginBottom: "24px" }}>85%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>of consumers remember the brand behind a promotional item — without ever actively engaging with it.</p>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Source: ASI Global Advertising Impressions Study, 2026</p>
            </div>
            <div style={{ padding: "64px 40px" }}>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.75)", lineHeight: "1.8", margin: 0 }}>
                A Woodoo table doesn&apos;t generate a glance. It generates a game — eye contact, competition, a crowd. And unlike a seasonal giveaway with a shelf life, it isn&apos;t consumed, worn out, or thrown away. It&apos;s a permanent fixture in your space, generating new impressions for as long as it stands there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>EVENT TYPES</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Built for the events<br /><em style={{ color: "var(--pine)" }}>you are already running.</em></h2>
          </div>
          <div className="grid-3-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {eventTypes.map((type, index) => (
              <div
                key={type.label}
                style={{
                  padding: "40px 32px",
                  borderRight: index % 3 !== 2 ? "1px solid rgba(26,24,20,0.12)" : "none",
                  borderBottom: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none",
                }}
              >
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(26,24,20,0.3)", display: "block", marginBottom: "20px" }}>0{index + 1}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "26px", color: "#1A1814", margin: 0 }}>{type.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>BRANDING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Your client&apos;s brand.<br /><em style={{ color: "var(--pine-on-dark)" }}>Cut in.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "28px" }}>
              Five ways to make the table unique to your client — all permanent in the steel, not applied as wraps or stickers.
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

      {/* Proof of concept — placeholder cards */}
      {SHOW_CASE_STUDIES && (
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>CASE STUDIES</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "16px" }}>Events in the field.</h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Content will be added here as data from live events becomes available.</p>
          </div>
          <div className="grid-3-responsive">
            {[
              { hint: "Summer party · corporate · city" },
              { hint: "Trade stand · industry · city" },
              { hint: "Client activation · agency · city" },
            ].map((card, i) => (
              <div
                key={i}
                style={{ border: "1px dashed rgba(26,24,20,0.22)", padding: "40px 32px", display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div style={{ background: "rgba(26,24,20,0.05)", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", letterSpacing: "0.14em", color: "rgba(26,24,20,0.25)", textTransform: "uppercase" }}>[ Photo ]</span>
                </div>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(26,24,20,0.35)", margin: 0 }}>
                  [ {card.hint} ]
                </p>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.35)", lineHeight: "1.6", margin: 0 }}>
                  [ Placeholder: outcome description — dwell time, engagement, or reach data from this specific event, once available. ]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Pricing */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div className="two-col two-col--start">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>PRICING &amp; PRACTICAL</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Access — <em style={{ color: "var(--pine-on-dark)" }}>without commitment.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "32px" }}>
              Fixed placement gives you a permanent social anchor in your space without the capital outlay of outright ownership. We send a full specification and a first proposal within two working days.
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
              International delivery is quoted individually, based on location and logistics — it is not included in the placement price and there is no fixed rate. A tailored delivery quote is included as part of your proposal.
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
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            We send a full specification and a first proposal within two working days. Contact: <a href="mailto:contact@woodoo-stadium.com" style={{ color: "inherit" }}>contact@woodoo-stadium.com</a>
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
