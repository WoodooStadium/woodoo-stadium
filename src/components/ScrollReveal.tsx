"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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

    elements.forEach((element) => {
      if (!element.classList.contains("is-in")) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}