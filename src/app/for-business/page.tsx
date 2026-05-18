import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Business | WooDoo Stadium",
  description: "Corporate and hospitality placements for the Stadium 11–11, built to earn its room.",
};

const sectors = [
  { title: "Corporate HQ", description: "A lobby piece that makes a first impression and holds the room." },
  { title: "Hotels & Resorts", description: "A destination object in bars, lounges, and lobby spaces." },
  { title: "Airports & Lounges", description: "A quiet landmark for departure, arrival and waiting spaces." },
  { title: "Brand Activation", description: "A branded edition for launches, experiences and campaign spaces." },
  { title: "Rooftop Bars", description: "A sculptural centrepiece with a view and an atmosphere." },
  { title: "Public Spaces", description: "Parks, cultural venues and permanent social settings." },
  { title: "Events & Trade Fairs", description: "A memorable installation for attention and connection." },
  { title: "Private Members Clubs", description: "A discreet object for membership spaces and curated houses." },
];

const processSteps = [
  { title: "Enquire", description: "Tell us about your project and the room you are imagining." },
  { title: "Configure", description: "Choose finishes, branding, lighting and bespoke details." },
  { title: "Produce", description: "The table is built, tested, and prepared for delivery." },
  { title: "Deliver", description: "A finished object arrives ready to be placed and played." },
];

export default function ForBusinessPage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table_concrete_1.jpg"
            alt="Stadium 11-11 business edition"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-bleed__veil" />
        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">An object that earns its room.</h1>
          </div>
        </div>
      </section>

      <section className="section section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto 40px" }}>
          <span className="kicker">Sectors</span>
          <h2 className="h2">A platform for spaces that need more than furniture.</h2>
        </div>
        <div className="ruled-grid ruled-grid--4 fade-up" data-delay="1">
          {sectors.map((sector, index) => (
            <div className="cell" key={sector.title}>
              <span className="num">0{index + 1}</span>
              <h3>{sector.title}</h3>
              <p className="body">{sector.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--dark section--no-top">
        <div style={{ maxWidth: "72ch", margin: "0 auto 40px" }}>
          <span className="kicker">Branding</span>
          <h2 className="h2">Your brand. Built in.</h2>
          <p className="body">
            The Stadium 11–11 is a branding platform. Side plates, playing field, lighting — every surface is a canvas. Not a sticker. Not a wrap. Etched, lit, and permanent.
          </p>
        </div>
      </section>

      <section className="section section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto 40px" }}>
          <span className="kicker">Process</span>
          <h2 className="h2">How a business edition comes together.</h2>
        </div>
        <div className="steps-grid fade-up" data-delay="1">
          {processSteps.map((step, index) => (
            <div className="step-card" key={step.title}>
              <span className="num">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p className="body">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Proposal</span></div>
          <h2 className="h2 fade-up" data-delay="1">Request a business proposal.</h2>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/atelier#contact">Request a business proposal →</a>
        </div>
      </section>
    </>
  );
}
