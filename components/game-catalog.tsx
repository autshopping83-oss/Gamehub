import Link from "next/link";
import GameMedia from "@/components/game-media";
import Reveal from "@/components/reveal";
import { STATUS_LABEL, type Game } from "@/lib/games";
import { ArrowIcon } from "@/components/icons";

interface GameCatalogProps {
  games: Game[];
}

/**
 * Game grid below the feature. Artwork first, then title and a one-line
 * hook. Cards are interactive surfaces — shadow, lift, accent CTA — not
 * editorial plates. Renders nothing when there are no titles beyond the
 * feature — no empty state, no placeholder messaging.
 */
export default function GameCatalog({ games }: GameCatalogProps) {
  if (games.length === 0) return null;

  return (
    <section className="section catalog" aria-labelledby="catalog-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-heading__overline">More games</span>
            <h2 className="section-heading__title" id="catalog-title">
              The catalogue
            </h2>
          </div>
          <span className="section-heading__aside">
            {games.length} {games.length === 1 ? "title" : "titles"}
          </span>
        </div>

        <ul className="catalog__grid">
          {games.map((game, index) => (
            <li key={game.slug}>
              <Reveal delay={index * 60}>
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
                      <ArrowIcon />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
