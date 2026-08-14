import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Håndbygget bordfodboldbord — værksted | Woodoo Stadium",
  description: "Woodoo Stadium atelier i København — design og produktion af Stadium 11–11.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/showroom",
    languages: { en: "https://woodoo-stadium.com/atelier" },
  },
};

export default function DaShowroomPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table_rain.jpg"
            alt="Stadium 11-11 — regn på stål"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-bleed__veil" />
        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">Lavet i<br /><em>København.</em></h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2">
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>Atelieret</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Design · Produktion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kapitel 1 — Objektet */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div>
            <SectionHeading
              kicker="OBJEKTET"
              kickerIndex="N° 01"
              variant="light"
              heading={<>Et designobjekt.<br /><em>Man kan også spille på.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              Stadium 11–11 er ikke et spil med et designproblem løst. Det er et socialt objekt — et der ændrer atmosfæren i et rum, giver folk en grund til at samles, og leverer en spileoplevelse der matcher dets visuelle identitet.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              Rent. Konsistent. Bygget til at vare, underholde og bringe folk sammen. Du kan ikke tænke på livets forhindringer mens du for alvor er fanget af spillet. Du kan ikke doomscrolle. Du kan ikke svare på mails. I et par minutter — eller et par timer — er intet andet tilgængeligt.
            </p>
          </div>
          <div className="media-tall">
            <Image
              src="/uploads/close-up_of_freshly_ground_stainless_steel_surface_woodoo_stadium.png"
              alt="Fingeraftryk på glasblæst stål"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* Citat 1 */}
      <section style={{ background: "#0B0A08", padding: "80px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "Få mennesker til at samles i et øjeblik, hvor intet andet har betydning."
          </p>
        </div>
      </section>

      {/* Kapitel 2 — Ét bord */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div className="media-tall">
            <Image
              src="/uploads/worn_working_hands_gripping_a_precision_steel_rod_woodoo_stadium.png"
              alt="Håndværkerhænder på stålstang"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
          </div>
          <div>
            <SectionHeading
              kicker="ÉT BORD"
              kickerIndex="N° 02"
              variant="light"
              heading={<>Alle får<br /><em>den samme scene.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              Der er ét bord. Ikke en standardversion og en premium version. Ikke et hverdagsbord og et turneringsbord. Ét objekt — Stadium 11–11 — og én oplevelse der aldrig ændrer sig.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              Det kan personliggøres — spillerne, farverne, belysningen, detaljerne. Men følelsen er altid den samme. Den samme atmosfære. Det samme stadion. Mange udtryk af ét objekt.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              732 enkeltkomponenter. 130 tekniske tegninger. 150 kilogram glasblæst rustfrit stål. Bygget i hånden i København. Lavet til ordre. Bygget én gang, til at holde permanent.
            </p>
          </div>
        </div>
      </section>

      {/* Citat 2 */}
      <section style={{ background: "#1A1814", padding: "80px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "Det er ikke noget der skal opbevares eller beskyttes. Det er lavet til at forblive tilstede."
          </p>
        </div>
      </section>

      {/* Kapitel 3 — Bygget til at blive */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div>
            <SectionHeading
              kicker="BYGGET TIL AT BLIVE"
              kickerIndex="N° 03"
              variant="light"
              heading={<>Spil bør ikke begrænses<br /><em>af, hvor bordet står.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              Traditionelle borde ender med at tilhøre ét rum. En kælder. En bar. Et spillerum. Stadium 11–11 er forseglet til permanent udendørs brug — i regn, saltluft, varme og kulde. Det bevæger sig med livet i stedet for at bede livet om at bevæge sig rundt om det.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              En sommeraften udenfor. Et offentligt rum. En terrasse. En lobby. En regnvejrsdag indendørs. Det samme bord. Den samme oplevelse. Altid tilstede. Altid klar.
            </p>
          </div>
          <div className="media-tall">
            <Image
              src="/uploads/working_hands_pressing_an_angle_grinder_woodoo_stadium.png"
              alt="Håndværker arbejder — vinkelsliber"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* Citat 3 */}
      <section style={{ background: "#0B0A08", padding: "80px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2, marginBottom: "32px" }}>
            "Trærødder. Stål fremtid."
          </p>
          <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>Woodoo Stadium · København · Est. 2024</p>
        </div>
      </section>

      {/* Nøgletal */}
      <section style={{ background: "#0B0A08", padding: "0 var(--pad-x-editorial)" }}>
        <div className="grid-4-responsive" style={{ maxWidth: "1400px", margin: "0 auto", borderTop: "1px solid rgba(242,238,229,0.1)", borderBottom: "1px solid rgba(242,238,229,0.1)" }}>
          {[
            { number: "732", label: "Enkeltkomponenter" },
            { number: "130", label: "Tekniske tegninger" },
            { number: "150kg", label: "Glasblæst rustfrit stål" },
            { number: "1", label: "Bord. Lavet til ordre." },
          ].map((item, i) => (
            <div key={item.number} style={{ padding: "40px 32px", borderRight: i < 3 ? "1px solid rgba(242,238,229,0.1)" : "none", textAlign: "center" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "72px", color: "#F2EEE5", lineHeight: 1, marginBottom: "12px" }}>{item.number}</div>
              <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Privat fremvisning */}
      <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <SectionHeading
            kicker="PRIVAT FREMVISNING"
            kickerIndex="N° 04"
            variant="dark"
            align="center"
            heading={<>Se bordet <em>i virkeligheden.</em></>}
          />
          <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)", maxWidth: "52ch", margin: "32px auto 0" }}>
            Ved seriøse forespørgsler kan vi arrangere en privat fremvisning — vi bringer Stadium 11–11 ud til jeres lokale, så I kan se det, røre ved det og spille på det, før I beslutter jer.
          </p>
          <a
            className="btn btn--filled-on-dark"
            href="#kontakt"
            style={{ justifyContent: "center", marginTop: "32px" }}
          >
            Book en fremvisning <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* Kontakt */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }} id="kontakt">
        <div className="two-col two-col--start">
          <div>
            <SectionHeading
              kicker="KONTAKT"
              kickerIndex="N° 05"
              variant="light"
              heading={<>Tal til<br /><em>atelieret.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              Alle forespørgsler besvares personligt inden for to arbejdsdage. Fortæl os om dit projekt, dit rum, eller dit spørgsmål.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid)" }}>
              Vi sender dig den fulde specifikation, leveringstid og et første forslag.
            </p>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
