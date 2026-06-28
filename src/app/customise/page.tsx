import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customise | Woodoo Stadium",
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
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/woodoo_customise_hero.jpg"
            alt="Stadium 11-11 — configurable detail"
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center center",
              filter: "brightness(1.08) contrast(1.06) saturate(1.05)",
            }}
          />
        </div>
        <div
          className="hero-bleed__veil"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,10,8,0.6) 0%, rgba(11,10,8,0.15) 30%, rgba(11,10,8,0.25) 60%, rgba(11,10,8,0.88) 100%)",
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
              Customise
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 1.02 }}>
              Your mark. Your table.
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Customise</span>
              <span className="val" style={{ color: "#F2EEE5" }}>One object. Yours to define.</span>
            </div>
            <div />
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
                Start a bespoke enquiry
              </a>
            </div>
          </div>
        </div>
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
            style={{ marginTop: "32px", display: "inline-flex" }}
          >
            Start a bespoke enquiry →
          </a>
        </div>
      </section>
    </>
  );
}
