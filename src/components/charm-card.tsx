import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Charm } from "@/data/charms/index";
import { CategoryBadge } from "@/components/category-badge";
import { StarRating } from "@/components/star-rating";
import { getCharmImage } from "@/data/charm-images";

interface CharmCardProps {
  charm: Charm;
}

// Rank badge colours: top 3 get special treatment
function RankBadge({ rank }: { rank: number }) {
  const isTop3 = rank <= 3;
  return (
    <span
      className={[
        "inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0",
        isTop3
          ? "gold-gradient text-[#080808]"
          : "bg-zinc-800 text-zinc-400 border border-zinc-700",
      ].join(" ")}
    >
      {rank}
    </span>
  );
}

export function CharmCard({ charm }: CharmCardProps) {
  const imageUrl = getCharmImage(charm.slug);

  return (
    <Link
      id={`rank-${charm.rank}`}
      href={`/charm/${charm.slug}`}
      className="block group"
      aria-label={`View ${charm.name} – ranked #${charm.rank}`}
    >
      <article className="card-hover relative flex flex-col h-full bg-[#121210] border border-[#2a2825] rounded-xl overflow-hidden">
        {/* Image */}
        {imageUrl && (
          <div className="relative w-full h-40 overflow-hidden">
            <Image
              src={imageUrl}
              alt={charm.imageAlt || charm.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121210] via-transparent to-transparent" />
            {/* Rank badge overlay */}
            <div className="absolute top-3 left-3">
              <RankBadge rank={charm.rank} />
            </div>
            {/* Category badge overlay */}
            <div className="absolute top-3 right-3">
              <CategoryBadge category={charm.category} />
            </div>
          </div>
        )}

        <div className="flex flex-col flex-1 p-5 gap-3">
          {/* Top row when no image */}
          {!imageUrl && (
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <RankBadge rank={charm.rank} />
                <span className="text-3xl leading-none select-none" role="img" aria-label={charm.name}>
                  {charm.emoji}
                </span>
              </div>
              <CategoryBadge category={charm.category} />
            </div>
          )}

          {/* Name */}
          <div>
            <div className="flex items-center gap-2">
              {imageUrl && (
                <span className="text-2xl leading-none select-none" role="img" aria-label={charm.name}>
                  {charm.emoji}
                </span>
              )}
              <h3 className="font-heading text-xl text-[#f5f0e8] leading-snug group-hover:text-gold transition-colors duration-200">
                {charm.name}
              </h3>
            </div>

            {/* Origin */}
            {charm.origin && (
              <p className="flex items-center gap-1 mt-1 text-xs text-zinc-500">
                <MapPin size={11} className="shrink-0" />
                {charm.origin}
              </p>
            )}
          </div>

          {/* Short description */}
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 flex-1">
            {charm.shortDescription}
          </p>

          {/* Footer: stars + read more */}
          <div className="flex items-center justify-between pt-2 border-t border-[#2a2825]">
            <StarRating rating={charm.rating} showValue />
            <span className="text-xs text-gold group-hover:text-[#d4bc96] transition-colors font-medium">
              Learn more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
