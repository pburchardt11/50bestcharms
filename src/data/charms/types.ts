export interface Charm {
  id: number;
  rank: number;
  name: string;
  slug: string;
  emoji: string;
  origin: string;
  countries: string[];
  category: "wealth" | "health" | "love" | "protection" | "success" | "general";
  shortDescription: string;
  description: string;
  meaning: string;
  howToUse: string;
  funFact: string;
  rating: number;
  imageAlt: string;
  relatedCharms: string[];
  faq: { question: string; answer: string }[];
}
