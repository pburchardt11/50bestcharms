import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { charms } from "@/data/charms/index";
import { CharmCard } from "@/components/charm-card";
import { CategoryBadge } from "@/components/category-badge";
import { StarRating } from "@/components/star-rating";
import { BreadcrumbSchema, FAQSchema } from "@/lib/structured-data";
import { getCharmImage } from "@/data/charm-images";

interface CharmPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return charms.map((charm) => ({ slug: charm.slug }));
}

export async function generateMetadata({ params }: CharmPageProps): Promise<Metadata> {
  const { slug } = await params;
  const charm = charms.find((c) => c.slug === slug);

  if (!charm) {
    return { title: "Charm Not Found" };
  }

  const title = `${charm.name} - Origin, Meaning & How to Use | 50 Best Charms`;
  const description = charm.shortDescription.length > 155
    ? charm.shortDescription.slice(0, 152) + "..."
    : charm.shortDescription;
  const url = `https://www.50bestcharms.com/charm/${slug}`;
  const keywords = [
    charm.name,
    `${charm.name} charm`,
    `${charm.name} meaning`,
    `${charm.name} origin`,
    `lucky charm`,
    `good luck symbol`,
    charm.category,
    charm.origin,
    ...charm.countries.slice(0, 3).map((c) => `${c.replace(/-/g, " ")} lucky charm`),
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "50 Best Charms",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CharmPage({ params }: CharmPageProps) {
  const { slug } = await params;
  const charm = charms.find((c) => c.slug === slug);

  if (!charm) {
    notFound();
  }

  const relatedCharms = charm.relatedCharms
    .map((relSlug) => charms.find((c) => c.slug === relSlug))
    .filter(Boolean)
    .slice(0, 4) as (typeof charms)[number][];

  const charmUrl = `https://www.50bestcharms.com/charm/${charm.slug}`;
  const imageUrl = getCharmImage(charm.slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.50bestcharms.com" },
          { name: "Charms", url: "https://www.50bestcharms.com/charm" },
          { name: charm.name, url: charmUrl },
        ]}
      />
      {charm.faq.length > 0 && <FAQSchema items={charm.faq} />}
    <div className="min-h-screen bg-[#080808]">
      {/* ─── Hero Image ───────────────────────────────────────────────── */}
      {imageUrl && (
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            src={imageUrl}
            alt={charm.imageAlt || charm.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
        </div>
      )}
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className={`hero-gradient relative overflow-hidden ${imageUrl ? "pt-8 pb-16" : "py-16 md:py-24"} px-4 border-b border-[#2a2825]`}>
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-[#9a958d]"
          >
            <Link href="/" className="hover:text-[#c4a87c] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/charm" className="hover:text-[#c4a87c] transition-colors">
              Charms
            </Link>
            <span>/</span>
            <span className="text-[#f5f0e8]">{charm.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Emoji */}
            <div
              className="flex-shrink-0 w-28 h-28 md:w-36 md:h-36 rounded-2xl border border-[rgba(196,168,124,0.2)] bg-[rgba(196,168,124,0.05)] flex items-center justify-center"
              role="img"
              aria-label={charm.imageAlt}
            >
              <span className="text-7xl md:text-8xl leading-none">{charm.emoji}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              {/* Badges row */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <CategoryBadge category={charm.category} />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(196,168,124,0.3)] bg-[rgba(196,168,124,0.08)] px-3 py-0.5 text-xs font-semibold text-[#c4a87c]">
                  #{charm.rank} of {charms.length} in the World
                </span>
                <span className="inline-flex items-center rounded-full border border-[#2a2825] bg-[#1a1918] px-3 py-0.5 text-xs text-[#9a958d]">
                  {charm.origin}
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl text-[#f5f0e8] leading-tight mb-4">
                {charm.name}
              </h1>

              <p className="text-lg text-[#9a958d] leading-relaxed mb-6 max-w-2xl">
                {charm.shortDescription}
              </p>

              <div className="flex items-center gap-4">
                <StarRating rating={charm.rating} size={18} showValue />
                <span className="text-sm text-[#9a958d]">
                  Popular in {charm.countries.length} countr{charm.countries.length === 1 ? "y" : "ies"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#080808] to-transparent" />
      </section>

      {/* ─── Main content ─────────────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="flex flex-col gap-10">
          {/* Description */}
          <section>
            <h2 className="font-heading text-3xl text-[#f5f0e8] mb-6">About {charm.name}</h2>
            <div className="space-y-4">
              {charm.description.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#9a958d] leading-relaxed text-base">
                  {para.trim()}
                </p>
              ))}
            </div>
          </section>

          {/* Two-col cards: Meaning + How to Use */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Meaning */}
            <div className="rounded-xl border border-[#2a2825] bg-[#121210] p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">✨</span>
                <h3 className="font-heading text-2xl text-[#f5f0e8]">Meaning</h3>
              </div>
              <p className="text-sm text-[#9a958d] leading-relaxed">{charm.meaning}</p>
            </div>

            {/* How to Use */}
            <div className="rounded-xl border border-[#2a2825] bg-[#121210] p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🙌</span>
                <h3 className="font-heading text-2xl text-[#f5f0e8]">How to Use</h3>
              </div>
              <p className="text-sm text-[#9a958d] leading-relaxed">{charm.howToUse}</p>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="relative rounded-xl border border-[rgba(196,168,124,0.25)] bg-[rgba(196,168,124,0.06)] p-6">
            <div className="absolute top-0 left-6 -translate-y-1/2">
              <span className="rounded-full border border-[rgba(196,168,124,0.3)] bg-[#121210] px-3 py-0.5 text-xs font-semibold text-[#c4a87c] tracking-wide uppercase">
                Fun Fact
              </span>
            </div>
            <div className="flex gap-4 mt-2">
              <span className="text-2xl flex-shrink-0">💡</span>
              <p className="text-[#e8e4de] leading-relaxed text-base">{charm.funFact}</p>
            </div>
          </div>

          {/* Countries */}
          {charm.countries.length > 0 && (
            <section>
              <h2 className="font-heading text-3xl text-[#f5f0e8] mb-5">
                Popular in These Countries
              </h2>
              <div className="flex flex-wrap gap-2">
                {charm.countries.map((countrySlug) => (
                  <Link
                    key={countrySlug}
                    href={`/country/${countrySlug}`}
                    className="rounded-full border border-[#2a2825] bg-[#1a1918] px-4 py-1.5 text-sm text-[#9a958d] hover:border-[rgba(196,168,124,0.3)] hover:text-[#c4a87c] transition-colors capitalize"
                  >
                    {countrySlug.replace(/-/g, " ")}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {charm.faq.length > 0 && (
            <section>
              <h2 className="font-heading text-3xl text-[#f5f0e8] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {charm.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-[#2a2825] bg-[#121210] overflow-hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-[#f5f0e8] hover:text-[#c4a87c] transition-colors list-none">
                      <span className="font-medium text-sm md:text-base">{item.question}</span>
                      <span className="flex-shrink-0 text-[#9a958d] group-open:rotate-180 transition-transform duration-200">
                        ▾
                      </span>
                    </summary>
                    <div className="border-t border-[#2a2825] px-5 pb-5 pt-4">
                      <p className="text-sm text-[#9a958d] leading-relaxed">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related Charms */}
          {relatedCharms.length > 0 && (
            <section>
              <h2 className="font-heading text-3xl text-[#f5f0e8] mb-6">Related Charms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedCharms.map((related) => (
                  <CharmCard key={related.id} charm={related} />
                ))}
              </div>
            </section>
          )}

          {/* Back link */}
          <div className="pt-4 border-t border-[#2a2825]">
            <Link
              href="/charm"
              className="inline-flex items-center gap-2 text-sm text-[#9a958d] hover:text-[#c4a87c] transition-colors"
            >
              ← Back to all charms
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
