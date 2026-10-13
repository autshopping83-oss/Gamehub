import Link from "next/link";
import GameMedia from "@/components/game-media";
import Reveal from "@/components/reveal";
import { STATUS_LABEL, type Game } from "@/lib/games";
import { ArrowIcon } from "@/components/icons";

interface GameCatalogProps {
  games: Game[];
}

/**
 * Compact catalogue for everything beyond the feature.
 *
 * Large imagery, strong aspect ratios, minimal text, no card borders — the
 * objects should read as interactive editorial plates, not shop products.
 * When the catalogue is empty the section still renders, with an honest note
 * rather than a blank gap or an invented title.
 */
export default function GameCatalog({ games }: GameCatalogProps) {
  const isEmpty = games.length === 0;

  return (
    <section className="section catalog" aria-labelledby="catalog-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-heading__overline">Catalogue</span>
            <h2 className="section-heading__title" id="catalog-title">
              More games
            </h2>
          </div>
          {!isEmpty ? (
            <span className="section-heading__aside">
              {games.length} {games.length === 1 ? "title" : "titles"}
            </span>
          ) : null}
        </div>

        {isEmpty ? (
          <Reveal>
            {/* Rules run the full container so the note reads as a deliberate
                statement band; only the copy is held to a readable measure. */}
            <p className="catalog__empty">
              <span className="catalog__empty-text">
                The next title is in development. It will appear here first —
                nothing is listed until it can be shown properly.
              </span>
            </p>
          </Reveal>
        ) : (
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
        )}
      </div>
    </section>
  );
}
