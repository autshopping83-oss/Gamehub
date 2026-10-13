import type { StoreLink } from "@/lib/platforms";

export type GameStatus = "in-development" | "released" | "archived";

export interface GamePalette {
  background: string;
  foreground: string;
}

export interface Game {
  /** URL-safe identifier. */
  slug: string;
  title: string;
  /** One sentence. Never marketing fluff, never a claim about gameplay we cannot show. */
  tagline: string;
  /** Longer description shown on the game detail page. */
  description: string;
  status: GameStatus;
  category: string;
  releaseYear: number | null;
  /** Hero/cover asset path or remote URL. Empty until real art exists. */
  icon: string;
  screenshots: string[];
  /** Gameplay clip. Empty until a real, permitted clip exists. */
  video: string;
  poster: string;
  storeLinks: StoreLink[];
  platforms: string[];
  palette: GamePalette;
  /** Whether the media is a stand-in awaiting real material. */
  mediaIsPlaceholder: boolean;
}

/**
 * PLACEHOLDER ENTRY — deliberate fiction used while real material is pending.
 * `mediaIsPlaceholder: true` is what drives the "placeholder" badge in the UI.
 * Replace `video`, `poster`, `screenshots` and `storeLinks` with verified
 * assets before launch; do not ship claims about gameplay we cannot show.
 */
export const games: Game[] = [
  {
    slug: "kitefall",
    title: "Kitefall",
    tagline: "A wordless arcade descent about timing, wind, and nerve.",
    description:
      "Kitefall is an in-development arcade game built around a single mechanic: a long fall, read in advance, corrected in the moment. This entry is placeholder content for the site build and does not represent shipped gameplay.",
    status: "in-development",
    category: "Arcade",
    releaseYear: null,
    icon: "",
    screenshots: [],
    video: "",
    poster: "",
    storeLinks: [],
    platforms: ["Google Play", "AppGallery"],
    palette: { background: "#B4471F", foreground: "#FFFFFF" },
    mediaIsPlaceholder: true,
  },
];

export const getGame = (slug: string): Game | undefined =>
  games.find((game) => game.slug === slug);

export const featuredGame = (): Game => games[0];

export const STATUS_LABEL: Record<GameStatus, string> = {
  "in-development": "In development",
  released: "Released",
  archived: "Archived",
};
