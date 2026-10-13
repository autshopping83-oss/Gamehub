import Link from "next/link";
import GameMedia from "@/components/game-media";
import PlatformButton from "@/components/platform-button";
import Reveal from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";
import { STATUS_LABEL, type Game } from "@/lib/games";

/**
 * The feature spread — the informational layer that follows the hero's hook.
 *
 * One entry is the featured title's full record. As the catalogue grows the
 * same component lays out a large lead entry with smaller secondary entries
 * beside it, alternating media side so the rhythm never becomes a card grid.
 * Each game keeps its own media composition.
 */

interface FeatureSpreadProps {
  games: Game[];
}

export default function FeatureSpread({ games }: FeatureSpreadProps) {
  if (games.length === 0) return null;
  const [lead, ...rest] = games;

  return (
    <section className="section feature" aria-labelledby="selected-title">
      <div className="container">
        <div className="section-heading">
          <div>
            {/* "In focus", not "Selected" + the title again — the hero has
                already announced the name at full size a screen above. */}
            <span className="section-heading__overline">In focus</span>
            <h2 className="section-heading__title" id="selected-title">
              {lead.title}
            </h2>
          </div>
          {games.length > 1 ? (
            <span className="section-heading__aside">
              {games.length} titles
            </span>
          ) : null}
        </div>

        <Reveal>
          <article className="feature__lead">
            <div className="feature__media">
              <GameMedia game={lead} variant="panel" ratio="16 / 10" />
            </div>

            <div className="feature__body">
              <p className="feature__labels">
                <span>{STATUS_LABEL[lead.status]}</span>
                <span aria-hidden="true">·</span>
                <span>{lead.category}</span>
                {lead.platforms.length > 0 ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{lead.platforms.join(" · ")}</span>
                  </>
                ) : null}
              </p>

              <p className="feature__lede">{lead.description}</p>

              <div className="feature__actions">
                <Link className="link-arrow" href={`/games/${lead.slug}`}>
                  Full entry
                  <ArrowIcon />
                </Link>
              </div>

              {lead.storeLinks.length > 0 ? (
                <div className="feature__stores">
                  <span className="hero__availability-label">Available on</span>
                  <div className="platform-row">
                    {lead.storeLinks.map((link) => (
                      <PlatformButton key={link.platform} link={link} />
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        </Reveal>

        {rest.length > 0 ? (
          <ul className="feature__rest">
            {rest.map((game, index) => (
              <li key={game.slug} className={index % 2 === 1 ? "is-flipped" : undefined}>
                <Reveal delay={index * 60}>
                  <article className="feature__item">
                    <div className="feature__item-media">
                      <GameMedia game={game} variant="panel" ratio="16 / 10" />
                    </div>
                    <div className="feature__item-body">
                      <h3 className="feature__item-title">{game.title}</h3>
                      <p className="feature__labels">
                        <span>{STATUS_LABEL[game.status]}</span>
                        <span aria-hidden="true">·</span>
                        <span>{game.category}</span>
                      </p>
                      <p className="feature__item-copy">{game.tagline}</p>
                      <Link className="link-arrow" href={`/games/${game.slug}`}>
                        View game
                        <ArrowIcon />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
