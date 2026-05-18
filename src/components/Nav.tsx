"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/the-table", label: "The Table" },
  { href: "/customise", label: "Customise" },
  { href: "/for-business", label: "For Business" },
  { href: "/gallery", label: "Gallery" },
  { href: "/atelier", label: "Atelier" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="/" className="logo" aria-label="WooDoo Stadium">
          <Image
            src="/uploads/logo-light.png"
            alt="WooDoo Stadium"
            width={160}
            height={32}
            priority
          />
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} data-nav={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <a className="tlink" href="/atelier#contact">
            Enquire <span className="arrow">→</span>
          </a>
        </div>

        <button
          className="nav__toggle"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
          type="button"
          onClick={() => setDrawerOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${drawerOpen ? "nav__drawer--open" : ""}`}>
        <div className="nav__drawer-backdrop" onClick={() => setDrawerOpen(false)} />
        <div className="nav__drawer-panel">
          <button
            className="nav__drawer-close"
            type="button"
            onClick={() => setDrawerOpen(false)}
          >
            Close
          </button>
          <nav className="nav__drawer-links" aria-label="Mobile primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-nav={link.href}
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
