import type { MetadataRoute } from "next";
import { games } from "@/lib/games";
import { siteUrlWith } from "@/lib/seo";

/**
 * Sitemap served at /sitemap.xml (Next.js App Router).
 * URLs are absolute — search engines require a full origin, which comes from
 * NEXT_PUBLIC_SITE_URL via siteUrlWith().
 */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrlWith("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    {
      url: siteUrlWith("/games"),
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: siteUrlWith("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const gamePages: MetadataRoute.Sitemap = games.map((game) => ({
    url: siteUrlWith(`/games/${game.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...gamePages];
}
