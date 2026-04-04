"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { GlobalSearch } from "./global-search";

const NAV_LINKS = [
  { label: "Rankings", href: "/charm" },
  { label: "Countries", href: "/country" },
  { label: "Categories", href: "/category" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const CATEGORY_LINKS = [
  { label: "Wealth", href: "/category/wealth", emoji: "\u{1F4B0}" },
  { label: "Health", href: "/category/health", emoji: "\u{1F33F}" },
  { label: "Love", href: "/category/love", emoji: "\u2764\uFE0F" },
  { label: "Protection", href: "/category/protection", emoji: "\u{1F6E1}\uFE0F" },
  { label: "Success", href: "/category/success", emoji: "\u2B50" },
  { label: "General Luck", href: "/category/general", emoji: "\u{1F340}" },
];

interface SearchItem {
  type: "charm" | "country" | "category";
  name: string;
  slug: string;
  emoji: string;
  subtitle: string;
  href: string;
}

interface CountryNav {
  name: string;
  slug: string;
  flag: string;
}

export function SiteHeader({ searchItems = [], countryList = [] }: { searchItems?: SearchItem[]; countryList?: CountryNav[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#2a2825]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center shrink-0 hover:opacity-90 transition-opacity"
              onClick={closeMenu}
              aria-label="50BestCharms home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="50 Best Charms" className="h-10" />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
              <a
                href="/charm"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-[#c4a87c] rounded-lg hover:bg-[#c4a87c]/5 transition-all duration-200"
              >
                Rankings
              </a>
              {/* Countries dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCountryOpen(true)}
                onMouseLeave={() => setCountryOpen(false)}
              >
                <a
                  href="/country"
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm text-zinc-400 hover:text-[#c4a87c] rounded-lg hover:bg-[#c4a87c]/5 transition-all duration-200"
                >
                  Countries
                  <ChevronDown size={14} className={`transition-transform ${countryOpen ? "rotate-180" : ""}`} />
                </a>
                {countryOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 max-h-[70vh] overflow-y-auto bg-[#121210] border border-[#2a2825] rounded-xl shadow-xl py-1 z-50">
                    <a
                      href="/country"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#c4a87c] font-medium hover:bg-[#c4a87c]/5 transition-all border-b border-[#2a2825]"
                    >
                      All Countries →
                    </a>
                    {countryList.map((c) => (
                      <a
                        key={c.slug}
                        href={`/country/${c.slug}`}
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-zinc-400 hover:text-[#c4a87c] hover:bg-[#c4a87c]/5 transition-all"
                      >
                        <span className="text-base leading-none">{c.flag}</span>
                        <span>{c.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Categories dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
              >
                <a
                  href="/category"
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm text-zinc-400 hover:text-[#c4a87c] rounded-lg hover:bg-[#c4a87c]/5 transition-all duration-200"
                >
                  Categories
                  <ChevronDown size={14} className={`transition-transform ${catOpen ? "rotate-180" : ""}`} />
                </a>
                {catOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-[#121210] border border-[#2a2825] rounded-xl shadow-xl py-1 z-50">
                    {CATEGORY_LINKS.map((cat) => (
                      <a
                        key={cat.href}
                        href={cat.href}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-zinc-400 hover:text-[#c4a87c] hover:bg-[#c4a87c]/5 transition-all"
                      >
                        <span>{cat.emoji}</span>
                        <span>{cat.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/blog"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-[#c4a87c] rounded-lg hover:bg-[#c4a87c]/5 transition-all duration-200"
              >
                Blog
              </a>
              <a
                href="/about"
                className="px-3 py-2 text-sm text-zinc-400 hover:text-[#c4a87c] rounded-lg hover:bg-[#c4a87c]/5 transition-all duration-200"
              >
                About
              </a>
            </nav>

            {/* Search + mobile hamburger */}
            <div className="flex items-center gap-2">
              <GlobalSearch items={searchItems} />

              {/* Mobile hamburger */}
              <button
                type="button"
                onClick={toggleMenu}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-400 hover:text-[#c4a87c] hover:bg-[#c4a87c]/5 transition-all duration-200"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed top-0 right-0 z-50 h-full w-72 bg-[#0c0c0a] border-l border-[#2a2825] flex flex-col",
          "transform transition-transform duration-300 ease-in-out lg:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#2a2825] shrink-0">
          <Link href="/" onClick={closeMenu}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="50 Best Charms" className="h-8" />
          </Link>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-[#c4a87c] hover:bg-[#c4a87c]/5 transition-all duration-200"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3 text-base text-zinc-300 hover:text-[#c4a87c] hover:bg-[#c4a87c]/5 rounded-lg transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Category sub-links in mobile */}
          <div className="mt-6 pt-6 border-t border-[#2a2825]">
            <p className="px-4 text-xs font-medium text-zinc-600 uppercase tracking-wider mb-2">
              Categories
            </p>
            <ul className="space-y-1">
              {CATEGORY_LINKS.map((cat) => (
                <li key={cat.href}>
                  <a
                    href={cat.href}
                    onClick={closeMenu}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-zinc-400 hover:text-[#c4a87c] hover:bg-[#c4a87c]/5 rounded-lg transition-all duration-200"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Drawer footer */}
        <div className="px-4 py-6 border-t border-[#2a2825] shrink-0">
          <a
            href="/contact"
            onClick={closeMenu}
            className="block text-center text-sm text-zinc-500 hover:text-[#c4a87c] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
