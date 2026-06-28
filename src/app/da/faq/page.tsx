import type { Metadata } from "next";
import FaqClient from "@/app/faq/FaqClient";

export const metadata: Metadata = {
  title: "FAQ | Woodoo Stadium — Bordfodbold, bordfodboldbord & Stadium 11–11",
  description: "Svar på de vigtigste spørgsmål om Woodoo Stadium 11–11 — objektet, materialer, tilpasning, udendørsbrug og erhvervseditioner.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/faq",
    languages: { en: "https://woodoo-stadium.com/faq" },
  },
};

const faqItems = [
  {
    question: "Hvad er Woodoo Stadium 11–11?",
    answer: "Et præcisionsingeniøreret socialt designobjekt. Ét bord, håndbygget i København af børstet rustfrit stål 304. Det vejer 150 kilogram, indeholder 732 enkeltkomponenter og er bygget til permanent inde- og udendørs brug. Det er ikke et spil med et designproblem løst — det er et socialt objekt der ændrer atmosfæren i et rum. <a href='/da/bordet'>Se den fulde specifikation →</a>",
    category: "Objektet",
  },
  {
    question: "Hvad koster Stadium 11–11?",
    answer: "Prissætning er tilgængelig på forespørgsel. Hvert bord laves til ordre og konfigureres til rummet, brandet og den tilsigtede brug. <a href='/da/showroom#kontakt'>Kontakt os for et fuldt tilbud →</a>",
    category: "Objektet",
  },
  {
    question: "Hvad betyder navnet Woodoo?",
    answer: "Woodoo begyndte som et træ- og tømrerværksted. Woo for kreativitet — at tiltrække idéer. Doo for at lave — at bygge dem. Navnet bar håndværket da materialet ændrede sig fra træ til stål. Trærødder. Stål fremtid. <a href='/da/showroom'>Læs den fulde historie →</a>",
    category: "Objektet",
  },
  {
    question: "Hvad er det lavet af?",
    answer: "Børstet rustfrit stål 304, svejset til én sammenhængende monocoque-krop. Finishen er børstet, ikke poleret. Rustfrit stål 304 er branchestandarden til permanent udendørs brug — anvendt i arkitektur, marinemiljøer og præcisionsingeniørkunst. Alle materialer er valgt for permanens. <a href='/da/bordet'>Fuld materialspecifikation →</a>",
    category: "Objektet",
  },
  {
    question: "Kan det brandes til vores virksomhed?",
    answer: "Ja. Sideplader, spillebane og belysning kan bære din brandidentitet — ætset, oplyst og permanent. Ikke et klistermærke. Ikke en folie. Lavet af objektet selv. <a href='/da/erhverv'>Se erhvervsudgaver →</a>",
    category: "Objektet",
  },
  {
    question: "Hvad kan tilpasses?",
    answer: "Spillere, håndtag, spillebanefarve og logoplacering, sideplader og belysning. Fulde bespoke kommissioner er også mulige — en samtale, en skitse, et forslag. <a href='/da/tilpas'>Udforsk alle tilpasningsmuligheder →</a>",
    category: "Objektet",
  },
  {
    question: "Hvordan forespørger jeg?",
    answer: "Brug forespørgselsformularen på hjemmesiden. Alle forespørgsler besvares i hånden inden for to arbejdsdage. Vi sender dig den fulde specifikation, leveringstid og et første forslag. <a href='/da/showroom#kontakt'>Send en forespørgsel →</a>",
    category: "Objektet",
  },
  {
    question: "Kan det bruges udendørs permanent?",
    answer: "Ja. Stadium 11–11 er forseglet til permanent udendørs brug i alle vejrforhold — regn, saltluft, varme og kulde. Det er ikke noget der skal opbevares eller beskyttes. Det er lavet til at forblive tilstede. <a href='/da/bordet'>Se den fulde specifikation →</a>",
    category: "Brug & Placering",
  },
  {
    question: "Hvad sker der når det regner?",
    answer: "Ingenting. Bordet er bygget til det. Børstet rustfrit stål 304, svejset til én sammenhængende monocoque-krop, forseglet til alt vejr. Det bliver, hvor det placeres. <a href='/da/bordet'>Læs mere om materialerne →</a>",
    category: "Brug & Placering",
  },
  {
    question: "Er det egnet til et offentligt rum?",
    answer: "Ja. Stadium 11–11 er bygget til permanent placering i offentlige rum, parker, kulturelle venues, hoteller, lufthavne og virksomhedslobbyer. Det kræver ingen vedligeholdelse og intet ly. <a href='/da/erhverv'>Se sektorplaceringer →</a>",
    category: "Brug & Placering",
  },
  {
    question: "Hvor er Woodoo Stadium fremstillet?",
    answer: "Designet og bygget i København, Danmark. <a href='/da/showroom'>Besøg showroomet →</a>",
    category: "Brug & Placering",
  },
  {
    question: "Er der et showroom?",
    answer: "Ja. Showroomet er i Ishøj, syd for København. Bordet er der. Du kan se det, røre ved det, og spille på det. Besøg sker efter aftale — besvaret af de mennesker der bygger det. <a href='/da/showroom#kontakt'>Book et showroombesøg →</a>",
    category: "Brug & Placering",
  },
  {
    question: "Hvad er bordfodbold?",
    answer: "Bordfodbold har mange navne — det hedder foosball i USA, baby-foot i Frankrig, Kicker i Tyskland og calcio balilla i Italien. Samme spil. Samme stænger. Vidt forskellige accenter. Det er et af de få spil der ikke behøver forklaring på noget sprog — du går hen, griber en stang og spiller.",
    category: "Om Spillet",
  },
  {
    question: "Er bordfodbold en officiel sport?",
    answer: "Ja. <a href='https://www.itsf.net' target='_blank' rel='noopener noreferrer'>International Table Soccer Federation (ITSF)</a> har anerkendt bordfodbold som en officiel konkurrencesport siden 2002. Det spilles i over 75 lande med verdensmesterskaber afholdt hvert år. Der er professionelle spillere, nationale hold og rangerede turneringer over hele verden.",
    category: "Om Spillet",
  },
  {
    question: "Hvad adskiller et professionelt bord fra et barhus-bord?",
    answer: "Et barhus-bord er bygget til volumen og lav pris — løse stænger, hule spillere, inkonsistent bounce. Et professionelt bord er bygget til præcision — glat stængereaktion, afbalancerede figurer, en sand og plan spillebane. Forskellen mærkes øjeblikkeligt. Stadium 11–11 er bygget til turneringsstandard — og derover. <a href='/da/bordet'>Se specifikationen →</a>",
    category: "Om Spillet",
  },
  {
    question: "Hvad er et snake shot i bordfodbold?",
    answer: "Det mest frygtede skud i konkurrencebordfodbold. Spilleren fastgør bolden under 3-stangsfiguren, drejer så stangen med et vrid af håndleddet — og frigiver bolden i det sidste øjeblik i enhver retning. Udført korrekt er det næsten uafvendeligt. Det kræver et bord med konsistent stængerespons og en sand spillebane. Stadium 11–11 kan det. <a href='/da/bordet'>Se Stadium 11–11 specifikationen →</a>",
    category: "Om Spillet",
  },
  {
    question: "Hvad er et socialt designobjekt?",
    answer: "Et socialt designobjekt eksisterer i skæringspunktet mellem design, funktion og menneskelig adfærd. Det er ikke rent dekorativt — det gør noget. Det ændrer hvordan folk bevæger sig gennem et rum, hvor lang tid de bliver, om de taler med hinanden. Et fremragende bordfodboldsbord er et af de mest kraftfulde sociale designobjekter der nogensinde er skabt. Stadium 11–11 er bygget til at være præcis dette — permanent, smukt og uden kompromis. <a href='/da/showroom'>Læs den fulde historie →</a>",
    category: "Det Sociale Objekt",
  },
  {
    question: "Hvorfor er skærmfri social interaktion vigtig?",
    answer: "Den gennemsnitlige person bruger over 7 timer om dagen på en skærm. Ægte face-to-face spil — uformidlet af teknologi — har målbare effekter på velvære, stressreduktion og social samhørighed. Du kan ikke doomscrolle mens du for alvor er fanget af spillet. Du kan ikke svare på mails. Det er ikke en bivirkning. Det er selve objektets arkitektur.",
    category: "Det Sociale Objekt",
  },
  {
    question: "Hvad gør Stadium 11–11 for et erhvervsrum?",
    answer: "Det giver rummet et tyngdepunkt. Folk orienterer sig rundt om det — selv når de ikke spiller. En lobby med et Stadium 11–11 er en anden lobby. Folk sænker farten. De bliver længere. De husker det. <a href='/da/erhverv'>Se erhvervsplaceringer →</a>",
    category: "For Erhverv",
  },
  {
    question: "Er bordfodbold bedre end et billardsbord til social interaktion?",
    answer: "Til social aktivering, ja. Et billardsbord rummer to til fire spillere og kræver turtagning. Et bordfodboldsbord rummer to til otte spillere simultant, genererer støj og energi og tiltrækker tilskuere naturligt. Det er også hurtigere — et spil varer minutter, ikke en time. <a href='/da/erhverv'>Se erhvervsudgaver →</a>",
    category: "For Erhverv",
  },
  {
    question: "Forbedrer et bordfodboldsbord medarbejderproduktiviteten?",
    answer: "Forskning viser konsekvent at korte spilpauser forbedrer kognitiv ydelse, kreativitet og fokus. Et 5-minutters bordfodboldspil nulstiller opmærksomheden mere effektivt end at scrolle på sociale medier. Virksomheder der investerer i fysiske sociale rum rapporterer lavere udbrændingsrater og højere medarbejdertilfredshed. Et bordfodboldsbord er ikke en distraktion fra arbejdet — det er infrastruktur for bedre arbejde. <a href='/da/erhverv'>Se virksomhedsplaceringer →</a>",
    category: "For Erhverv",
  },
  {
    question: "Kan et bordfodboldsbord placeres på en taghave eller udendørs terrasse?",
    answer: "De fleste kan ikke. Standardborde er bygget af træ, MDF eller malet metal — materialer der buler, ruster og nedbrydes i udendørs forhold. Stadium 11–11 er undtagelsen. Bygget af børstet rustfrit stål 304 og forseglet til permanent udendørs brug, kan det placeres på en taghave, terrasse, ved pool eller i en offentlig park. Det behøver ikke ly. Det er lavet til at forblive tilstede. <a href='/da/bordet'>Se den udendørs specifikation →</a>",
    category: "For Erhverv",
  },
];

function groupFaq(items: Array<{ question: string; answer: string; category: string }>) {
  return items.reduce<Record<string, Array<{ question: string; answer: string }>>>((groups, item) => {
    const key = item.category;
    groups[key] = groups[key] || [];
    groups[key].push({ question: item.question, answer: item.answer });
    return groups;
  }, {});
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function DaFaqPage() {
  const groups = groupFaq(faqItems);

  return (
    <>
      <section className="section section--dark section--no-top" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto", textAlign: "center" }}>
          <span className="kicker" style={{ color: "rgba(242,238,229,0.4)" }}>FAQ</span>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 4vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginTop: "16px" }}>
            Bordfodbold, bordfodboldbord<br />&amp; <em>Stadium 11–11</em>
          </h1>
          <p className="body fade-up" data-delay="1" style={{ color: "rgba(242,238,229,0.62)", marginTop: "24px" }}>
            Svar på de vigtigste spørgsmål. Har du et spørgsmål der ikke er her, besvarer vi det inden for to arbejdsdage.
          </p>
        </div>
      </section>

      <FaqClient groups={groups} />

      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Stadig nysgerrig?</span></div>
          <h2 className="h2 fade-up" data-delay="1">Spørg os direkte.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "480px" }}>
            Alle forespørgsler besvares i hånden inden for to arbejdsdage.
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
