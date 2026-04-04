// Charm image mappings - only verified working Unsplash URLs (long numeric photo IDs)
// Short slug IDs (like photo-CrsHE1zXNCI) don't work as image URLs - only photo-{13digits} format works

export const charmImages: Record<string, string> = {
  "evil-eye-middle-east": "https://images.unsplash.com/photo-1600261765785-78b01cf72851?w=800&h=600&fit=crop&q=80",
  "horseshoe": "https://images.unsplash.com/photo-1497369573176-0ceb5353817d?w=800&h=600&fit=crop&q=80",
  "lucky-bamboo": "https://images.unsplash.com/photo-1495399928872-a0e98ecad434?w=800&h=600&fit=crop&q=80",
  "goldfish": "https://images.unsplash.com/photo-1520366498724-709889c0c685?w=800&h=600&fit=crop&q=80",
  "lucky-dice": "https://images.unsplash.com/photo-1522069213448-443a614da9b6?w=800&h=600&fit=crop&q=80",
  "red-string": "https://images.unsplash.com/photo-1546833998-f383db89237c?w=800&h=600&fit=crop&q=80",
  "matryoshka": "https://images.unsplash.com/photo-1616121474380-abe0aa516c00?w=800&h=600&fit=crop&q=80",
  "evil-eye-bracelet-american": "https://images.unsplash.com/photo-1647638162212-51180c35deae?w=800&h=600&fit=crop&q=80",
  "amethyst": "https://images.unsplash.com/photo-1550007436-ba84ff7bcb54?w=800&h=600&fit=crop&q=80",
  "rose-quartz": "https://images.unsplash.com/photo-1521133573892-e44906baee46?w=800&h=600&fit=crop&q=80",
  "citrine-crystal": "https://images.unsplash.com/photo-1567113463224-37cf03ba4577?w=800&h=600&fit=crop&q=80",
  "peacock-feather": "https://images.unsplash.com/photo-1497002961800-ea7dbfe18696?w=800&h=600&fit=crop&q=80",
  "key-charm": "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=800&h=600&fit=crop&q=80",
  "rabbits-foot": "https://images.unsplash.com/photo-1535241749838-299277b6305f?w=800&h=600&fit=crop&q=80",
};

export function getCharmImage(slug: string): string | undefined {
  return charmImages[slug];
}
