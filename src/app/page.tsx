import Link from "next/link";
import { charms } from "@/data/charms/index";
import { countries } from "@/data/countries-expanded";
import { blogPosts } from "@/data/blogs";
import { CharmCard } from "@/components/charm-card";
import { CategoryBadge } from "@/components/category-badge";
import { ItemListSchema } from "@/lib/structured-data";

const categories = [
  {
    slug: "wealth",
    label: "Wealth",
    emoji: "💰",
    description: "Lucky charms that attract financial abundance, prosperity, and material success from cultures worldwide.",
  },
  {
    slug: "health",
    label: "Health",
    emoji: "🌿",
    description: "Protective symbols and talismans believed to promote physical wellbeing, healing, and longevity.",
  },
  {
    slug: "love",
    label: "Love",
    emoji: "❤️",
    description: "Romantic charms and symbols that draw love, strengthen relationships, and invite soulful connection.",
  },
  {
    slug: "protection",
    label: "Protection",
    emoji: "🛡️",
    description: "Ancient amulets and wards that shield against evil, misfortune, negative energy, and harm.",
  },
  {
    slug: "success",
    label: "Success",
    emoji: "⭐",
    description: "Talismans believed to open doors, sharpen focus, and bring achievement in career and ambition.",
  },
  {
    slug: "general",
    label: "General",
    emoji: "🍀",
    description: "All-purpose lucky charms bringing broad good fortune, positivity, and blessings into daily life.",
  },
];

export default function HomePage() {
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);

  const charmCountByCategory = (slug: string) =>
    charms.filter((c) => c.category === slug).length;

  const charmCountByCountry = (countrySlug: string) =>
    charms.filter((c) => c.countries.includes(countrySlug)).length;

  const top50Items = charms.slice(0, 50).map((charm) => ({
    name: charm.name,
    url: `https://www.50bestcharms.com/charm/${charm.slug}`,
    position: charm.rank,
  }));

  return (
    <>
      <ItemListSchema items={top50Items} />
    <div className="min-h-screen bg-[#080808]">
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="hero-gradient relative overflow-hidden py-24 md:py-36 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(196,168,124,0.3)] bg-[rgba(196,168,124,0.08)] px-4 py-1.5">
            <span className="text-sm font-medium text-[#c4a87c]">The Definitive Global Ranking</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl text-[#f5f0e8] leading-tight mb-6">
            The World&apos;s Most Popular{" "}
            <span className="text-[#c4a87c]">Lucky Charms</span>
          </h1>

          <p className="text-lg md:text-xl text-[#9a958d] max-w-2xl mx-auto mb-10 leading-relaxed">
            Ranked by global popularity across 200+ countries. Explore the origins, meanings,
            and cultural significance of humanity&apos;s most beloved symbols of fortune.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-8 md:gap-16">
            {[
              { value: String(charms.length), label: "Charms" },
              { value: String(countries.length), label: "Countries" },
              { value: "6", label: "Categories" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-4xl md:text-5xl text-[#c4a87c] font-semibold">
                  {stat.value}
                </div>
                <div className="text-sm text-[#9a958d] mt-1 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
      </section>

      {/* ─── Top 50 Grid ──────────────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-[#f5f0e8] mb-4">
              Top 50 Lucky Charms
            </h2>
            <p className="text-[#9a958d] max-w-xl mx-auto">
              The highest-ranked lucky charms from our collection of {charms.length}. Explore their stories
              and discover why the world believes in them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {charms.slice(0, 50).map((charm) => (
              <CharmCard key={charm.id} charm={charm} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/charm#rank-51"
              className="inline-flex items-center gap-2 rounded-full border border-[#c4a87c] px-8 py-3 text-[#c4a87c] hover:bg-[#c4a87c] hover:text-[#080808] transition-colors font-medium"
            >
              Browse All {charms.length} Charms →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Browse by Category ───────────────────────────────────────── */}
      <section className="py-20 px-4 border-t border-[#2a2825]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-[#f5f0e8] mb-4">
              Browse by Category
            </h2>
            <p className="text-[#9a958d] max-w-xl mx-auto">
              Explore lucky charms grouped by what they attract — wealth, health, love, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const count = charmCountByCategory(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="group block rounded-xl border border-[#2a2825] bg-[#121210] p-6 hover:border-[rgba(196,168,124,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,168,124,0.05)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{cat.emoji}</span>
                    <span className="text-xs text-[#9a958d] border border-[#2a2825] rounded-full px-2.5 py-0.5">
                      {count} charm{count !== 1 ? "s" : ""}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-[#f5f0e8] group-hover:text-[#c4a87c] transition-colors mb-2">
                    {cat.label}
                  </h3>
                  <p className="text-sm text-[#9a958d] leading-relaxed">{cat.description}</p>
                  <div className="mt-4 text-xs text-[#c4a87c] font-medium group-hover:underline">
                    Explore {cat.label} Charms →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Browse by Country ────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t border-[#2a2825]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-4xl md:text-5xl text-[#f5f0e8] mb-4">
              Browse by Country
            </h2>
            <p className="text-[#9a958d] max-w-xl mx-auto">
              Discover the lucky charm traditions of cultures across the globe.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {countries.map((country) => {
              const count = charmCountByCountry(country.slug);
              return (
                <Link
                  key={country.slug}
                  href={`/country/${country.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-[#2a2825] bg-[#121210] px-4 py-3 hover:border-[rgba(196,168,124,0.3)] transition-all duration-300"
                >
                  <span className="text-2xl leading-none flex-shrink-0">{country.flag}</span>
                  <div className="min-w-0">
                    <div className="text-sm text-[#f5f0e8] group-hover:text-[#c4a87c] transition-colors font-medium truncate">
                      {country.name}
                    </div>
                    <div className="text-xs text-[#9a958d]">
                      {count} charm{count !== 1 ? "s" : ""}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Latest from Blog ─────────────────────────────────────────── */}
      <section className="py-20 px-4 border-t border-[#2a2825]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-[#f5f0e8] mb-3">
                Latest from the Blog
              </h2>
              <p className="text-[#9a958d]">
                Guides, histories, and deep dives into lucky charm culture worldwide.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm text-[#c4a87c] hover:text-[#d4bc96] transition-colors font-medium whitespace-nowrap"
            >
              All articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-[#2a2825] bg-[#121210] p-6 hover:border-[rgba(196,168,124,0.3)] transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <CategoryBadge category={post.category} />
                  <span className="text-xs text-[#9a958d]">{post.readingTime} min read</span>
                </div>
                <h3 className="font-heading text-xl text-[#f5f0e8] group-hover:text-[#c4a87c] transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-[#9a958d] leading-relaxed line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="text-xs text-[#c4a87c] font-medium group-hover:underline">
                  Read article →
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-[#c4a87c] hover:text-[#d4bc96] transition-colors font-medium"
            >
              View all articles →
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
