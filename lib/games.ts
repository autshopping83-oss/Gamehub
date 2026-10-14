import type { StoreLink } from "@/lib/platforms";

export type GameStatus = "in-development" | "released" | "archived";

export interface GamePalette {
  background: string;
  foreground: string;
}

/**
 * Asset convention. Every field is an OPTIONAL path under
 * `public/games/<slug>/`. Missing files must degrade gracefully — the UI
 * falls back to the designed cover plate, never to a labelled empty box.
 *
 *   public/games/kitefall/hero.webm
 *   public/games/kitefall/hero.mp4
 *   public/games/kitefall/hero-poster.webp
 *   public/games/kitefall/screenshot-01.webp
 *   public/games/kitefall/icon.webp
 */
export interface GameAssets {
  /** Gameplay loop. Provide .webm then .mp4 for wide codec support. */
  video?: string;
  /** Still shown before the video plays, and permanently under reduced motion. */
  poster?: string;
  screenshots?: string[];
  /** Square or 4:3 key art used on cards. */
  cover?: string;
  /** Transparent app icon. */
  icon?: string;
  /**
   * Portrait (9:16) gameplay. Display containers switch to object-fit:
   * contain so the full frame is always visible — never cropped.
   */
  orientation?: "portrait";
}

export interface Game {
  slug: string;
  title: string;
  /** Two-to-five words. Sets as the logotype subline. */
  tagline: string;
  description: string;
  status: GameStatus;
  category: string;
  releaseYear: number | null;
  /** Uppercase micro-labels shown as editorial metadata, e.g. "ANDROID". */
  platforms: string[];
  storeLinks: StoreLink[];
  palette: GamePalette;
  assets: GameAssets;
}

export const games: Game[] = [
  {
    slug: "tempox",
    title: "TEMPOX",
    tagline: "Reflexes under pressure.",
    description:
      "TEMPOX is a released Android game built around short, high-focus rounds: find the odd symbol, repeat memory sequences, and solve mental math against the clock. Every hit builds a combo; every miss costs time.",
    status: "released",
    category: "Casual",
    releaseYear: 2026,
    platforms: ["Android"],
    storeLinks: [
      {
        platform: "google-play",
        href: "https://play.google.com/store/apps/details?id=cloud.bizflow.tempox",
      },
    ],
    palette: { background: "#4C1D95", foreground: "#FFFFFF" },
    assets: {
      video: "tempox/hero.mp4",
      poster: "tempox/hero-poster.jpg",
      orientation: "portrait",
    },
  },
  {
    slug: "kitefall",
    title: "Kitefall",
    tagline: "A study in falling.",
    description:
      "Kitefall is an in-development arcade game built around a single mechanic: a long fall, read in advance, corrected in the moment. This entry is placeholder content for the site build and does not represent shipped gameplay.",
    status: "in-development",
    category: "Arcade",
    releaseYear: null,
    platforms: ["Android"],
    storeLinks: [
      { platform: "google-play", href: "" },
      { platform: "app-gallery", href: "" },
    ],
    palette: { background: "#B4471F", foreground: "#FFFFFF" },
    assets: {},
  },
];

export const getGame = (slug: string): Game | undefined =>
  games.find((game) => game.slug === slug);

/** Hero slot. Currently a single title; the shape supports a rotating feature. */
export const featuredGame = (): Game => games[0];

/** Everything after the feature, minus the feature itself. */
export const catalogGames = (featuredSlug: string): Game[] =>
  games.filter((game) => game.slug !== featuredSlug);

export const STATUS_LABEL: Record<GameStatus, string> = {
  "in-development": "In development",
  released: "Released",
  archived: "Archived",
};

/** Has any real media been supplied for this game? */
export const hasRealMedia = (game: Game): boolean =>
  Boolean(game.assets.video || game.assets.poster || game.assets.cover);
