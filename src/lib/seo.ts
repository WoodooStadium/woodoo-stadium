import type { Metadata } from "next";
import { SITE_URL, type Locale } from "./structured-data";

/** EN ↔ DA counterparts. Hreflang is only emitted for paths listed here, so every pair stays reciprocal. */
const PAGE_PAIRS: Array<[en: string, da: string]> = [
  ["/", "/da"],
  ["/the-table", "/da/bordet"],
  ["/customise", "/da/tilpas"],
  ["/atelier", "/da/showroom"],
  ["/for-business", "/da/erhverv"],
  ["/for-business/events", "/da/erhverv/events"],
  ["/for-business/hotels", "/da/erhverv/hoteller"],
  ["/for-business/public-space", "/da/erhverv/byrum"],
  ["/gallery", "/da/galleri"],
  ["/faq", "/da/faq"],
  ["/blog", "/da/blog"],
  ["/privacy", "/da/privatliv"],
];

export type OgImage = { path: string; width?: number; height?: number };

/** Share images with their real pixel size. Heroes narrower than 1200 px use `fallback` instead. */
export const OG_IMAGES = {
  fallback: { path: "/uploads/foosball_table.jpg", width: 1452, height: 2048 },
  customise: { path: "/uploads/woodoo_customise_hero.jpg", width: 1600, height: 900 },
  rain: { path: "/uploads/foosball_table_rain.jpg", width: 1813, height: 1813 },
  scoringSlider: { path: "/uploads/woodoo_scoring_slider.jpg", width: 1600, height: 900 },
  publicSpace: { path: "/uploads/woodoo_foosball_original_93dbeb38.jpg", width: 1536, height: 2048 },
  rental: { path: "/uploads/woodoo_rental_hero.jpg", width: 1600, height: 944 },
} satisfies Record<string, OgImage>;

const FALLBACK_ALT: Record<Locale, string> = {
  en: "Woodoo Stadium 11–11 stainless steel foosball table",
  da: "Woodoo Stadium 11–11 bordfodboldbord i rustfrit stål",
};

const OG_LOCALE: Record<Locale, string> = { en: "en_GB", da: "da_DK" };

const absoluteUrl = (path: string) => (/^https?:\/\//.test(path) ? path : `${SITE_URL}${path}`);

export function localeOf(path: string): Locale {
  return path === "/da" || path.startsWith("/da/") ? "da" : "en";
}

type PageMetadataInput = {
  path: string;
  title: string;
  description: string;
  image?: OgImage;
  imageAlt?: string;
};

export function buildPageMetadata({ path, title, description, image = OG_IMAGES.fallback, imageAlt }: PageMetadataInput): Metadata {
  const locale = localeOf(path);
  const canonical = absoluteUrl(path);
  const pair = PAGE_PAIRS.find(([en, da]) => en === path || da === path);
  const ogImage = {
    url: absoluteUrl(image.path),
    ...(image.width && image.height ? { width: image.width, height: image.height } : {}),
    alt: imageAlt ?? FALLBACK_ALT[locale],
  };

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(pair
        ? { languages: { en: absoluteUrl(pair[0]), da: absoluteUrl(pair[1]), "x-default": absoluteUrl(pair[0]) } }
        : {}),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Woodoo Stadium",
      type: "website",
      locale: OG_LOCALE[locale],
      ...(pair ? { alternateLocale: [OG_LOCALE[locale === "da" ? "en" : "da"]] } : {}),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
