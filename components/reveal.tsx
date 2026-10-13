"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms — used to stagger siblings. */
  delay?: number;
}

/**
 * One-purpose scroll reveal: content lifts a short distance and fades in the
 * first time it enters the viewport, then stays put. Transform and opacity only,
 * so nothing triggers layout. Fully disabled under prefers-reduced-motion.
 */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    // Safety net, not an override: if the element is plainly inside the
    // viewport and the observer still has not fired, show it. Animation is a
    // nicety — it must never be able to withhold content that is on screen.
    const failsafe = window.setTimeout(() => {
      const box = node.getBoundingClientRect();
      if (box.top < window.innerHeight && box.bottom > 0) setVisible(true);
    }, 1500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
