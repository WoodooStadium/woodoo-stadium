import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Business | Woodoo Stadium",
  description: "The Stadium 11–11 is a social infrastructure object. A precision-built branding platform for corporate, hospitality, and public spaces.",
};

const sectors = [
  { number: "01", title: "Corporate HQ", description: "A lobby piece that does the work no furniture can. The first thing a visitor remembers — and the reason employees stay longer." },
  { number: "02", title: "Hotels & Resorts", description: "The object that travels in the photograph. Indoor or terraced — sealed for sea air and all seasons." },
  { number: "03", title: "Airports & Lounges", description: "A reason to stand up. A reason the brand is remembered on departure. Quiet enough for a premium lounge." },
  { number: "04", title: "Brand Activation", description: "A branded edition for the floor, the launch, the place a story is told and a photograph is taken." },
  { number: "05", title: "Rooftop Bars", description: "A sculptural centrepiece. Present in every photograph taken from that roof." },
  { number: "06", title: "Public Spaces", description: "Parks, cultural venues, permanent social infrastructure. Built to last outdoors without maintenance." },
  { number: "07", title: "Events & Trade Fairs", description: "A memorable installation. The thing people remember when they forget everything else." },
  { number: "08", title: "Private Members Clubs", description: "A discreet object for curated membership spaces and houses." },
];

const outcomes = [
  { number: "01", stat: "Dwell time", description: "People stay longer in spaces with a social object. A lobby becomes a destination. A lounge becomes a reason to arrive early." },
  { number: "02", stat: "Organic reach", description: "Every photograph taken in the space includes the table. It travels in images before it is ever described in words." },
  { number: "03", stat: "Brand permanence", description: "Your identity is etched and lit in steel — not printed on a banner, not applied as a wrap. It is part of the object." },
  { number: "04", stat: "Social activation", description: "You cannot doomscroll while playing. People make eye contact. Conversations begin. That is not a side effect — it is the architecture." },
];

const processSteps = [
  { number: "01", title: "Enquire", description: "Tell us about your project and the room you are imagining. Every enquiry is answered by hand within two working days." },
  { number: "02", title: "Configure", description: "Choose finishes, branding, lighting and bespoke details. A tailored proposal follows." },
  { number: "03", title: "Produce", description: "The table is built, tested, and documented. You receive progress updates throughout production." },
  { number: "04", title: "Place", description: "A finished object arrives ready to be placed and played. Installation guidance included." },
];

export default function ForBusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table.jpg"
            alt="Stadium 11-11 — illuminated in situ"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div className="hero-bleed__veil" />
        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">An object that<br /><em>earns its room.</em></h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2">
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>For Business</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Not a game. A social infrastructure object.</span>
            </div>
            <div className="hero-bleed__cta">
              <a
                href="/atelier#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 32px",
                  height: "56px",
                  border: "1px solid #F2EEE5",
                  background: "transparent",
                  color: "#F2EEE5",
                  fontFamily: "Inter Tight, sans-serif",
                  fontSize: "11px",
                  textTransform: "uppercase",
                  letterSpacing: "0.28em",
                  textDecoration: "none",
                }}
              >
                REQUEST A PROPOSAL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>THE OBJECT</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Not a game.<br /><em>A social infrastructure object.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              The Stadium 11–11 merges precision engineering, integrated lighting, and full brand customisation into a single object that activates human interaction in physical spaces.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              It is not furniture. It is not equipment. It is a permanent social anchor — one that changes the atmosphere of a room, gives people a reason to gather, and carries your brand in steel.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              Built in Denmark. 150 kilograms. 732 components. Maintenance-free for life.
            </p>
          </div>
          <div className="media-tall">
            <Image
              src="/uploads/foosball_table_concrete.jpg"
              alt="Stadium 11-11 — three quarter view"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* What it does */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>THE BUSINESS CASE</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>What it does<br /><em>for your space.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
            {outcomes.map((item, index) => (
              <div key={item.stat} style={{ padding: "40px 32px", borderRight: index < 3 ? "1px solid rgba(242,238,229,0.1)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", display: "block", marginBottom: "20px" }}>{item.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "24px", color: "#F2EEE5", margin: "0 0 16px" }}>{item.stat}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.6)", lineHeight: "1.7", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>SECTORS</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Where it belongs.</h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {sectors.map((sector, index) => (
              <div key={sector.title} style={{ padding: "40px 32px", borderRight: index % 4 !== 3 ? "1px solid rgba(26,24,20,0.12)" : "none", borderBottom: index < 4 ? "1px solid rgba(26,24,20,0.12)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(26,24,20,0.3)", display: "block", marginBottom: "20px" }}>{sector.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "22px", color: "#1A1814", margin: "0 0 12px" }}>{sector.title}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.6)", lineHeight: "1.7", margin: 0 }}>{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div className="media-tall">
            <Image
              src="/uploads/branded.png"
              alt="Stadium 11-11 — branded edition"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>BRANDING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Your brand.<br /><em>Built in.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Side plates, playing field, lighting — every surface is a canvas. Not a sticker. Not a wrap. Etched, lit, and permanent.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              The table ships with a transport wagon system for event and activation use. An optional tracking chip layer is available for fleet and rental deployments.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              Every business edition is configured to the space, the brand, and the intended use. No two are identical.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>PROCESS</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>How a business edition<br />comes together.</h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {processSteps.map((step, index) => (
              <div key={step.title} style={{ padding: "40px 32px", borderRight: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(26,24,20,0.3)", display: "block", marginBottom: "20px" }}>{step.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "22px", color: "#1A1814", margin: "0 0 12px" }}>{step.title}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.6)", lineHeight: "1.7", margin: 0 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>NEXT STEP</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Ready to place one.</h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Tell us about the space. We will send a tailored proposal — specification, lead time, and configuration options — within two working days.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              For serious enquiries, we can arrange a private viewing — bringing the Stadium 11–11 to you.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a
              href="/atelier#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 32px",
                height: "56px",
                background: "#F2EEE5",
                color: "#0B0A08",
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                textDecoration: "none",
              }}
            >
              REQUEST A BUSINESS PROPOSAL
            </a>
          </div>
        </div>
      </section>
    </>
  );
}