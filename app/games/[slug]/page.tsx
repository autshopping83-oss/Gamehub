import Link from "next/link";
import { notFound } from "next/navigation";
import GameMedia from "@/components/game-media";
import PlatformButton from "@/components/platform-button";
import { ArrowIcon } from "@/components/icons";
import { featuredGame, games, getGame, STATUS_LABEL } from "@/lib/games";
import { gameJsonLd, pageMetadata } from "@/lib/seo";

/**
 * Minimal detail route — enough for the hero CTA and catalogue links to land
 * somewhere honest. The full detail page (screenshots, trailer, long-form)
 * remains out of scope for this phase.
 */

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () =>
  games.map((game) => ({ slug: game.slug }));

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) return {};
  return pageMetadata({
    title: game.title,
    description: game.tagline,
    path: `/games/${game.slug}`,
  });
}

export default async function GameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGame(slug);
  if (!game) notFound();

  const related = games.filter((item) => item.slug !== game.slug);
  const sibling = related[0] ?? featuredGame();

  return (
    <>
      <header className="entry-head">
        <div className="entry-head__inner">
          <p className="entry-head__crumbs">
            <Link className="link-arrow" href="/games">
              <ArrowIcon style={{ transform: "rotate(180deg)" }} />
              Catalogue
            </Link>
          </p>

          <p className="entry-head__labels">
            <span>{STATUS_LABEL[game.status]}</span>
            <span aria-hidden="true">·</span>
            <span>{game.category}</span>
            {game.platforms.length > 0 ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{game.platforms.join(" · ")}</span>
              </>
            ) : null}
          </p>

          <h1 className="entry-head__title">{game.title}</h1>
          <p className="entry-head__sub">{game.tagline}</p>
        </div>
      </header>

      <div className="entry-stage">
        <GameMedia
          game={game}
          ratio={
            game.assets.orientation === "portrait" ? "9 / 16" : "16 / 9"
          }
        />
      </div>

      <section className="section entry-body" aria-labelledby="entry-about">
        <div className="container entry-body__grid">
          <div>
            <h2 className="entry-body__heading" id="entry-about">
              About
            </h2>
            <p className="entry-body__copy">{game.description}</p>
          </div>

          <div className="entry-body__aside">
            {game.storeLinks.length > 0 ? (
              <div className="entry-body__block">
                <h3 className="hero__availability-label">Available on</h3>
                <div className="platform-row">
                  {game.storeLinks.map((link) => (
                    <PlatformButton key={link.platform} link={link} />
                  ))}
                </div>
              </div>
            ) : null}

            <div className="entry-body__block">
              <h3 className="hero__availability-label">Details</h3>
              <dl className="spec-list">
                <div className="spec-list__row">
                  <dt>Status</dt>
                  <dd>{STATUS_LABEL[game.status]}</dd>
                </div>
                <div className="spec-list__row">
                  <dt>Category</dt>
                  <dd>{game.category}</dd>
                </div>
                <div className="spec-list__row">
                  <dt>Platforms</dt>
                  <dd>{game.platforms.join(", ") || "—"}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section entry-related" aria-labelledby="entry-related">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-heading__overline">Next</span>
                <h2 className="section-heading__title" id="entry-related">
                  Keep looking
                </h2>
              </div>
            </div>
            <Link className="entry-related__link" href={`/games/${sibling.slug}`}>
              <GameMedia game={sibling} variant="tile" ratio="16 / 9" />
              <span className="entry-related__meta">
                <span className="catalog-card__title">{sibling.title}</span>
                <span className="catalog-card__labels">
                  {STATUS_LABEL[sibling.status]} · {sibling.category}
                </span>
              </span>
            </Link>
          </div>
        </section>
      ) : null}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd(game)) }}
      />
    </>
  );
}
