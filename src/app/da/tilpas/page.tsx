import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilpas | Woodoo Stadium",
  description: "Opdag de konfigurerbare elementer på Stadium 11–11 og begynd dit eget udtryk.",
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
              Tilpas
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 1.02 }}>
              Dit mærke. Dit bord.
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Tilpas</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Ét objekt. Dit at definere.</span>
            </div>
            <div />
            <div className="hero-bleed__cta">
              <a
                href="/da/showroom#kontakt"
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
                Start en bespoke forespørgsel
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
          <h2 className="h2" style={{ marginTop: "16px" }}>Noget helt dit.</h2>
          <p className="body" style={{ marginTop: "16px", maxWidth: "52ch" }}>
            Ingen kategori dækker alt. Nogle kommissioner begynder med en samtale, en skitse, én enkelt begrænsning. Alle forespørgsler besvares i hånden.
          </p>
          <a
            className="btn btn--filled-on-dark"
            href="/da/showroom#kontakt"
            style={{ marginTop: "32px", display: "inline-flex" }}
          >
            Start en bespoke forespørgsel →
          </a>
        </div>
      </section>
    </>
  );
}
