"use client";

import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";

const CATEGORY_LINKS = [
  { label: "Wealth", href: "/category/wealth" },
  { label: "Health", href: "/category/health" },
  { label: "Love", href: "/category/love" },
  { label: "Protection", href: "/category/protection" },
  { label: "Success", href: "/category/success" },
  { label: "General", href: "/category/general" },
];

const COUNTRY_LINKS = [
  { label: "Ireland", href: "/country/ireland" },
  { label: "Japan", href: "/country/japan" },
  { label: "China", href: "/country/china" },
  { label: "India", href: "/country/india" },
  { label: "Italy", href: "/country/italy" },
];

const RESOURCE_LINKS = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-heading text-base text-[#c4a87c] mb-4 tracking-wide">
      {children}
    </h4>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-zinc-400 hover:text-[#c4a87c] transition-colors duration-200"
      >
        {children}
      </Link>
    </li>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#080808] border-t border-[#c4a87c]/30 mt-auto">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <Sparkles size={16} className="text-[#c4a87c] group-hover:text-[#d4bc96] transition-colors" />
              <span className="font-heading text-xl">
                <span className="text-gold font-bold tracking-wider">50BEST</span>
                <span className="text-[#f5f0e8] ml-1">Charms</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Discover the world&rsquo;s most powerful lucky charms, ranked and
              researched across cultures and centuries. From ancient talismans to
              modern symbols of fortune.
            </p>
          </div>

          {/* Browse by Category */}
          <div>
            <FooterHeading>Browse</FooterHeading>
            <ul className="space-y-2.5">
              {CATEGORY_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Popular Countries */}
          <div>
            <FooterHeading>Popular</FooterHeading>
            <ul className="space-y-2.5">
              {COUNTRY_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <FooterHeading>Resources</FooterHeading>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <FooterLink key={link.href} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border border-[#2a2825] rounded-xl p-6 bg-[#0e0e0c]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <h4 className="font-heading text-lg text-[#f5f0e8] mb-1">
                Lucky charms, delivered monthly
              </h4>
              <p className="text-sm text-zinc-500">
                New rankings, charm histories, and cultural stories from around
                the world.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 w-full sm:w-auto"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="relative flex-1 sm:w-56">
                <Mail
                  size={15}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                />
                <input
                  id="footer-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#080808] border border-[#2a2825] rounded-lg pl-9 pr-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-[#c4a87c] focus:ring-2 focus:ring-[#c4a87c]/20 transition-all duration-200"
                />
              </div>
              <button
                type="submit"
                className="shrink-0 gold-gradient text-[#080808] text-sm font-semibold px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a1918]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-600">
          <span>&copy; 2026 50 Best Limited, Hong Kong. All rights reserved.</span>
          <span>Exploring lucky traditions across 50+ cultures worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
