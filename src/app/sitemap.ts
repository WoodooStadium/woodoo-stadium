import type { MetadataRoute } from "next";
import { getAllPostSlugs, getAllPostSummaries } from "@/lib/blog-mdx";

const BASE = "https://woodoo-stadium.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    // Homepages
    {
      url: `${BASE}/`,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { da: `${BASE}/da` } },
    },
    {
      url: `${BASE}/da`,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: { languages: { en: `${BASE}/` } },
    },

    // The Table / Bordet
    {
      url: `${BASE}/the-table`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { da: `${BASE}/da/bordet` } },
    },
    {
      url: `${BASE}/da/bordet`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { en: `${BASE}/the-table` } },
    },

    // Customise / Tilpas
    {
      url: `${BASE}/customise`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { da: `${BASE}/da/tilpas` } },
    },
    {
      url: `${BASE}/da/tilpas`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${BASE}/customise` } },
    },

    // Atelier / Showroom
    {
      url: `${BASE}/atelier`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { da: `${BASE}/da/showroom` } },
    },
    {
      url: `${BASE}/da/showroom`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${BASE}/atelier` } },
    },

    // For Business / Erhverv
    {
      url: `${BASE}/for-business`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { da: `${BASE}/da/erhverv` } },
    },
    {
      url: `${BASE}/da/erhverv`,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { en: `${BASE}/for-business` } },
    },
    {
      url: `${BASE}/for-business/events`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { da: `${BASE}/da/erhverv/events` } },
    },
    {
      url: `${BASE}/da/erhverv/events`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { en: `${BASE}/for-business/events` } },
    },
    {
      url: `${BASE}/for-business/hotels`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { da: `${BASE}/da/erhverv/hoteller` } },
    },
    {
      url: `${BASE}/da/erhverv/hoteller`,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: { en: `${BASE}/for-business/hotels` } },
    },

    // Gallery / Galleri
    {
      url: `${BASE}/gallery`,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: { languages: { da: `${BASE}/da/galleri` } },
    },
    {
      url: `${BASE}/da/galleri`,
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: { languages: { en: `${BASE}/gallery` } },
    },

    // FAQ
    {
      url: `${BASE}/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: { da: `${BASE}/da/faq` } },
    },
    {
      url: `${BASE}/da/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: { en: `${BASE}/faq` } },
    },

    // Udlejning (Danish only — no English equivalent)
    {
      url: `${BASE}/da/udlejning`,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Privacy / Privatliv
    {
      url: `${BASE}/privacy`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { da: `${BASE}/da/privatliv` } },
    },
    {
      url: `${BASE}/da/privatliv`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: { languages: { en: `${BASE}/privacy` } },
    },
  ];

  const enBlogEntries: MetadataRoute.Sitemap = getAllPostSummaries("en").map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const daBlogEntries: MetadataRoute.Sitemap = getAllPostSummaries("da").map((post) => ({
    url: `${BASE}/da/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...enBlogEntries, ...daBlogEntries];
}
