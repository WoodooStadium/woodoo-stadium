import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { CardGrid, Card } from "@/components/CardGrid";

export const metadata: Metadata = {
  title: "Customise | Woodoo Stadium",
  description: "Discover the configurable elements of the Stadium 11–11 and begin your own expression.",
  alternates: {
    canonical: "https://woodoo-stadium.com/customise",
    languages: { da: "https://woodoo-stadium.com/da/tilpas" },
  },
};

const categories = [
  { number: "01", title: "Players", description: "Style, colour, finish — the figures that animate the field." },
  { number: "02", title: "Hand grips", description: "Material and colour tuned to your environment and use." },
  { number: "03", title: "Playing field", description: "Colour, logo placement, or a fully custom graphic field." },
  { number: "04", title: "Side plates", description: "Plain, branded, or custom text and logo options." },
  { number: "05", title: "Lighting", description: "Field colour and intensity designed for the mood of the room." },
  { number: "06", title: "Foil", description: "A layer entirely your own — printed, applied, and removable, or cured permanently into the finish." },
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
              Your mark. <em>Your table.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="val" style={{ color: "#F2EEE5" }}>One object. Yours to define.</span>
            </div>
            <div />
            <div className="hero-bleed__cta">
              <a href="/atelier#contact" className="btn btn--hero-filled">
                Start a bespoke enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ padding: "96px var(--pad-x-editorial)" }}>
        <SectionHeading
          kicker="CONFIGURATION"
          kickerIndex="N° 01"
          heading={<>Five ways <em>to make it yours.</em></>}
          variant="light"
          size="editorial"
        />
        <div className="fade-up" style={{ marginTop: "48px" }}>
          <CardGrid cols={3} variant="light">
            {categories.map((item) => (
              <Card
                key={item.title}
                num={item.number}
                title={item.title}
                body={item.description}
              />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section--dark cta-row" style={{ borderTop: "none" }}>
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker" data-index="N° 02">Bespoke</span></div>
          <h2 className="h2 fade-up" data-delay="1">Something completely yours.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "52ch" }}>
            No category covers everything. Some commissions begin with a conversation, a sketch, a single constraint. Every enquiry is answered personally.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="3">
          <a className="btn btn--filled-on-dark" href="/atelier#contact">
            Start a bespoke enquiry →
          </a>
        </div>
      </section>
    </>
  );
}
