import Link from "next/link";
import { STATUS_LABEL, type Game } from "@/lib/games";

/**
 * Catalogue tile. Uses the game's own palette as an honest plate until real
 * key art exists — never a fabricated screenshot.
 */
export default function GameCard({ game }: { game: Game }) {
  return (
    <Link className="game-card" href={`/games/${game.slug}`}>
      <div
        className="game-card__plate"
        style={{ background: game.palette.background, color: game.palette.foreground }}
      >
        {game.mediaIsPlaceholder ? (
          <span className="game-card__tag">Placeholder</span>
        ) : null}
        <span className="plate-mark" aria-hidden="true">
          {game.title}
        </span>
      </div>

      <div className="game-card__body">
        <h3 className="game-card__title">{game.title}</h3>
        <p className="game-card__desc">{game.tagline}</p>
        <div className="game-card__foot">
          <span>{STATUS_LABEL[game.status]}</span>
          <span>{game.category}</span>
        </div>
      </div>
    </Link>
  );
}
