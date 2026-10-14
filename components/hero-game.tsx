import Link from "next/link";
import GameMedia from "@/components/game-media";
import PlatformButton from "@/components/platform-button";
import { ArrowIcon } from "@/components/icons";
import { featuredGame, STATUS_LABEL } from "@/lib/games";
import { isLiveLink } from "@/lib/platforms";

/**
 * Hero as a game showcase, not a corporate header.
 *
 * First viewport answers social traffic in order: this is a game →
 * here is the gameplay → here is how you get it. The video field owns
 * the screen; the lockup sits in it with the title, tagline, and the
 * real Google Play install CTA.
 */
export default function HeroGame() {
  const game = featuredGame();
  const liveStore = game.storeLinks.find(isLiveLink);

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
          <span className="hero__eyebrow">Featured game</span>
          <h1 className="hero__title" id="hero-title">
            {game.title}
          </h1>
          <p className="hero__sub">{game.tagline}</p>

          <div className="hero__lockup-actions">
            {liveStore ? (
              <a
                className="btn btn--store"
                href={liveStore.href}
                rel="noopener noreferrer"
              >
                Get it on Google Play
              </a>
            ) : null}
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
