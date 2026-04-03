import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { CategoryBadge } from "@/components/category-badge";

export const metadata: Metadata = {
  title: "Lucky Charms Blog",
  description:
    "Explore articles on lucky charms, cultural traditions, history, and guides to using talismans for wealth, love, health, and protection.",
  openGraph: {
    title: "Lucky Charms Blog | 50 Best Charms",
    description:
      "Articles on lucky charms, cultural traditions, and how to use talismans.",
  },
};

const FILTER_TABS = [
  { label: "All", value: "" },
  { label: "Wealth", value: "wealth" },
  { label: "Health", value: "health" },
  { label: "Love", value: "love" },
  { label: "Protection", value: "protection" },
  { label: "Success", value: "success" },
  { label: "History", value: "history" },
  { label: "Culture", value: "culture" },
  { label: "Guide", value: "guide" },
] as const;

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <p className="text-gold text-sm font-medium uppercase tracking-widest mb-4">
            Insights &amp; Traditions
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-tight mb-4">
            Lucky Charms Blog
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Deep dives into the history, culture, and meaning behind the world's
            most beloved lucky charms and talismans.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Category filter pills */}
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTER_TABS.map((tab) => (
            <Link
              key={tab.value}
              href={tab.value ? `/blog?category=${tab.value}` : "/blog"}
              className="px-4 py-1.5 rounded-full text-sm border border-[#2a2825] text-zinc-400 hover:border-gold/40 hover:text-gold transition-all duration-200"
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Post count */}
        <p className="text-zinc-500 text-sm mb-8">
          {sorted.length} article{sorted.length !== 1 ? "s" : ""}
        </p>

        {/* Articles list */}
        <div className="space-y-0 divide-y divide-[#2a2825]">
          {sorted.map((post) => (
            <article key={post.slug} className="group py-8 first:pt-0 last:pb-0">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Badge */}
                  <div className="shrink-0 pt-0.5">
                    <CategoryBadge category={post.category} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-xl sm:text-2xl text-[#f5f0e8] leading-snug group-hover:text-gold transition-colors duration-200 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600">
                      <span>{post.author}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>

                  {/* Read arrow */}
                  <div className="hidden sm:flex items-center shrink-0 pt-1">
                    <span className="text-gold/40 group-hover:text-gold transition-colors text-xl">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
