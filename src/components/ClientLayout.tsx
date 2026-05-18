"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Nav />}
      <main className="page-content">
        <ScrollReveal>{children}</ScrollReveal>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}
