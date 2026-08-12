import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { CardGrid, Card } from "@/components/CardGrid";

export const metadata: Metadata = {
  title: "Specialbygget bordfodboldbord | Woodoo Stadium",
  description: "Specialbyg dit Stadium 11–11 bordfodboldbord — vælg spillere, finish, belysning og bane. Håndbygget i København til ordre.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/tilpas",
    languages: { en: "https://woodoo-stadium.com/customise" },
  },
};

const categories = [
  { number: "01", title: "Spillere", description: "Stil, farve, finish — figurerne der animerer banen." },
  { number: "02", title: "Håndtag", description: "Materiale og farve tilpasset dit miljø og brug." },
  { number: "03", title: "Spillebane", description: "Farve, logoplacering eller en fuldt tilpasset grafisk bane." },
  { number: "04", title: "Sideplader", description: "Planlagte, brandede eller tilpassede tekst- og logooptioner." },
  { number: "05", title: "Belysning", description: "Banefarve og intensitet designet til rummets stemning." },
  { number: "06", title: "Folie", description: "Et lag der er helt dit — trykt og aftageligt, eller hærdet permanent ind i finishen." },
];

export default function DaTilpasPage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/woodoo_customise_hero.jpg"
            alt="Stadium 11-11 — konfigurerbar detalje"
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
              Specialbygget
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 1.02 }}>
              Dit mærke. <em>Dit bord.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="val" style={{ color: "#F2EEE5" }}>Ét objekt. Dit at definere.</span>
            </div>
            <div />
            <div className="hero-bleed__cta">
              <a href="/da/showroom#kontakt" className="btn btn--hero-filled">
                Start en bespoke forespørgsel
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" style={{ padding: "96px var(--pad-x-editorial)" }}>
        <SectionHeading
          kicker="KONFIGURATION"
          kickerIndex="N° 01"
          heading={<>Fem måder <em>at gøre det til dit.</em></>}
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
          <h2 className="h2 fade-up" data-delay="1">Noget helt dit.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "52ch" }}>
            Ingen kategori dækker alt. Nogle kommissioner begynder med en samtale, en skitse, én enkelt begrænsning. Alle forespørgsler besvares personligt.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="3">
          <a className="btn btn--filled-on-dark" href="/da/showroom#kontakt">
            Start en bespoke forespørgsel →
          </a>
        </div>
      </section>
    </>
  );
}
