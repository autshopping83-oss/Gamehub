import GameplayVideo from "@/components/gameplay-video";
import GameCoverPlate from "@/components/game-cover-plate";
import { heroPoster, heroVideo } from "@/lib/assets";
import type { Game } from "@/lib/games";

interface GameMediaProps {
  game: Game;
  className?: string;
  /** Aspect ratio for the media stage. Each section may use a different one. */
  ratio?: string;
  /** Composition variant — sections are not forced into one layout. */
  variant?: "stage" | "panel" | "tile";
}

/**
 * Resolves a game's media in priority order:
 *   gameplay video  →  poster still  →  designed cover plate
 *
 * The stage reserves its aspect ratio up front so there is no layout shift
 * whatever the asset state turns out to be.
 */
export default function GameMedia({
  game,
  className,
  ratio,
  variant = "stage",
}: GameMediaProps) {
  const video = heroVideo(game);
  const poster = heroPoster(game);
  const hasArt = Boolean(video || poster);

  return (
    <div
      className={`game-media game-media--${variant}${className ? ` ${className}` : ""}`}
      data-media={hasArt ? "art" : "plate"}
      data-orientation={game.assets.orientation}
      style={{
        background: game.palette.background,
        color: game.palette.foreground,
        ...(ratio ? { aspectRatio: ratio } : {}),
      }}
    >
      {poster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="game-media__poster"
          src={poster}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
      ) : (
        <GameCoverPlate game={game} />
      )}

      <GameplayVideo className="game-media__video-layer" src={video} poster={poster} />

      {/* Keeps foreground legible when real, brighter key art arrives later. */}
      <span className="game-media__scrim" aria-hidden="true" />
    </div>
  );
}
