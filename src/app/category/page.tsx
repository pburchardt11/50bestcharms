import type { Metadata } from "next";
import Link from "next/link";
import { charms } from "@/data/charms/index";

export const metadata: Metadata = {
  title: "Lucky Charm Categories",
  description:
    "Browse lucky charms by category: wealth, health, love, protection, success, and general fortune. Find the perfect charm for every intention.",
  openGraph: {
    title: "Lucky Charm Categories | 50 Best Charms",
    description:
      "Browse lucky charms by category — from wealth and love to protection and success.",
  },
};

const categories = [
  {
    slug: "wealth",
    name: "Wealth",
    emoji: "💰",
    description:
      "Charms for attracting money, prosperity, and financial abundance",
    color: "from-yellow-900/30 to-yellow-900/10",
    borderColor: "border-yellow-700/30 hover:border-yellow-500/50",
    badgeColor: "bg-yellow-900/40 text-yellow-300",
    accentColor: "text-yellow-400",
  },
  {
    slug: "health",
    name: "Health",
    emoji: "🌿",
    description: "Charms for healing, longevity, and physical wellbeing",
    color: "from-green-900/30 to-green-900/10",
    borderColor: "border-green-700/30 hover:border-green-500/50",
    badgeColor: "bg-green-900/40 text-green-300",
    accentColor: "text-green-400",
  },
  {
    slug: "love",
    name: "Love",
    emoji: "❤️",
    description: "Charms for romance, relationships, and matters of the heart",
    color: "from-pink-900/30 to-pink-900/10",
    borderColor: "border-pink-700/30 hover:border-pink-500/50",
    badgeColor: "bg-pink-900/40 text-pink-300",
    accentColor: "text-pink-400",
  },
  {
    slug: "protection",
    name: "Protection",
    emoji: "🛡️",
    description: "Charms for warding off evil, negativity, and misfortune",
    color: "from-blue-900/30 to-blue-900/10",
    borderColor: "border-blue-700/30 hover:border-blue-500/50",
    badgeColor: "bg-blue-900/40 text-blue-300",
    accentColor: "text-blue-400",
  },
  {
    slug: "success",
    name: "Success",
    emoji: "🏆",
    description: "Charms for achievement, career growth, and reaching goals",
    color: "from-purple-900/30 to-purple-900/10",
    borderColor: "border-purple-700/30 hover:border-purple-500/50",
    badgeColor: "bg-purple-900/40 text-purple-300",
    accentColor: "text-purple-400",
  },
  {
    slug: "general",
    name: "General",
    emoji: "✨",
    description: "Charms for overall good luck and positive fortune",
    color: "from-zinc-800/40 to-zinc-800/10",
    borderColor: "border-zinc-700/30 hover:border-zinc-500/50",
    badgeColor: "bg-zinc-800/60 text-zinc-300",
    accentColor: "text-zinc-300",
  },
];

export default function CategoriesPage() {
  const charmCounts = Object.fromEntries(
    categories.map((cat) => [
      cat.slug,
      charms.filter((c) => c.category === cat.slug).length,
    ])
  );

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
            Browse by Purpose
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight mb-4">
            Charm Categories
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Whether you seek wealth, love, protection, or general good fortune,
            every charm has a purpose. Find yours.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const count = charmCounts[cat.slug] ?? 0;
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className={`group relative flex flex-col h-full bg-gradient-to-br ${cat.color} border ${cat.borderColor} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-black/30`}
              >
                {/* Emoji */}
                <span
                  className="text-5xl leading-none select-none mb-4"
                  role="img"
                  aria-label={cat.name}
                >
                  {cat.emoji}
                </span>

                {/* Name & Count */}
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h2 className="font-heading text-2xl text-[#f5f0e8] group-hover:text-white transition-colors">
                    {cat.name}
                  </h2>
                  <span
                    className={`text-sm font-medium px-2.5 py-0.5 rounded-full ${cat.badgeColor}`}
                  >
                    {count} charm{count !== 1 ? "s" : ""}
                  </span>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">
                  {cat.description}
                </p>

                {/* CTA */}
                <div
                  className={`mt-4 flex items-center gap-1 text-sm font-medium ${cat.accentColor} group-hover:gap-2 transition-all duration-200`}
                >
                  Explore {cat.name} charms
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
