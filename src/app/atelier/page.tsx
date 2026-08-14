import Image from "next/image";
import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Handmade Foosball Table Workshop | Woodoo Stadium",
  description: "The Woodoo Stadium atelier in Copenhagen — design and production of the Stadium 11–11.",
  alternates: {
    canonical: "https://woodoo-stadium.com/atelier",
    languages: { da: "https://woodoo-stadium.com/da/showroom" },
  },
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
              <span className="val" style={{ color: "#F2EEE5" }}>Design · Production</span>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 1 — The object */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div>
            <SectionHeading
              kicker="THE OBJECT"
              kickerIndex="N° 01"
              variant="light"
              heading={<>A design object.<br /><em>That you can also play.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              The Stadium 11–11 is not a game with a design problem solved. It is a social object — one that changes the atmosphere of a room, gives people a reason to gather, and delivers a playing experience that matches its visual identity.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              Clean. Consistent. Built to last, to entertain, and to bring people together. You cannot be thinking about life's obstacles while genuinely engaged in play. You cannot be doomscrolling. You cannot answer emails. For a few minutes — or a few hours — nothing else is available.
            </p>
          </div>
          <div className="media-tall">
            <Image
              src="/uploads/close-up_of_freshly_ground_stainless_steel_surface_woodoo_stadium.png"
              alt="Fingerprints on bead-blasted steel"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section style={{ background: "#0B0A08", padding: "80px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "Make people come together in a moment where nothing else matters."
          </p>
        </div>
      </section>

      {/* Chapter 2 — One stage */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div className="media-tall">
            <Image
              src="/uploads/worn_working_hands_gripping_a_precision_steel_rod_woodoo_stadium.png"
              alt="Craftsman hands on steel rod"
              fill
              sizes="50vw"
              style={{ objectFit: "cover", objectPosition: "center 40%" }}
            />
          </div>
          <div>
            <SectionHeading
              kicker="ONE TABLE"
              kickerIndex="N° 02"
              variant="light"
              heading={<>Everyone gets<br /><em>the same stage.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              There is one table. Not a standard version and a premium version. Not an everyday table and a tournament table. One object — the Stadium 11–11 — and one experience that never changes.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              It can be personalised — the players, the colours, the lighting, the details. But the feeling is always the same. The same atmosphere. The same stadium. Many expressions of one object.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              732 individual components. 130 engineering drawings. 150 kilograms of bead-blasted stainless steel. Built by hand in Copenhagen. Made to order. Built once, to last permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section style={{ background: "#1A1814", padding: "80px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2 }}>
            "It is not something that has to be stored away or protected. It is made to stay present."
          </p>
        </div>
      </section>

      {/* Chapter 3 — Outdoors */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }}>
        <div className="two-col">
          <div>
            <SectionHeading
              kicker="BUILT TO STAY"
              kickerIndex="N° 03"
              variant="light"
              heading={<>Play shouldn't be limited<br /><em>by where the table stands.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              Traditional tables end up belonging to one room. A basement. A bar. A game room. The Stadium 11–11 is sealed for permanent outdoor use — in rain, salt air, heat, and cold. It moves with life instead of asking life to move around it.
            </p>
            <p className="body" style={{ marginTop: "20px", color: "var(--mid)" }}>
              A summer evening outside. A public space. A terrace. A lobby. A rainy day indoors. The same table. The same experience. Always present. Always ready.
            </p>
          </div>
          <div className="media-tall">
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
      <section style={{ background: "#0B0A08", padding: "80px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#F2EEE5", lineHeight: 1.2, marginBottom: "32px" }}>
            "Wood roots. Steel future."
          </p>
          <p style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "13px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>Woodoo Stadium · Copenhagen · Est. 2024</p>
        </div>
      </section>

      {/* Key figures */}
      <section style={{ background: "#0B0A08", padding: "0 var(--pad-x-editorial)" }}>
        <div className="grid-4-responsive" style={{ maxWidth: "1400px", margin: "0 auto", borderTop: "1px solid rgba(242,238,229,0.1)", borderBottom: "1px solid rgba(242,238,229,0.1)" }}>
          {[
            { number: "732", label: "Individual components" },
            { number: "130", label: "Technical drawings" },
            { number: "150kg", label: "Bead-blasted stainless steel" },
            { number: "1", label: "Table. Made to order." },
          ].map((item, i) => (
            <div key={item.number} style={{ padding: "40px 32px", borderRight: i < 3 ? "1px solid rgba(242,238,229,0.1)" : "none", textAlign: "center" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "72px", color: "#F2EEE5", lineHeight: 1, marginBottom: "12px" }}>{item.number}</div>
              <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(242,238,229,0.4)" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

{/* Private viewing */}
      <section style={{ background: "#0B0A08", padding: "96px var(--pad-x-editorial)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <SectionHeading
            kicker="PRIVATE VIEWING"
            kickerIndex="N° 04"
            variant="dark"
            align="center"
            heading={<>See the table <em>in person.</em></>}
          />
          <p className="body" style={{ marginTop: "32px", color: "var(--mid-on-dark)", maxWidth: "52ch", margin: "32px auto 0" }}>
            For serious enquiries, we can arrange a private viewing — bringing the Stadium 11–11 to your space, so you can see it, touch it, and play it before you decide.
          </p>
          <a
            className="btn btn--filled-on-dark"
            href="#contact"
            style={{ justifyContent: "center", marginTop: "32px" }}
          >
            Book a viewing <span className="arrow">→</span>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section style={{ background: "#E6E3DA", padding: "96px var(--pad-x-editorial)" }} id="contact">
        <div className="two-col two-col--start">
          <div>
            <SectionHeading
              kicker="CONTACT"
              kickerIndex="N° 05"
              variant="light"
              heading={<>Talk to<br /><em>the atelier.</em></>}
            />
            <p className="body" style={{ marginTop: "32px", color: "var(--mid)" }}>
              Every enquiry is answered personally within two working days. Tell us about your project, your space, or your question.
            </p>
            <p className="body" style={{ marginTop: "16px", color: "var(--mid)" }}>
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