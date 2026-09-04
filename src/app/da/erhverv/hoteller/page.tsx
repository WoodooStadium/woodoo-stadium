import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Designobjekt til hotellobby | Woodoo Stadium",
  description: "Stadium 11–11 forvandler en hotellobby til en destination. Unikt designobjekt med integreret belysning og logo skåret i glasblæst stål. Håndbygget i Danmark. 5 års garanti.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/erhverv/hoteller",
    languages: { en: "https://woodoo-stadium.com/for-business/hotels" },
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
        { "@type": "ListItem", position: 3, name: "Hoteller & Hospitality", item: "https://woodoo-stadium.com/da/erhverv/hoteller" },
      ],
    },
    {
      "@type": "Service",
      name: "Designobjekt til hotellobby — Stadium 11–11",
      description: "Stadium 11–11 er et socialt infrastrukturobjekt til hotellobby, udendørsareal og opholdsrum. Logo skåret direkte i glasblæst stål. Håndbygget i Danmark.",
      provider: { "@type": "Organization", name: "Woodoo Stadium", url: "https://woodoo-stadium.com" },
      areaServed: [{ "@type": "Country", name: "DK" }, { "@type": "Country", name: "DE" }, { "@type": "Country", name: "SE" }],
      offers: [
        { "@type": "Offer", name: "Standardbord, fuldt ejerskab", price: "79000", priceCurrency: "DKK", priceSpecification: { "@type": "PriceSpecification", price: 79000, priceCurrency: "DKK", valueAddedTaxIncluded: false } },
        { "@type": "Offer", name: "Langtidsleje (min. 3 mdr.)", price: "9500", priceCurrency: "DKK", priceSpecification: { "@type": "PriceSpecification", price: 9500, priceCurrency: "DKK", valueAddedTaxIncluded: false } },
        { "@type": "Offer", name: "Test på stedet (2 dage)", price: "5000", priceCurrency: "DKK", priceSpecification: { "@type": "PriceSpecification", price: 5000, priceCurrency: "DKK", valueAddedTaxIncluded: false } },
      ],
    },
  ],
};

const lobbyArguments = [
  { number: "01", stat: "Opholdstid", description: "Gæster bliver længere. Lobbyen bliver et sted man vælger, ikke bare passerer på vej til værelset." },
  { number: "02", stat: "Organisk rækkevidde", description: "Et unikt objekt bliver indhold. Gæster fotograferer og deler det selv — inden det er beskrevet med ord." },
  { number: "03", stat: "Brandpermanens", description: "Jeres hotels identitet skåret direkte i glasblæst stål. En permanent del af rummet, synlig på hvert fotografi." },
  { number: "04", stat: "Social aktivering", description: "Blikket mødes. Fremmede taler sammen. Det er den oplevelse gæster anmelder — og grunden til de vender tilbage." },
];

const stats = [
  { figure: "98%", text: "af rejsende angiver amenities som en hovedfaktor, når de vælger overnatning.", source: "Amadeus Travel Dream Report" },
  { figure: "25%", text: "flere bookinger via sociale medier for hoteller med unikke designelementer.", source: "Brancheanalyse, Hospitality Design 2026" },
  { figure: "83%", text: "booker et hotel efter at have set billeder postet af andre rejsende på sociale medier.", source: "Amadeus Hospitality" },
  { figure: "40%", text: "af millennialrejsende vurderer et hotels »Instagrammability« som afgørende for valget — højere end lokale seværdigheder.", source: "Millennial Travel Survey, UK" },
];

const brandingMethods = [
  { number: "01", title: "Belyste brandingplader", description: "Logo skåret og bagbelyst i stålet. Synligt i dagslys og om aftenen — og på hvert fotografi taget ved bordet." },
  { number: "02", title: "Farvet spilleflade", description: "Spillefladen malet i jeres hotels designfarver, matchet til interiøret." },
  { number: "03", title: "Custom LED-lys", description: "Bordets lys kalibreret til jeres lobbys stemning — varm, kølig eller en specifik farve." },
  { number: "04", title: "Personaliseret finish", description: "Glasblæst stål, mat sort eller et andet udtryk, der passer jeres rum." },
  { number: "05", title: "Brandede bolde", description: "En detalje gæster lægger mærke til og tager med hjem." },
];

const pricingRows = [
  { label: "STANDARDBORD, FULDT EJERSKAB", price: "79.000 kr.", note: "ekskl. moms" },
  { label: "LANGTIDSLEJE (min. 3 mdr.)", price: "9.500 kr./md.", note: "ekskl. moms" },
  { label: "TEST PÅ STEDET (2 dage)", price: "5.000 kr.", note: "ekskl. moms" },
  { label: "BRANDING (plader + lys + spilleflade)", price: "Efter aftale", note: "" },
];

const included = [
  "Håndbygget i Danmark",
  "5 års garanti",
  "Indendørs & udendørs",
];

export default function DaErhvervHotellerPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/woodoo_stadium_outdoor.png"
            alt="Stadium 11-11 — udendørs terrasse om aftenen"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 65%" }}
          />
        </div>
        <div className="hero-bleed__veil" style={{ background: "linear-gradient(180deg, rgba(11,10,8,0.6) 0%, rgba(11,10,8,0.2) 40%, rgba(11,10,8,0.7) 100%)" }} />
        <div className="hero-bleed__inner" style={{ paddingTop: "140px" }}>
          <div className="hero-bleed__title fade-up" data-delay="1">
            <span style={{ display: "block", fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(242,238,229,0.65)", marginBottom: "20px" }}>
              Hoteller &amp; Hospitality
            </span>
            <h1 className="h1" style={{ fontSize: "clamp(40px, 5.5vw, 80px)", lineHeight: 1.05 }}>
              Lobbyen gæster<br /><em>aldrig glemmer.</em>
            </h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2" style={{ marginTop: "48px" }}>
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Erhverv</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Designobjekt til hotellobby, udendørsareal og opholdsrum.</span>
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

      {/* Opening */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>HOTELARGUMENTET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Ikke bare et møbel.<br /><em style={{ color: "var(--pine-on-dark)" }}>En destination.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.75)", lineHeight: "1.8", marginBottom: "20px" }}>
              De fleste hotellobbyer har det samme problem. Møblerne er designet til at sidde i — ikke til at skabe noget. En gæst tjekker ind, finder en plads, tager telefonen frem. Rummet fortsætter som indretning.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.75)", lineHeight: "1.8", marginBottom: "20px" }}>
              Et Woodoo-bord ændrer rummets fysik. Når nogen sætter sig ned for at spille, forsvinder telefonen. Blikket mødes. Folk der tjekkede ind med tyve minutters mellemrum er pludselig i et spil — mens resten af lobbyen ser til og venter på sin tur.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.75)", lineHeight: "1.8" }}>
              Det er ikke et heldigt tilfælde. Det er en del af objektets arkitektur. Et socialt ankerpunkt på 150 kilo, designet til at aktivere menneskelig interaktion i fysiske rum — og bygget til at være en permanent del af rummet, ikke en sæsoninstallation.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px" }}>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>83%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>
                booker et hotel efter at have set billeder postet af andre rejsende på sociale medier.<br />
                <em style={{ opacity: 0.6 }}>Amadeus Hospitality</em>
              </p>
            </div>
            <div style={{ borderLeft: "1px solid rgba(242,238,229,0.12)", paddingLeft: "32px" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "8px" }}>40%</div>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "12px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>
                angiver hotellets »Instagrammability« som afgørende for valget — højere end lokale seværdigheder.<br />
                <em style={{ opacity: 0.6 }}>Millennial Travel Survey, UK</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-card grid */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "16px" }}>HVAD DET GØR</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#F2EEE5", lineHeight: 1.1 }}>Hvad det gør<br /><em style={{ color: "var(--pine-on-dark)" }}>for jeres lobby.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
            {lobbyArguments.map((item, index) => (
              <div key={item.stat} style={{ padding: "40px 32px", borderRight: index < 3 ? "1px solid rgba(242,238,229,0.1)" : "none" }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", display: "block", marginBottom: "20px" }}>{item.number}</span>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 400, fontStyle: "italic", fontSize: "24px", color: "#F2EEE5", margin: "0 0 16px" }}>{item.stat}</h3>
                <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.75)", lineHeight: "1.7", margin: 0 }}>{item.description}</p>
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
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 56px)", color: "#1A1814", lineHeight: 1.1 }}>Design<br /><em style={{ color: "var(--pine)" }}>skaber bookinger.</em></h2>
          </div>
          <div className="grid-4-responsive" style={{ borderTop: "1px solid rgba(26,24,20,0.12)" }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  padding: "64px 40px",
                  borderRight: index < 3 ? "1px solid rgba(26,24,20,0.12)" : "none",
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

      {/* Branding */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div className="two-col">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>DESIGN &amp; BRANDING</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Jeres hotels identitet.<br /><em style={{ color: "var(--pine-on-dark)" }}>Skåret ind.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.75)", lineHeight: "1.8", marginBottom: "20px" }}>
              Bordets integrerede LED-belysning er fuldt tilpasselig — farve, styrke og udtryk designes til at spille sammen med jeres eksisterende interiør, dag og aften. Det er ikke et lyselement tilføjet til bordet. Det er en del af det samme designobjekt.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "28px" }}>
              Fem måder at indlejre jeres hotels visuelle identitet - permanent.
            </p>
            <div style={{ padding: "24px", background: "rgba(242,238,229,0.04)", border: "1px solid rgba(242,238,229,0.1)" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "18px", color: "#F2EEE5", lineHeight: 1.4, margin: "0 0 12px" }}>
                "85% kan huske hvilken specifik afsender der stod bag et brandet fysisk objekt, de har haft i hænderne."
              </p>
              <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.12em", color: "rgba(242,238,229,0.6)", margin: 0 }}>ASI Research · Journal of Vision</p>
            </div>
          </div>
          <div>
            <div style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }}>
              {brandingMethods.map((method) => (
                <div
                  key={method.title}
                  style={{ padding: "24px 0", borderBottom: "1px solid rgba(242,238,229,0.1)", display: "flex", gap: "24px", alignItems: "flex-start" }}
                >
                  <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "11px", color: "rgba(242,238,229,0.3)", flexShrink: 0, paddingTop: "3px" }}>{method.number}</span>
                  <div>
                    <h3 style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#F2EEE5", margin: "0 0 6px" }}>{method.title}</h3>
                    <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6", margin: 0 }}>{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ background: "#1A1814", padding: "96px 48px" }}>
        <div className="two-col two-col--start">
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>PRIS &amp; PRAKTISK</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>
              Ejerskab —<br /><em style={{ color: "var(--pine-on-dark)" }}>eller prøv først.</em>
            </h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.75)", lineHeight: "1.8", marginBottom: "32px" }}>
              To veje ind — begge uden langsigtet binding, hvis I vil starte i det små. Vi sender fuld specifikation og et første tilbud inden for to arbejdsdage.
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
                  <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "14px", color: "rgba(242,238,229,0.75)", lineHeight: "1.6" }}>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", color: "rgba(242,238,229,0.75)", lineHeight: "1.7" }}>
              Levering og opstilling i Danmark er inkluderet i prisen. Uden for Danmark beregnes det separat efter lokation.
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
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.4, maxWidth: "52ch", marginBottom: "16px" }} className="fade-up" data-delay="2">
            Alle drømme har et mål. Her er jeres.
          </p>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "560px" }}>
            Vi sender fuld specifikation og et første tilbud inden for to arbejdsdage. Kontakt: <a href="mailto:contact@woodoo-stadium.com" style={{ color: "inherit" }}>contact@woodoo-stadium.com</a> · +45 20 11 57 42
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
