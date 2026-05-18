import Image from "next/image";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Atelier | WooDoo Stadium",
  description: "The WooDoo Stadium atelier in Copenhagen — design, production and showroom by appointment.",
};

export default function AtelierPage() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table_rain.jpg"
            alt="Stadium 11-11 rain on steel"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-bleed__veil" />
        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">Made in Copenhagen.</h1>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">The Atelier</span>
          <h2 className="h2">A place where wood roots and steel future meet.</h2>
          <p className="body">
            The Stadium began with a rooted material story: hand-turned wood, foundry steel and the idea of permanence. The 11:11 sign became the small architecture of a table — a single field, a single surface, a shared object.
          </p>
          <p className="body">
            One table. One build. The Stadium 11–11 is designed and produced by hand, with 732 individual components assembled after 130 engineering drawings. The result is a piece that is both precise and sculptural.
          </p>
        </div>
      </section>

      <section className="section section--dark section--no-top">
        <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">The Atelier</span>
          <h2 className="h2">The Atelier.</h2>
          <p className="body">
            WooDoo Stadium is designed and built in Copenhagen, Denmark. The showroom is in Ishøj, south of the city. Visits are by appointment.
          </p>
        </div>
      </section>

      <section className="section section--no-top" id="contact">
        <div style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">Contact</span>
          <h2 className="h2">Talk to the atelier.</h2>
          <ContactForm />
        </div>
      </section>

      <section className="section section--no-top">
        <div style={{ maxWidth: "60ch", margin: "0 auto" }}>
          <span className="kicker">Showroom</span>
          <h2 className="h2">Visit the workshop.</h2>
          <p className="body">Refshalevej 123, 2635 Ishøj, Denmark</p>
          <a className="btn btn--filled" href="https://www.google.com/maps/search/Refshalevej+123,+2635+Ish%C3%B8j" target="_blank" rel="noreferrer">
            Book a visit →
          </a>
        </div>
      </section>
    </>
  );
}
