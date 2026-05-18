-- Supabase schema for WooDoo Stadium

create table if not exists site_settings (
  id serial primary key,
  key text not null unique,
  value text not null
);

create table if not exists pages (
  id serial primary key,
  slug text not null unique,
  meta_title text,
  meta_description text,
  og_image text
);

create table if not exists media (
  id serial primary key,
  url text not null,
  filename text not null,
  alt_text text,
  type text not null check (type in ('image', 'video')),
  used_in text
);

create table if not exists sections (
  id serial primary key,
  page_slug text not null,
  section_key text not null,
  title text,
  body text,
  image_url text,
  video_url text,
  visible boolean not null default true,
  sort_order integer not null default 0
);

create table if not exists configurator_categories (
  id serial primary key,
  name text not null,
  slug text not null unique,
  description text,
  visible boolean not null default true,
  sort_order integer not null default 0
);

create table if not exists configurator_options (
  id serial primary key,
  category_id integer not null references configurator_categories(id) on delete cascade,
  name text not null,
  description text,
  price_modifier numeric not null default 0,
  image_url text,
  visible boolean not null default true,
  sort_order integer not null default 0,
  color_hex text
);

create table if not exists blog_posts (
  id serial primary key,
  title text not null,
  slug text not null unique,
  body text not null,
  excerpt text,
  featured_image text,
  author text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  meta_title text,
  meta_description text,
  focus_keyword text,
  language text not null default 'en' check (language in ('en', 'de', 'it', 'da')),
  tags text[]
);

create table if not exists blog_keywords (
  id serial primary key,
  keyword text not null unique,
  search_volume integer,
  difficulty integer,
  competitor_url text,
  notes text
);

create table if not exists enquiries (
  id serial primary key,
  name text not null,
  email text not null,
  company text,
  message text not null,
  type text not null default 'general' check (type in ('quote', 'showroom', 'general')),
  status text not null default 'new' check (status in ('new', 'read', 'replied')),
  created_at timestamptz not null default now()
);

create table if not exists showroom_bookings (
  id serial primary key,
  name text not null,
  email text not null,
  phone text,
  preferred_date text,
  message text,
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists newsletter_subscribers (
  id serial primary key,
  email text not null unique,
  language text not null default 'en' check (language in ('en', 'de', 'it', 'da')),
  created_at timestamptz not null default now()
);

create table if not exists faq_items (
  id serial primary key,
  question text not null,
  answer text not null,
  category text,
  language text not null default 'en' check (language in ('en', 'de', 'it', 'da')),
  visible boolean not null default true,
  sort_order integer not null default 0
);

-- Enable row level security and add public read policies for visible content

alter table site_settings enable row level security;
create policy "public read" on site_settings for select using (true);
create policy "authenticated write" on site_settings for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on site_settings for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on site_settings for delete using (auth.role() in ('authenticated', 'service_role'));

alter table pages enable row level security;
create policy "public read" on pages for select using (true);
create policy "authenticated write" on pages for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on pages for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on pages for delete using (auth.role() in ('authenticated', 'service_role'));

alter table media enable row level security;
create policy "public read" on media for select using (true);
create policy "authenticated write" on media for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on media for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on media for delete using (auth.role() in ('authenticated', 'service_role'));

alter table sections enable row level security;
create policy "public visible read" on sections for select using (visible);
create policy "authenticated write" on sections for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on sections for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on sections for delete using (auth.role() in ('authenticated', 'service_role'));

alter table configurator_categories enable row level security;
create policy "public visible read" on configurator_categories for select using (visible);
create policy "authenticated write" on configurator_categories for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on configurator_categories for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on configurator_categories for delete using (auth.role() in ('authenticated', 'service_role'));

alter table configurator_options enable row level security;
create policy "public visible read" on configurator_options for select using (visible);
create policy "authenticated write" on configurator_options for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on configurator_options for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on configurator_options for delete using (auth.role() in ('authenticated', 'service_role'));

alter table blog_posts enable row level security;
create policy "public published read" on blog_posts for select using (status = 'published');
create policy "authenticated write" on blog_posts for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on blog_posts for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on blog_posts for delete using (auth.role() in ('authenticated', 'service_role'));

alter table blog_keywords enable row level security;
create policy "public read" on blog_keywords for select using (true);
create policy "authenticated write" on blog_keywords for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on blog_keywords for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on blog_keywords for delete using (auth.role() in ('authenticated', 'service_role'));

alter table enquiries enable row level security;
create policy "authenticated write" on enquiries for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on enquiries for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on enquiries for delete using (auth.role() in ('authenticated', 'service_role'));

alter table showroom_bookings enable row level security;
create policy "authenticated write" on showroom_bookings for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on showroom_bookings for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on showroom_bookings for delete using (auth.role() in ('authenticated', 'service_role'));

alter table newsletter_subscribers enable row level security;
create policy "authenticated write" on newsletter_subscribers for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on newsletter_subscribers for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on newsletter_subscribers for delete using (auth.role() in ('authenticated', 'service_role'));

alter table faq_items enable row level security;
create policy "public visible read" on faq_items for select using (visible);
create policy "authenticated write" on faq_items for insert using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated write update delete" on faq_items for update using (auth.role() in ('authenticated', 'service_role')) with check (auth.role() in ('authenticated', 'service_role'));
create policy "authenticated delete" on faq_items for delete using (auth.role() in ('authenticated', 'service_role'));
