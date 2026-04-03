import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About 50 Best Charms",
  description:
    "Learn about our mission to document and rank the world's most significant lucky charms, our editorial methodology, and our commitment to cultural accuracy.",
  openGraph: {
    title: "About 50 Best Charms",
    description:
      "Our mission, methodology, and editorial independence explained.",
  },
};

const stats = [
  { value: "500+", label: "Ranked Charms" },
  { value: "200+", label: "Countries" },
  { value: "6", label: "Categories" },
  { value: "25", label: "Articles" },
];

const criteria = [
  {
    rank: 1,
    title: "Cultural Significance",
    description:
      "How deeply embedded is the charm in the daily life, rituals, and ceremonies of its originating culture? Charms that feature in major life events — births, marriages, new year celebrations — score highly.",
  },
  {
    rank: 2,
    title: "Global Recognition",
    description:
      "Has the charm transcended its cultural origins to gain meaningful recognition in other parts of the world? We track cross-cultural adoption, international trade, and media representation.",
  },
  {
    rank: 3,
    title: "Historical Importance",
    description:
      "How far back does the documented history of this charm stretch? Charms with ancient origins and continuous unbroken traditions are weighted more heavily than recent inventions.",
  },
  {
    rank: 4,
    title: "Breadth of Use",
    description:
      "Is the charm used across multiple countries, faiths, or social groups? Symbols that unite people across traditional boundaries demonstrate extraordinary power.",
  },
  {
    rank: 5,
    title: "Contemporary Relevance",
    description:
      "Is the charm still actively used, gifted, and believed in today? We value living traditions over purely historical curiosities.",
  },
];

const categoryDescriptions = [
  {
    slug: "wealth",
    name: "Wealth",
    emoji: "💰",
    description:
      "Charms believed to attract money, financial abundance, and material prosperity. Includes everything from the Japanese Maneki-neko to the Chinese Money Frog.",
  },
  {
    slug: "health",
    name: "Health",
    emoji: "🌿",
    description:
      "Talismans associated with healing, longevity, physical wellbeing, and recovery from illness. Common across nearly every culture in human history.",
  },
  {
    slug: "love",
    name: "Love",
    emoji: "❤️",
    description:
      "Charms for romance, strengthening relationships, attracting a partner, and matters of the heart. Among the oldest and most universal charm traditions.",
  },
  {
    slug: "protection",
    name: "Protection",
    emoji: "🛡️",
    description:
      "Amulets and talismans designed to ward off evil, negative energy, the evil eye, and misfortune. The hamsa, evil eye bead, and horseshoe all fall here.",
  },
  {
    slug: "success",
    name: "Success",
    emoji: "🏆",
    description:
      "Charms supporting achievement, career advancement, academic success, and the realisation of goals. Popular among students, athletes, and entrepreneurs.",
  },
  {
    slug: "general",
    name: "General",
    emoji: "✨",
    description:
      "Symbols of overall good fortune not tied to a specific intention. The four-leaf clover and lucky penny are classic examples — simply good luck in any form.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight mb-6">
            About 50 Best Charms
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            A global reference for the world's most significant lucky charms,
            ranked by cultural weight, historical depth, and universal reach.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#2a2825] bg-[#0c0c0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-4xl sm:text-5xl text-gold mb-1">
                  {stat.value}
                </dt>
                <dd className="text-zinc-500 text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {/* Mission */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-6">
            Our Mission
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              Humanity has always sought meaning in objects. A rabbit's foot
              carried into battle, a jade pendant passed through generations, a
              penny pressed into a child's hand before an exam — these are not
              merely superstitions. They are expressions of hope, connection,
              and the deeply human need to feel that the universe is on our
              side.
            </p>
            <p>
              50 Best Charms exists to document, celebrate, and contextualise
              this extraordinary tradition. We rank the world's most beloved
              lucky charms not to trivialise belief, but to honour it — to show
              that across radically different cultures, languages, and
              geographies, people have arrived at remarkably similar conclusions
              about which symbols carry power.
            </p>
            <p>
              We approach our subject with genuine curiosity and deep respect.
              We do not endorse any supernatural claims, but we take seriously
              the cultural and psychological reality of lucky charms. The
              research is robust, the writing is careful, and our aim is always
              to illuminate rather than reduce.
            </p>
          </div>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-4">
            How We Rank Charms
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Every charm in our ranking was evaluated against five weighted
            criteria. The final scores reflect a blend of historical research,
            cross-cultural analysis, and contemporary data on global usage
            patterns.
          </p>
          <div className="space-y-5">
            {criteria.map((criterion) => (
              <div
                key={criterion.rank}
                className="flex gap-5 p-5 bg-[#121210] border border-[#2a2825] rounded-xl"
              >
                <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full gold-gradient text-[#080808] text-sm font-bold">
                  {criterion.rank}
                </div>
                <div>
                  <h3 className="font-heading text-lg text-[#f5f0e8] mb-1">
                    {criterion.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {criterion.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-4">
            Our Six Categories
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8">
            Every charm in our ranking belongs to one of six intention-based
            categories. These categories reflect the six most universal human
            desires that lucky charms have historically been invoked to fulfil.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categoryDescriptions.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group card-hover flex gap-4 p-5 bg-[#121210] border border-[#2a2825] rounded-xl"
              >
                <span
                  className="text-3xl leading-none select-none shrink-0"
                  role="img"
                  aria-label={cat.name}
                >
                  {cat.emoji}
                </span>
                <div>
                  <h3 className="font-heading text-lg text-[#f5f0e8] group-hover:text-gold transition-colors mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Editorial independence */}
        <section>
          <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-6">
            Editorial Independence
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              50 Best Charms is an independent editorial project. Our rankings
              and content are not influenced by commercial relationships, brand
              partnerships, or paid placements. No charm has ever been ranked
              more highly — or more poorly — because of a financial arrangement.
            </p>
            <p>
              When we do feature products, services, or affiliate links, we
              disclose this clearly. Our readers' trust is more valuable than
              any sponsorship revenue, and we guard it accordingly.
            </p>
            <p>
              We welcome corrections. If you notice a factual error in our
              research or believe we have misrepresented a cultural tradition,
              please{" "}
              <Link
                href="/contact"
                className="text-gold hover:text-[#d4bc96] transition-colors underline underline-offset-2"
              >
                reach out to our content team
              </Link>
              . We take accuracy seriously and update our content when errors
              are identified.
            </p>
            <p className="text-sm text-zinc-500 mt-6 pt-6 border-t border-[#2a2825]">
              50 Best Charms is a project of 50 Best Limited, Hong Kong.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-10 px-6 bg-[#121210] border border-[#2a2825] rounded-xl">
          <h2 className="font-heading text-2xl text-[#f5f0e8] mb-3">
            Explore the Rankings
          </h2>
          <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
            Dive into our definitive ranking of the 50 most significant lucky
            charms in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full gold-gradient text-[#080808] text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              View Rankings
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#2a2825] text-zinc-300 text-sm font-medium hover:border-gold/40 hover:text-gold transition-all duration-200"
            >
              Read the Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
