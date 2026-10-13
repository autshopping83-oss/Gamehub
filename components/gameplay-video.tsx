"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type SyntheticEvent,
} from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";

interface GameplayVideoProps {
  /** Empty string disables the video entirely — the poster/plate remains. */
  src: string;
  poster?: string;
  /** Decorative-only: this media is decorative to the surrounding copy. */
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Autoplaying, muted, looping gameplay clip.
 *
 * House rules honoured here:
 *  - muted + playsInline + loop + preload="none" + no native controls
 *  - aria-hidden and tabIndex={-1}: it is decorative and unfocusable
 *  - src is attached lazily, only once the frame is in view and only when the
 *    visitor has not asked for reduced motion
 *  - playback pauses when out of view and when the tab is hidden
 *  - WCAG 2.2.2 (pause/stop/hide): a small toggle is rendered whenever a real
 *    video source exists — the documented accessibility exception to
 *    "no play button over autoplay"
 */
export default function GameplayVideo({
  src,
  poster,
  className,
  style,
}: GameplayVideoProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const labelId = useId();

  const [attached, setAttached] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const hasSource = src.trim().length > 0;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const pause = useCallback(() => {
    videoRef.current?.pause();
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
          setAttached(true);
        } else {
          pause();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [hasSource, reduceMotion, pause]);

  useEffect(() => {
    if (!hasSource) return;
    const onVisibility = () => {
      if (document.visibilityState !== "visible") pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [hasSource, pause]);

  /**
   * Label is derived from the element's real playback state, never from an
   * internal flag — otherwise the control lies during autoplay start-up.
   */
  const handleToggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().catch(() => {
        /* autoplay refused — the poster remains, no error noise */
      });
    } else {
      video.pause();
    }
  };

  return (
    <div ref={frameRef} className={className} style={style}>
      {hasSource ? (
        <video
          ref={videoRef}
          className="media-frame__video"
          src={attached ? src : undefined}
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
        />
      ) : null}

      {hasSource && !reduceMotion ? (
        <button
          type="button"
          className="video-toggle"
          aria-label={playing ? "Pause background video" : "Play background video"}
          aria-describedby={labelId}
          onClick={handleToggle}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
      ) : null}

      <span id={labelId} className="visually-hidden">
        Optional decorative gameplay clip. Pause it at any time.
      </span>
    </div>
  );
}
