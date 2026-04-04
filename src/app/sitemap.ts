import type { MetadataRoute } from "next";
import { charms } from "@/data/charms/index";
import { countries } from "@/data/countries-expanded";
import { blogPosts } from "@/data/blogs";

const BASE_URL = "https://www.50bestcharms.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/charm`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/country`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/category`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = [
    "wealth", "health", "love", "protection", "success", "general",
  ].map((slug) => ({
    url: `${BASE_URL}/category/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Charm pages
  const charmPages: MetadataRoute.Sitemap = charms.map((charm) => ({
    url: `${BASE_URL}/charm/${charm.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: charm.rank <= 50 ? 0.9 : charm.rank <= 200 ? 0.7 : 0.6,
  }));

  // Country pages
  const countryPages: MetadataRoute.Sitemap = countries.map((country) => ({
    url: `${BASE_URL}/country/${country.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...charmPages,
    ...countryPages,
    ...blogPages,
  ];
}
