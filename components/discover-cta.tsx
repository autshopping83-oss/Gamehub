import Link from "next/link";
import { catalogGames, featuredGame } from "@/lib/games";
import { ArrowIcon } from "@/components/icons";

/**
 * Closing discovery band.
 *
 * Built on the featured game's own colour so the page ends on product, not on
 * an empty text block. The wordmark is treated as artwork, cropped with intent.
 *
 * The invitation follows the catalogue's real state: with a single title there
 * is nothing to browse, so the band points at that title instead of promising
 * a selection that does not exist yet.
 */
export default function DiscoverCta() {
  const game = featuredGame();
  const hasMore = catalogGames(game.slug).length > 0;

  const overline = hasMore ? "Discover our games" : "The first title";
  const title = hasMore
    ? "Explore the catalogue and find your next game."
    : `${game.title} is in development now.`;
  const href = hasMore ? "/games" : `/games/${game.slug}`;
  const label = hasMore ? "Browse games" : "View the entry";

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
