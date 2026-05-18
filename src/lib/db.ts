import { supabaseServerClient } from "./supabase";
import type {
  SiteSetting,
  PageSeo,
  MediaItem,
  Section,
  ConfiguratorCategory,
  ConfiguratorOption,
  BlogPost,
  BlogKeyword,
  Enquiry,
  ShowroomBooking,
  NewsletterSubscriber,
  FaqItem,
} from "./supabase-types";

export async function getSiteSettings() {
  return supabaseServerClient.from("site_settings").select("*");
}

export async function getPages() {
  return supabaseServerClient.from("pages").select("*");
}

export async function getMedia() {
  return supabaseServerClient.from("media").select("*");
}

export async function getSections() {
  return supabaseServerClient.from("sections").select("*").order("sort_order", { ascending: true });
}

export async function getConfiguratorCategories() {
  return supabaseServerClient.from("configurator_categories").select("*").order("sort_order", { ascending: true });
}

export async function getConfiguratorOptions() {
  return supabaseServerClient.from("configurator_options").select("*").order("sort_order", { ascending: true });
}

export async function getBlogPosts() {
  return supabaseServerClient.from("blog_posts").select("*").order("published_at", { ascending: false });
}

export async function getBlogKeywords() {
  return supabaseServerClient.from("blog_keywords").select("*");
}

export async function getFaqItems() {
  return supabaseServerClient.from("faq_items").select("*").order("sort_order", { ascending: true });
}

export async function getEnquiries() {
  return supabaseServerClient.from("enquiries").select("*").order("created_at", { ascending: false });
}

export async function getShowroomBookings() {
  return supabaseServerClient.from("showroom_bookings").select("*").order("created_at", { ascending: false });
}

export async function getNewsletterSubscribers() {
  return supabaseServerClient.from("newsletter_subscribers").select("*").order("created_at", { ascending: false });
}
