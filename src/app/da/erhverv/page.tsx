import Image from "next/image";
import type { Metadata } from "next";

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
  { number: "01", title: "Forespørg", description: "Fortæl os om dit projekt og det rum du forestiller dig. Alle forespørgsler besvares i hånden inden for to arbejdsdage." },
  { number: "02", title: "Konfigurér", description: "Vælg finish, branding, belysning og bespoke detaljer. Et skræddersyet forslag følger." },
  { number: "03", title: "Produktion", description: "Bordet bygges, testes og dokumenteres. Du modtager statusopdateringer løbende under produktionen." },
  { number: "04", title: "Placering", description: "Et færdigt objekt ankommer klar til placering og spil. Installationsvejledning inkluderet." },
];

export default function DaErhvervPage() {
  return (
    <>
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
              <a
                href="/da/showroom#kontakt"
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
                ANMOD OM ET FORSLAG
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>OBJEKTET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Ikke et spil.<br /><em>Et socialt infrastrukturobjekt.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Stadium 11–11 kombinerer præcisionsingeniørkunst, integreret belysning og fuld brandtilpasning i ét objekt der aktiverer menneskelig interaktion i fysiske rum.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Det er ikke møbel. Det er ikke udstyr. Det er et permanent socialt anker — et der ændrer atmosfæren i et rum, giver folk en grund til at samles, og bærer dit brand i stål.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
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

      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>ERHVERVSARGUMENTET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>Hvad det gør<br /><em>for dit rum.</em></h2>
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

      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>SEKTORER</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Hvor det hører til.</h2>
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

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
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
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>BRANDING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Dit brand.<br /><em>Indbygget.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Sideplader, spillebane, belysning — hver overflade er et lærred. Ikke et klistermærke. Ikke en folie. Laserskåret, oplyst og permanent.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Bordet leveres med et transportvognssystem til event- og aktiveringsbrug. Et valgfrit sporingschiplag er tilgængeligt til flåde- og udlejningsdeployeringer.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              Alle erhvervsudgaver konfigureres til rummet, brandet og den tilsigtede brug. Ingen to er ens.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>PROCESSEN</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Sådan kommer en erhvervsudgave<br />til verden.</h2>
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

      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>NÆSTE SKRIDT</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Klar til at placere ét.</h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Fortæl os om rummet. Vi sender et skræddersyet forslag — specifikation, leveringstid og konfigurationsmuligheder — inden for to arbejdsdage.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              Til seriøse forespørgsler kan vi arrangere en privat fremvisning — hvor vi bringer Stadium 11–11 til dig.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <a
              href="/da/showroom#kontakt"
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
              ANMOD OM ET ERHVERVSFORSLAG
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
