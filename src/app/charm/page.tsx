import type { Metadata } from "next";
import { charms } from "@/data/charms";
import { CharmCard } from "@/components/charm-card";

export const metadata: Metadata = {
  title: "All 50 Lucky Charms",
  description:
    "Browse the complete list of the world's 50 most popular lucky charms, ranked by global popularity across 30+ countries.",
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
            All 50 Lucky Charms
          </h1>
          <p className="text-lg text-[#9a958d] max-w-2xl mx-auto leading-relaxed">
            The world&apos;s most beloved symbols of fortune, ranked by global popularity across
            30+ countries. From ancient talismans to modern keepsakes — every charm has a story.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6">
            <span className="text-sm text-[#9a958d]">
              <span className="text-[#c4a87c] font-semibold text-lg">50</span> charms ranked
            </span>
            <span className="w-px h-4 bg-[#2a2825]" />
            <span className="text-sm text-[#9a958d]">
              <span className="text-[#c4a87c] font-semibold text-lg">6</span> categories
            </span>
            <span className="w-px h-4 bg-[#2a2825]" />
            <span className="text-sm text-[#9a958d]">
              <span className="text-[#c4a87c] font-semibold text-lg">30+</span> countries
            </span>
          </div>
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
