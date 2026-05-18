import type { Metadata } from "next";
import type { FaqItem } from "@/lib/supabase-types";
import { getFaqItems } from "@/lib/db";

const fallbackFaq = [
  {
    question: "What is the WooDoo Stadium 11–11?",
    answer: "A precision-engineered social design object. One table, handbuilt in Copenhagen from brushed stainless steel. It weighs 150 kilograms, contains 732 individual components, and is built for permanent indoor and outdoor use.",
    category: "General",
  },
  {
    question: "How much does the Stadium 11–11 cost?",
    answer: "Pricing is available on request. Every table is made to order. Contact us to receive a proposal.",
    category: "General",
  },
  {
    question: "Can it be used outdoors permanently?",
    answer: "Yes. The Stadium 11–11 is sealed for permanent outdoor use in all conditions — rain, salt air, heat, and cold.",
    category: "Use",
  },
  {
    question: "How long does it take to produce?",
    answer: "Each table is made to order. Lead times are confirmed at the time of enquiry.",
    category: "Production",
  },
  {
    question: "What can be customised?",
    answer: "Players, hand grips, playing field colour and logo, side plates, and lighting. Full bespoke commissions are also available.",
    category: "Customisation",
  },
  {
    question: "Where is WooDoo Stadium made?",
    answer: "Designed and built in Copenhagen, Denmark.",
    category: "General",
  },
  {
    question: "Is there a showroom?",
    answer: "Yes. The showroom is in Ishøj, south of Copenhagen. Visits are by appointment.",
    category: "General",
  },
  {
    question: "What materials is it made from?",
    answer: "Brushed stainless steel 304, with a cast concrete frame option. All materials are selected for permanence.",
    category: "Materials",
  },
  {
    question: "Can it be branded for our company?",
    answer: "Yes. Side plates, playing field, and lighting can carry your brand identity. Permanent, not applied.",
    category: "Branding",
  },
  {
    question: "How do I enquire?",
    answer: "Use the enquiry form on this site or email hello@woodoo-stadium.com. Every enquiry is answered by hand within two working days.",
    category: "Contact",
  },
];

export const metadata: Metadata = {
  title: "FAQ | WooDoo Stadium",
  description: "Everything you need to know about the Stadium 11–11 and how to enquire.",
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
      <section className="section section--alt">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto" }}>
          <span className="kicker">FAQ</span>
          <h1 className="h1">Questions about the Stadium 11–11</h1>
          <p className="lead">Everything you need to know. If your question is not here, we will answer it within two working days.</p>
        </div>
      </section>

      <section className="section section--no-top">
        <div className="faq-grid fade-up" data-delay="1">
          {Object.entries(groups).map(([category, items]) => (
            <div className="faq-group" key={category}>
              <h3 className="h3">{category}</h3>
              {items.map((item) => (
                <details className="faq-item" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
