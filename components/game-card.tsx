import Link from "next/link";
import GameMedia from "@/components/game-media";
import { STATUS_LABEL, type Game } from "@/lib/games";

/**
 * Catalogue tile — same surface language as the home grid.
 */
export default function GameCard({ game }: { game: Game }) {
  return (
    <Link className="catalog-card" href={`/games/${game.slug}`}>
      <span className="catalog-card__media">
        <GameMedia game={game} variant="tile" ratio="4 / 3" />
      </span>
      <span className="catalog-card__meta">
        <span className="catalog-card__title">{game.title}</span>
        <span className="catalog-card__labels">
          {STATUS_LABEL[game.status]} · {game.category}
        </span>
        <span className="catalog-card__copy">{game.tagline}</span>
        <span className="catalog-card__cta">
          View game
          <span aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  );
}
