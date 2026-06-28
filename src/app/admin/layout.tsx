"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./admin.css";

const navLinks = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/content", label: "Content" },
  { href: "/admin/configurator", label: "Configurator" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/keywords", label: "Keywords" },
  { href: "/admin/faq", label: "FAQ" },
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/newsletter", label: "Newsletter" },
  { href: "/admin/settings", label: "Settings" },
  { href: "/admin/media", label: "Media" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });
    router.push("/admin");
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <img src="/uploads/logo-dark.png" alt="Woodoo logo" />
        </div>

        <nav className="admin-sidebar-nav" aria-label="Administration">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`admin-sidebar-link ${pathname === link.href ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-sidebar-logout" type="button" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <div className="admin-mobile-top">
          <div className="admin-mobile-brand">
            <img src="/uploads/logo-dark.png" alt="Woodoo logo" />
            <span>Woodoo Admin</span>
          </div>

          <details className="admin-mobile-menu">
            <summary>Menu</summary>
            <nav className="admin-mobile-nav" aria-label="Mobile admin navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`admin-sidebar-link ${pathname === link.href ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <button className="admin-sidebar-logout admin-mobile-logout" type="button" onClick={handleLogout}>
                Sign out
              </button>
            </nav>
          </details>
        </div>

        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}
