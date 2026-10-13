import Link from "next/link";
import GameMedia from "@/components/game-media";
import PlatformButton from "@/components/platform-button";
import { ArrowIcon } from "@/components/icons";
import { featuredGame, STATUS_LABEL } from "@/lib/games";

/**
 * Hero as a living stage, not an article header.
 *
 * Composition: a thin editorial rail, then a full-bleed colour field that owns
 * the viewport with the game's logotype locked into its lower-left corner,
 * then the platform/CTA row on paper beneath. Deliberately not a text-left /
 * image-right split — the media is the protagonist and the type is set into it.
 *
 * Real gameplay drops straight into `GameMedia`; until then the designed cover
 * plate occupies the field. No code change required either way.
 */
export default function HeroGame() {
  const game = featuredGame();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__rail">
        <span className="hero__eyebrow">Featured</span>
        <span className="hero__status">
          <span className="status-dot" aria-hidden="true" />
          {STATUS_LABEL[game.status]} · {game.category}
        </span>
      </div>

      <div className="hero__stage">
        <GameMedia game={game} className="hero__media" />

        <div className="hero__lockup">
          <h1 className="hero__title" id="hero-title">
            {game.title}
          </h1>
          <p className="hero__sub">{game.tagline}</p>

          {/* Primary action lives inside the field, with the game. */}
          <div className="hero__lockup-actions">
            <Link className="btn btn--onfield" href={`/games/${game.slug}`}>
              View game
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <div className="hero__foot">
        <div className="hero__availability">
          <span className="hero__availability-label">Available on</span>
          <div className="platform-row">
            {game.storeLinks.map((link) => (
              <PlatformButton key={link.platform} link={link} />
            ))}
          </div>
        </div>

        <div className="hero__actions">
          <Link className="btn btn--ghost" href="/games">
            All games
          </Link>
        </div>
      </div>
    </section>
  );
}
