import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bordfodbold til firmaevent & messestand | Woodoo Stadium",
  description: "Lej Stadium 11–11 til dit næste firmaevent, kundeaktivering eller messe. Brandet bordfodbold til firmaevent fra 3.500 kr./dag ekskl. moms. Håndbygget i København.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/erhverv/events",
    languages: { en: "https://woodoo-stadium.com/for-business/events" },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Woodoo Stadium", item: "https://woodoo-stadium.com/da" },
        { "@type": "ListItem", position: 2, name: "Erhverv", item: "https://woodoo-stadium.com/da/erhverv" },
        { "@type": "ListItem", position: 3, name: "Events & Bureauer", item: "https://woodoo-stadium.com/da/erhverv/events" },
      ],
    },
    {
      "@type": "Service",
      name: "Bordfodbold til firmaevent — Stadium 11–11",
      description: "Udlejning af Stadium 11–11 til firmaevents, teambuilding, messer og kundeaktiveringer. Brandet bordfodbold til firmaevent med logo i stålet.",
      provider: { "@type": "Organization", name: "Woodoo Stadium", url: "https://woodoo-stadium.com" },
      areaServed: { "@type": "Country", name: "DK" },
      offers: [
        { "@type": "Offer", name: "1 dag (op til 23 timer)", price: "3500", priceCurrency: "DKK", priceSpecification: { "@type": "PriceSpecification", price: 3500, priceCurrency: "DKK", valueAddedTaxIncluded: false } },
        { "@type": "Offer", name: "2 dage / weekend", price: "5000", priceCurrency: "DKK", priceSpecification: { "@type": "PriceSpecification", price: 5000, priceCurrency: "DKK", valueAddedTaxIncluded: false } },
      ],
    },
  ],
};

const eventArguments = [
  { number: "01", stat: "Opholdstid", description: "Gæster bliver længere. En fest-area bliver en destination, ikke blot et punkt på programmet. Folk vender tilbage til bordet — og tager vennerne med." },
  { number: "02", stat: "Organisk rækkevidde", description: "Bordet fotograferes og deles — på Instagram, LinkedIn og i gruppechats — inden nogen har beskrevet det med ord. Det rejser med billederne." },
  { number: "03", stat: "Brandpermanens", description: "Jeres kundes logo skåret direkte i stålet. Ikke en folie. Ikke et klistermærke. En permanent del af objektet, synlig på hvert fotografi taget i rummet." },
  { number: "04", stat: "Social aktivering", description: "Blikket mødes. Samtaler opstår uden anledning. Fremmede bliver holdkammerater. Det er ikke et trick — det er præcis det, I inviterede folk til." },
];

const stats = [
  { figure: "78%", text: "husker et brand efter en oplevelsesbaseret interaktion — mod kun sekunder efter eksponering for digital reklame.", source: "Zipdo Experiential Marketing Research, 2026" },
  { figure: "82%", text: "siger, at interaktive oplevelser er den mest mindeværdige form for brandkontakt.", source: "Zipdo Experiential Marketing Research, 2026" },
  { figure: "3×", text: "højere brand-erindring ved oplevelsesbaseret markedsføring sammenlignet med traditionel reklame.", source: "Zipdo Experiential Marketing Research, 2026" },
  { figure: "85%", text: "er mere tilbøjelige til at købe efter at have deltaget i en oplevelsesbaseret aktivering.", source: "Freeman Experience Report, 2025" },
  { figure: "64%", text: "af eventgæster foretrækker håndgribelige, interaktive oplevelser frem for apps og skærme.", source: "Freeman Experience Report, 2025" },
  { figure: "5–12 min", text: "gennemsnitlig opholdstid ved en interaktiv stand — mod kun sekunder ved en statisk en.", source: "Exhibitor Magazine" },
];

const eventTypes = [
  { label: "Sommerfest" },
  { label: "Julefest" },
  { label: "Teambuilding" },
  { label: "Konference & kick-off" },
  { label: "Kundeevents" },
  { label: "Messer & showrooms" },
];

const brandingMethods = [
  { number: "01", title: "Belyste brandingplader", description: "Logo skåret ind og bagbelyst i stålet — synligt dag og nat, på hvert fotografi." },
  { number: "02", title: "Farvet spilleflade", description: "Spillefladen malet i jeres kundes præcise brandfarver." },
  { number: "03", title: "Custom LED-farve", description: "Det integrerede lys i bordet matcher brandets farvepalet." },
  { number: "04", title: "Brandede bolde", description: "Logo trykt direkte på spillebolden — tages med hjem af gæsterne." },
  { number: "05", title: "Kampagnebudskab", description: "Kort tekst eller slogan skåret ind i stålet eller sat på spillefladen." },
];

const pricingRows = [
  { label: "1 DAG (op til 23 timer)", price: "3.500 kr.", note: "ekskl. moms" },
  { label: "2 DAGE / WEEKEND", price: "5.000 kr.", note: "ekskl. moms" },
  { label: "FAST PLACERING (3+ MDR.)", price: "Kontakt for pris", note: "" },
  { label: "BRANDING (plader + spilleflade)", price: "Efter aftale", note: "" },
];

const included = [
  "Selvafhentning i Ballerup (gratis)",
  "Forsikring i hele lejeperioden",
  "Depositum (refunderes ved aflevering)",
];

const SHOW_CASE_STUDIES = false; // TODO: flip to true once real case studies are ready

export default function DaErhvervEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media" style={{ background: "#0B0A08" }} />
        <div className="hero-bleed__veil" style={{ background: "linear-gradient(180deg, rgba(11,10,8,0.6) 0%, rgba(11,10,8,0.2) 40%, rgba(11,10,8,0.7) 100%)" }} />
        <div className="hero-bleed__inner" style={{ paddingTop: "140px" }}>
          <div className="hero-bleed__title fade-up" data-delay="1">
            <span style={{ display: "block", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(242,238,229,0.65)", marginBottom: "20px" }}>
              Events &amp; Bureauer
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05 }}>
              Elementet gæster<br /><em>aldrig glemmer.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Erhverv</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Bordfodbold til firmaevent, messe og kundeaktivering.</span>
            </div>
            <div className="hero-bleed__cta">
              <a
                href="/da/showroom#kontakt"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0 32px", height: "56px", border: "1px solid #F2EEE5", background: "#F2EEE5", color: "#0B0A08", fontFamily: "Inter Tight, sans-serif", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.28em", textDecoration: "none" }}
              >
                Send en forespørgsel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opening — expanded from N°01 */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>EVENTARGUMENTET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Ikke bare et arrangement.<br /><em style={{ color: "var(--pine-on-dark)" }}>Et samlingspunkt.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Skærme kræver opmærksomhed. Ethvert arrangement kan leje en skærm, en fotobooth eller en DJ. Det, der adskiller et event folk husker fra et event folk overværer, er et øjeblik af ægte fællesskab — og det opstår ikke af sig selv.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Når en gæst sætter sig ned for at spille, lægger de telefonen. Blikket mødes. Kroppen er i bevægelse. Folk der ikke kendte hinanden tre minutter tidligere er nu holdkammerater. Alle i rummet stopper op og kigger med — ikke fordi de er bedt om det, men fordi de ikke kan lade være.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8" }}>
              Det er ikke en tilfældig bivirkning. Det er en del af objektets arkitektur. Et socialt infrastrukturobjekt designet til at aktivere menneskelig interaktion i fysiske rum — uanset om det er en firmasommerfest, en branded kundeaktivering eller en international messestand.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>85%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.5)", lineHeight: "1.6", margin: 0 }}>
                kan huske en specifik afsender bag et brandet fysisk objekt, de har haft i hænderne.<br />
                <em style={{ opacity: 0.6 }}>ASI Research · Journal of Vision</em>
              </p>
            </div>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>5–12 min</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.5)", lineHeight: "1.6", margin: 0 }}>
                gennemsnitlig opholdstid ved en interaktiv stand — mod kun sekunder ved en statisk en.<br />
                <em style={{ opacity: 0.6 }}>Exhibitor Magazine</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-card grid — Hvad det gør for dit event */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>HVAD DET GØR</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>Hvad det gør<br /><em style={{ color: "var(--pine-on-dark)" }}>for dit event.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
            {eventArguments.map((item, index) => (
              <div key={item.stat} style={{ padding: "40px 32px", borderRight: index < 3 ? "1px solid rgba(242,238,229,0.1)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", display: "block", marginBottom: "20px" }}>{item.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "24px", color: "#F2EEE5", margin: "0 0 16px" }}>{item.stat}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.6)", lineHeight: "1.7", margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — Beviset */}
      <section style={{ background: "#E6E3DA", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "80px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>BEVISET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Fællesskab<br /><em style={{ color: "var(--pine)" }}>skaber erindring.</em></h2>
          </div>
          <div className="grid-3-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: "64px 40px",
                  borderRight: index % 3 !== 2 ? "1px solid rgba(26,24,20,0.12)" : "none",
                  borderBottom: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none",
                }}
              >
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(64px,7vw,96px)", color: "var(--pine)", lineHeight: 1, marginBottom: "24px" }}>{stat.figure}</div>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>{stat.text}</p>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Kilde: {stat.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passivt vs. Aktivt */}
      <section style={{ background: "#E6E3DA", padding: "120px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>N°04 — Passivt vs. Aktivt</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>De fleste brandede objekter bliver set.<br /><em style={{ color: "var(--pine)" }}>Dette bliver spillet.</em></h2>
          </div>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(20px, 2.5vw, 28px)", color: "rgba(26,24,20,0.7)", lineHeight: 1.5, maxWidth: "72ch", marginBottom: "72px" }}>
            Selv den bedste reklameartikel virker på samme måde — nogen lægger mærke til et logo, og går videre. Intet beder dem stoppe op, samles eller blive.
          </p>
          <div className="grid-3-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            <div style={{ padding: "64px 40px", borderRight: "1px solid rgba(26,24,20,0.12)" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(64px,7vw,96px)", color: "var(--pine)", lineHeight: 1, marginBottom: "24px" }}>3.300</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>Gennemsnitligt antal brand-eksponeringer en reklameartikel genererer i sin levetid — hver især et flygtigt blik.</p>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Kilde: ASI Global Advertising Impressions Study, 2026</p>
            </div>
            <div style={{ padding: "64px 40px", borderRight: "1px solid rgba(26,24,20,0.12)" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(64px,7vw,96px)", color: "var(--pine)", lineHeight: 1, marginBottom: "24px" }}>85%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.65)", lineHeight: "1.7", margin: "0 0 12px" }}>af forbrugere husker brandet bag en reklameartikel — uden nogensinde aktivt at have interageret med den.</p>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(26,24,20,0.35)", margin: 0 }}>Kilde: ASI Global Advertising Impressions Study, 2026</p>
            </div>
            <div style={{ padding: "64px 40px" }}>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.75)", lineHeight: "1.8", margin: 0 }}>
                Et Woodoo-bord genererer ikke et blik. Det genererer et spil — øjenkontakt, konkurrence, en flok mennesker. Og i modsætning til en sæsonbetonet gave med en begrænset levetid bliver det ikke brugt op, slidt ned eller smidt ud. Det er en permanent del af jeres rum, der skaber nye eksponeringer, så længe det står der.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event types */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>EVENTTYPER</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Til alle de events<br /><em style={{ color: "var(--pine)" }}>I allerede arrangerer.</em></h2>
          </div>
          <div className="grid-3-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {eventTypes.map((type, index) => (
              <div
                key={type.label}
                style={{
                  padding: "40px 32px",
                  borderRight: index % 3 !== 2 ? "1px solid rgba(26,24,20,0.12)" : "none",
                  borderBottom: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none",
                }}
              >
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(26,24,20,0.3)", display: "block", marginBottom: "20px" }}>0{index + 1}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "26px", color: "#1A1814", margin: 0 }}>{type.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Branding */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>BRANDING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Jeres kundes brand.<br /><em style={{ color: "var(--pine-on-dark)" }}>Skåret ind.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "28px" }}>
              Fem måder at gøre bordet unikt til jeres kunde — alle permanente i stålet, ikke påsatte som folie eller klistermærker.
            </p>
            <div style={{ padding: "24px", background: "rgba(242,238,229,0.04)", border: "1px solid rgba(242,238,229,0.1)", marginTop: "8px" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "18px", color: "#F2EEE5", lineHeight: 1.4, margin: "0 0 12px" }}>
                "85% kan huske hvilken specifik afsender der stod bag et brandet fysisk objekt, de har haft i hænderne."
              </p>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(242,238,229,0.35)", margin: 0 }}>ASI Research · Journal of Vision</p>
            </div>
          </div>
          <div>
            <div style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
              {brandingMethods.map((method, index) => (
                <div
                  key={method.title}
                  style={{ padding: "24px 0", borderBottom: "1px solid rgba(242,238,229,0.1)", display: "flex", gap: "24px", alignItems: "flex-start" }}
                >
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", flexShrink: 0, paddingTop: "3px" }}>{method.number}</span>
                  <div>
                    <h3 style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EEE5", margin: "0 0 6px" }}>{method.title}</h3>
                    <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.55)", lineHeight: "1.6", margin: 0 }}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof of concept — placeholder cards */}
      {SHOW_CASE_STUDIES && (
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "16px" }}>CASES</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "16px" }}>Events i marken.</h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.45)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Indhold kommer her efterhånden som data fra reelle events indhentes.</p>
          </div>
          <div className="grid-3-responsive">
            {[
              { slot: "A", hint: "Sommerfest · virksomhed · by" },
              { slot: "B", hint: "Messestand · branche · by" },
              { slot: "C", hint: "Kundeaktivering · bureau · by" },
            ].map((card) => (
              <div
                key={card.slot}
                style={{ border: "1px dashed rgba(26,24,20,0.22)", padding: "40px 32px", display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <div style={{ background: "rgba(26,24,20,0.05)", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "10px", letterSpacing: "0.14em", color: "rgba(26,24,20,0.25)", textTransform: "uppercase" }}>[ Foto ]</span>
                </div>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(26,24,20,0.35)", margin: 0 }}>
                  [ {card.hint} ]
                </p>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(26,24,20,0.35)", lineHeight: "1.6", margin: 0 }}>
                  [ Placeholder: resultater fra dette event — opholdstid, engagement eller reach, når data foreligger. ]
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Pricing */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div className="two-col two-col--start">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>PRIS &amp; PRAKTISK</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Adgang — <em style={{ color: "var(--pine-on-dark)" }}>uden binding.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "32px" }}>
              Leje giver fuld adgang til Stadium 11–11, uden at binde kapital. Vi sender fuld specifikation og et første tilbud inden for to arbejdsdage.
            </p>
            <div style={{ border: "1px solid rgba(242,238,229,0.15)", overflow: "hidden" }}>
              {pricingRows.map(({ label, price, note }, i) => (
                <div
                  key={label}
                  style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "16px 20px", borderBottom: i < pricingRows.length - 1 ? "1px solid rgba(242,238,229,0.1)" : "none", gap: "16px", flexWrap: "wrap" }}
                >
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", flexShrink: 0 }}>{label}</span>
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "#F2EEE5", textAlign: "right" }}>
                    {price}
                    {note && <span style={{ fontSize: "10px", color: "rgba(242,238,229,0.4)", marginLeft: "6px" }}>{note}</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>INKLUDERET</span>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: "14px" }}>
              {included.map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ color: "rgba(242,238,229,0.4)", flexShrink: 0, lineHeight: 1.6 }}>—</span>
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.65)", lineHeight: "1.6" }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.4)", lineHeight: "1.7" }}>
              Levering og opstilling tilkøbes særskilt — pris afhænger af lokation, dag og tid, og fremgår af det samlede tilbud.
            </p>
            <div style={{ marginTop: "32px" }}>
              <a
                href="/da/showroom#kontakt"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0 32px", height: "56px", background: "#F2EEE5", color: "#0B0A08", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.28em", textDecoration: "none", fontWeight: 500 }}
              >
                Anmod om tilbud
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Klar</span></div>
          <h2 className="h2 fade-up" data-delay="1">Alle forespørgsler besvares personligt.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            Vi sender dig fuld specifikation, leveringstid og et første tilbud inden for to arbejdsdage. Kontakt: <a href="mailto:contact@woodoo-stadium.com" style={{ color: "inherit" }}>contact@woodoo-stadium.com</a> · +45 20 11 57 42
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/da/showroom#kontakt">Send en forespørgsel →</a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
