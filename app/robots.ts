import type { MetadataRoute } from "next";
import { siteUrlWith } from "@/lib/seo";

/**
 * Robots.txt served at /robots.txt (Next.js App Router).
 * Allows everything and points crawlers at the sitemap.
 */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: siteUrlWith("/sitemap.xml"),
  };
}
