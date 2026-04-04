export type { Charm } from "./types";
import type { Charm } from "./types";
import { batch01 } from "./batch-01-east-asia";
import { batch02 } from "./batch-02-south-southeast-asia";
import { batch03 } from "./batch-03-europe-west";
import { batch04 } from "./batch-04-europe-east";
import { batch05 } from "./batch-05-middle-east-north-africa";
import { batch06 } from "./batch-06-sub-saharan-africa";
import { batch07 } from "./batch-07-americas";
import { batch08 } from "./batch-08-oceania-crystals";
import { batch09 } from "./batch-09-universal-religious";

// Combine all batches and assign ranks by id order
const allCharms: Charm[] = [
  ...batch01,
  ...batch02,
  ...batch03,
  ...batch04,
  ...batch05,
  ...batch06,
  ...batch07,
  ...batch08,
  ...batch09,
]
  .sort((a, b) => a.id - b.id)
  .map((charm, index) => ({
    ...charm,
    rank: index + 1,
  }));

export const charms = allCharms;

export function getCharmBySlug(slug: string): Charm | undefined {
  return allCharms.find((c) => c.slug === slug);
}

export function getCharmsByCategory(category: string): Charm[] {
  return allCharms.filter((c) => c.category === category);
}

export function getCharmsByCountry(countrySlug: string): Charm[] {
  return allCharms.filter((c) => c.countries.includes(countrySlug));
}

export function getRelatedCharms(slugs: string[]): Charm[] {
  return allCharms.filter((c) => slugs.includes(c.slug));
}

export const categories = [
  { slug: "wealth", name: "Wealth", emoji: "\u{1F4B0}", description: "Charms for attracting money, prosperity, and financial abundance" },
  { slug: "health", name: "Health", emoji: "\u{1F33F}", description: "Charms for healing, longevity, and physical wellbeing" },
  { slug: "love", name: "Love", emoji: "\u2764\uFE0F", description: "Charms for romance, relationships, and matters of the heart" },
  { slug: "protection", name: "Protection", emoji: "\u{1F6E1}\uFE0F", description: "Charms for warding off evil, negativity, and misfortune" },
  { slug: "success", name: "Success", emoji: "\u2B50", description: "Charms for achievement, career growth, and reaching goals" },
  { slug: "general", name: "General Luck", emoji: "\u{1F340}", description: "Charms for overall good luck and positive fortune" },
] as const;
