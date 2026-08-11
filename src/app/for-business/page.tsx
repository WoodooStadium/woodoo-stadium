import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { CardGrid, Card } from "@/components/CardGrid";

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
  { number: "01", title: "Enquire", description: "Tell us about your project and the room you are imagining. Every enquiry is answered personally within two working days." },
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
              <a href="/atelier#contact" className="btn btn--hero-outline">
                REQUEST A PROPOSAL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div>
            <SectionHeading
              kicker="THE OBJECT"
              kickerIndex="N° 01"
              variant="dark"
              heading={<>Not a game.<br /><em>A social infrastructure object.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)" }}>
              The Stadium 11–11 merges precision engineering, integrated lighting, and full brand customisation into a single object that activates human interaction in physical spaces.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid-on-dark)" }}>
              It is not furniture. It is not equipment. It is a permanent social anchor — one that changes the atmosphere of a room, gives people a reason to gather, and carries your brand in steel.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid-on-dark)" }}>
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
      <section style={{ background: "#1A1814", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <SectionHeading
              kicker="THE BUSINESS CASE"
              kickerIndex="N° 02"
              variant="dark"
              heading={<>What it does<br /><em>for your space.</em></>}
            />
          </div>
          <CardGrid cols={4} variant="dark">
            {outcomes.map((item) => (
              <Card
                key={item.stat}
                num={item.number}
                title={item.stat}
                body={item.description}
              />
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Sectors */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <SectionHeading
              kicker="SECTORS"
              kickerIndex="N° 03"
              variant="light"
              heading="Where it belongs."
            />
          </div>
          <CardGrid cols={4} variant="light">
            {sectors.map((sector) => (
              <Card
                key={sector.title}
                num={sector.number}
                title={sector.title}
                body={sector.description}
              />
            ))}
          </CardGrid>
        </div>
      </section>

      {/* Branding */}
      <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
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
            <SectionHeading
              kicker="BRANDING"
              kickerIndex="N° 04"
              variant="dark"
              heading={<>Your brand.<br /><em>Built in.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)" }}>
              Side plates, playing field, lighting — every surface is a canvas. Not a sticker. Not a wrap. Etched, lit, and permanent.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)" }}>
              The table ships with a transport wagon system for event and activation use. An optional tracking chip layer is available for fleet and rental deployments.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)" }}>
              Every business edition is configured to the space, the brand, and the intended use. No two are identical.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <SectionHeading
              kicker="PROCESS"
              kickerIndex="N° 05"
              variant="light"
              heading={<>How a business edition<br />comes together.</>}
            />
          </div>
          <CardGrid cols={4} variant="light">
            {processSteps.map((step) => (
              <Card
                key={step.title}
                num={step.number}
                title={step.title}
                body={step.description}
              />
            ))}
          </CardGrid>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div>
            <SectionHeading
              kicker="NEXT STEP"
              kickerIndex="N° 06"
              variant="dark"
              heading="Ready to place one."
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)" }}>
              Tell us about the space. We will send a tailored proposal — specification, lead time, and configuration options — within two working days.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)" }}>
              For serious enquiries, we can arrange a private viewing — bringing the Stadium 11–11 to you.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a href="/atelier#contact" className="btn btn--hero-filled">
              REQUEST A BUSINESS PROPOSAL
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
