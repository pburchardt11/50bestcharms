import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries } from "@/data/countries-expanded";
import { charms } from "@/data/charms/index";
import { CharmCard } from "@/components/charm-card";
import { BreadcrumbSchema, CollectionPageSchema } from "@/lib/structured-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};

  const title = `Lucky Charms in ${country.name} - Traditional Good Luck Symbols | 50 Best Charms`;
  const description = `Discover the most beloved lucky charms and good luck symbols from ${country.name}. Explore centuries-old charm traditions from ${country.region} and their meanings.`;
  const url = `https://www.50bestcharms.com/country/${slug}`;

  return {
    title,
    description,
    keywords: [
      `${country.name} lucky charms`,
      `${country.name} good luck symbols`,
      `${country.name} talismans`,
      `${country.region} lucky charms`,
      `traditional charms ${country.name}`,
      "lucky charm",
      "good luck symbol",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "50 Best Charms",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  const countryCharms = charms.filter(
    (charm) =>
      charm.countries.includes(country.slug) ||
      country.charmSlugs.includes(charm.slug)
  );

  const paragraphs = country.description
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  const countryUrl = `https://www.50bestcharms.com/country/${country.slug}`;
  const countryDescription = `Explore the most popular lucky charms, symbols, and talismans from ${country.name}. Discover the rich charm traditions of ${country.region}.`;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.50bestcharms.com" },
          { name: "Countries", url: "https://www.50bestcharms.com/country" },
          { name: country.name, url: countryUrl },
        ]}
      />
      <CollectionPageSchema
        name={`Lucky Charms of ${country.name}`}
        description={countryDescription}
        url={countryUrl}
      />
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
                  href="/country"
                  className="hover:text-gold transition-colors"
                >
                  Countries
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-700">
                /
              </li>
              <li className="text-zinc-300">{country.name}</li>
            </ol>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <span
              className="text-6xl sm:text-7xl leading-none select-none"
              role="img"
              aria-label={`Flag of ${country.name}`}
            >
              {country.flag}
            </span>
            <div>
              <p className="text-gold text-sm font-medium uppercase tracking-widest mb-2">
                {country.region}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight">
                Lucky Charms of {country.name}
              </h1>
              <p className="mt-3 text-zinc-400 text-lg">
                {countryCharms.length} charm
                {countryCharms.length !== 1 ? "s" : ""} from this country
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Description */}
        <section className="mb-14">
          <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-6">
            Charm Traditions in {country.name}
          </h2>
          <div className="space-y-4 max-w-3xl">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-zinc-400 leading-relaxed text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Charms Grid */}
        {countryCharms.length > 0 ? (
          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-8">
              Popular Charms in {country.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {countryCharms.map((charm) => (
                <CharmCard key={charm.slug} charm={charm} />
              ))}
            </div>
          </section>
        ) : (
          <section className="text-center py-16 border border-[#2a2825] rounded-xl">
            <p className="text-zinc-500 text-lg">
              No charms found for this country yet.
            </p>
            <Link
              href="/country"
              className="inline-block mt-4 text-gold hover:text-[#d4bc96] transition-colors text-sm"
            >
              ← Browse all countries
            </Link>
          </section>
        )}

        {/* Back link */}
        <div className="mt-14 pt-8 border-t border-[#2a2825]">
          <Link
            href="/country"
            className="inline-flex items-center gap-2 text-gold hover:text-[#d4bc96] transition-colors text-sm font-medium"
          >
            ← All Countries
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
