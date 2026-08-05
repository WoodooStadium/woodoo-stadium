"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

type NavChild = { href: string; label: string };
type NavLink = { href: string; label: string; children?: NavChild[] };

const enLinks: NavLink[] = [
  { href: "/the-table", label: "The Table" },
  { href: "/customise", label: "Customise" },
  {
    href: "/for-business",
    label: "For Business",
    children: [{ href: "/for-business/events", label: "Events & Agencies" }],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/atelier", label: "Atelier" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

const daLinks: NavLink[] = [
  { href: "/da/bordet", label: "Bordet" },
  { href: "/da/tilpas", label: "Specialbygget" },
  {
    href: "/da/erhverv",
    label: "Erhverv",
    children: [{ href: "/da/erhverv/events", label: "Events & Bureauer" }],
  },
  { href: "/da/galleri", label: "Galleri" },
  { href: "/da/udlejning", label: "Udlejning" },
  { href: "/da/showroom", label: "Showroom" },
  { href: "/da/blog", label: "Blog" },
  { href: "/da/faq", label: "FAQ" },
];

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "da", label: "DA", name: "Dansk" },
];

const EN_TO_DA: Record<string, string> = {
  "/": "/da",
  "/the-table": "/da/bordet",
  "/customise": "/da/tilpas",
  "/for-business": "/da/erhverv",
  "/for-business/events": "/da/erhverv/events",
  "/gallery": "/da/galleri",
  "/atelier": "/da/showroom",
  "/faq": "/da/faq",
  "/blog": "/da/blog",
  "/privacy": "/da/privatliv",
};

function getUrlInLang(pathname: string, targetLang: string): string {
  const isDA = pathname.startsWith("/da");

  if (targetLang === "da") {
    if (isDA) return pathname;
    if (EN_TO_DA[pathname]) return EN_TO_DA[pathname];
    if (pathname.startsWith("/blog/")) return "/da/blog/" + pathname.slice(6);
    if (pathname.startsWith("/admin")) return pathname;
    return "/da";
  }

  // targetLang === "en"
  if (!isDA) return pathname;
  const enPath = Object.entries(EN_TO_DA).find(([, da]) => da === pathname)?.[0];
  if (enPath) return enPath;
  if (pathname === "/da") return "/";
  if (pathname.startsWith("/da/blog/")) return "/blog/" + pathname.slice(9);
  if (pathname.startsWith("/admin")) return pathname;
  return "/";
}

function LangSwitcher({
  pathname,
  onNavigate,
  isDark = false,
}: {
  pathname: string;
  onNavigate?: () => void;
  isDark?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const currentLang = pathname.startsWith("/da") ? "da" : "en";
  const currentLabel = languages.find((l) => l.code === currentLang)?.label ?? "EN";

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  const ink = isDark ? "#F2EEE5" : "#1A1814";
  const bg = isDark ? "#161412" : "#E8E5DC";
  const borderColor = isDark ? "rgba(242,238,229,0.14)" : "rgba(26,24,20,0.14)";

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          fontFamily: "Inter Tight, sans-serif",
          fontSize: "11px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: ink,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "6px 0",
          opacity: 0.65,
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.65")}
      >
        {currentLabel}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          style={{
            display: "block",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <path d="M1 1L4 4L7 1" stroke={ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            ...(isDark ? { left: 0, right: "auto" } : { right: 0 }),
            background: bg,
            border: `1px solid ${borderColor}`,
            minWidth: "160px",
            zIndex: 200,
          }}
        >
          {languages.map((lang, i) => {
            const targetUrl = getUrlInLang(pathname, lang.code);
            const isActive = lang.code === currentLang;
            return (
              <a
                key={lang.code}
                href={targetUrl}
                role="option"
                aria-selected={isActive}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 16px",
                  fontFamily: "Inter Tight, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: ink,
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.5,
                  transition: "opacity 0.15s",
                  borderBottom: i < languages.length - 1 ? `1px solid ${borderColor}` : "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = isActive ? "1" : "0.5")}
              >
                <span style={{ width: "12px", fontSize: "9px" }}>{isActive ? "✓" : ""}</span>
                <span>{lang.label}</span>
                <span style={{ marginLeft: "auto", fontSize: "10px", opacity: 0.45, letterSpacing: "0.08em" }}>
                  {lang.name}
                </span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

function NavDropdown({ link }: { link: NavLink & { children: NavChild[] } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="nav__dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={link.href}
        data-nav={link.href}
        aria-haspopup="menu"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
        }}
      >
        {link.label}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          style={{
            marginLeft: "4px",
            display: "inline-block",
            verticalAlign: "middle",
            opacity: 0.45,
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      {open && (
        <div className="nav__dropdown-panel" role="menu">
          <div className="nav__dropdown-panel__inner">
            {link.children.map((child) => (
              <a key={child.href} href={child.href} role="menuitem">
                {child.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const isDanish = pathname?.startsWith("/da") ?? false;
  const links = isDanish ? daLinks : enLinks;

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
    <header className="nav">
      <div className="nav__inner">
        <a href={isDanish ? "/da" : "/"} className="logo" aria-label="Woodoo Stadium">
          <Image
            src="/uploads/logo-light.png"
            alt="Woodoo Stadium"
            width={220}
            height={55}
            priority
            className="logo-img"
          />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) =>
            link.children ? (
              <NavDropdown key={link.href} link={link as NavLink & { children: NavChild[] }} />
            ) : (
              <a key={link.href} href={link.href} data-nav={link.href}>
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="nav__cta">
          <LangSwitcher pathname={pathname ?? "/"} />
          {isDanish ? (
            <a className="tlink" href="/da/showroom#kontakt">
              Forespørg <span className="arrow">→</span>
            </a>
          ) : (
            <a className="tlink" href="/atelier#contact">
              Enquire <span className="arrow">→</span>
            </a>
          )}
        </div>

        <button
          className="nav__toggle"
          aria-label={drawerOpen ? "Luk menu" : "Åbn menu"}
          aria-expanded={drawerOpen}
          type="button"
          onClick={() => setDrawerOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>

    <div className={`nav__drawer ${drawerOpen ? "nav__drawer--open" : ""}`}>
      <div className="nav__drawer-backdrop" onClick={() => setDrawerOpen(false)} />
      <div className="nav__drawer-panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", marginBottom: "8px" }}>
          <LangSwitcher
            pathname={pathname ?? "/"}
            onNavigate={() => setDrawerOpen(false)}
            isDark
          />
          <button
            className="nav__drawer-close"
            type="button"
            onClick={() => setDrawerOpen(false)}
          >
            {isDanish ? "Luk" : "Close"}
          </button>
        </div>
        <nav className="nav__drawer-links" aria-label="Mobile primary">
          {links.map((link) =>
            link.children ? (
              <div key={link.href}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <a
                    href={link.href}
                    data-nav={link.href}
                    onClick={() => setDrawerOpen(false)}
                    style={{ flex: 1 }}
                  >
                    {link.label}
                  </a>
                  <button
                    type="button"
                    aria-expanded={openAccordion === link.href}
                    aria-label={`${openAccordion === link.href ? (isDanish ? "Luk" : "Close") : (isDanish ? "Vis" : "Show")} under-sider for ${link.label}`}
                    onClick={() => setOpenAccordion(openAccordion === link.href ? null : link.href)}
                    style={{
                      background: "transparent",
                      border: 0,
                      padding: "8px",
                      cursor: "pointer",
                      color: "#F2EEE5",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 8 5"
                      fill="none"
                      style={{
                        transform: openAccordion === link.href ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                {openAccordion === link.href && (
                  <div className="nav__drawer-sub-links">
                    {link.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setDrawerOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.href}
                href={link.href}
                data-nav={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
        <a
          className="btn btn--filled-on-dark"
          href={isDanish ? "/da/showroom#kontakt" : "/atelier#contact"}
          onClick={() => setDrawerOpen(false)}
          style={{ marginTop: "auto", justifyContent: "center" }}
        >
          {isDanish ? "Forespørg" : "Enquire"} <span className="arrow">→</span>
        </a>
      </div>
    </div>
    </>
  );
}
