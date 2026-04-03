import { charms } from "@/data/charms/index";
import { countries } from "@/data/countries-expanded";

interface SearchItem {
  type: "charm" | "country" | "category";
  name: string;
  slug: string;
  emoji: string;
  subtitle: string;
  href: string;
}

const CATEGORIES = [
  { slug: "wealth", name: "Wealth", emoji: "\u{1F4B0}", description: "Money, prosperity, and financial abundance" },
  { slug: "health", name: "Health", emoji: "\u{1F33F}", description: "Healing, longevity, and physical wellbeing" },
  { slug: "love", name: "Love", emoji: "\u2764\uFE0F", description: "Romance, relationships, and matters of the heart" },
  { slug: "protection", name: "Protection", emoji: "\u{1F6E1}\uFE0F", description: "Warding off evil and negativity" },
  { slug: "success", name: "Success", emoji: "\u2B50", description: "Achievement, career growth, and goals" },
  { slug: "general", name: "General Luck", emoji: "\u{1F340}", description: "Overall good luck and fortune" },
];

export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // Add charms
  for (const charm of charms) {
    items.push({
      type: "charm",
      name: charm.name,
      slug: charm.slug,
      emoji: charm.emoji,
      subtitle: `#${charm.rank} \u2022 ${charm.origin} \u2022 ${charm.category}`,
      href: `/charm/${charm.slug}`,
    });
  }

  // Add countries
  for (const country of countries) {
    items.push({
      type: "country",
      name: country.name,
      slug: country.slug,
      emoji: country.flag || "\u{1F30D}",
      subtitle: country.region,
      href: `/country/${country.slug}`,
    });
  }

  // Add categories
  for (const cat of CATEGORIES) {
    items.push({
      type: "category",
      name: cat.name,
      slug: cat.slug,
      emoji: cat.emoji,
      subtitle: cat.description,
      href: `/category/${cat.slug}`,
    });
  }

  return items;
}
