import type { Game } from "@/lib/games";

/**
 * Resolve a game asset path to a public URL.
 * Absolute URLs (https://) pass through untouched so a CDN can be used later
 * without touching any component.
 */
export const resolveAsset = (path?: string): string | undefined => {
  if (!path) return undefined;
  const trimmed = path.trim();
  if (!trimmed) return undefined;
  if (/^(https?:)?\/\//.test(trimmed) || trimmed.startsWith("/")) return trimmed;
  return `/games/${trimmed}`;
};

export const heroVideo = (game: Game): string | undefined =>
  resolveAsset(game.assets.video);

export const heroPoster = (game: Game): string | undefined =>
  resolveAsset(game.assets.poster);

export const gameCover = (game: Game): string | undefined =>
  resolveAsset(game.assets.cover ?? game.assets.poster);

export const gameScreenshots = (game: Game): string[] =>
  (game.assets.screenshots ?? []).map(resolveAsset).filter(Boolean) as string[];
