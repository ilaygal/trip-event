import type { MetadataRoute } from "next";
import hotDealsData from "@/data/hot-deals.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tripevent.co.il";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const tripPages = hotDealsData.map((deal) => ({
    url: `${baseUrl}/trip/${deal.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...tripPages];
}
