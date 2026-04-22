"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, Sparkles, MapPin, Tag } from "lucide-react";
import { useRouter } from "next/navigation";

interface SearchItem {
  type: "charm" | "country" | "category";
  name: string;
  slug: string;
  emoji: string;
  subtitle: string;
  href: string;
}

// This component receives pre-built search index as props (built server-side)
export function GlobalSearch({ items }: { items: SearchItem[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = query.length >= 2
    ? items
        .filter((item) => {
          const q = query.toLowerCase();
          return (
            item.name.toLowerCase().includes(q) ||
            item.subtitle.toLowerCase().includes(q) ||
            item.slug.includes(q)
          );
        })
        .slice(0, 20)
    : [];

  // Group results by type
  const charmResults = results.filter((r) => r.type === "charm");
  const countryResults = results.filter((r) => r.type === "country");
  const categoryResults = results.filter((r) => r.type === "category");

  // If a country matches, show countries first
  const countryFirst = countryResults.length > 0 &&
    countryResults.some((c) => c.name.toLowerCase().startsWith(query.toLowerCase()));

  const handleSelect = useCallback(
    (item: SearchItem) => {
      setOpen(false);
      setQuery("");
      router.push(item.href);
    },
    [router]
  );

  // Keyboard shortcut: Cmd/Ctrl+K to open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Arrow key navigation
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const typeIcon = (type: string) => {
    switch (type) {
      case "charm":
        return <Sparkles size={14} className="text-[#c4a87c]" />;
      case "country":
        return <MapPin size={14} className="text-blue-400" />;
      case "category":
        return <Tag size={14} className="text-purple-400" />;
      default:
        return null;
    }
  };

  const renderSection = (title: string, sectionItems: SearchItem[], startIndex: number) => {
    if (sectionItems.length === 0) return null;
    return (
      <div key={title}>
        <div className="px-4 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
          {title}
        </div>
        {sectionItems.map((item, i) => {
          const globalIndex = startIndex + i;
          return (
            <button
              key={item.href}
              onClick={() => handleSelect(item)}
              onMouseEnter={() => setSelectedIndex(globalIndex)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                globalIndex === selectedIndex
                  ? "bg-[rgba(196,168,124,0.1)]"
                  : "hover:bg-[rgba(196,168,124,0.05)]"
              }`}
            >
              <span className="text-xl leading-none shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {typeIcon(item.type)}
                  <span className="text-sm text-[#f5f0e8] truncate">{item.name}</span>
                </div>
                <span className="text-xs text-zinc-500 truncate block">{item.subtitle}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2a2825] bg-[#121210] text-zinc-500 text-sm hover:border-[rgba(196,168,124,0.3)] hover:text-zinc-400 transition-all"
        aria-label="Search"
      >
        <Search size={15} />
        <span className="hidden sm:inline">Search...</span>
        <kbd className="hidden md:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-[#1a1918] border border-[#2a2825] text-[10px] text-zinc-600 ml-2">
          <span className="text-[11px]">&#8984;</span>K
        </kbd>
      </button>

      {/* Search modal overlay */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Search panel */}
          <div
            ref={containerRef}
            className="relative w-full max-w-xl bg-[#121210] border border-[#2a2825] rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Input */}
            <div className="flex items-center gap-3 px-4 border-b border-[#2a2825]">
              <Search size={18} className="text-zinc-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Search charms, countries, categories..."
                className="flex-1 bg-transparent py-4 text-sm text-[#f5f0e8] placeholder:text-zinc-600 outline-none"
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={() => { setOpen(false); setQuery(""); }}
                className="text-xs text-zinc-600 border border-[#2a2825] rounded px-1.5 py-0.5 hover:text-zinc-400 transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[50vh] overflow-y-auto">
              {query.length >= 2 && results.length === 0 && (
                <div className="px-4 py-8 text-center text-zinc-500 text-sm">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )}

              {query.length >= 2 && results.length > 0 && (
                <div className="py-2">
                  {countryFirst ? (
                    <>
                      {renderSection("Countries — View Top 50 Charms", countryResults, 0)}
                      {renderSection("Charms", charmResults, countryResults.length)}
                      {renderSection(
                        "Categories",
                        categoryResults,
                        countryResults.length + charmResults.length
                      )}
                    </>
                  ) : (
                    <>
                      {renderSection("Charms", charmResults, 0)}
                      {renderSection("Countries — View Top 50 Charms", countryResults, charmResults.length)}
                      {renderSection(
                        "Categories",
                        categoryResults,
                        charmResults.length + countryResults.length
                      )}
                    </>
                  )}
                </div>
              )}

              {query.length < 2 && (
                <div className="px-4 py-8 text-center text-zinc-600 text-sm">
                  Type at least 2 characters to search
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
