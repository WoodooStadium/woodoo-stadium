import Image from "next/image";
import type { Metadata } from "next";
import { buildPageMetadata, OG_IMAGES } from "@/lib/seo";
import RentalForm from "@/components/RentalForm";
import GuideLinks from "@/components/GuideLinks";

export const metadata: Metadata = buildPageMetadata({
  path: "/da/udlejning",
  title: "Lej Stadium 11–11 | Udlejning af bordfodboldbord | Woodoo Stadium",
  description: "Lej Stadium 11–11 til fest, event eller langtidsplacering. Fra 2.250 kr. pr. dag inkl. moms. Vi leverer i hele Danmark.",
  image: OG_IMAGES.rental,
  imageAlt: "Stadium 11–11 til udlejning",
});

const kicker: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter Tight, sans-serif",
  fontSize: "11px",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "rgba(242,238,229,0.72)",
  marginBottom: "16px",
};

// Small note under tables (dark sections)
const note: React.CSSProperties = {
  fontFamily: "Inter Tight, sans-serif",
  fontSize: "11px",
  color: "rgba(242,238,229,0.6)",
  letterSpacing: "0.04em",
  lineHeight: "1.6",
  marginTop: "16px",
};

const kickerLight: React.CSSProperties = {
  display: "block",
  fontFamily: "Inter Tight, sans-serif",
  fontSize: "11px",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "rgba(26,24,20,0.4)",
  marginBottom: "16px",
};

// Dark-section bordered table helpers
function TableHeader({ cols }: { cols: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `2fr ${cols.slice(1).map(() => "auto").join(" ")}`,
        padding: "14px 24px",
        borderBottom: "1px solid rgba(242,238,229,0.12)",
        gap: "16px",
      }}
    >
      {cols.map((col) => (
        <span
          key={col}
          style={{
            fontFamily: "Inter Tight, sans-serif",
            fontSize: "9px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(242,238,229,0.72)",
            textAlign: col !== cols[0] ? "right" : undefined,
          }}
        >
          {col}
        </span>
      ))}
    </div>
  );
}

function TableRow({
  cols,
  last = false,
}: {
  cols: string[];
  last?: boolean;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `2fr ${cols.slice(1).map(() => "auto").join(" ")}`,
        padding: "18px 24px",
        borderBottom: last ? "none" : "1px solid rgba(242,238,229,0.08)",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "Inter Tight, sans-serif",
          fontSize: "13px",
          color: "#F2EEE5",
        }}
      >
        {cols[0]}
      </span>
      {/* First price column (inkl. moms) is prominent, the second (ekskl. moms) secondary */}
      {cols.slice(1).map((val, i) => (
        <span
          key={i}
          style={{
            fontFamily: "Inter Tight, sans-serif",
            fontSize: "13px",
            fontWeight: i === 0 ? 500 : 400,
            color: i === 0 ? "#F2EEE5" : "rgba(242,238,229,0.72)",
            textAlign: "right",
            whiteSpace: "nowrap",
          }}
        >
          {val}
        </span>
      ))}
    </div>
  );
}

const faqItems = [
  {
    q: "Hvor lang tid varer en eventleje?",
    a: "En dag regnes som op til 23 timer. Du kan leje i 1 dag, 3 dage, 1 uge eller 1 måned. Har du brug for en anden periode, giver vi dig gerne et tilbud.",
  },
  {
    q: "Kan jeg få mit logo på bordet til et event?",
    a: "Branding tilbydes ved leje i minimum 3 måneder. Til kortvarige events udlejer vi standardbordet uden branding — kontakt os, hvis du har et særligt ønske.",
  },
  {
    q: "Hvad kræver bordet på stedet?",
    a: "Et plant underlag og adgang til en stikkontakt, hvis du ønsker lyset tændt. Bordet kan også køre på genopladeligt batteri.",
  },
  {
    q: "Hvor stort er bordet, og kan I bære det ind?",
    a: "Bordet vejer 150 kg. Vi står for levering, indbæring og opsætning. Vi skal blot kende adgangsforholdene på forhånd.",
  },
  {
    q: "Hvad sker der, hvis bordet bliver beskadiget?",
    a: "Bordet er forsikret under hele lejeperioden. Kunden hæfter dog for skader, der skyldes forkert brug eller hærværk.",
  },
  {
    q: "Hvor leverer I?",
    a: "I hele Danmark. Se priser pr. landsdel ovenfor. Du kan også selv afhente i Storkøbenhavn uden beregning, hvis du henter bordet i en bil med lift.",
  },
  {
    q: "Hvordan booker jeg?",
    a: "Udfyld forespørgselsformularen nedenfor. Vi vender tilbage med tilgængelighed og et samlet tilbud inden for to hverdage. Bordet er først reserveret, når du har accepteret tilbuddet, og vi tager forbehold for, at bordet kan være udlejet.",
  },
  {
    q: "Kan jeg leje bordet til en privat fest?",
    a: "Ja. Både private og virksomheder kan leje Stadium 11–11 til fødselsdage, bryllupper, konfirmationer, havefester og firmaevents. Private betaler forud, og der opkræves intet depositum.",
  },
];

export default function UdlejningPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/woodoo_rental_hero.jpg"
            alt="Stadium 11–11 til udlejning"
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
              Udlejning
            </span>
            <h1
              className="h1"
              style={{ fontSize: "clamp(48px, 6vw, 96px)", lineHeight: 1.02 }}
            >
              Lej Stadium 11–11
            </h1>
          </div>
          <div
            className="hero-bleed__bottom fade-up"
            data-delay="2"
            style={{ marginTop: "48px" }}
          >
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>
                Privat &amp; erhverv
              </span>
              <span
                className="val"
                style={{ color: "#F2EEE5" }}
              >
                Til events der mærkes. Og rum der huskes.
              </span>
            </div>
            <div />
            <div className="hero-bleed__cta">
              <a
                href="/da/udlejning#kontakt"
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
                Forespørg om leje
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hvorfor leje frem for at købe ──────────────────────── */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={kicker}>Udlejning</span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontSize: "clamp(28px, 3vw, 44px)",
              color: "#F2EEE5",
              lineHeight: 1.08,
              marginBottom: "40px",
            }}
          >
            Adgang til objektet. <em>Uden binding.</em>
          </h2>
          <div className="two-col">
            <p
              style={{
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "15px",
                color: "rgba(242,238,229,0.75)",
                lineHeight: "1.85",
                margin: 0,
              }}
            >
              Et Stadium 11–11 er en investering. Leje giver fuld adgang til objektet — til events, til showroom-placeringer, til lobbyer og til åbne kontorer — uden at binde kapital. Du betaler for den tid bordet er hos dig. Vi tager os af resten.
            </p>
            <p
              style={{
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "15px",
                color: "rgba(242,238,229,0.75)",
                lineHeight: "1.85",
                margin: 0,
              }}
            >
              Det rette bord forvandler et rum. Det bliver det, gæsterne husker og fotograferer. Til længere placeringer — hotel-lobby, virksomhedshovedkvarter, showroom — er et brandbord et permanent samtaleemne. Vi leverer, sætter op, forsikrer og henter igen. Du skal ikke bekymre dig om opbevaring, vedligehold eller transport.
            </p>
          </div>
        </div>
      </section>

      {/* ── To lejeformer ──────────────────────────────────────── */}
      <section style={{ background: "#0B0A08", padding: "0 48px 96px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="two-col">
            {/* Kort A — Eventleje */}
            <div
              className="fade-up"
              style={{
                border: "1px solid rgba(242,238,229,0.15)",
                padding: "40px 36px",
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "rgba(242,238,229,0.3)",
                  display: "block",
                  marginBottom: "20px",
                  letterSpacing: "0.1em",
                }}
              >
                01
              </span>
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  color: "#F2EEE5",
                  marginBottom: "12px",
                  lineHeight: 1.1,
                }}
              >
                Eventleje
              </h3>
              <p
                style={{
                  fontFamily: "Inter Tight, sans-serif",
                  fontSize: "13px",
                  color: "rgba(242,238,229,0.75)",
                  lineHeight: "1.7",
                  marginBottom: "32px",
                }}
              >
                Et standard Stadium 11–11 til dit event eller din fest. Klar til spil.
              </p>
              <div
                style={{
                  border: "1px solid rgba(242,238,229,0.12)",
                  overflow: "hidden",
                }}
              >
                <TableHeader cols={["", "Inkl. moms", "Ekskl. moms"]} />
                <TableRow cols={["1 dag", "2.250 kr.", "1.800 kr."]} />
                <TableRow cols={["3 dage", "6.250 kr.", "5.000 kr."]} />
                <TableRow cols={["1 uge", "9.375 kr.", "7.500 kr."]} />
                <TableRow cols={["1 måned", "15.625 kr.", "12.500 kr."]} />
                <TableRow cols={["Ekstra dag (fra dag 4)", "1.875 kr./dag", "1.500 kr./dag"]} last />
              </div>
              <p style={note}>
                Lejepriserne er uden levering. Ekstra dage koster aldrig mere end ugeprisen. Levering på Sjælland er gratis ved leje fra 1 uge. Har du brug for en anden periode? Du kan altid få et tilbud.
              </p>
            </div>

            {/* Kort B — Langtidsleje */}
            <div
              className="fade-up"
              data-delay="1"
              style={{
                border: "1px solid rgba(242,238,229,0.15)",
                padding: "40px 36px",
              }}
            >
              <span
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  color: "rgba(242,238,229,0.3)",
                  display: "block",
                  marginBottom: "20px",
                  letterSpacing: "0.1em",
                }}
              >
                02
              </span>
              <h3
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 300,
                  fontSize: "clamp(24px, 2.5vw, 36px)",
                  color: "#F2EEE5",
                  marginBottom: "12px",
                  lineHeight: 1.1,
                }}
              >
                Langtidsleje
              </h3>
              <p
                style={{
                  fontFamily: "Inter Tight, sans-serif",
                  fontSize: "13px",
                  color: "rgba(242,238,229,0.75)",
                  lineHeight: "1.7",
                  marginBottom: "32px",
                }}
              >
                Dit brand, laserskåret og belyst i bordet. Til lobbyer, hovedkvarterer og showrooms.
              </p>
              <div
                style={{
                  border: "1px solid rgba(242,238,229,0.12)",
                  overflow: "hidden",
                  marginBottom: "20px",
                }}
              >
                <TableHeader cols={["", "Inkl. moms", "Ekskl. moms"]} />
                <TableRow cols={["Pr. måned", "11.875 kr./md", "9.500 kr./md"]} last />
              </div>
              <p style={{ ...note, marginTop: 0 }}>
                Branding tilbydes ved leje i minimum 3 måneder, og tilbuddet gives individuelt. Eksempel: 3 måneder med brandingplader: 36.000 kr. ekskl. moms, levering på Sjælland inkluderet.
              </p>
              <p
                style={{
                  fontFamily: "Inter Tight, sans-serif",
                  fontSize: "11px",
                  color: "rgba(242,238,229,0.6)",
                  letterSpacing: "0.04em",
                  lineHeight: "1.6",
                  marginTop: "8px",
                }}
              >
                Branding kræver minimum 3 måneders leje og udføres efter dit visuelle udtryk.
              </p>
              <p style={{ ...note, marginTop: "8px" }}>
                Hvis du lejer og beslutter at købe, trækkes den leje, du allerede har betalt, fra købsprisen. Det endelige tilbud gives ved henvendelse.
              </p>
              <p style={{ ...note, marginTop: "8px" }}>
                Ved langtidsleje og branding opkræves 20 % i forudbetaling, som trækkes fra den samlede pris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inkluderet i lejen ─────────────────────────────────── */}
      <section style={{ background: "#0B0A08", padding: "0 48px 96px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div className="two-col two-col--start">
            <div>
              <span style={kicker}>Inkluderet</span>
              <h2
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontWeight: 300,
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  color: "#F2EEE5",
                  lineHeight: 1.1,
                  marginBottom: "12px",
                }}
              >
                Det er med i lejen.
              </h2>
              <p
                style={{
                  fontFamily: "Inter Tight, sans-serif",
                  fontSize: "13px",
                  color: "rgba(242,238,229,0.75)",
                  lineHeight: "1.7",
                  marginTop: "24px",
                }}
              >
                Private betaler forud, og der opkræves intet depositum. Ved langtidsleje og branding opkræves 20 % i forudbetaling.
              </p>
            </div>
            <div
              style={{
                border: "1px solid rgba(242,238,229,0.12)",
                overflow: "hidden",
              }}
            >
              {[
                "Forsikring under hele lejeperioden",
                "Support under hele lejeperioden",
                "Levering, opsætning og afhentning: prisen afhænger af landsdel, gratis på Sjælland ved leje fra 1 uge",
              ].map((item, i, arr) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 24px",
                    borderBottom:
                      i < arr.length - 1
                        ? "1px solid rgba(242,238,229,0.08)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "rgba(242,238,229,0.4)",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "Inter Tight, sans-serif",
                      fontSize: "14px",
                      color: "#F2EEE5",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery image band ───────────────────────────────── */}
      <section style={{ background: "#0B0A08", padding: "0 48px 96px" }}>
        <div
          className="fade-up"
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 8",
            overflow: "hidden",
            border: "1px solid rgba(242,238,229,0.12)",
          }}
        >
          <Image
            src="/uploads/woodoo_rental_dusk.jpg"
            alt="Stadium 11–11 leveres og sættes op — oplyst ved skumring"
            fill
            sizes="(max-width: 1000px) 100vw, 1000px"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </div>
      </section>

      {/* ── Levering i hele Danmark ────────────────────────────── */}
      <section style={{ background: "#0B0A08", padding: "0 48px 96px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={kicker}>Levering</span>
          <h2
            className="fade-up"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontSize: "clamp(26px, 2.8vw, 40px)",
              color: "#F2EEE5",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            Levering i hele Danmark.
          </h2>
          <p
            style={{
              fontFamily: "Inter Tight, sans-serif",
              fontSize: "14px",
              color: "rgba(242,238,229,0.75)",
              lineHeight: "1.7",
              marginBottom: "36px",
              maxWidth: "56ch",
            }}
          >
            Vi leverer, sætter op og henter igen — i hele landet. Prisen afhænger af landsdel og lægges til lejeprisen. Levering på Sjælland er gratis ved leje fra 1 uge.
          </p>
          <div
            style={{
              border: "1px solid rgba(242,238,229,0.15)",
              overflow: "hidden",
            }}
          >
            <TableHeader cols={["Landsdel", "Inkl. moms", "Ekskl. moms"]} />
            <TableRow cols={["Sjælland", "1.875 kr.", "1.500 kr."]} />
            <TableRow cols={["Lolland & Falster", "2.750 kr.", "2.200 kr."]} />
            <TableRow cols={["Fyn", "3.500 kr.", "2.800 kr."]} />
            <TableRow cols={["Syd-Jylland", "4.250 kr.", "3.400 kr."]} />
            <TableRow cols={["Midt-Jylland", "4.875 kr.", "3.900 kr."]} />
            <TableRow cols={["Nord-Jylland", "5.625 kr.", "4.500 kr."]} />
            <TableRow cols={["Selvafhentning (Storkøbenhavn)", "Gratis", "Gratis"]} last />
          </div>
          <p
            style={{
              fontFamily: "Inter Tight, sans-serif",
              fontSize: "11px",
              color: "rgba(242,238,229,0.6)",
              letterSpacing: "0.04em",
              lineHeight: "1.6",
              marginTop: "16px",
            }}
          >
            Prisen dækker levering, opsætning og afhentning. Fyn og Jylland inkluderer broafgift.
          </p>
          <p style={{ ...note, marginTop: "8px" }}>
            Selvafhentning i Storkøbenhavn er gratis, hvis du henter bordet i en bil med lift (bordet vejer 150 kg).
          </p>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section style={{ background: "#0B0A08", padding: "0 48px 96px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <span style={kicker}>Spørgsmål</span>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 300,
              fontSize: "clamp(26px, 2.8vw, 40px)",
              color: "#F2EEE5",
              lineHeight: 1.1,
              marginBottom: "48px",
            }}
          >
            Ofte stillede spørgsmål.
          </h2>
          <div>
            {faqItems.map((item, i) => (
              <details
                key={i}
                style={{
                  borderTop: "1px solid rgba(242,238,229,0.1)",
                  paddingTop: "0",
                }}
              >
                <summary
                  style={{
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "24px 0",
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 300,
                    fontSize: "clamp(18px, 1.8vw, 22px)",
                    color: "#F2EEE5",
                    lineHeight: 1.2,
                    gap: "24px",
                  }}
                >
                  {item.q}
                  <span
                    style={{
                      fontFamily: "Inter Tight, sans-serif",
                      fontSize: "22px",
                      fontWeight: 200,
                      color: "rgba(242,238,229,0.35)",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontFamily: "Inter Tight, sans-serif",
                    fontSize: "14px",
                    color: "rgba(242,238,229,0.75)",
                    lineHeight: "1.85",
                    paddingBottom: "28px",
                    maxWidth: "72ch",
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
            <div style={{ borderTop: "1px solid rgba(242,238,229,0.1)" }} />
          </div>
        </div>
      </section>

      <GuideLinks
        lang="da"
        tone="dark"
        slugs={[
          "leje-af-professionelt-bordfodbold-i-koebenhavn",
          "leje-af-bordfodbold-til-events-i-aarhus",
          "leje-af-bordfodbold-til-events-i-odense",
          "leje-af-bordfodbold-til-events-i-aalborg",
          "leje-af-bordfodbold-til-events-i-esbjerg",
          "leje-af-bordfodbold-til-events-i-herning",
          "leje-af-bordfodbold-til-firmafest",
          "leje-af-bordfodbold-til-messer",
          "koeb-vs-leje-vs-leasing-af-professionelt-bordfodbold",
        ]}
      />

      {/* ── Kontakt / enquiry ──────────────────────────────────── */}
      <section
        style={{ background: "#E6E3DA", padding: "96px 48px" }}
        id="kontakt"
      >
        <div className="two-col two-col--start" style={{ maxWidth: "1000px" }}>
          <div>
            <span style={kickerLight}>Kontakt</span>
            <h2
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 300,
                fontSize: "clamp(32px, 3.5vw, 52px)",
                color: "#1A1814",
                lineHeight: 1.08,
                marginBottom: "28px",
              }}
            >
              Forespørg om leje.
            </h2>
            <p
              style={{
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "15px",
                color: "rgba(26,24,20,0.65)",
                lineHeight: "1.85",
                marginBottom: "16px",
              }}
            >
              Udfyld formularen, så vender vi tilbage med tilgængelighed og et samlet tilbud inden for to hverdage.
            </p>
            <p
              style={{
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "13px",
                color: "rgba(26,24,20,0.65)",
                lineHeight: "1.7",
                marginBottom: "16px",
              }}
            >
              En forespørgsel er ikke en booking. Bordet er først reserveret, når du har accepteret vores tilbud, og vi tager forbehold for, at bordet kan være udlejet.
            </p>
            <p
              style={{
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "13px",
                color: "rgba(26,24,20,0.45)",
                lineHeight: "1.7",
              }}
            >
              Alle forespørgsler besvares personligt.
            </p>
          </div>
          <RentalForm />
        </div>
      </section>
    </>
  );
}
