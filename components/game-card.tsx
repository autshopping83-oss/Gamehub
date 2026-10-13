import Link from "next/link";
import GameMedia from "@/components/game-media";
import { STATUS_LABEL, type Game } from "@/lib/games";

/**
 * Catalogue tile. Large media, minimal text, no border — the object should
 * read as an interactive editorial plate rather than a shop product.
 * Resolves to real key art the moment it exists; until then the designed
 * cover plate holds the space.
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
        <span className="catalog-card__cta">
          View game
          <span aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  );
}
