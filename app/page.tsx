import HeroGame from "@/components/hero-game";
import FeatureSpread from "@/components/feature-spread";
import GameCatalog from "@/components/game-catalog";
import PublisherBand from "@/components/publisher-band";
import DiscoverCta from "@/components/discover-cta";
import { catalogGames, featuredGame } from "@/lib/games";

export default function HomePage() {
  const featured = featuredGame();
  const rest = catalogGames(featured.slug);

  return (
    <>
      <HeroGame />
      {/* The spread is the featured title's editorial record — the hero
          already hooks it. The catalogue takes everything else, so no title
          is ever listed twice. */}
      <FeatureSpread games={[featured]} />
      <GameCatalog games={rest} />
      <PublisherBand />
      <DiscoverCta />
    </>
  );
}
