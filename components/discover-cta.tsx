import Link from "next/link";
import { catalogGames, featuredGame } from "@/lib/games";
import { ArrowIcon } from "@/components/icons";

/**
 * Closing band on the featured game's colour field. Ends on product,
 * not on an empty text block.
 */
export default function DiscoverCta() {
  const game = featuredGame();
  const hasMore = catalogGames(game.slug).length > 0;

  const overline = hasMore ? "Discover" : "Play now";
  const title = hasMore
    ? "Browse every game on GAMEHUB."
    : `${game.title} is out now.`;
  const href = hasMore ? "/games" : `/games/${game.slug}`;
  const label = hasMore ? "Browse games" : "View the game";

  return (
    <section className="discover" aria-labelledby="discover-title">
      <div
        className="discover__field"
        style={{
          background: game.palette.background,
          color: game.palette.foreground,
        }}
      >
        <span className="discover__wordmark" aria-hidden="true">
          {game.title}
        </span>

        <div className="discover__content">
          <span className="discover__overline">{overline}</span>
          <h2 className="discover__title" id="discover-title">
            {title}
          </h2>
          <Link className="btn btn--onfield" href={href}>
            {label}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
