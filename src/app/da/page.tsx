import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Woodoo Stadium 11–11 | Luksus bordfodboldbord håndbygget i København",
  description: "Stadium 11–11 er et håndbygget luksus bordfodboldbord i børstet rustfrit stål. 732 komponenter. Inde og ude, året rundt. Designet og bygget i København.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da",
    languages: { en: "https://woodoo-stadium.com/" },
  },
};

export default function DaHome() {
  return (
    <>
      <section className="hero-bleed">
        <div className="hero-bleed__media">
          <Image
            src="/uploads/foosball_table_concrete.jpg"
            alt="Woodoo Stadium 11-11 — skulpturelt profil"
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
          />
        </div>
        <div className="hero-bleed__veil" />

        <div className="hero-bleed__inner">
          <div className="hero-bleed__title fade-up" data-delay="1">
            <h1 className="h1">Alle drømme har et <em>et mål.</em></h1>
          </div>

          <div className="hero-bleed__bottom fade-up" data-delay="3">
            <div className="col-meta">
              <span className="label">Udgave</span>
              <span className="val">Stadium <em>11–11</em></span>
            </div>
            <div className="col-meta">
              <span className="label">Materiale</span>
              <span className="val">Børstet stål · støbt ramme</span>
            </div>
            <div className="hero-bleed__cta">
              <a className="btn btn--filled-on-dark" href="/da/bordet">
                Se bordet <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="attrib" aria-label="Kort fortalt">
        <div className="attrib__inner">
          <span className="attrib__item"><span className="num">01</span>Bygget i København</span>
          <span className="attrib__item"><span className="num">02</span>Børstet rustfrit stål</span>
          <span className="attrib__item"><span className="num">03</span>Inde &amp; ude</span>
          <span className="attrib__item"><span className="num">04</span>150 kg · svejset monocoque</span>
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto__inner fade-up">
          <h2>
            130 tekniske tegninger. 732 enkeltkomponenter. Håndbygget i København. Ét bord. Vi kunne have gjort det mere simpelt. Det gjorde vi ikke.
          </h2>
        </div>
      </section>

      <section className="tt-section split section--no-top section--dark" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="tt__media">
          <Image
            src="/uploads/graded_made_in_denmark.jpg"
            alt="Laseskåret stålrist — Made in Denmark"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{ objectFit: "cover", objectPosition: "center 55%" }}
          />
        </div>
        <div className="tt__content">
          <div className="fade-up">
            <span className="kicker" data-index="N° 01">Bordet</span>
          </div>
          <h2 className="h2 fade-up" data-delay="1">
            Ikke samlet. Bygget.
          </h2>
          <p className="body fade-up" data-delay="2">
            De fleste objekter bliver samlet. Dele ankommer. Dele forbindes. Resultatet er et produkt. Stadium 11–11 er noget andet. Det bliver svejset, slebet og stemt. Hundrede og halvtreds kilo børstet rustfrit stål, formet i én sammenhængende monocoque-krop. Forseglet permanent. Bygget til at stå udendørs i regn, varme og kulde uden at forandre sig. Der skulle 130 tekniske tegninger til at beskrive det. Det rummer 732 enkeltdele. Vi laver ét bord. Det er det.
          </p>
          <div className="specs fade-up" data-delay="3">
            <div className="specs__row"><span className="label">Materiale</span><span className="val">Børstet rustfrit stål, 304</span></div>
            <div className="specs__row"><span className="label">Vægt</span><span className="val">150 kilogram</span></div>
            <div className="specs__row"><span className="label">Placering</span><span className="val">Inde &amp; ude · året rundt</span></div>
            <div className="specs__row"><span className="label">Lys</span><span className="val">Integreret LED · bane &amp; plade</span></div>
          </div>
          <a className="tlink tlink--on-dark fade-up" data-delay="4" href="/da/bordet" style={{ alignSelf: "flex-start" }}>
            Fuld specifikation <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <section className="section section--dark section--no-top" style={{ background: "#0b0a08", padding: "80px 0" }}>
        <div className="fade-up" style={{ textAlign: "center", maxWidth: "72ch", margin: "0 auto" }}>
          <h1 className="h1" style={{ color: "#f2eee5", marginBottom: "1rem" }}>
            Den sidste skærmfri sport.
          </h1>
          <p className="body" style={{ color: "#f2eee5", margin: "0 auto", maxWidth: "60ch" }}>
            Du kan ikke gå og tænke på livets forhindringer, mens du for alvor er fanget af spillet. Du kan ikke doomscrolle. Du kan ikke svare på mails. Bolden bevæger sig. Du bevæger dig. Alle i rummet stopper det, de har gang i, og kigger med. I et par minutter — eller et par timer — findes der ikke andet. Det er ikke en bivirkning. Det er selve objektets arkitektur.
          </p>
        </div>
      </section>

      <section className="section section--alt craft split">
        <div className="tt__content" style={{ padding: "24px var(--pad-x)", display: "flex", flexDirection: "column", gap: "32px", justifyContent: "center" }}>
          <div className="fade-up"><span className="kicker" data-index="N° 02">Håndværk</span></div>
          <h2 className="h2 fade-up" data-delay="1">732 beslutninger, <span className="serif-it">ingen af dem råber.</span></h2>
          <p className="body fade-up" data-delay="2">
            Stadium bliver ikke samlet. Det bliver bygget — svejset, slebet, børstet, oplyst, stemt. Tre detaljer, vi stille er stolte af.
          </p>
          <div className="craft__features fade-up" data-delay="3">
            <div className="feat">
              <span className="num">01.</span>
              <div>
                <h4>Oplyste brandplader</h4>
                <p>Indfældede stålpaneler, ætsede og oplyst indefra. Et ordmærke skabt af kroppen — ikke lagt ovenpå den. Synligt på tværs af et rum — usynligt i hvile.</p>
              </div>
            </div>
            <div className="feat">
              <span className="num">02.</span>
              <div>
                <h4>Skjult elektronik</h4>
                <p>Et soft-close-rum rummer kabler og batteri. Alt kan serviceres, intet er i syne.</p>
              </div>
            </div>
            <div className="feat">
              <span className="num">03.</span>
              <div>
                <h4>Akustisk krop</h4>
                <p>Kammeret er stemt. Boldens anslag bæres fyrre meter med klangen af en anslået klokke.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tt__media" style={{ minHeight: "720px" }}>
          <Image
            src="/uploads/foosball_table_rain.jpg"
            alt="Regn på stål — detalje"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </div>
      </section>

      <section className="double" aria-hidden="true">
        <figure className="photo">
          <Image
            src="/uploads/woodoo_stadium_side.png"
            alt="X-ramme — profil"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </figure>
        <figure className="photo">
          <Image
            src="/uploads/woodoo_stadium_top.png"
            alt="Scoreviser — detalje i rav"
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
            <span className="kicker" data-index="N° 03">Principper</span>
            <h2 className="h2">Seks grunde til, at det bliver.</h2>
          </div>
          <p className="lead">Til rum, der holder længere end tendenser. Og mennesker, der vælger med omtanke.</p>
        </div>

        <div className="ruled-grid ruled-grid--3 fade-up" data-delay="1">
          <div className="cell">
            <span className="num">01.</span>
            <h3>Bygget til <span className="serif-it">at blive.</span></h3>
            <p className="body">En svejset ramme i rustfrit stål. Et stykke arkitektur — ikke et møbel, ikke udstyr.</p>
          </div>
          <div className="cell">
            <span className="num">02.</span>
            <h3>Spiller som <span className="serif-it">intet andet.</span></h3>
            <p className="body">Specialudviklede lejer, kalibrerede stænger, et anslag der mærkes i rummet, før det høres.</p>
          </div>
          <div className="cell">
            <span className="num">03.</span>
            <h3>Overalt. <span className="serif-it">Altid.</span></h3>
            <p className="body">Forseglet til et liv indendøres såvel som udendørs. Regn, saltluft, sne. Det lever hvor det placeres.</p>
          </div>
          <div className="cell">
            <span className="num">04.</span>
            <h3>Dit mærke, <span className="serif-it">i stål.</span></h3>
            <p className="body">En identitet svejset ind i rammen og oplyst bagfra. Et stement. Ikke en påstand.</p>
          </div>
          <div className="cell">
            <span className="num">05.</span>
            <h3>Et rum <span className="serif-it">falder til ro.</span></h3>
            <p className="body">En lobby sænker farten. En bar starter samtaler. Et Woodoo Stadium gør begge dele ved et rum.</p>
          </div>
          <div className="cell">
            <span className="num">06.</span>
            <h3>Væk fra <span className="serif-it">skærmen.</span></h3>
            <p className="body">Folk lægger telefonen. De får øjenkontakt. De spiller. Det er hele pointen.</p>
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
              Symbolet
            </span>
            <h2 className="h2 fade-up" data-delay="2">Elleve mod elleve. <span className="serif-it">Ét stadion.</span></h2>
            <p className="fade-up" data-delay="3">
              Fire ettaller på stribe. Minuttet på uret, hvor folk — for et enkelt sekund — stopper op og kigger opad. En lille synkronicitet. Et signal om, at en vision er klar til at forlade papiret.
            </p>
            <blockquote className="eleven__quote fade-up" data-delay="4">
              Nogle ser 11:11 og sender et ønske ud. Vi gjorde det til virkelighed.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section section--dark section--no-top" style={{ paddingTop: "112px" }}>
        <div className="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "64px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <span className="kicker" data-index="N° 05" style={{ color: "var(--ink-on-dark)" }}>
              Placeringer
            </span>
            <h2 className="h2">Et objekt der <span className="serif-it">hører til.</span></h2>
          </div>
          <a className="tlink tlink--on-dark" href="/da/galleri">
            Åbn galleriet <span className="arrow">→</span>
          </a>
        </div>

        <div className="gallery-grid fade-up" data-delay="1">
          <a className="cell-photo cell--hero" href="/da/galleri">
            <Image
              src="/uploads/foosball_table.jpg"
              alt="Showroom-hero — Stadium 11-11"
              fill
              sizes="100vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Showroom Hero<span className="meta">Stadium 11-11 · København</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/da/galleri">
            <Image
              src="/uploads/foosball_table_concrete.jpg"
              alt="Beton & stål"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Beton &amp; stål<span className="meta">Brand Edition · Showroom</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/da/galleri">
            <Image
              src="/uploads/foosball_table_2.jpg"
              alt="X-ramme-profil"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                X-rammen<span className="meta">Strukturel detalje</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/da/galleri">
            <Image
              src="/uploads/woodoo_stadium_top.png"
              alt="Spilleflade"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Spilleflade<span className="meta">Set fra toppen</span>
              </div>
            </div>
          </a>
          <a className="cell-photo" href="/da/galleri">
            <Image
              src="/uploads/woodoo_stadium_11_11_raindrops.png"
              alt="Regn på stål"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Regn på stål<span className="meta">Alle forhold</span>
              </div>
            </div>
          </a><a className="cell-photo" href="/da/galleri">
            <Image
              src="/uploads/foosball_table_concrete_3.jpg"
              alt="Din beskrivelse"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
               Stænger fra siden <span className="meta">Uovertruffen præcision</span>
              </div>
            </div>
          </a>

          <a className="cell-photo" href="/da/galleri">
            <Image
              src="/uploads/hero.png"
              alt="Din beskrivelse"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
            <div className="overlay">
              <div className="overlay__label">
                Frontvisning<span className="meta">Stadium 11-11</span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="section section--alt">
        <div className="fade-up" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: "64px", flexWrap: "wrap", marginBottom: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <span className="kicker" data-index="N° 06">Erhverv</span>
            <h2 className="h2">Spil bør ikke begrænses <span className="serif-it">af, hvor bordet står.</span></h2>
          </div>
          <p className="lead">Et signaturstykke til de rum, der beder om ét.</p>
        </div>

        <div className="ruled-grid ruled-grid--4 fade-up" data-delay="1">
          <div className="cell">
            <span className="num">01.</span>
            <h3 className="serif">Virksomhedens <span className="serif-it">HQ</span></h3>
            <p className="body">Et stykke i lobbyen, der gør det arbejde, intet møbel kan. Det første, kandidaten husker.</p>
          </div>
          <div className="cell">
            <span className="num">02.</span>
            <h3 className="serif">Hoteller &amp; <span className="serif-it">resorts</span></h3>
            <p className="body">Objektet i rummet, der rejser med på fotografiet. Inde eller på terrassen; forseglet mod havluft.</p>
          </div>
          <div className="cell">
            <span className="num">03.</span>
            <h3 className="serif">Lufthavne &amp; <span className="serif-it">lounges</span></h3>
            <p className="body">En grund til at rejse sig. En grund til, at brandet huskes ved afgang. Stille nok til en lounge.</p>
          </div>
          <div className="cell">
            <span className="num">04.</span>
            <h3 className="serif">Brand &amp; <span className="serif-it">aktivering</span></h3>
            <p className="body">En branded udgave til gulvet, lanceringen, stedet hvor en historie fortælles og et fotografi tages.</p>
          </div>
        </div>

        <div className="fade-up" style={{ marginTop: "48px" }}>
          <a className="tlink" href="/da/erhverv">Udforsk Erhverv <span className="arrow">→</span></a>
        </div>
      </section>

      <section className="section cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker" data-index="N° 07">Forespørg</span></div>
          <h2 className="h2 fade-up" data-delay="1">
            Dit bord. Ét udtryk for ét objekt.
          </h2>
          <p className="body fade-up" data-delay="2">
            Arenaen er altid den samme. Det, der ændrer sig, er hvordan du gør den til din. Konfigurér dit eget, eller besøg showroomet i København.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <div className="cta-actions__row">
            <a className="btn btn--filled" href="/da/showroom#kontakt">Anmod om tilbud <span className="arrow">→</span></a>
          </div>
        </div>
      </section>
    </>
  );
}
