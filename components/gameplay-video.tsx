"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

interface GameplayVideoProps {
  /** Public URL to the gameplay loop. Empty/absent renders nothing. */
  src?: string;
  /** Painted first; becomes the permanent surface under reduced motion or failure. */
  poster?: string;
  className?: string;
}

/**
 * Gameplay as a living environment — not a video player.
 *
 * There is NO visible player UI: no play button, no timeline, no controls.
 * The clip is muted, inline, looping and begins the moment the section is
 * sufficiently visible, so the game appears to be happening inside the page.
 *
 * Contract:
 *  - poster paints first; the <video> is not created until the frame is in view,
 *    so nothing below the fold is downloaded on initial page load
 *  - only one clip plays at a time: it pauses the moment it leaves the viewport
 *    and when the tab is hidden
 *  - prefers-reduced-motion: the video is never attached; the poster is final
 *  - a failed load silently keeps the poster — no broken-media icon, no throw
 *  - WCAG 2.2.2 still needs a way to stop the motion, so an off-screen but
 *    keyboard-reachable control is provided. It is invisible until focused,
 *    which keeps the "no player UI" rule intact for sighted visitors.
 */
export default function GameplayVideo({ src, poster, className }: GameplayVideoProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  /** An explicit pause from the visitor is respected across scroll. */
  const userPausedRef = useRef(false);
  const helpId = useId();

  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [failed, setFailed] = useState(false);

  const hasSource = Boolean(src && src.trim()) && !failed;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!hasSource || reduceMotion) return;
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setInView(true);
          // Re-entry: the element is already mounted, so resume here. The
          // first entry has no element yet — that case is handled by the
          // effect below once the video is attached.
          if (!userPausedRef.current) void videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [hasSource, reduceMotion]);

  // Fires once the video is actually attached, covering the first entry
  // (where autoPlay is only a hint and can be refused) and any later mount.
  useEffect(() => {
    if (!inView || userPausedRef.current) return;
    void videoRef.current?.play().catch(() => {});
  }, [inView]);

  useEffect(() => {
    if (!hasSource) return;
    const onVisibility = () => {
      if (document.visibilityState !== "visible") videoRef.current?.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [hasSource]);

  const handleToggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPausedRef.current = false;
      void video.play().catch(() => setFailed(true));
    } else {
      userPausedRef.current = true;
      video.pause();
    }
  }, []);

  // Reduced motion, or no clip supplied: the poster is the finished state.
  if (!hasSource || reduceMotion) return null;

  return (
    <div ref={frameRef} className={className}>
      {inView ? (
        <video
          ref={videoRef}
          className="game-media__video"
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          autoPlay
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          onPlay={() => setPlaying(true)}
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
        />
      ) : null}

      {/* Invisible until focused — satisfies WCAG 2.2.2 without player chrome. */}
      <button
        type="button"
        className="video-toggle"
        aria-label={playing ? "Pause gameplay background" : "Play gameplay background"}
        aria-describedby={helpId}
        onClick={handleToggle}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <span id={helpId} className="visually-hidden">
        A background gameplay preview plays automatically while this section is
        on screen. Activate to pause or resume it.
      </span>
    </div>
  );
}
