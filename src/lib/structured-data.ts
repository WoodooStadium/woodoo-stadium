export type Locale = "en" | "da";

export const SITE_URL = "https://woodoo-stadium.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/woodoostadium/",
  linkedin: "https://www.linkedin.com/company/woodoo-stadium",
  facebook: "https://www.facebook.com/profile.php?id=61574752823413",
};

const organizationDescription: Record<Locale, string> = {
  en: "Woodoo is a Danish manufacturer of handbuilt stainless steel foosball tables, built in Copenhagen.",
  da: "Woodoo er en dansk producent af håndbyggede bordfodboldborde i rustfrit stål, bygget i København.",
};

export function buildOrganization(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Woodoo Stadium",
    alternateName: "Woodoo",
    url: SITE_URL,
    logo: `${SITE_URL}/uploads/logo-light.png`,
    description: organizationDescription[locale],
    foundingLocation: { "@type": "Place", name: "Copenhagen, Denmark" },
    address: { "@type": "PostalAddress", addressLocality: "Copenhagen", addressCountry: "DK" },
    email: "contact@woodoo-stadium.com",
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    identifier: { "@type": "PropertyValue", propertyID: "CVR", value: "41213663" },
    areaServed: "DK",
  };
}

const productCopy: Record<Locale, { description: string; material: string; url: string }> = {
  en: {
    description:
      "A foosball table handbuilt in Copenhagen from 150 kg of bead-blasted stainless steel 304, built for permanent indoor and outdoor use. Comes with a 5-year warranty.",
    material: "Stainless steel 304, bead-blasted",
    url: `${SITE_URL}/the-table`,
  },
  da: {
    description:
      "Et bordfodboldbord håndbygget i København af 150 kg glasblæst rustfrit stål 304, bygget til permanent brug inde og ude. Leveres med 5 års garanti.",
    material: "Rustfrit stål 304, glasblæst",
    url: `${SITE_URL}/da/bordet`,
  },
};

export function buildProduct(locale: Locale) {
  const copy = productCopy[locale];
  return {
    "@type": "Product",
    name: "Woodoo Stadium 11–11",
    brand: { "@type": "Brand", name: "Woodoo Stadium" },
    manufacturer: { "@id": ORGANIZATION_ID },
    description: copy.description,
    material: copy.material,
    weight: { "@type": "QuantitativeValue", value: 150, unitCode: "KGM" },
    countryOfOrigin: { "@type": "Country", name: "DK" },
    image: [`${SITE_URL}/uploads/foosball_table.jpg`],
    url: copy.url,
  };
}

export function buildBreadcrumbs(pageName: string, pageUrl: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Woodoo Stadium", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: pageName, item: pageUrl },
    ],
  };
}

/**
 * Turns an FAQ answer (HTML) into plain text for JSON-LD: call-to-action links
 * ending in "→" are dropped, other links keep their text, remaining tags are stripped.
 */
export function faqAnswerToPlainText(html: string) {
  return html
    .replace(/<a\b[^>]*>[^<]*→\s*<\/a>/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function buildFaqPage(items: Array<{ question: string; answer: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: faqAnswerToPlainText(item.answer) },
    })),
  };
}

export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
