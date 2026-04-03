import type { Metadata } from "next";
import Link from "next/link";
import { countries } from "@/data/countries";
import { charms } from "@/data/charms";

export const metadata: Metadata = {
  title: "Lucky Charms by Country",
  description:
    "Explore lucky charm traditions from countries around the world. Discover how different cultures approach luck, fortune, and protection.",
  openGraph: {
    title: "Lucky Charms by Country | 50 Best Charms",
    description:
      "Explore lucky charm traditions from countries around the world.",
  },
};

const REGION_ORDER = [
  "Asia",
  "Europe",
  "Americas",
  "Africa",
  "Middle East",
  "Oceania",
] as const;

const regionDescriptions: Record<string, string> = {
  Asia:
    "Ancient traditions meet modern practice across the world's most populous continent.",
  Europe:
    "From Celtic clovers to Mediterranean amulets, Europe's charm heritage spans millennia.",
  Americas:
    "Indigenous wisdom blended with colonial influences creates a rich patchwork of beliefs.",
  Africa:
    "Some of humanity's oldest protective traditions rooted in ancestral reverence.",
  "Middle East":
    "Powerful amulets and sacred symbols at the crossroads of civilisation.",
  Oceania:
    "Polynesian and Aboriginal traditions carry deep spiritual resonance.",
};

export default function CountriesPage() {
  // Count charms per country
  const charmCountByCountry: Record<string, number> = {};
  for (const country of countries) {
    const count = charms.filter(
      (charm) =>
        charm.countries.includes(country.slug) ||
        country.charmSlugs.includes(charm.slug)
    ).length;
    charmCountByCountry[country.slug] = count;
  }

  // Group by region
  const byRegion: Record<string, typeof countries> = {};
  for (const country of countries) {
    if (!byRegion[country.region]) byRegion[country.region] = [];
    byRegion[country.region].push(country);
  }

  // Sort countries within each region alphabetically
  for (const region of Object.keys(byRegion)) {
    byRegion[region].sort((a, b) => a.name.localeCompare(b.name));
  }

  const totalCountries = countries.length;

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
            Global Traditions
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight mb-4">
            Lucky Charms by Country
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Every culture on earth has developed its own traditions around luck,
            fortune, and protection. Explore {totalCountries} countries and
            discover what makes each one unique.
          </p>
        </div>
      </section>

      {/* Region Groups */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {REGION_ORDER.filter((region) => byRegion[region]?.length > 0).map(
          (region) => (
            <section key={region}>
              {/* Region header */}
              <div className="mb-8 pb-4 border-b border-[#2a2825]">
                <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8]">
                  {region}
                </h2>
                {regionDescriptions[region] && (
                  <p className="mt-1 text-zinc-500 text-sm">
                    {regionDescriptions[region]}
                  </p>
                )}
              </div>

              {/* Country cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {byRegion[region].map((country) => {
                  const count = charmCountByCountry[country.slug] ?? 0;
                  return (
                    <Link
                      key={country.slug}
                      href={`/country/${country.slug}`}
                      className="group card-hover flex items-center gap-4 bg-[#121210] border border-[#2a2825] rounded-xl p-4 hover:border-gold/30 transition-all duration-300"
                    >
                      {/* Flag */}
                      <span
                        className="text-4xl leading-none select-none shrink-0"
                        role="img"
                        aria-label={`Flag of ${country.name}`}
                      >
                        {country.flag}
                      </span>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-lg text-[#f5f0e8] group-hover:text-gold transition-colors leading-snug">
                          {country.name}
                        </h3>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          {count} charm{count !== 1 ? "s" : ""}
                        </p>
                      </div>

                      {/* Arrow */}
                      <span className="text-gold/40 group-hover:text-gold transition-colors shrink-0 text-lg">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>
          )
        )}
      </div>
    </div>
  );
}
