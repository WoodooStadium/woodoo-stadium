import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

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
        <div className="grid-3-responsive fade-up" style={{ gap: "40px", marginTop: "48px" }}>
          {categories.map((item) => (
            <div key={item.title} style={{ borderTop: "1px solid rgba(26,24,20,0.1)", paddingTop: "24px" }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.2em", color: "var(--mid)" }}>{item.number}</span>
              <h3 style={{ marginTop: "8px", fontFamily: "var(--sans)", fontSize: "16px", fontWeight: 500, color: "var(--ink)", letterSpacing: "0.02em" }}>{item.title}</h3>
              <p className="body" style={{ marginTop: "8px", color: "var(--mid)" }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--dark section--no-top" style={{ padding: "96px var(--pad-x)" }}>
        <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <SectionHeading
            kicker="Bespoke"
            kickerIndex="N° 02"
            variant="dark"
            heading="Noget helt dit."
          />
          <p className="body" style={{ marginTop: "16px", maxWidth: "52ch", color: "var(--mid-on-dark)" }}>
            Ingen kategori dækker alt. Nogle kommissioner begynder med en samtale, en skitse, én enkelt begrænsning. Alle forespørgsler besvares personligt.
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
