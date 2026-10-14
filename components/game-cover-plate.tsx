import type { Game } from "@/lib/games";

/**
 * Designed cover state when a game has no video, poster or key art.
 * Colour field + category label + large title mark — reads as a game tile,
 * not a printer's plate. Dropping real assets into public/games/<slug>/
 * replaces this entirely.
 */
export default function GameCoverPlate({ game }: { game: Game }) {
  return (
    <div className="cover-plate" aria-hidden="true">
      <span className="cover-plate__glyph">{game.title}</span>
      <span className="cover-plate__index">{game.category}</span>
    </div>
  );
}
