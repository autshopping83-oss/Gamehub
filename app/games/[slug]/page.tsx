import Link from "next/link";
import { notFound } from "next/navigation";
import GameMetadata from "@/components/game-metadata";
import PlatformButton from "@/components/platform-button";
import { ArrowIcon } from "@/components/icons";
import { games, getGame } from "@/lib/games";
import { gameJsonLd, pageMetadata } from "@/lib/seo";

/**
 * Minimal detail stub — enough for the hero CTA and catalogue links to land
 * somewhere honest. The full detail page (screenshots, trailer, long-form
 * copy) is deliberately out of scope for this phase.
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

  return (
    <>
      <header className="page-head">
        <div className="container">
          <p className="section-heading__overline" style={{ marginBottom: "var(--space-2xs)" }}>
            Catalogue entry
          </p>
          <h1 className="page-head__title">{game.title}</h1>
          <p className="page-head__lede">{game.tagline}</p>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ display: "grid", gap: "var(--space-xl)" }}>
          <div
            className="media-frame"
            style={{
              background: game.palette.background,
              color: game.palette.foreground,
              maxWidth: "56rem",
            }}
          >
            {game.mediaIsPlaceholder ? (
              <span className="media-frame__placeholder-tag">Placeholder plate</span>
            ) : null}
            <span className="plate-mark" aria-hidden="true">
              {game.title}
            </span>
          </div>

          <div style={{ display: "grid", gap: "var(--space-m)", maxWidth: "40rem" }}>
            <aside className="wall-label" style={{ position: "static" }}>
              <span className="wall-label__index">Entry</span>
              <span className="wall-label__title">{game.title}</span>
              <GameMetadata game={game} />
            </aside>

            <p style={{ color: "var(--ink-2)", maxWidth: "var(--measure)" }}>
              {game.description}
            </p>

            <div>
              <h2 className="site-footer__heading" style={{ marginBottom: "var(--space-2xs)" }}>
                Where to play
              </h2>
              <div className="platform-row">
                {game.storeLinks.length > 0 ? (
                  game.storeLinks.map((link) => (
                    <PlatformButton key={link.platform} link={link} />
                  ))
                ) : (
                  <span className="platform-btn" role="status" aria-disabled="true">
                    No storefront live yet
                  </span>
                )}
              </div>
            </div>

            <div style={{ paddingTop: "var(--space-s)" }}>
              <Link className="btn btn--ghost" href="/games">
                <ArrowIcon style={{ transform: "rotate(180deg)" }} />
                Back to games
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameJsonLd(game)) }}
      />
    </>
  );
}
