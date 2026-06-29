import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woodoo Stadium 11–11 | Luxury Foosball Table Handbuilt in Copenhagen",
  description: "Luxury foosball table handbuilt in Copenhagen. Brushed stainless steel — indoor & outdoor, all year round. Stadium 11–11 by Woodoo Stadium.",
  alternates: {
    canonical: "https://woodoo-stadium.com/",
    languages: { da: "https://woodoo-stadium.com/da" },
  },
};

export default function Home() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table_concrete.jpg"
            alt="Woodoo Stadium 11-11 — sculptural profile"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>
        <div className="hero-bleed__veil" />

        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">Every dream needs <em>a field.</em></h1>
          </div>

          <div className="hero-bleed__bottom fade-up" data-delay="3">
            <div className="col-meta">
              <span className="label">Edition</span>
              <span className="val">Stadium <em>11–11</em></span>
            </div>
            <div className="col-meta">
              <span className="label">Material</span>
              <span className="val">Brushed steel · cast frame</span>
            </div>
            <div className="hero-bleed__cta">
              <a className="btn btn--filled-on-dark" href="/the-table">
                Discover the Table <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="attrib" aria-label="At a glance">
        <div className="attrib__inner">
          <span className="attrib__item"><span className="num">01</span>Made in Copenhagen</span>
          <span className="attrib__item"><span className="num">02</span>Brushed Stainless Steel</span>
          <span className="attrib__item"><span className="num">03</span>Indoor &amp; Outdoor</span>
          <span className="attrib__item"><span className="num">04</span>150 kg · Welded Monocoque</span>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto__inner fade-up">
          <h2>
            130 engineering drawings. 732 individual components. Built by hand in Copenhagen. One table. We could have made it simpler. We decided not to.
          </h2>
        </div>
      </section>

      <section className="tt-section split section--no-top section--dark" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="tt__media">
          <Image
            src="/uploads/graded_made_in_denmark.jpg"
            alt="Etched steel grille — Made in Denmark"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 55%" }}
          />
        </div>
        <div className="tt__content">
          <div className="fade-up">
            <span className="kicker" data-index="N° 01">The Table</span>
          </div>
          <h2 className="h2 fade-up" data-delay="1">
            Not assembled. Built.
          </h2>
          <p className="body fade-up" data-delay="2">
            Most objects are assembled. Parts arrive. Parts are joined. The result is a product. The Stadium 11–11 is different. It is welded, ground, and tuned. One hundred and fifty kilograms of brushed stainless steel, formed in a single monocoque body. Sealed permanently. Built to stand outdoors in rain, heat, and cold without changing. It took 130 engineering drawings to describe it. It contains 732 individual parts. We make one table. This is it.
          </p>
          <div className="specs fade-up" data-delay="3">
            <div className="specs__row"><span className="label">Material</span><span className="val">Brushed stainless steel, 304</span></div>
            <div className="specs__row"><span className="label">Weight</span><span className="val">150 kilograms</span></div>
            <div className="specs__row"><span className="label">Habitat</span><span className="val">Indoor &amp; outdoor · all seasons</span></div>
            <div className="specs__row"><span className="label">Light</span><span className="val">Integrated LED · field &amp; plate</span></div>
          </div>
          <a className="tlink tlink--on-dark fade-up" data-delay="4" href="/the-table" style={{ alignSelf: "flex-start" }}>
            Full Specification <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <section className="section section--dark section--no-top" style={{ background: "#0b0a08", padding: "80px 0" }}>
        <div className="fade-up" style={{ textAlign: "center", maxWidth: "72ch", margin: "0 auto" }}>
          <h2 className="h1" style={{ color: "#f2eee5", marginBottom: "1rem" }}>
            The last screen-free sport.
          </h2>
          <p className="body" style={{ color: "#f2eee5", margin: "0 auto", maxWidth: "60ch" }}>
            You cannot be thinking about life's obstacles while genuinely engaged in play. You cannot doomscroll. You cannot answer emails. The ball moves. You move. Everyone in the room stops what they are doing and watches. For a few minutes — or a few hours — nothing else is available. That is not a side effect. That is the architecture of the object.
          </p>
        </div>
      </section>

      <section className="section section--alt craft split">
        <div className="tt__content" style={{ padding: "24px var(--pad-x)", display: "flex", flexDirection: "column", gap: "32px", justifyContent: "center" }}>
          <div className="fade-up"><span className="kicker" data-index="N° 02">Craft</span></div>
          <h2 className="h2 fade-up" data-delay="1">732 decisions, <span className="serif-it">none of them loud.</span></h2>
          <p className="body fade-up" data-delay="2">
            The Stadium is not assembled. It is built — welded, ground, brushed, lit, tuned. Three details we are quietly proud of.
          </p>
          <div className="craft__features fade-up" data-delay="3">
            <div className="feat">
              <span className="num">01.</span>
              <div>
                <h4>Illuminated brand plates</h4>
                <p>Recessed steel panels, etched and lit from within. A wordmark made of the body, not laid upon it. Visible across a room — invisible when at rest.</p>
              </div>
            </div>
            <div className="feat">
              <span className="num">02.</span>
              <div>
                <h4>Concealed electrics</h4>
                <p>Two soft-close compartments hold cabling, drivers and the scoring module. Everything serviceable, nothing in view.</p>
              </div>
            </div>
            <div className="feat">
              <span className="num">03.</span>
              <div>
                <h4>Acoustic body</h4>
                <p>The chamber is tuned. The strike of the ball carries, across forty metres, with the resonance of a struck bell.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tt__media" style={{ minHeight: "720px" }}>
          <Image
            src="/uploads/foosball_table_rain.jpg"
            alt="Rain on steel — detail"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </div>
      </section>

      <section className="double" aria-hidden="true">
        <figure className="photo">
          <Image
            src="/uploads/woodoo_stadium_side.jpg"
            alt="X-frame — profile"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </figure>
        <figure className="photo">
          <Image
            src="/uploads/woodoo_stadium_top.jpg"
            alt="Playing field — top view"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </figure>
      </section>

      <section className="section">
        <div className="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "64px", flexWrap: "wrap", marginBottom: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <span className="kicker" data-index="N° 03">Tenets</span>
            <h2 className="h2">Six reasons it stays.</h2>
          </div>
          <p className="lead">For the rooms that outlast trends, and the people who choose once.</p>
        </div>

        <div className="ruled-grid ruled-grid--3 fade-up" data-delay="1">
          <div className="cell">
            <span className="num">01.</span>
            <h3>Built for <span className="serif-it">permanence.</span></h3>
            <p className="body">A welded stainless frame. A piece of small architecture — not furniture, not equipment.</p>
          </div>
          <div className="cell">
            <span className="num">02.</span>
            <h3>Plays like <span className="serif-it">nothing else.</span></h3>
            <p className="body">Custom-engineered bearings, calibrated rods, a strike that is felt in the room before it is heard.</p>
          </div>
          <div className="cell">
            <span className="num">03.</span>
            <h3>Everywhere. <span className="serif-it">Always.</span></h3>
            <p className="body">Sealed for permanent outdoor life. Rain, salt air, snow. It stays where it is placed.</p>
          </div>
          <div className="cell">
            <span className="num">04.</span>
            <h3>Your mark, <span className="serif-it">in steel.</span></h3>
            <p className="body">An identity etched into the body and lit from behind. Owned, not applied.</p>
          </div>
          <div className="cell">
            <span className="num">05.</span>
            <h3>A room <span className="serif-it">quietens.</span></h3>
            <p className="body">A lobby slows. A bar starts conversations. A Stadium does this to a space.</p>
          </div>
          <div className="cell">
            <span className="num">06.</span>
            <h3>Away from <span className="serif-it">the screen.</span></h3>
            <p className="body">People put the phones down. They make eye contact. They play. That is the point.</p>
          </div>
        </div>
      </section>

      <section className="eleven">
        <div className="eleven__inner">
          <div className="eleven__big fade-up" aria-hidden="true">
            11<span className="colon">:</span>11
          </div>
          <div className="eleven__content">
            <span className="kicker fade-up" data-delay="1" data-index="N° 04" style={{ color: "var(--ink-on-dark)" }}>
              The Symbol
            </span>
            <h2 className="h2 fade-up" data-delay="2">Eleven against eleven. <span className="serif-it">One field.</span></h2>
            <p className="fade-up" data-delay="3">
              Four ones in a row. The minute on the clock when, for a single second, people stop and look up. A small synchronicity. A signal that a vision is ready to leave the page.
            </p>
            <blockquote className="eleven__quote fade-up" data-delay="4">
              Some see 11:11 and make a wish. We made it real.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--dark section--no-top" style={{ paddingTop: "112px" }}>
        <div className="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "64px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <span className="kicker" data-index="N° 05" style={{ color: "var(--ink-on-dark)" }}>
              Placements
            </span>
            <h2 className="h2">Where it <span className="serif-it">belongs.</span></h2>
          </div>
          <a className="tlink tlink--on-dark" href="/gallery">
            Open the Gallery <span className="arrow">→</span>
          </a>
        </div>

        <div className="gallery-grid fade-up" data-delay="1">
          <a className="cell-photo cell--hero" href="/gallery">
            <Image
              src="/uploads/foosball_table.jpg"
              alt="Atelier hero — Stadium 11-11"
              fill
              sizes="100vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Atelier Hero<span className="meta">Stadium 11-11 · Copenhagen</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/gallery">
            <Image
              src="/uploads/foosball_table_concrete.jpg"
              alt="Concrete & steel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Concrete &amp; Steel<span className="meta">Brand Edition · Atelier</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/gallery">
            <Image
              src="/uploads/foosball_table_2.jpg"
              alt="X-frame profile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                The X-Frame<span className="meta">Structural Detail</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/gallery">
            <Image
              src="/uploads/woodoo_stadium_top.jpg"
              alt="Playing field — top view"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                In Profile<span className="meta">Side · Studio</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/gallery">
            <Image
              src="/uploads/woodoo_stadium_11_11_raindrops.jpg"
              alt="Rain on steel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Rain on Steel<span className="meta">All Conditions</span>
              </div>
            </div>
          </a>

          <a className="cell-photo" href="/gallery">
            <Image
              src="/uploads/foosball_table_concrete_3.jpg"
              alt="Rods and mechanics from the side"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Mechanics in Amber<span className="meta">Rods · Studio</span>
              </div>
            </div>
          </a>

          <a className="cell-photo" href="/gallery">
            <Image
              src="/uploads/hero.jpg"
              alt="Stadium 11-11 — full front view"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Front View<span className="meta">Stadium 11-11 · Full Overview</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="section section--alt">
        <div className="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "64px", flexWrap: "wrap", marginBottom: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <span className="kicker" data-index="N° 06">For Business</span>
            <h2 className="h2">Play shouldn't be limited <span className="serif-it">by where the table stands.</span></h2>
          </div>
          <p className="lead">A signature piece for the spaces that ask for one.</p>
        </div>

        <div className="ruled-grid ruled-grid--4 fade-up" data-delay="1">
          <div className="cell">
            <span className="num">01.</span>
            <h3 className="serif">Corporate <span className="serif-it">HQ</span></h3>
            <p className="body">A piece in the lobby that does the work no furniture can. The first thing the candidate remembers.</p>
          </div>
          <div className="cell">
            <span className="num">02.</span>
            <h3 className="serif">Hotels &amp; <span className="serif-it">Resorts</span></h3>
            <p className="body">The object in the room that travels in the photograph. Indoor or terraced; sealed for sea air.</p>
          </div>
          <div className="cell">
            <span className="num">03.</span>
            <h3 className="serif">Airports &amp; <span className="serif-it">Lounges</span></h3>
            <p className="body">A reason to stand up. A reason the brand is remembered on departure. Quiet enough for a lounge.</p>
          </div>
          <div className="cell">
            <span className="num">04.</span>
            <h3 className="serif">Brand &amp; <span className="serif-it">Activation</span></h3>
            <p className="body">A branded edition for the floor, the launch, the place a story is told and a photograph is taken.</p>
          </div>
        </div>

        <div className="fade-up" style={{ marginTop: "48px" }}>
          <a className="tlink" href="/for-business">Explore For Business <span className="arrow">→</span></a>
        </div>
      </section>

      <section className="section cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker" data-index="N° 07">Enquire</span></div>
          <h2 className="h2 fade-up" data-delay="1">
            Your table. One expression of one object.
          </h2>
          <p className="body fade-up" data-delay="2">
            The stage is always the same. What changes is how you claim it. Configure yours or visit the atelier in Copenhagen.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <div className="cta-actions__row">
            <a className="btn btn--filled" href="/atelier#contact">Request a Quote <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
