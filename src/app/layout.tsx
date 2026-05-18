import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WooDoo Stadium",
  description: "Dark Nordic luxury handbuilt foosball table.",
  metadataBase: new URL("https://www.woodoostadium.com"),
  openGraph: {
    title: "WooDoo Stadium",
    description: "Dark Nordic luxury handbuilt foosball table.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="app-shell">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
