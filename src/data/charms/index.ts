// Re-export from original charms data until batch files are ready
// Once all batch files exist, switch to the batched import below

export type { Charm } from "./types";
import type { Charm } from "./types";

// Import from original data file
import { charms as originalCharms } from "../charms";

export const charms: Charm[] = originalCharms.map((charm, index) => ({
  ...charm,
  rank: index + 1,
}));

export function getCharmBySlug(slug: string): Charm | undefined {
  return charms.find((c) => c.slug === slug);
}

export function getCharmsByCategory(category: string): Charm[] {
  return charms.filter((c) => c.category === category);
}

export function getCharmsByCountry(countrySlug: string): Charm[] {
  return charms.filter((c) => c.countries.includes(countrySlug));
}

export function getRelatedCharms(slugs: string[]): Charm[] {
  return charms.filter((c) => slugs.includes(c.slug));
}

export const categories = [
  { slug: "wealth", name: "Wealth", emoji: "\u{1F4B0}", description: "Charms for attracting money, prosperity, and financial abundance" },
  { slug: "health", name: "Health", emoji: "\u{1F33F}", description: "Charms for healing, longevity, and physical wellbeing" },
  { slug: "love", name: "Love", emoji: "\u2764\uFE0F", description: "Charms for romance, relationships, and matters of the heart" },
  { slug: "protection", name: "Protection", emoji: "\u{1F6E1}\uFE0F", description: "Charms for warding off evil, negativity, and misfortune" },
  { slug: "success", name: "Success", emoji: "\u2B50", description: "Charms for achievement, career growth, and reaching goals" },
  { slug: "general", name: "General Luck", emoji: "\u{1F340}", description: "Charms for overall good luck and positive fortune" },
] as const;
