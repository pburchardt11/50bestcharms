import type { Metadata } from "next";
import { charms } from "@/data/charms/index";
import { CharmCard } from "@/components/charm-card";
import { categories } from "@/data/charms/index";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Lucky Charms Ranked",
  description:
    "Browse the complete collection of the world's most popular lucky charms, ranked by global popularity across 200+ countries.",
};

export default function AllCharmsPage() {
  return (
    <div className="min-h-screen bg-[#080808] py-16 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-[#9a958d]">
            <a href="/" className="hover:text-[#c4a87c] transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-[#f5f0e8]">All Charms</span>
          </nav>

          <h1 className="font-heading text-5xl md:text-6xl text-[#f5f0e8] mb-5">
            All {charms.length} Lucky Charms
          </h1>
          <p className="text-lg text-[#9a958d] max-w-2xl mx-auto leading-relaxed">
            The world&apos;s most beloved symbols of fortune, ranked by global popularity across
            200+ countries. From ancient talismans to modern keepsakes — every charm has a story.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <span className="text-sm text-[#9a958d]">
              <span className="text-[#c4a87c] font-semibold text-lg">{charms.length}</span> charms ranked
            </span>
            <span className="w-px h-4 bg-[#2a2825]" />
            <span className="text-sm text-[#9a958d]">
              <span className="text-[#c4a87c] font-semibold text-lg">6</span> categories
            </span>
          </div>
        </div>

        {/* Category filter links */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#2a2825] bg-[#121210] px-4 py-2 text-sm text-[#9a958d] hover:border-[rgba(196,168,124,0.3)] hover:text-[#c4a87c] transition-all"
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
              <span className="text-xs opacity-60">({charms.filter(c => c.category === cat.slug).length})</span>
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {charms.map((charm) => (
            <CharmCard key={charm.id} charm={charm} />
          ))}
        </div>
      </div>
    </div>
  );
}
