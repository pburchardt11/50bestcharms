import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import LanguageToggle from "@/components/language-toggle";
import { buildSearchIndex } from "@/lib/search-index";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "50 Best Charms - The World's Most Popular Lucky Charms Ranked",
    template: "%s | 50 Best Charms",
  },
  description:
    "Discover the world's most popular lucky charms ranked by popularity. Explore origins, meanings, and cultural significance of lucky charms from every country.",
  keywords: [
    "lucky charms",
    "good luck symbols",
    "lucky charms ranked",
    "four leaf clover",
    "horseshoe",
    "lucky charms by country",
  ],
  openGraph: {
    title: "50 Best Charms - The World's Most Popular Lucky Charms Ranked",
    description:
      "Discover the world's most popular lucky charms ranked by popularity.",
    url: "https://www.50bestcharms.com",
    siteName: "50 Best Charms",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchItems = buildSearchIndex();

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://translate.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader searchItems={searchItems} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <LanguageToggle />
      </body>
    </html>
  );
}
