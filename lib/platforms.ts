/**
 * Platform registry.
 *
 * Game components must never contain platform-specific UI logic — they read
 * from this registry instead, so adding a storefront is a data change only.
 */

export type PlatformId = "google-play" | "app-gallery" | "steam" | "ios" | "itch-io";

export interface StoreLink {
  platform: PlatformId;
  /** Real destination. Empty string means "coming soon" — never invent a URL. */
  href: string;
}

export interface Platform {
  id: PlatformId;
  label: string;
  /** Short label used on tight layouts. */
  shortLabel: string;
}

export const PLATFORMS: Record<PlatformId, Platform> = {
  "google-play": { id: "google-play", label: "Google Play", shortLabel: "Play" },
  "app-gallery": { id: "app-gallery", label: "AppGallery", shortLabel: "Gallery" },
  steam: { id: "steam", label: "Steam", shortLabel: "Steam" },
  ios: { id: "ios", label: "App Store", shortLabel: "iOS" },
  "itch-io": { id: "itch-io", label: "itch.io", shortLabel: "itch.io" },
};

export const platformLabel = (id: PlatformId): string => PLATFORMS[id]?.label ?? id;

export const isLiveLink = (link: StoreLink): boolean => link.href.trim().length > 0;
