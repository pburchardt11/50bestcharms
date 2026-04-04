import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs";
import { charms } from "@/data/charms/index";
import { CategoryBadge } from "@/components/category-badge";
import { CharmCard } from "@/components/charm-card";
import { ArticleSchema, BreadcrumbSchema } from "@/lib/structured-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const title = `${post.title} | 50 Best Charms Blog`;
  const description = post.excerpt.length > 155
    ? post.excerpt.slice(0, 152) + "..."
    : post.excerpt;
  const url = `https://www.50bestcharms.com/blog/${slug}`;

  return {
    title,
    description,
    keywords: post.tags,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "50 Best Charms",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Simple markdown renderer ─────────────────────────────────────────────────

function applyInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class=\"bg-[#1a1918] px-1 py-0.5 rounded text-sm text-gold\">$1</code>");
}

type RenderedBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "hr" }
  | { type: "ul"; items: string[] }
  | { type: "p"; html: string };

function renderMarkdown(content: string): RenderedBlock[] {
  const rawBlocks = content
    .split(/\n\n+/)
    .map((b) => b.trim())
    .filter(Boolean);

  const blocks: RenderedBlock[] = [];

  for (const block of rawBlocks) {
    // Horizontal rule
    if (/^---+$/.test(block)) {
      blocks.push({ type: "hr" });
      continue;
    }

    // H2
    if (block.startsWith("## ")) {
      blocks.push({ type: "h2", text: block.slice(3).trim() });
      continue;
    }

    // H3
    if (block.startsWith("### ")) {
      blocks.push({ type: "h3", text: block.slice(4).trim() });
      continue;
    }

    // Unordered list — lines that start with "- "
    const lines = block.split("\n").map((l) => l.trim());
    if (lines.every((l) => l.startsWith("- "))) {
      blocks.push({
        type: "ul",
        items: lines.map((l) => applyInline(l.slice(2))),
      });
      continue;
    }

    // Mixed block: some list lines, some not — split and re-process each line
    const hasSomeListLines = lines.some((l) => l.startsWith("- "));
    if (hasSomeListLines) {
      let listBuffer: string[] = [];
      for (const line of lines) {
        if (line.startsWith("- ")) {
          listBuffer.push(line.slice(2));
        } else {
          if (listBuffer.length > 0) {
            blocks.push({
              type: "ul",
              items: listBuffer.map(applyInline),
            });
            listBuffer = [];
          }
          if (line.trim()) {
            blocks.push({ type: "p", html: applyInline(line) });
          }
        }
      }
      if (listBuffer.length > 0) {
        blocks.push({ type: "ul", items: listBuffer.map(applyInline) });
      }
      continue;
    }

    // Default paragraph — join lines with space
    blocks.push({ type: "p", html: applyInline(lines.join(" ")) });
  }

  return blocks;
}

function MarkdownContent({ content }: { content: string }) {
  const blocks = renderMarkdown(content);

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "hr") {
          return (
            <hr
              key={i}
              className="border-none border-t border-[#2a2825] my-8"
            />
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mt-10 mb-2 leading-snug"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3
              key={i}
              className="font-heading text-xl sm:text-2xl text-[#f5f0e8] mt-8 mb-1 leading-snug"
            >
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-2 pl-0">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-zinc-400 leading-relaxed text-base"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          );
        }
        // paragraph
        return (
          <p
            key={i}
            className="text-zinc-400 leading-relaxed text-base"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        );
      })}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Related charms
  const relatedCharms = post.relatedCharmSlugs
    .map((s) => charms.find((c) => c.slug === s))
    .filter(Boolean) as typeof charms;

  // Related posts (same category, excluding this one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  const postUrl = `https://www.50bestcharms.com/blog/${post.slug}`;

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        datePublished={post.publishedAt}
        author={post.author}
        url={postUrl}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.50bestcharms.com" },
          { name: "Blog", url: "https://www.50bestcharms.com/blog" },
          { name: post.title, url: postUrl },
        ]}
      />
    <div className="min-h-screen bg-[#080808]">
      {/* Article header */}
      <section className="hero-gradient border-b border-[#2a2825]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-zinc-500 flex-wrap">
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
                  href="/blog"
                  className="hover:text-gold transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="text-zinc-700">
                /
              </li>
              <li className="text-zinc-300 line-clamp-1">{post.title}</li>
            </ol>
          </nav>

          {/* Category badge */}
          <div className="mb-5">
            <CategoryBadge category={post.category} />
          </div>

          {/* Title */}
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e8] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
            <span className="text-zinc-300">{post.author}</span>
            <span aria-hidden="true" className="text-zinc-700">
              ·
            </span>
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
            <span aria-hidden="true" className="text-zinc-700">
              ·
            </span>
            <span>{post.readingTime} min read</span>
          </div>

          {/* Excerpt */}
          <p className="mt-6 text-zinc-400 text-lg leading-relaxed border-l-2 border-gold pl-5">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <MarkdownContent content={post.content} />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-[#2a2825]">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs border border-[#2a2825] text-zinc-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related charms */}
      {relatedCharms.length > 0 && (
        <section className="border-t border-[#2a2825] bg-[#0c0c0a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-8">
              Featured Charms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedCharms.map((charm) => (
                <CharmCard key={charm.slug} charm={charm} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[#2a2825]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <h2 className="font-heading text-2xl sm:text-3xl text-[#f5f0e8] mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group card-hover flex flex-col bg-[#121210] border border-[#2a2825] rounded-xl p-5 gap-3"
                >
                  <CategoryBadge category={related.category} />
                  <h3 className="font-heading text-lg text-[#f5f0e8] leading-snug group-hover:text-gold transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 flex-1">
                    {related.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-600 pt-2 border-t border-[#2a2825]">
                    <time dateTime={related.publishedAt}>
                      {formatDate(related.publishedAt)}
                    </time>
                    <span>{related.readingTime} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to blog */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-14 border-t border-[#2a2825] pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gold hover:text-[#d4bc96] transition-colors text-sm font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
    </>
  );
}
