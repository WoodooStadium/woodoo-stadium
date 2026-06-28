// Woodoo Stadium — Danish Blog Posts Seeder
// Run from project root: node seed-danish-posts.mjs
// Requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local

import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";

// Read env from .env.local
const envFile = readFileSync(".env.local", "utf-8");
const env = Object.fromEntries(
  envFile.split("\n")
    .filter(line => line.includes("=") && !line.startsWith("#"))
    .map(line => {
      const [key, ...rest] = line.split("=");
      return [key.trim(), rest.join("=").trim()];
    })
);

const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_ROLE_KEY
);

const posts = [
  {
    title: "Hvad er et bordfodboldbord? Den komplette guide",
    slug: "hvad-er-et-bordfodboldbord",
    excerpt: "Et bordfodboldbord er et spil, hvor spillere styrer rækker af figurer på roterende stænger for at skyde bolden i modstanderens mål. Her er alt, du skal vide.",
    body: `Bordfodbold er et bord-baseret spil, hvor spillere styrer rækker af miniaturfigurer monteret på roterende stænger for at skyde en bold i modstanderens mål. Det spilles på et rektangulært bord, typisk af to eller fire spillere, på otte stænger — fire på hver side.

I Danmark kalder vi det bordfodbold eller bordfodboldbord. I Tyskland hedder det kicker, i Frankrig baby foot, i Italien calcio balilla. Spillet er det samme overalt.

## Sådan fungerer et bordfodboldbord

Hver stang styrer en række figurer: målmand, forsvarsspillere, midtbanespillere og angribere. Spillerne holder i håndtagene og roterer eller glider dem for at positionere og skyde bolden.

## Derfor er bordfodbold stadig populært

Bordfodbold kræver ingen planlægning, intet udstyr og ingen fysisk form. To fremmede kan spille inden for tredive sekunder. Det er grunden til, at spillet har overlevet i over hundrede år.

## Bordfodboldet som designobjekt

Stadium 11–11 er bygget med dette i tankerne. Ét bord. 732 komponenter. 150 kilogram børstet rustfrit stål. Designet til permanent placering — indendørs eller udendørs.

[Opdagelsen af Stadium 11–11 →](/the-table)`,
    meta_title: "Hvad er et bordfodboldbord? Den komplette guide",
    meta_description: "Et bordfodboldbord er et spil, hvor spillere styrer figurer på stænger for at skyde bolden i mål. Lær alt om spillet og hvad der gør et godt bord.",
    focus_keyword: "bordfodboldbord",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["bordfodbold", "bordfodboldbord", "guide"],
  },
  {
    title: "Udendørs bordfodboldbord: Hvad du skal vide, før du køber",
    slug: "udendoers-bordfodboldbord-guide",
    excerpt: "De fleste bordfodboldborde er ikke bygget til udendørs brug. Her er hvad et rigtigt udendørs bord faktisk kræver.",
    body: `De fleste bordfodboldborde er bygget til indendørs brug. Stil dem udenfor, og spillepladen buler, metallet ruster, malingen skaller af og stængerne sætter sig fast.

## Hvad udendørs faktisk betyder

For at et bordfodboldbord kan være ægte udendørsgodkendt, skal alle komponenter tåle:

- **Regn og fugt** — stillestående vand, kondens, fugtighed
- **UV-udsættelse** — direkte sollys nedbryder de fleste materialer
- **Temperaturændringer** — frost-tø-cyklusser sprækker træ og buler MDF
- **Saltholdigt havluft** — relevant for kystplaceringer og hotelterrasser

## Materialer der fungerer udendørs

Børstet rustfrit stål 304 er standarden for seriøst udendørsudstyr. Det ruster ikke, er UV-modstandsdygtigt og kræver ingen vedligeholdelse ud over lejlighedsvis rengøring.

## Stadium 11–11

Stadium 11–11 er lavet af børstet rustfrit stål 304, svejset som et enkelt monocoque-korpus. Det behøver ikke overdækning, opbevaring eller sæsonvedligeholdelse.

150 kilogram. Bygget til at blive, hvor det placeres.

[Fuld specifikation →](/the-table)`,
    meta_title: "Udendørs bordfodboldbord: Hvad du skal vide, før du køber",
    meta_description: "De fleste bordfodboldborde er ikke bygget til udendørs brug. Lær hvad et udendørs bordfodboldbord faktisk kræver for at overleve regn, UV og alle årstider.",
    focus_keyword: "udendørs bordfodboldbord",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["udendørs", "bordfodboldbord", "købsguide", "rustfrit stål"],
  },
  {
    title: "Bordfodbold med logo: Branded bordfodboldborde til virksomheder",
    slug: "bordfodbold-med-logo-branded",
    excerpt: "Et bordfodboldbord med dit virksomhedslogo er en af de mest effektive fysiske brandaktiveringer. Her er hvordan det fungerer.",
    body: `Et bordfodboldbord med din virksomheds logo er ikke en gadget. Udført korrekt er det en af de mest effektive former for fysisk brandkommunikation — en permanent installation, der genererer samtaler, fotografier og hukommelse.

## Hvorfor brandede objekter virker

Branding på en passiv overflade — en væg, et gulv — ses én gang og glemmes. Branding på et objekt, som folk interagerer med og fotograferer, ses gentagne gange af folk, der er engagerede og positive.

## Hvad branded betyder på et bordfodboldbord

- **Ætset og belyst brandplade** — brandidentiteten er ætset ind i det rustfri stålkropus og belyst indefra
- **Brugerdefineret farve og finish** — bordet afspejler brandfarver
- **Brugerdefinerede figurer** — spillerfigurer i brandfarver

## Stadium 11–11 Brand Edition

Klientens identitet ætset ind i kroppen og belyst. Samme 150 kg-konstruktion, samme rustfrit stål 304, samme permanente udendørskapabilitet.

[Forespørg om en Brand Edition →](/atelier#contact)`,
    meta_title: "Bordfodbold med logo: Branded bordfodboldborde til virksomheder",
    meta_description: "Et branded bordfodboldbord er en af de mest effektive fysiske brandaktiveringer. Lær hvordan det fungerer og hvad du skal bede om.",
    focus_keyword: "bordfodbold med logo",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["branded", "bordfodboldbord", "logo", "virksomhed"],
  },
  {
    title: "Luksus bordfodboldbord: Hvad adskiller de bedste fra resten",
    slug: "luksus-bordfodboldbord",
    excerpt: "Markedet for luksus bordfodboldborde er lille, og kvalitetsvariationen er betydelig. Her er hvad der adskiller et genuint premium bord.",
    body: `Ordet luksus anvendes på bordfodboldborde ved næsten alle prisniveauer. Det betyder meget lidt uden kvalifikation.

## Konstruktion

Et luksus bordfodboldbord er bygget anderledes, ikke bare efterbehandlet anderledes. Rammen er svejset, ikke boltet. Spillepladen er maskinfræset plan. Vægten afspejler densiteten af de anvendte materialer.

## Materialer

Rustfrit stål 304, aluminium og højdensitetspolymer er materialerne i seriøse borde. MDF, spånplade og malet stål er materialerne i billige borde.

## Stadium 11–11

Det eneste bord i premium-segmentet bygget udelukkende af rustfrit stål og designet til permanent udendørs installation. 150 kilogram. 732 komponenter. Bygget i København.

[Fuld specifikation →](/the-table)`,
    meta_title: "Luksus bordfodboldbord: Hvad adskiller de bedste fra resten",
    meta_description: "Markedet for luksus bordfodboldborde har betydelig kvalitetsvariation. Lær hvad du faktisk betaler for.",
    focus_keyword: "luksus bordfodboldbord",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["luksus", "premium", "bordfodboldbord", "designer"],
  },
  {
    title: "Bordfodboldbord til erhverv: Hvad hoteller og kontorer skal vide",
    slug: "bordfodboldbord-erhverv",
    excerpt: "Et bordfodboldbord på et hotel, kontor eller restaurant gør noget specifikt arbejde. Her er hvad erhvervskøbere skal overveje.",
    body: `Et bordfodboldbord på et hotel er ikke en spilrumsbekvemmelighed. Det er en beslutning om social infrastruktur. Udført korrekt forlænger det gæsternes opholdstid, skaber spontane interaktioner og differentierer ejendommen.

## Hvad et erhvervs-bordfodboldbord skal gøre

### Forlænge opholdstiden
Gæster, der spiller, opholder sig længere. De bestiller flere drikkevarer. Opholdstid er direkte forbundet med tilfredshedsscorer.

### Fotografere godt
Hver gæst, der fotograferer bordet, skaber ubetalt indhold for ejendommen.

### Håndtere kontinuerlig brug
Forbrugerkvalitetsborde skal udskiftes inden for 1-3 år. Erhvervskvalitetsborde holder på ubestemt tid.

## Stadium 11–11 til erhverv

Installeret på luksushoteller og resort-terrasser i hele Europa. Standard og brandede konfigurationer. Designet til permanent udendørs installation.

[Anmod om et erhvervstilbud →](/for-business)`,
    meta_title: "Bordfodboldbord til erhverv: Hvad hoteller og kontorer skal vide",
    meta_description: "Et erhvervs-bordfodboldbord forlænger opholdstiden og differentierer ejendommen. Her er den komplette erhvervskøberguide.",
    focus_keyword: "bordfodboldbord erhverv",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["erhverv", "hotel", "kontor", "bordfodboldbord"],
  },
  {
    title: "Bordfodboldbord lavet i Danmark: Hvorfor oprindelse betyder noget",
    slug: "bordfodboldbord-lavet-i-danmark",
    excerpt: "Stadium 11–11 er håndbygget i København. Her er hvorfor oprindelsen af et premium bordfodboldbord betyder noget.",
    body: `De fleste bordfodboldborde er fremstillet i fabrikker i Kina, Taiwan eller Østeuropa. Det har konsekvenser for købere, der investerer i et premium-objekt.

## Hvorfor oprindelse betyder noget

### Håndværksmæssig ansvarlighed
Når et bord er bygget i den samme by, hvor det sælges, er de mennesker, der lavede det, ansvarlige. Der er intet ocean mellem køber og producent.

### Produktionsstandarder
Nordeuropæiske fremstillingsstandarder for metalbearbejdning er blandt de højeste i verden.

### Proveniensen
"Made in Copenhagen" kommunikerer noget specifikt: håndværk, tilbageholdenhed, kvalitet, specificitet.

## Stadium 11–11

Designet og bygget i København, Danmark. Rammen er TIG-svejset. Overfladen er håndbehandlet. Hvert bord inspiceres før levering.

Showroom: Ishøj, syd for København.

[Besøg atelieret →](/atelier)`,
    meta_title: "Bordfodboldbord lavet i Danmark: Hvorfor oprindelse betyder noget",
    meta_description: "Stadium 11–11 er håndbygget i København. Lær hvorfor oprindelsen af et premium bordfodboldbord betyder noget.",
    focus_keyword: "bordfodboldbord lavet i danmark",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["made in denmark", "københavn", "bordfodboldbord", "håndværk"],
  },
  {
    title: "Historien om bordfodbold: Hvem opfandt spillet?",
    slug: "hvem-opfandt-bordfodbold",
    excerpt: "Opfindelsen af bordfodbold er omstridt på tværs af tre lande. Her er hvad vi faktisk ved om historien bag spillet.",
    body: `Historien om bordfodbold begynder — afhængigt af hvem man spørger — i England, Frankrig, Spanien eller Tyskland.

## Det første patent

Det første dokumenterede patent på et bordfodboldspil blev indgivet i Det Forenede Kongerige i 1921 af Harold Searles Thornton. Hans design ligner tydeligt det spil, der spilles i dag.

## De konkurrerende krav

Lucien Rosengart, en fransk ingeniør, hævdede en lignende opfindelse i samme periode. Alexandre de Fisterra er krediteret med en tidlig spansk version, angiveligt designet til at hjælpe sårede soldater.

## Udbredelsen i Europa

Spillet spredte sig hurtigt i 1940erne og 1950erne. ITSF blev grundlagt i 2002 og styrer i dag turneringer i over 70 lande.

## Fra barspil til designobjekt

Stadium 11–11 bærer de samme mekanikker, der har fået spillet til at holde i et århundrede.

[Om bordet →](/the-table)`,
    meta_title: "Historien om bordfodbold: Hvem opfandt spillet?",
    meta_description: "Opfindelsen af bordfodbold er omstridt på tværs af tre lande. Lær den virkelige historie og hvordan spillet udviklede sig.",
    focus_keyword: "hvem opfandt bordfodbold",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["bordfodbold historie", "opfindelsen", "ITSF"],
  },
  {
    title: "Regler i bordfodbold: Officielle og uformelle",
    slug: "regler-bordfodbold",
    excerpt: "Bordfodbold har officielle ITSF-regler og uformelle regler, der bruges ved de fleste borde. Her er hvad du skal vide.",
    body: `Bordfodbold har officielle regler, styret af ITSF. De fleste spillere har aldrig læst dem.

## ITSF-reglerne

### Opspil
Første opspil til vinder af møntflipper. Efter hvert mål serverer det hold, der tabte. Bolden skal berøre en figur inden skud.

### Spinning
At rotere en stang mere end 360 grader er ulovligt. Et mål scored med spinning tæller ikke.

### Død bold
Bold der hviler utilgængeligt re-serves af det hold, der sidst rørte den.

### Tidsbegrænsninger
15 sekunder på angrebsstangen. 10 sekunder på alle andre stænger.

## Uformel spil

De fleste bruger tre regler: ingen spinning, server fra siden, først til fem.

[Stadium 11–11 specifikation →](/the-table)`,
    meta_title: "Regler i bordfodbold: Officielle og uformelle",
    meta_description: "Bordfodbold har ITSF officielle regler og uformelle regler. Lær om spinning, opspil, tidsbegrænsninger og kampformat.",
    focus_keyword: "regler bordfodbold",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["bordfodbold regler", "ITSF", "sådan spiller du"],
  },
  {
    title: "Udendørs bordfodbold: Kan det stå ude hele året?",
    slug: "udendoers-bordfodbold-hele-aaret",
    excerpt: "De fleste bordfodboldborde kan ikke klare permanent udendørs opstilling. Her er hvad der adskiller dem, der kan.",
    body: `Det korte svar: de fleste kan ikke.

## Hvorfor standardborde svigter udendørs

MDF absorberer fugt og svulmer. Maling skaller af ved samlinger. Krom pitter i saltholdigt havluft. Spånplade opløses, når det bliver vådt.

## Hvad permanent udendørs brug kræver

- Rustfrit stål eller marinegrad aluminium til alle strukturelle elementer
- Forseglet spilleplade
- Rustfrie stænger
- Intet træ, MDF eller spånplade i konstruktionen

## Stadium 11–11

Designet specifikt til permanent udendørs installation. Svejset rustfrit stål 304 — et monocoque-korpus uden samlinger, der kan åbne sig for vand.

Ingen sæsonopbevaring. Ingen overdækning.

[Se den fulde specifikation →](/the-table)`,
    meta_title: "Udendørs bordfodbold: Kan det stå ude hele året?",
    meta_description: "De fleste bordfodboldborde kan ikke klare permanent udendørs installation. Lær hvad helårsbrug faktisk kræver.",
    focus_keyword: "udendørs bordfodbold",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["udendørs", "bordfodbold", "helårsbrug", "vejrbestandig"],
  },
  {
    title: "Bordfodboldbord til kontoret: Den forretningsmæssige argumentation",
    slug: "bordfodboldbord-kontor",
    excerpt: "Et bordfodboldbord på kontoret afvises ofte som et overfladisk gode. Den forretningsmæssige argumentation er stærkere end de fleste indser.",
    body: `Den forretningsmæssige argumentation for et kontor-bordfodboldbord fremsættes normalt dårligt. Her er det faktiske argument.

## Rekrutteringsargumentet

En arbejdsplads, der har foretaget gennemtænkte investeringer i sit sociale miljø, signalerer noget ægte om, hvordan den behandler folk. Det tiltrækker bedre kandidater.

## Fastholdelsesargumentet

Faktorer, der driver fastholdelse — tilhørsforhold, social forbindelse, uformel relation med kolleger — er præcis det, som et velplaceret socialt objekt fremmer.

## Produktivitetsargumentet

Et tre-til-otte-minutters spil skaber en ægte mental pause. Et spil bordfodbold er en bedre restitutionspause end at scrolle på telefonen.

## Stadium 11–11 til kontorer

150 kilogram. Børstet rustfrit stål. Tilgængeligt med brandidentitetsintegration.

[Udforsk For Business →](/for-business)`,
    meta_title: "Bordfodboldbord til kontoret: Den forretningsmæssige argumentation",
    meta_description: "Den forretningsmæssige argumentation for et kontor-bordfodboldbord er stærkere end de fleste indser. Lær rekrutterings- og fastholdelsesargumenterne.",
    focus_keyword: "bordfodboldbord kontor",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["kontor", "arbejdsplads", "bordfodboldbord"],
  },
  {
    title: "Bordfodboldbord i København: Woodoo Stadium showroom",
    slug: "bordfodboldbord-koebenhavn",
    excerpt: "København er hjemsted for Woodoo Stadium — producenten af Stadium 11–11. Her er hvad du kan forvente ved et besøg.",
    body: `Woodoo Stadium er et københavnsk atelier, der bygger ét produkt: Stadium 11–11. Fremstillet i Danmark, af børstet rustfrit stål 304.

## Showroom

Woodoo Stadium-showroomet er beliggende i Ishøj, syd for København. Besøg er efter aftale.

Showroomet giver mulighed for at se bordet i fuld skala, spille det og forstå skalaen og vægten. For et 150 kg-objekt er dette værd at gøre, inden man forpligter sig.

## Produktet

Stadium 11–11 fås i tre konfigurationer: Standard, Brand Edition og Bespoke.

## Levering og installation

Levering i hele Danmark og det meste af Europa. Installation inkluderet for danske leverancer.

[Book et showroombesøg →](/atelier#contact)`,
    meta_title: "Bordfodboldbord i København: Woodoo Stadium showroom",
    meta_description: "København er hjemsted for Woodoo Stadium, producenten af Stadium 11–11. Lær om showroomet og hvordan du arrangerer et besøg.",
    focus_keyword: "bordfodboldbord københavn",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["københavn", "showroom", "bordfodboldbord", "woodoo stadium"],
  },
  {
    title: "Fodboldspil bord: De forskellige typer forklaret",
    slug: "fodboldspil-bord-typer",
    excerpt: "Fra billige plastikborde til håndbyggede rustfri stålkonstruktioner — her er hvad der adskiller de forskellige typer bordfodboldborde.",
    body: `Markedet for fodboldspilsborde spænder fra 500 kr. til 150.000 kr.+. Kvalitetsvariationen er enorm.

## Kategori 1: Budget (500-3.000 kr.)

MDF-spilleplade, boltet stålramme. Fungerer til lejlighedsvis hjemmebrug. Holder ikke til kommerciel brug eller udendørs.

## Kategori 2: Middenklasse (3.000-20.000 kr.)

Forbedrede materialer, bedre mekanik. Egnet til kontorer og barer med moderat trafik. Stadig primært indendørs.

## Kategori 3: Premium (20.000 kr.+)

Metalkonstruktion, professionel mekanik. Mærker som Teckell, RS Barcelona og Woodoo Stadium.

Af premium-mulighederne er kun Stadium 11–11 designet til permanent udendørs installation.

[Se bordet →](/the-table)`,
    meta_title: "Fodboldspil bord: De forskellige typer forklaret",
    meta_description: "Fra billige plastikborde til håndbyggede rustfri stålkonstruktioner — her er hvad der adskiller de forskellige typer bordfodboldborde.",
    focus_keyword: "fodboldspil bord",
    language: "da",
    status: "published",
    author: "Woodoo Stadium",
    tags: ["fodboldspil bord", "bordfodbold", "typer", "sammenligning"],
  },
];

async function seed() {
  console.log(`Inserting ${posts.length} Danish posts...`);

  const { data, error } = await supabase
    .from("blog_posts")
    .insert(posts)
    .select("id, title");

  if (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }

  console.log(`✓ Inserted ${data.length} posts:`);
  data.forEach(p => console.log(`  - [${p.id}] ${p.title}`));
}

seed();
