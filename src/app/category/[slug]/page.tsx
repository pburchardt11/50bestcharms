import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { charms } from "@/data/charms/index";
import { CharmCard } from "@/components/charm-card";

interface Props {
  params: Promise<{ slug: string }>;
}

type CategorySlug =
  | "wealth"
  | "health"
  | "love"
  | "protection"
  | "success"
  | "general";

const categoryConfig: Record<
  CategorySlug,
  { name: string; description: string; emoji: string }
> = {
  wealth: {
    name: "Wealth",
    emoji: "💰",
    description:
      "Charms for attracting money, prosperity, and financial abundance",
  },
  health: {
    name: "Health",
    emoji: "🌿",
    description: "Charms for healing, longevity, and physical wellbeing",
  },
  love: {
    name: "Love",
    emoji: "❤️",
    description: "Charms for romance, relationships, and matters of the heart",
  },
  protection: {
    name: "Protection",
    emoji: "🛡️",
    description:
      "Charms for warding off evil, negativity, and misfortune",
  },
  success: {
    name: "Success",
    emoji: "🏆",
    description:
      "Charms for achievement, career growth, and reaching goals",
  },
  general: {
    name: "General",
    emoji: "✨",
    description: "Charms for overall good luck and positive fortune",
  },
};

const VALID_SLUGS: CategorySlug[] = [
  "wealth",
  "health",
  "love",
  "protection",
  "success",
  "general",
];

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = categoryConfig[slug as CategorySlug];
  if (!config) return {};
  return {
    title: `${config.name} Charms`,
    description: `${config.description}. Browse the top lucky charms for ${config.name.toLowerCase()} from cultures around the world.`,
    openGraph: {
      title: `${config.name} Lucky Charms | 50 Best Charms`,
      description: config.description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug as CategorySlug)) {
    notFound();
  }

  const config = categoryConfig[slug as CategorySlug];
  const categoryCharms = charms
    .filter((charm) => charm.category === slug)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-500">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-700">
                /
              </li>
              <li>
                <Link
                  href="/category"
                  className="hover:text-gold transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-700">
                /
              </li>
              <li className="text-zinc-300">{config.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <span
              className="text-6xl sm:text-7xl leading-none select-none"
              role="img"
              aria-label={config.name}
            >
              {config.emoji}
            </span>
            <div>
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-2">
                Category
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight">
                {config.name} Charms
              </h1>
              <p className="mt-3 text-zinc-400 text-lg max-w-xl">
                {config.description}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-10 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gold font-heading">
                {categoryCharms.length}
              </span>
              <span className="text-zinc-500 text-sm">
                charm{categoryCharms.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Charms Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {categoryCharms.length > 0 ? (
          <>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-8">
              All {config.name} Charms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryCharms.map((charm) => (
                <CharmCard key={charm.slug} charm={charm} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20 border border-[#2a2825] rounded-xl">
            <p className="text-zinc-500 text-lg">
              No charms in this category yet.
            </p>
          </div>
        )}

        {/* Back link */}
        <div className="mt-14 pt-8 border-t border-[#2a2825]">
          <Link
            href="/category"
            className="inline-flex items-center gap-2 text-gold hover:text-[#d4bc96] transition-colors text-sm font-medium"
          >
            ← All Categories
          </Link>
        </div>
      </div>
    </div>
  );
}
