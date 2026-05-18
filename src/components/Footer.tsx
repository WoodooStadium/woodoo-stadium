"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => setSubmitted(false), 1800);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
    setSubmitted(true);
  };

  return (
    <footer className="footer">
      <div className="footer__wordmark">
        <Image
          src="/uploads/logo-dark.png"
          alt="WooDoo Stadium"
          width={200}
          height={64}
          priority
        />
        <p className="tag">
          Every dream needs <em>a field.</em>
        </p>
      </div>

      <div className="footer__grid">
        <div className="footer__brand">
          <p className="footer__legal">
            WooDoo ApS · Copenhagen, Denmark<br />
            CVR 41 11 11 11<br />
            Registered Design · Denmark &amp; European Union
          </p>
          <div className="footer__newsletter">
            <h5>Atelier Journal</h5>
            <p>
              A short letter, four times a year, from the workshop on Refshaleøen.
            </p>
            <form className="news-row" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                required
              />
              <button type="submit">Subscribe →</button>
            </form>
            {submitted && (
              <p className="caption" style={{ marginTop: "18px" }}>
                Subscribed ✓
              </p>
            )}
          </div>
        </div>

        <div className="footer__col">
          <h4>The Object</h4>
          <ul>
            <li><a href="/the-table">The Table</a></li>
            <li><a href="/customise">Customise</a></li>
            <li><a href="/customise">Brand Edition</a></li>
            <li><a href="/customise">Bespoke Commission</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>For Business</h4>
          <ul>
            <li><a href="/for-business">Corporate HQ</a></li>
            <li><a href="/for-business">Hotels &amp; Resorts</a></li>
            <li><a href="/for-business">Airports &amp; Lounges</a></li>
            <li><a href="/for-business">Brand &amp; Activation</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>The Atelier</h4>
          <ul>
            <li><a href="/atelier">About</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/atelier#contact">Contact</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© MMXXVI · WooDoo · Copenhagen</span>
        <div className="social">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
