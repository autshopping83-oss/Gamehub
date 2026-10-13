import Link from "next/link";
import GameplayVideo from "@/components/gameplay-video";
import GameMetadata from "@/components/game-metadata";
import { ArrowIcon } from "@/components/icons";
import { featuredGame, STATUS_LABEL } from "@/lib/games";

/**
 * Asymmetric hero: 5fr copy / 7fr media at wide sizes, with the media bleeding
 * past the viewport's right edge and a wall label hanging off its lower-left.
 * Deliberately not 50/50, deliberately not a card grid.
 */
export default function HeroGame() {
  const game = featuredGame();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__overline">
            <span className="status-dot" aria-hidden="true" />
            <span>
              {STATUS_LABEL[game.status]} · {game.category}
            </span>
          </p>

          <h1 className="hero__title" id="hero-title">
            {game.title}
          </h1>

          <p className="hero__sub">
            <em>A study in falling.</em>
          </p>

          <p className="hero__lede">{game.tagline}</p>

          <p className="hero__meta">
            <span>Featured</span>
            <span>{game.platforms.join(" · ")}</span>
          </p>

          <div className="hero__actions">
            <Link className="btn btn--primary" href={`/games/${game.slug}`}>
              View the game
              <ArrowIcon />
            </Link>
            <Link className="btn btn--ghost" href="/games">
              Browse all games
            </Link>
          </div>
        </div>

        <div className="hero__media">
          <div
            className="media-frame"
            style={{
              background: game.palette.background,
              color: game.palette.foreground,
            }}
          >
            {game.mediaIsPlaceholder ? (
              <span className="media-frame__placeholder-tag">
                Placeholder plate
              </span>
            ) : null}

            {game.video ? (
              <GameplayVideo
                className="media-frame__video"
                src={game.video}
                poster={game.poster || undefined}
              />
            ) : (
              <span className="plate-mark" aria-hidden="true">
                {game.title}
              </span>
            )}
          </div>

          <aside className="wall-label" aria-label="Catalogue entry">
            <span className="wall-label__index">01 / Featured</span>
            <span className="wall-label__title">{game.title}</span>
            <GameMetadata game={game} />
          </aside>
        </div>
      </div>
    </section>
  );
}
