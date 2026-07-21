import { MetadataRoute } from "next";
import { siteUrl } from "@/lib/constants";
import { servicePages } from "@/lib/seo-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    ...servicePages.map((page) => ({
      url: `${siteUrl}/services/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
