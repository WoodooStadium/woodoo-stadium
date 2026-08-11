import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { CardGrid, Card } from "@/components/CardGrid";

export const metadata: Metadata = {
  title: "Erhverv | Woodoo Stadium",
  description: "Stadium 11–11 er et socialt infrastrukturobjekt. En præcisionsbygget brandingplatform til virksomheder, hoteller og offentlige rum.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/erhverv",
    languages: { en: "https://woodoo-stadium.com/for-business" },
  },
};

const sectors = [
  { number: "01", title: "Virksomhedens HQ", description: "Et lobbystykke der gør det arbejde intet møbel kan. Det første en besøgende husker — og grunden til at medarbejderne bliver længere." },
  { number: "02", title: "Hoteller & Resorts", description: "Objektet der rejser med på fotografiet. Inde eller på terrassen — forseglet mod havluft og alle årstider." },
  { number: "03", title: "Lufthavne & Lounges", description: "En grund til at rejse sig. En grund til at brandet huskes ved afgang. Stille nok til en premium lounge." },
  { number: "04", title: "Brand Aktivering", description: "En branded udgave til gulvet, lanceringen, stedet hvor en historie fortælles og et fotografi tages." },
  { number: "05", title: "Tagbarer", description: "Et skulpturelt centerpiece. Tilstede på hvert fotografi taget fra den tag." },
  { number: "06", title: "Offentlige rum", description: "Parker, kulturelle venues, permanent social infrastruktur. Bygget til at holde udendørs uden vedligeholdelse." },
  { number: "07", title: "Events & Messer", description: "En mindeværdig installation. Det folk husker når de glemmer alt andet." },
  { number: "08", title: "Private Memberklubber", description: "Et diskret objekt til kuraterede membership spaces og houses." },
];

const outcomes = [
  { number: "01", stat: "Opholdstid", description: "Folk bliver længere i rum med et socialt objekt. En lobby bliver en destination. En lounge bliver en grund til at ankomme tidligt." },
  { number: "02", stat: "Organisk rækkevidde", description: "Hvert fotografi taget i rummet inkluderer bordet. Det rejser med billeder inden det nogensinde beskrives med ord." },
  { number: "03", stat: "Brandpermanens", description: "Din identitet er laserskåret og oplyst i stål — ikke trykt på en banner, ikke påsat som folie. Det er en del af objektet." },
  { number: "04", stat: "Social aktivering", description: "Du kan ikke doomscrolle mens du spiller. Folk får øjenkontakt. Samtaler begynder. Det er ikke en bivirkning — det er arkitekturen." },
];

const processSteps = [
  { number: "01", title: "Forespørg", description: "Fortæl os om dit projekt og det rum du forestiller dig. Alle forespørgsler besvares personligt inden for to arbejdsdage." },
  { number: "02", title: "Konfigurér", description: "Vælg finish, branding, belysning og bespoke detaljer. Et skræddersyet forslag følger." },
  { number: "03", title: "Produktion", description: "Bordet bygges, testes og dokumenteres. Du modtager statusopdateringer løbende under produktionen." },
  { number: "04", title: "Placering", description: "Et færdigt objekt ankommer klar til placering og spil. Installationsvejledning inkluderet." },
];

export default function DaErhvervPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table.jpg"
            alt="Stadium 11-11 — oplyst in situ"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
        </div>
        <div className="hero-bleed__veil" />
        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">Et objekt der<br /><em>fortjener sit rum.</em></h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2">
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Erhverv</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Ikke et spil. Et socialt infrastrukturobjekt.</span>
            </div>
            <div className="hero-bleed__cta">
              <a href="/da/showroom#kontakt" className="btn btn--hero-outline">
                ANMOD OM ET FORSLAG
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
              kicker="OBJEKTET"
              kickerIndex="N° 01"
              variant="dark"
              heading={<>Ikke et spil.<br /><em>Et socialt infrastrukturobjekt.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)" }}>
              Stadium 11–11 kombinerer præcisionsingeniørkunst, integreret belysning og fuld brandtilpasning i ét objekt der aktiverer menneskelig interaktion i fysiske rum.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid-on-dark)" }}>
              Det er ikke møbel. Det er ikke udstyr. Det er et permanent socialt anker — et der ændrer atmosfæren i et rum, giver folk en grund til at samles, og bærer dit brand i stål.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid-on-dark)" }}>
              Bygget i Danmark. 150 kilogram. 732 komponenter. Vedligeholdelsesfrit for livet.
            </p>
          </div>
          <div className="media-tall">
            <Image
              src="/uploads/foosball_table_concrete.jpg"
              alt="Stadium 11-11 — tre-kvart visning"
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
              kicker="ERHVERVSARGUMENTET"
              kickerIndex="N° 02"
              variant="dark"
              heading={<>Hvad det gør<br /><em>for dit rum.</em></>}
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
              kicker="SEKTORER"
              kickerIndex="N° 03"
              variant="light"
              heading="Hvor det hører til."
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
              alt="Stadium 11-11 — branded udgave"
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
              heading={<>Dit brand.<br /><em>Indbygget.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)" }}>
              Sideplader, spillebane, belysning — hver overflade er et lærred. Ikke et klistermærke. Ikke en folie. Laserskåret, oplyst og permanent.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)" }}>
              Bordet leveres med et transportvognssystem til event- og aktiveringsbrug. Et valgfrit sporingschiplag er tilgængeligt til flåde- og udlejningsdeployeringer.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)" }}>
              Alle erhvervsudgaver konfigureres til rummet, brandet og den tilsigtede brug. Ingen to er ens.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <SectionHeading
              kicker="PROCESSEN"
              kickerIndex="N° 05"
              variant="light"
              heading={<>Sådan kommer en erhvervsudgave<br />til verden.</>}
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
              kicker="NÆSTE SKRIDT"
              kickerIndex="N° 06"
              variant="dark"
              heading="Vi er klar, når du er."
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)" }}>
              Fortæl os om rummet. Vi sender et skræddersyet forslag — specifikation, leveringstid og konfigurationsmuligheder — inden for to arbejdsdage.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid-on-dark)" }}>
              Til seriøse forespørgsler kan vi arrangere en privat fremvisning — hvor vi bringer Stadium 11–11 til dig.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a href="/da/showroom#kontakt" className="btn btn--hero-filled">
              ANMOD OM ET ERHVERVSFORSLAG
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
