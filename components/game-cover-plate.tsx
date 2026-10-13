import type { Game } from "@/lib/games";

/**
 * The designed cover state.
 *
 * Rendered when a game has no video, poster or key art yet. It is NOT a
 * placeholder badge — it is a composed field in the publisher's visual
 * language: the game's own colour, printer's crop marks, hairline field rules
 * and a plate index, the way a catalogue prints a plate before the photograph
 * exists. The logotype is deliberately absent here — titles belong to the
 * composition layer (hero lockup, card meta), so nothing is ever set twice.
 *
 * Dropping real assets into `public/games/<slug>/` replaces this entirely,
 * with no change to any component.
 */
export default function GameCoverPlate({ game }: { game: Game }) {
  return (
    <div className="cover-plate" aria-hidden="true">
      <span className="cover-plate__mark cover-plate__mark--tl" />
      <span className="cover-plate__mark cover-plate__mark--tr" />
      <span className="cover-plate__mark cover-plate__mark--bl" />
      <span className="cover-plate__mark cover-plate__mark--br" />

      <span className="cover-plate__rule cover-plate__rule--h" />
      <span className="cover-plate__rule cover-plate__rule--v" />

      <span className="cover-plate__index">{game.category}</span>
    </div>
  );
}
