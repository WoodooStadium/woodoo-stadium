import type { Metadata } from "next";
import type { FaqItem } from "@/lib/supabase-types";
import { getFaqItems } from "@/lib/db";
import FaqClient from "./FaqClient";

const fallbackFaq = [
  {
    question: "What is the Woodoo Stadium 11–11?",
    answer: "A precision-engineered social design object. One table, handbuilt in Copenhagen from brushed stainless steel 304. It weighs 150 kilograms, contains 732 individual components, and is built for permanent indoor and outdoor use. It is not a game with a design problem solved — it is a social object that changes the atmosphere of a room. <a href='/the-table'>See the full specification →</a>",
    category: "The Object",
  },
  {
    question: "How much does the Stadium 11–11 cost?",
    answer: "Pricing is available on request. Every table is made to order and configured to the space, the brand, and the intended use. <a href='/atelier#contact'>Contact us to receive a full proposal →</a>",
    category: "The Object",
  },
  {
    question: "Why is there only one table?",
    answer: "Because there was never a reason to create different versions of the experience. The table itself is always the same — but it can still become very personal. Players, colours, lighting, details — those things can be customised. What stays unchanged is the feeling and the gameplay. Everyone gets the same stage. <a href='/customise'>Explore customisation options →</a>",
    category: "The Object",
  },
  {
    question: "What does the name Woodoo mean?",
    answer: "Woodoo began as a wood and carpentry workshop. Woo for creativity — attracting ideas. Doo for making — building them. The name carried the craft when the material changed from wood to steel. Wood roots. Steel future. <a href='/atelier'>Read the full story →</a>",
    category: "The Object",
  },
  {
    question: "What materials is it made from?",
    answer: "Brushed stainless steel 304, welded into a single monocoque body. The finish is brushed, not polished. <a href='https://en.wikipedia.org/wiki/SAE_304_stainless_steel' target='_blank' rel='noopener noreferrer'>Grade 304 stainless steel</a> is the industry standard for permanent outdoor use — used in architecture, marine environments, and precision engineering. All materials are selected for permanence — indoors and outdoors, for life. <a href='/the-table'>Full material specification →</a>",
    category: "The Object",
  },
  {
    question: "Can it be branded for our company?",
    answer: "Yes. Side plates, playing field, and lighting can carry your brand identity — etched, lit, and permanent. Not a sticker. Not a wrap. Made of the object itself. <a href='/for-business'>See business editions →</a>",
    category: "The Object",
  },
  {
    question: "What can be customised?",
    answer: "Players, hand grips, playing field colour and logo placement, side plates, and lighting. Full bespoke commissions are also available — a conversation, a sketch, a proposal. <a href='/customise'>Explore all customisation options →</a>",
    category: "The Object",
  },
  {
    question: "How do I enquire?",
    answer: "Use the enquiry form on this site. Every enquiry is answered by hand within two working days. We will send you the full specification, lead time, and a first proposal. <a href='/atelier#contact'>Send an enquiry →</a>",
    category: "The Object",
  },
  {
    question: "Can it be used outdoors permanently?",
    answer: "Yes. The Stadium 11–11 is sealed for permanent outdoor use in all conditions — rain, salt air, heat, and cold. It is not something that has to be stored away or protected. It is made to stay present. <a href='/the-table'>See the full specification →</a>",
    category: "Use & Placement",
  },
  {
    question: "What happens when it rains?",
    answer: "Nothing. The table is built for it. Brushed stainless steel 304, welded into a single monocoque body, sealed for all weather. It stays where it is placed. <a href='/the-table'>Read more about the materials →</a>",
    category: "Use & Placement",
  },
  {
    question: "Is it suitable for a public space?",
    answer: "Yes. The Stadium 11–11 is built for permanent placement in public spaces, parks, cultural venues, hotels, airports, and corporate lobbies. It requires no maintenance and no shelter. <a href='/for-business'>See sector placements →</a>",
    category: "Use & Placement",
  },
  {
    question: "Where is Woodoo Stadium made?",
    answer: "Designed and built in Copenhagen, Denmark. <a href='/atelier'>Visit the atelier →</a>",
    category: "Use & Placement",
  },
  {
    question: "Is there a showroom?",
    answer: "Yes. The showroom is in Ishøj, south of Copenhagen. The table is there. You can see it, touch it, and play it. Visits are by appointment — answered by the people who build it. <a href='/atelier#contact'>Book a showroom visit →</a>",
    category: "Use & Placement",
  },
  {
    question: "What is foosball called in different countries?",
    answer: "The game has as many names as it has players. In Germany it is Kicker. In France, baby-foot. In Italy, calcio balilla. In Spain, futbolín. In Denmark, bordfodbold. In Brazil, totó. In the UK it is table football. In the US and much of the world, foosball. Same game. Same rods. Wildly different accents. <a href='https://en.wikipedia.org/wiki/Table_football' target='_blank' rel='noopener noreferrer'>Read the full history on Wikipedia →</a>",
    category: "About the Sport",
  },
  {
    question: "Who invented table football?",
    answer: "The invention is disputed — as all great things are. The most widely accepted origin is Harold Searles Thornton, who <a href='https://en.wikipedia.org/wiki/Table_football#History' target='_blank' rel='noopener noreferrer'>patented a table football game in the UK in 1923</a>, inspired by a box of matches. Alejandro Finisterre is also credited with an early version in Spain in the 1930s, designed for children injured in the Spanish Civil War who could no longer play football. The game has been claiming rooms ever since.",
    category: "About the Sport",
  },
  {
    question: "Is foosball an official sport?",
    answer: "Yes. The <a href='https://www.itsf.net' target='_blank' rel='noopener noreferrer'>International Table Soccer Federation (ITSF)</a> has recognised table football as an official competitive sport since 2002. It is played in over 75 countries, with world championships held annually. There are professional players, national teams, and ranked tournaments across Europe, the Americas, and Asia.",
    category: "About the Sport",
  },
  {
    question: "What is the ITSF?",
    answer: "The <a href='https://www.itsf.net' target='_blank' rel='noopener noreferrer'>International Table Soccer Federation</a> — the governing body of competitive foosball worldwide. Founded in 2002, it sets the official rules, certifies tournament tables, and organises the World Championships. ITSF-certified tables must meet strict standards for rod weight, ball speed, and playing surface consistency.",
    category: "About the Sport",
  },
  {
    question: "Are there professional foosball players?",
    answer: "Yes — and they are extraordinarily good. The top players can shoot at speeds exceeding 50 km/h with accuracy that makes the goal look inevitable. Professional players specialise in specific shots — the snake shot, the pull shot, the push kick — and train for hours daily. World champions come primarily from France, Germany, Italy, and the United States. <a href='https://www.itsf.net/rankings' target='_blank' rel='noopener noreferrer'>See current world rankings →</a>",
    category: "About the Sport",
  },
  {
    question: "How fast can a foosball travel?",
    answer: "A professional snake shot can reach speeds of 50–56 km/h. The fastest recorded shots exceed 60 km/h — faster than a serve in amateur tennis. At that speed, the ball travels the length of the table in under half a second. The Stadium 11–11 is engineered to handle exactly this — calibrated rods, custom-engineered bearings, a strike that carries forty metres. <a href='/the-table'>See how the Stadium 11–11 is engineered →</a>",
    category: "About the Sport",
  },
  {
    question: "What is a snake shot in foosball?",
    answer: "The most feared shot in competitive foosball. The player pins the ball under the 3-bar figure, then rotates the rod with a flick of the wrist — releasing the ball at the last moment in any direction. Executed correctly, it is nearly unreturnable. It requires a table with consistent rod response and a true playing surface. Most bar tables cannot deliver this. The Stadium 11–11 can. <a href='/the-table'>See the Stadium 11–11 specification →</a>",
    category: "About the Sport",
  },
  {
    question: "What is the difference between a bar table and a tournament table?",
    answer: "A bar table is built for volume and low cost — loose rods, hollow players, inconsistent bounce. A tournament table is built for precision — smooth rod action, balanced figures, a true and level playing surface. The difference is felt immediately. Tournament tables demand more from the player and give more back. The Stadium 11–11 is built to tournament standard — and then beyond it. <a href='/the-table'>Read the full specification →</a>",
    category: "About the Sport",
  },
  {
    question: "What makes a foosball table professional quality?",
    answer: "Rod smoothness and consistency. Player balance and weight. Playing surface levelness and bounce. Structural rigidity — a table that absorbs aggressive play without flex. Bearing quality. Ball response. A professional table disappears — you stop thinking about the equipment and start thinking about the game. That is the standard the Stadium 11–11 is built to. <a href='/the-table'>See how the Stadium 11–11 is built →</a>",
    category: "About the Sport",
  },
  {
    question: "What are the best foosball table brands?",
    answer: "In the tournament world, <a href='https://www.bonzini.com' target='_blank' rel='noopener noreferrer'>Bonzini</a>, <a href='https://www.tornado-foosball.com' target='_blank' rel='noopener noreferrer'>Tornado</a>, Roberto Sport, and Garlando are the most respected names. Each has a different playing style — Tornado is fast and direct, Bonzini rewards touch and finesse. The Stadium 11–11 sits outside this category entirely. It is not a tournament table or a bar table. It is a permanent social design object, engineered to play at the highest level while existing as a piece of architecture. <a href='/the-table'>Discover the Stadium 11–11 →</a>",
    category: "About the Sport",
  },
  {
    question: "How does the Stadium 11–11 compare to professional tables?",
    answer: "The Stadium 11–11 is built to meet and exceed professional playing standards — calibrated steel rods, custom-engineered bearings, a true playing surface, and balanced figures. Where it differs from traditional tournament tables is in permanence and material: brushed stainless steel 304, welded monocoque construction, sealed for outdoor use in all conditions. Most professional tables are not built to last outdoors for decades. The Stadium 11–11 is. <a href='/the-table'>Full comparison and specification →</a>",
    category: "About the Sport",
  },
  {
    question: "How many people play foosball worldwide?",
    answer: "Estimates suggest <a href='https://www.itsf.net' target='_blank' rel='noopener noreferrer'>over 30 million people play table football regularly</a> across the world. It is one of the few games that needs no explanation in any language — you walk up, you play. That universality is part of what makes it a social infrastructure object rather than just a game.",
    category: "About the Sport",
  },
  {
    question: "Can foosball be played outdoors?",
    answer: "With most tables, no. Wood swells. Painted metal rusts. MDF warps. Standard tables are not built for weather. The Stadium 11–11 is the exception — brushed stainless steel 304, welded and sealed for permanent outdoor placement in rain, salt air, heat, and cold. It does not need shelter. It does not need to be brought inside. It stays where it is placed. <a href='/the-table'>See the outdoor specification →</a>",
    category: "About the Sport",
  },
  {
    question: "What are some interesting facts about foosball?",
    answer: "The ball travels faster than a professional tennis serve. The snake shot was considered unsportsmanlike when first developed — some tournaments banned it. Table football was used as rehabilitation for injured soldiers after World War II. <a href='https://www.guinnessworldrecords.com' target='_blank' rel='noopener noreferrer'>The longest foosball marathon on record lasted over 61 hours</a>. In some European countries, foosball cafés are as common as coffee shops. And somewhere in Copenhagen, someone is building the finest foosball table in the world.",
    category: "About the Sport",
  },
  {
    question: "What are the official rules of foosball?",
    answer: "Under <a href='https://www.itsf.net/rules' target='_blank' rel='noopener noreferrer'>ITSF rules</a>: no spinning the rods more than 360 degrees before or after striking the ball. No jarring or lifting the table. Serves alternate after each goal. Dead balls are served from the position where they stop. Matches are typically played to 5 or 10 points. Time limits apply in tournament play. The rules are simple. The game is not.",
    category: "About the Sport",
  },
  {
    question: "What is a social design object?",
    answer: "A social design object is something that exists at the intersection of design, function, and human behaviour. It is not purely decorative — it does something. It changes how people move through a space, how long they stay, whether they talk to each other. A great foosball table is one of the most powerful social design objects ever created. It needs no instruction. It needs no app. It works in any language. The Stadium 11–11 is built to be exactly this — permanently, beautifully, and without compromise. <a href='/atelier'>Read the full story →</a>",
    category: "The Social Object",
  },
  {
    question: "Why does foosball bring people together better than other games?",
    answer: "Because it is immediate. You do not need to explain foosball to anyone. You walk up, you grab a rod, you play. It is physical, fast, and loud enough to attract attention across a room. Unlike chess or cards, it is a spectator sport — people gather to watch. Unlike pool, it can be played by two or eight people simultaneously. And unlike screens, it demands your full presence. You cannot be somewhere else while playing foosball. <a href='/for-business'>See how businesses use the Stadium 11–11 →</a>",
    category: "The Social Object",
  },
  {
    question: "Is foosball better than a pool table for social interaction?",
    answer: "For social activation, yes. A pool table accommodates two to four players and requires turn-taking. A foosball table accommodates two to eight players simultaneously, generates noise and energy, and attracts spectators naturally. <a href='https://hbr.org/2018/09/the-case-for-more-unstructured-time-at-work' target='_blank' rel='noopener noreferrer'>Studies on workplace and hospitality environments</a> consistently show that foosball generates more spontaneous social interaction than any other game table. It is also faster — a game lasts minutes, not an hour.",
    category: "The Social Object",
  },
  {
    question: "How does a foosball table change the atmosphere of a room?",
    answer: "It gives the room a centre of gravity. People orient themselves around it — even when they are not playing. A well-designed foosball table changes the acoustic character of a space, gives people something to talk about, and creates permission for spontaneous interaction between strangers. A lobby with a Stadium 11–11 is a different lobby. People slow down. They stay longer. They remember it. <a href='/gallery'>See it in context →</a>",
    category: "The Social Object",
  },
  {
    question: "Why is screen-free social interaction important?",
    answer: "<a href='https://www.statista.com/statistics/1045353/daily-screen-time-hours-worldwide/' target='_blank' rel='noopener noreferrer'>The average person spends over 7 hours per day looking at a screen.</a> Genuine face-to-face play — unmediated by technology — has measurable effects on wellbeing, stress reduction, and social bonding. You cannot doomscroll while genuinely engaged in play. You cannot answer emails. For a few minutes, or a few hours, nothing else is available. That is not a side effect. That is the architecture of the object.",
    category: "The Social Object",
  },
  {
    question: "How does play reduce stress and improve wellbeing?",
    answer: "Play triggers the release of dopamine and endorphins, reduces cortisol levels, and activates the social bonding systems in the brain. <a href='https://www.nifplay.org' target='_blank' rel='noopener noreferrer'>Research from the National Institute for Play</a> shows that adult play improves creativity, reduces burnout, and strengthens social relationships. A foosball table in a workplace or hotel is not a frivolous addition — it is a wellbeing investment with measurable returns.",
    category: "The Social Object",
  },
  {
    question: "What are the most unique hotel amenity ideas?",
    answer: "The most memorable hotel amenities are those that create shared experiences rather than private ones. A rooftop pool is enjoyed alone. A foosball table is enjoyed together — and photographed, shared, and talked about. The best luxury hotels are investing in social infrastructure: objects and spaces that give guests a reason to gather, interact, and stay longer. A permanent, beautifully designed foosball table is one of the highest-return amenity investments a hotel can make. <a href='/for-business'>See hospitality placements →</a>",
    category: "For Hotels & Hospitality",
  },
  {
    question: "How do hotels increase guest dwell time?",
    answer: "By giving guests a reason to stay in shared spaces rather than retreat to their rooms. The most effective dwell-time drivers are social objects — things that create interaction, generate energy, and reward presence. A luxury foosball table in a bar, lobby, or terrace consistently increases the time guests spend in those spaces. More time in shared spaces means more F&B revenue, more social media content, and stronger brand recall. <a href='/for-business'>See how the Stadium 11–11 works for hotels →</a>",
    category: "For Hotels & Hospitality",
  },
  {
    question: "Foosball table vs pool table — which is better for a hotel?",
    answer: "For energy and social activation, foosball wins. A pool table is slower, quieter, and accommodates fewer players simultaneously. A foosball table generates noise, draws spectators, and can involve up to eight players at once. It also photographs better — the playing field, the rods, the action — all of it is visually compelling. In hospitality environments where Instagram reach matters, a foosball table outperforms a pool table significantly. <a href='/for-business'>See business editions →</a>",
    category: "For Hotels & Hospitality",
  },
  {
    question: "Can a foosball table be placed on a rooftop or outdoor terrace?",
    answer: "Most cannot. Standard foosball tables are built from wood, MDF, or painted metal — materials that warp, rust, and degrade in outdoor conditions. The Stadium 11–11 is the exception. Built from brushed stainless steel 304 and sealed for permanent outdoor use, it can be placed on a rooftop, terrace, poolside, or in a public park. It does not need shelter. It does not need to be brought inside. It is made to stay present. <a href='/the-table'>See the outdoor specification →</a>",
    category: "For Hotels & Hospitality",
  },
  {
    question: "What do luxury hotels put in their lobbies?",
    answer: "The best luxury hotel lobbies contain objects that tell a story — art, sculpture, and increasingly, social objects that invite interaction. The shift is away from passive display toward active engagement. A permanently placed, beautifully engineered foosball table occupies the same visual territory as a sculpture, while doing something a sculpture cannot: it gives people a reason to stop, gather, and play. <a href='/for-business'>See lobby and hospitality placements →</a>",
    category: "For Hotels & Hospitality",
  },
  {
    question: "Does a foosball table improve employee productivity?",
    answer: "<a href='https://hbr.org/2018/09/the-case-for-more-unstructured-time-at-work' target='_blank' rel='noopener noreferrer'>Research consistently shows</a> that short play breaks improve cognitive performance, creativity, and focus. A 5-minute foosball game resets attention more effectively than scrolling social media. Companies that invest in physical social spaces report lower burnout rates and higher employee satisfaction scores. A foosball table is not a distraction from work — it is infrastructure for better work. <a href='/for-business'>See workplace placements →</a>",
    category: "For Workplaces",
  },
  {
    question: "What are the best office social activities?",
    answer: "The most effective office social activities are those that are spontaneous, inclusive, and brief. Scheduled team events are valuable — but the real social bonding happens in the unplanned moments. A foosball table creates these moments continuously: the impromptu challenge, the five-minute game between meetings, the gathering around the table during lunch. No organiser required. No calendar invite needed. <a href='/for-business'>See corporate placements →</a>",
    category: "For Workplaces",
  },
  {
    question: "Is a foosball table a good investment for an office?",
    answer: "Yes — and the ROI is measurable. <a href='https://www.gallup.com/workplace/393497/world-largest-ongoing-study-employee-engagement.aspx' target='_blank' rel='noopener noreferrer'>Gallup's State of the Global Workplace report</a> consistently shows that companies investing in employee social environments see higher retention, satisfaction, and team cohesion.. A foosball table costs a fraction of a team offsite, delivers social value every day, and signals something important about the company culture to every person who walks through the door. <a href='/atelier#contact'>Request a business proposal →</a>",
    category: "For Workplaces",
  },
  {
    question: "What is the best statement piece for a corporate lobby?",
    answer: "Something that is beautiful enough to be art and functional enough to be used. The best corporate lobbies balance visual impact with human invitation — objects that make people want to stop, not just look. A permanently installed, precision-engineered foosball table achieves both. It is a design object first. The fact that you can play it is the surprise. <a href='/for-business'>See corporate editions →</a>",
    category: "For Workplaces",
  },
  {
    question: "How does a foosball table support company culture?",
    answer: "Company culture is built in the spaces between meetings — in the moments that are not scheduled, not managed, and not on the agenda. A foosball table creates these moments. It breaks down hierarchy — the CEO and the intern play the same game on the same table. It builds relationships across teams. And it signals to every person who sees it that this is a company that takes human beings seriously. <a href='/for-business'>See how businesses use the Stadium 11–11 →</a>",
    category: "For Workplaces",
  },
];

export const metadata: Metadata = {
  title: "FAQ | Woodoo Stadium — Luxury Foosball Table, Table Football & Social Design Object",
  description: "Everything about the Woodoo Stadium 11–11 — the world's finest foosball table. Questions about the sport, professional play, hotel amenities, office social spaces, and how to enquire.",
};

function groupFaq(items: Array<{ question: string; answer: string; category: string | null }>) {
  return items.reduce<Record<string, Array<{ question: string; answer: string }>>>((groups, item) => {
    const key = item.category || "General";
    groups[key] = groups[key] || [];
    groups[key].push({ question: item.question, answer: item.answer });
    return groups;
  }, {});
}

export default async function FAQPage() {
  const response = (await getFaqItems()) as { data: FaqItem[] | null; error: unknown };
  const items = response.data?.filter((item) => item.visible) ?? [];
  const faqItems = items.length > 0 ? items : fallbackFaq;
  const groups = groupFaq(faqItems);

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

  return (
    <>
      <section className="section section--dark section--no-top" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto", textAlign: "center" }}>
          <span className="kicker" style={{ color: "rgba(242,238,229,0.4)" }}>FAQ</span>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontWeight: 300, fontSize: "clamp(32px, 4vw, 56px)", color: "#F2EEE5", lineHeight: 1.1, marginTop: "16px" }}>
            Foosball Table, Table Football<br />& <em>the Stadium 11–11</em>
          </h1>
          <p className="body fade-up" data-delay="1" style={{ color: "rgba(242,238,229,0.62)", marginTop: "24px" }}>
            Everything you need to know. If your question is not here, we will answer it within two working days.
          </p>
        </div>
      </section>

      <FaqClient groups={groups} />

      <section className="cta-row">
        <div className="cta-copy">
          <div className="fade-up"><span className="kicker">Still curious?</span></div>
          <h2 className="h2 fade-up" data-delay="1">Ask us directly.</h2>
          <p className="body fade-up" data-delay="2" style={{ maxWidth: "480px" }}>
            Every enquiry is answered by hand within two working days.
          </p>
        </div>
        <div className="cta-actions fade-up" data-delay="2">
          <a className="btn btn--filled" href="/atelier#contact">Send an enquiry →</a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
  }