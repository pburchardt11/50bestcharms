"use client";

import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Rankings", href: "/rankings" },
  { label: "Countries", href: "/countries" },
  { label: "Categories", href: "/categories" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 group shrink-0"
              onClick={closeMenu}
              aria-label="50BestCharms home"
            >
              <Sparkles
                size={16}
                className="text-[#c4a87c] group-hover:text-[#d4bc96] transition-colors duration-200"
              />
              <span className="font-heading text-xl tracking-wide">
                <span
                  className="font-bold"
                  style={{
                    background:
                      "linear-gradient(135deg, #c4a87c 0%, #d4bc96 50%, #a08a64 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  50BEST
                </span>
                <span className="text-[#f5f0e8] ml-1">Charms</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-[#c4a87c] rounded-lg hover:bg-[#c4a87c]/5 transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a
                href="/rankings"
                className="gold-gradient text-[#080808] text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                View Rankings
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-400 hover:text-[#c4a87c] hover:bg-[#c4a87c]/5 transition-all duration-200"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
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
          "transform transition-transform duration-300 ease-in-out md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#2a2825] shrink-0">
          <Link
            href="/"
            className="font-heading text-lg"
            onClick={closeMenu}
          >
            <span
              className="font-bold"
              style={{
                background:
                  "linear-gradient(135deg, #c4a87c 0%, #d4bc96 50%, #a08a64 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              50BEST
            </span>
            <span className="text-[#f5f0e8] ml-1">Charms</span>
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
        </nav>

        {/* Drawer CTA */}
        <div className="px-4 py-6 border-t border-[#2a2825] shrink-0">
          <a
            href="/rankings"
            onClick={closeMenu}
            className="gold-gradient block text-center text-[#080808] font-semibold px-4 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            View All Rankings
          </a>
        </div>
      </div>
    </>
  );
}
