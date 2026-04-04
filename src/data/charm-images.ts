// Charm image mappings
// Images should only be added when manually verified as showing the correct subject
// For now, most charms use the emoji-only card layout which looks clean and consistent

export const charmImages: Record<string, string> = {
  // Only include images that have been manually verified as correct
  // Add verified images here over time
};

export function getCharmImage(slug: string): string | undefined {
  return charmImages[slug];
}
