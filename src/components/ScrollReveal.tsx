"use client";

import { useEffect } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".fade-up"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
