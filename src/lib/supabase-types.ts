export type Language = "en" | "de" | "it" | "da";
export type BlogPostStatus = "draft" | "published";
export type EnquiryType = "quote" | "showroom" | "general";
export type EnquiryStatus = "new" | "read" | "replied";

export interface SiteSetting {
  id: number;
  key: string;
  value: string;
}

export interface PageSeo {
  id: number;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
}

export interface MediaItem {
  id: number;
  url: string;
  filename: string;
  alt_text: string | null;
  type: "image" | "video";
  used_in: string | null;
}

export interface Section {
  id: number;
  page_slug: string;
  section_key: string;
  title: string | null;
  body: string | null;
  image_url: string | null;
  video_url: string | null;
  visible: boolean;
  sort_order: number;
}

export interface ConfiguratorCategory {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  visible: boolean;
  sort_order: number;
}

export interface ConfiguratorOption {
  id: number;
  category_id: number;
  name: string;
  description: string | null;
  price_modifier: number;
  image_url: string | null;
  visible: boolean;
  sort_order: number;
  color_hex: string | null;
}

export interface BlogPost {
  id: number;
  title: string;
  h1: string | null;
  slug: string;
  body: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string | null;
  status: BlogPostStatus;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  notes: string | null;
  language: Language;
  tags: string[] | null;
}

export interface BlogKeyword {
  id: number;
  keyword: string;
  search_volume: number | null;
  difficulty: number | null;
  competitor_url: string | null;
  notes: string | null;
}

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  company: string | null;
  message: string;
  type: EnquiryType;
  status: EnquiryStatus;
  created_at: string;
}

export interface ShowroomBooking {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  preferred_date: string | null;
  message: string | null;
  status: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: number;
  email: string;
  language: Language;
  created_at: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string | null;
  language: Language;
  visible: boolean;
  sort_order: number;
}

export type TimestampKeys<T> = Extract<'created_at' | 'published_at', keyof T>;

export type TableRow<T> = {
  Row: T;
  Insert: Omit<T, 'id'> & Partial<Pick<T, TimestampKeys<T>>>;
  Update: Partial<Omit<T, 'id'>> & Partial<Pick<T, TimestampKeys<T>>>;
  Relationships: [];
};

export interface Database {
  public: {
    Tables: {
      site_settings: TableRow<SiteSetting>;
      pages: TableRow<PageSeo>;
      media: TableRow<MediaItem>;
      sections: TableRow<Section>;
      configurator_categories: TableRow<ConfiguratorCategory>;
      configurator_options: TableRow<ConfiguratorOption>;
      blog_posts: TableRow<BlogPost>;
      blog_keywords: TableRow<BlogKeyword>;
      enquiries: TableRow<Enquiry>;
      showroom_bookings: TableRow<ShowroomBooking>;
      newsletter_subscribers: TableRow<NewsletterSubscriber>;
      faq_items: TableRow<FaqItem>;
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
