import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Showroom | Woodoo Stadium",
  description: "Woodoo Stadium atelier og showroom i København — design, produktion og showroom efter aftale.",
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
              <span className="val" style={{ color: "#F2EEE5" }}>Design · Produktion · Showroom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kapitel 1 — Objektet */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>OBJEKTET</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>Et designobjekt.<br /><em>Man kan også spille på.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Stadium 11–11 er ikke et spil med et designproblem løst. Det er et socialt objekt — et der ændrer atmosfæren i et rum, giver folk en grund til at samles, og leverer en spileoplevelse der matcher dets visuelle identitet.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
              Rent. Konsistent. Bygget til at vare, underholde og bringe folk sammen. Du kan ikke tænke på livets forhindringer mens du for alvor er fanget af spillet. Du kan ikke doomscrolle. Du kan ikke svare på mails. I et par minutter — eller et par timer — er intet andet tilgængeligt.
            </p>
          </div>
          <div style={{ position: "relative", height: "560px" }}>
            <Image
              src="/uploads/close-up_of_freshly_ground_stainless_steel_surface_woodoo_stadium.png"
              alt="Fingeraftryk på børstet stål"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* Citat 1 */}
      <section style={{ background: "#0B0A08", padding: "80px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "Få mennesker til at samles i et øjeblik, hvor intet andet har betydning."
          </p>
        </div>
      </section>

      {/* Kapitel 2 — Ét bord */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
          <div style={{ position: "relative", height: "560px" }}>
            <Image
              src="/uploads/worn_working_hands_gripping_a_precision_steel_rod_woodoo_stadium.png"
              alt="Håndværkerhænder på stålstang"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
          </div>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>ÉT BORD</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>Alle får<br /><em>den samme scene.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Der er ét bord. Ikke en standardversion og en premium version. Ikke et hverdagsbord og et turneringsbord. Ét objekt — Stadium 11–11 — og én oplevelse der aldrig ændrer sig.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Det kan personliggøres — spillerne, farverne, belysningen, detaljerne. Men følelsen er altid den samme. Den samme atmosfære. Det samme stadion. Mange udtryk af ét objekt.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
              732 enkeltkomponenter. 130 tekniske tegninger. 150 kilogram børstet rustfrit stål. Bygget i hånden i København. Lavet til ordre. Bygget én gang, til at holde permanent.
            </p>
          </div>
        </div>
      </section>

      {/* Citat 2 */}
      <section style={{ background: "#1A1814", padding: "80px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "Det er ikke noget der skal opbevares eller beskyttes. Det er lavet til at forblive tilstede."
          </p>
        </div>
      </section>

      {/* Kapitel 3 — Bygget til at blive */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>BYGGET TIL AT BLIVE</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>Spil bør ikke begrænses<br /><em>af, hvor bordet står.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Traditionelle borde ender med at tilhøre ét rum. En kælder. En bar. Et spillerum. Stadium 11–11 er forseglet til permanent udendørs brug — i regn, saltluft, varme og kulde. Det bevæger sig med livet i stedet for at bede livet om at bevæge sig rundt om det.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
              En sommeraften udenfor. Et offentligt rum. En terrasse. En lobby. En regnvejrsdag indendørs. Det samme bord. Den samme oplevelse. Altid tilstede. Altid klar.
            </p>
          </div>
          <div style={{ position: "relative", height: "560px" }}>
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
      <section style={{ background: "#0B0A08", padding: "80px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2, marginBottom: "32px" }}>
            "Trærødder. Stål fremtid."
          </p>
          <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>Woodoo Stadium · København · Est. 2024</p>
        </div>
      </section>

      {/* Nøgletal */}
      <section style={{ background: "#0B0A08", padding: "0 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(242,238,229,0.1)", borderBottom: "1px solid rgba(242,238,229,0.1)" }}>
          {[
            { number: "732", label: "Enkeltkomponenter" },
            { number: "130", label: "Tekniske tegninger" },
            { number: "150kg", label: "Børstet rustfrit stål" },
            { number: "1", label: "Bord. Lavet til ordre." },
          ].map((item, i) => (
            <div key={item.number} style={{ padding: "40px 32px", borderRight: i < 3 ? "1px solid rgba(242,238,229,0.1)" : "none", textAlign: "center" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "56px", color: "#F2EEE5", lineHeight: 1, marginBottom: "12px" }}>{item.number}</div>
              <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Showroom */}
      <section style={{ background: "#0B0A08", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
          <div style={{ position: "relative", height: "500px" }}>
            <Image
              src="/uploads/woodoo_foosball_original_66369433.jfif"
              alt="Woodoo Stadium — dramatisk vinkel"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>SHOWROOM</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Besøg<br /><em>showroomet.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Showroomet er i Ishøj, syd for København. Bordet er der. Du kan se det, røre ved det, og spille på det.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "32px" }}>
              Besøg sker efter aftale. Hvert besøg besvares af de mennesker, der bygger det.
            </p>
            <a
              href="https://www.google.com/maps/search/Ishoj+Denmark"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 32px",
                height: "52px",
                background: "transparent",
                border: "1px solid rgba(242,238,229,0.4)",
                color: "#F2EEE5",
                fontFamily: "Inter Tight, sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                textDecoration: "none",
              }}
            >
              FÅ RUTEVEJLEDNING
            </a>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }} id="kontakt">
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>KONTAKT</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>Tal til<br /><em>atelieret.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Alle forespørgsler besvares i hånden inden for to arbejdsdage. Fortæl os om dit projekt, dit rum, eller dit spørgsmål.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
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
