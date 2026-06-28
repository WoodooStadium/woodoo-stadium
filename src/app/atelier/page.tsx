import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Atelier | Woodoo Stadium",
  description: "The Woodoo Stadium atelier in Copenhagen — design, production and showroom by appointment.",
};

export default function AtelierPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table_rain.jpg"
            alt="Stadium 11-11 — rain on steel"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-bleed__veil" />
        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">Made in<br /><em>Copenhagen.</em></h1>
          </div>
          <div className="hero-bleed__bottom fade-up" data-delay="2">
            <div className="col-meta">
              <span className="label" style={{ color: "rgba(242,238,229,0.62)" }}>The Atelier</span>
              <span className="val" style={{ color: "#F2EEE5" }}>Design · Production · Showroom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1 — The object */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>THE OBJECT</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>A design object.<br /><em>That you can also play.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              The Stadium 11–11 is not a game with a design problem solved. It is a social object — one that changes the atmosphere of a room, gives people a reason to gather, and delivers a playing experience that matches its visual identity.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
              Clean. Consistent. Built to last, to entertain, and to bring people together. You cannot be thinking about life's obstacles while genuinely engaged in play. You cannot be doomscrolling. You cannot answer emails. For a few minutes — or a few hours — nothing else is available.
            </p>
          </div>
          <div style={{ position: "relative", height: "560px" }}>
            <Image
              src="/uploads/close-up_of_freshly_ground_stainless_steel_surface_woodoo_stadium.png"
              alt="Fingerprints on brushed steel"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section style={{ background: "#0B0A08", padding: "80px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "Make people come together in a moment where nothing else matters."
          </p>
        </div>
      </section>

      {/* Chapter 2 — One stage */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
          <div style={{ position: "relative", height: "560px" }}>
            <Image
              src="/uploads/worn_working_hands_gripping_a_precision_steel_rod_woodoo_stadium.png"
              alt="Craftsman hands on steel rod"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
          </div>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>ONE TABLE</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>Everyone gets<br /><em>the same stage.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              There is one table. Not a standard version and a premium version. Not an everyday table and a tournament table. One object — the Stadium 11–11 — and one experience that never changes.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              It can be personalised — the players, the colours, the lighting, the details. But the feeling is always the same. The same atmosphere. The same stadium. Many expressions of one object.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
              732 individual components. 130 engineering drawings. 150 kilograms of brushed stainless steel. Built by hand in Copenhagen. Made to order. Built once, to last permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section style={{ background: "#1A1814", padding: "80px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "It is not something that has to be stored away or protected. It is made to stay present."
          </p>
        </div>
      </section>

      {/* Chapter 3 — Outdoors */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>BUILT TO STAY</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>Play shouldn't be limited<br /><em>by where the table stands.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "20px" }}>
              Traditional tables end up belonging to one room. A basement. A bar. A game room. The Stadium 11–11 is sealed for permanent outdoor use — in rain, salt air, heat, and cold. It moves with life instead of asking life to move around it.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
              A summer evening outside. A public space. A terrace. A lobby. A rainy day indoors. The same table. The same experience. Always present. Always ready.
            </p>
          </div>
          <div style={{ position: "relative", height: "560px" }}>
            <Image
              src="/uploads/working_hands_pressing_an_angle_grinder_woodoo_stadium.png"
              alt="Craftsman at work — angle grinder"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section style={{ background: "#0B0A08", padding: "80px 48px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2, marginBottom: "32px" }}>
            "Wood roots. Steel future."
          </p>
          <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>Woodoo Stadium · Copenhagen · Est. 2024</p>
        </div>
      </section>

      {/* Key figures */}
      <section style={{ background: "#0B0A08", padding: "0 48px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(242,238,229,0.1)", borderBottom: "1px solid rgba(242,238,229,0.1)" }}>
          {[
            { number: "732", label: "Individual components" },
            { number: "130", label: "Technical drawings" },
            { number: "150kg", label: "Brushed stainless steel" },
            { number: "1", label: "Table. Made to order." },
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
              alt="Woodoo Stadium — dramatic angle"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)", display: "block", marginBottom: "24px" }}>SHOWROOM</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#F2EEE5", lineHeight: 1.1, marginBottom: "32px" }}>Visit the<br /><em>showroom.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              The showroom is in Ishøj, south of Copenhagen. The table is there. You can see it, touch it, and play it.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(242,238,229,0.65)", lineHeight: "1.8", marginBottom: "32px" }}>
              Visits are by appointment. Every visit is answered by the people who build it.
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
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ background: "#E6E3DA", padding: "96px 48px" }} id="contact">
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "96px", alignItems: "start" }}>
          <div>
            <span style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(26,24,20,0.4)", display: "block", marginBottom: "24px" }}>CONTACT</span>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 3.5vw, 52px)", color: "#1A1814", lineHeight: 1.1, marginBottom: "32px" }}>Talk to<br /><em>the atelier.</em></h2>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8", marginBottom: "16px" }}>
              Every enquiry is answered by hand within two working days. Tell us about your project, your space, or your question.
            </p>
            <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "15px", color: "rgba(26,24,20,0.65)", lineHeight: "1.8" }}>
              We will send you the full specification, lead time, and a first proposal.
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