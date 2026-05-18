import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customise | WooDoo Stadium",
  description: "Discover the configurable elements of the Stadium 11–11 and begin your own expression.",
};

const categories = [
  { number: "01", title: "Players", description: "Style, colour, finish — the figures that animate the field." },
  { number: "02", title: "Hand grips", description: "Material and colour tuned to your environment and use." },
  { number: "03", title: "Playing field", description: "Colour, logo placement, or a fully custom graphic field." },
  { number: "04", title: "Side plates", description: "Plain, branded, or custom text and logo options." },
  { number: "05", title: "Lighting", description: "Field colour and intensity designed for the mood of the room." },
];

export default function CustomisePage() {
  return (
    <>
      <section className="section section--dark section--no-top" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto", textAlign: "center" }}>
          <span className="kicker" style={{ color: "rgba(242,238,229,0.4)" }}>CUSTOMISE</span>
          <h1 className="h1" style={{ marginTop: "16px" }}>Your mark. Your table.</h1>
          <p className="body fade-up" data-delay="1" style={{ color: "rgba(242,238,229,0.62)", marginTop: "24px", maxWidth: "56ch", marginLeft: "auto", marginRight: "auto" }}>
            One table. Many expressions. The Stadium 11–11 is one object — but it is yours to define. Every element that can carry your identity, will.
          </p>
        </div>
      </section>

      <section style={{ position: "relative", height: "60vh", minHeight: "400px" }}>
        <Image
          src="/uploads/woodoo_stadium_side_bespoke.jfif"
          alt="Stadium 11-11 bespoke configuration"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </section>

      <section className="section section--alt">
        <div className="ruled-grid ruled-grid--2 fade-up">
          {categories.map((item) => (
            <div className="cell" key={item.title}>
              <span className="num">{item.number}</span>
              <h3>{item.title}</h3>
              <p className="body">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--dark section--no-top" style={{ padding: "96px var(--pad-x)" }}>
        <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">Bespoke</span>
          <h2 className="h2" style={{ marginTop: "16px" }}>Something completely yours.</h2>
          <p className="body" style={{ marginTop: "16px", maxWidth: "52ch" }}>
            No category covers everything. Some commissions begin with a conversation, a sketch, a single constraint. Every enquiry is answered by hand.
          </p>
          <a
            className="btn btn--filled-on-dark"
            href="/atelier#contact"
            style={{ marginTop: "32px", display: "inline-flex", textDecoration: "none" }}
          >
            Start a bespoke enquiry →
          </a>
        </div>
      </section>
    </>
  );
}
