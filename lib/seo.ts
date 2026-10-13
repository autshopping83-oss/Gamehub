import type { Metadata } from "next";
import { getGame, STATUS_LABEL, type Game } from "@/lib/games";
import { resolveAsset } from "@/lib/assets";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/+$/,
  "",
);

export const SITE_NAME = "Gamehub";
export const SITE_DESCRIPTION =
  "Gamehub is an independent game publisher. A quiet frame for finished and in-development work.";

export const siteUrlWith = (path = "/"): string => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${siteUrl}/` : `${siteUrl}${normalized}`;
};

interface PageMetaInput {
  title: string;
  description?: string;
  path?: string;
  /** Optional image already hosted at an absolute URL. Omit rather than invent. */
  ogImage?: string;
  noIndex?: boolean;
}

export const pageMetadata = ({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  ogImage,
  noIndex = false,
}: PageMetaInput): Metadata => {
  const url = siteUrlWith(path);
  const fullTitle = title === SITE_NAME ? SITE_NAME : `${title} — ${SITE_NAME}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
};

/** Organization — only fields we can stand behind; no fabricated contact/social. */
export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: siteUrlWith("/"),
  description: SITE_DESCRIPTION,
});

/**
 * VideoGame schema built strictly from real fields on the record.
 * Fields we cannot verify (rating, price, publisher address…) are omitted
 * rather than invented — search engines punish fabricated structured data.
 */
export const gameJsonLd = (game: Game) => ({
  "@context": "https://schema.org",
  "@type": "VideoGame",
  name: game.title,
  description: game.tagline,
  url: siteUrlWith(`/games/${game.slug}`),
  genre: game.category,
  gamePlatform: game.platforms.join(", "),
  ...(game.releaseYear ? { datePublished: String(game.releaseYear) } : {}),
  ...(game.assets.cover ? { image: resolveAsset(game.assets.cover) } : {}),
  ...(game.assets.screenshots && game.assets.screenshots.length > 0
    ? {
        screenshot: game.assets.screenshots
          .map(resolveAsset)
          .filter(Boolean) as string[],
      }
    : {}),
});

export const gameStatusLabel = (game: Game): string => STATUS_LABEL[game.status];

export const gameExists = (slug: string): boolean => Boolean(getGame(slug));
