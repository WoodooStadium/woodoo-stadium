import { supabaseAdmin } from "@/lib/supabase-admin";

async function fetchCount(table: string) {
  const { count } = await supabaseAdmin.from(table).select("*", { count: "exact", head: true });
  return count ?? 0;
}

export default async function AdminDashboardPage() {
  const [leadsCount, blogCount, faqCount, newsletterCount] = await Promise.all([
    fetchCount("leads"),
    fetchCount("blog_posts"),
    fetchCount("faq_items"),
    fetchCount("newsletter_subscribers"),
  ]);

  const cards = [
    { href: "/admin/content", label: "Content", description: "Edit page copy, sections and site text." },
    { href: "/admin/configurator", label: "Configurator", description: "Manage product categories and options." },
    { href: "/admin/blog", label: "Blog", description: "Write posts, set SEO and publish updates." },
    { href: "/admin/keywords", label: "Keywords", description: "Track keyword ideas and SEO opportunities." },
    { href: "/admin/faq", label: "FAQ", description: "Update help content and answer customer questions." },
    { href: "/admin/leads", label: "Leads", description: "Review customer enquiries and booking requests." },
    { href: "/admin/bookings", label: "Bookings", description: "Manage event requests and booking data." },
    { href: "/admin/newsletter", label: "Newsletter", description: "View subscribers and mailing list activity." },
    { href: "/admin/settings", label: "Settings", description: "Configure global site values and contact details." },
    { href: "/admin/media", label: "Media", description: "Upload and manage image assets for the site." },
  ];

  const stats = [
    { label: "Total enquiries", count: leadsCount },
    { label: "Blog posts", count: blogCount },
    { label: "FAQ items", count: faqCount },
    { label: "Newsletter subscribers", count: newsletterCount },
  ];

  return (
    <div className="admin-page">
      <div className="admin-header">
        <span className="admin-label">Dashboard</span>
        <h1>Woodoo Control Center</h1>
        <p>View key metrics and quickly jump into every admin section for content, leads, media, and settings.</p>
      </div>

      <div className="admin-stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="admin-stat-card">
            <strong>{stat.count}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="admin-header admin-header--compact">
        <span className="admin-label">Sections</span>
        <h2>Quick access</h2>
        <p>Jump directly to the tools you need to update your site, publish content, and manage inquiries.</p>
      </div>

      <div className="admin-card-grid">
        {cards.map((card) => (
          <a key={card.href} className="admin-card-link" href={card.href}>
            <h3>{card.label}</h3>
            <p>{card.description}</p>
            <span className="admin-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
