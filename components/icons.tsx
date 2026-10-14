import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function MenuIcon({ title, ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
    </svg>
  );
}

export function CloseIcon({ title, ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M4 4l8 8M12 4l-8 8" />
    </svg>
  );
}

export function PlayIcon({ title, ...props }: IconProps) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      {title ? <title>{title}</title> : null}
      <path d="M5 3.4v9.2l7.2-4.6L5 3.4z" />
    </svg>
  );
}

export function PauseIcon({ title, ...props }: IconProps) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      {title ? <title>{title}</title> : null}
      <rect x="4.2" y="3.4" width="2.4" height="9.2" rx="0.6" />
      <rect x="9.4" y="3.4" width="2.4" height="9.2" rx="0.6" />
    </svg>
  );
}

export function ArrowIcon({ title, ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

/**
 * Official Google Play triangle mark. Multi-fill, no stroke — this is the
 * brand asset, not a decorative glyph. Sized via width/height props.
 */
export function GooglePlayIcon({
  title,
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }) {
  return (
    <svg
      width={20}
      height={22}
      viewBox="0 0 20 22"
      fill="none"
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M1.1 0.7C0.7 1.1 0.5 1.7 0.5 2.5v17c0 0.8 0.2 1.4 0.6 1.8l0.1 0.1 9.5-9.5v-0.2L1.2 0.6 1.1 0.7z"
        fill="#00D2FF"
      />
      <path
        d="M14.4 14.9l-3.2-3.2v-0.2l3.2-3.2 0.1 0 3.8 2.2c1.1 0.6 1.1 1.7 0 2.3l-3.8 2.1-0.1 0z"
        fill="#FFCE00"
      />
      <path
        d="M14.5 14.8l-3.3-3.3L1.1 21.7c0.4 0.4 1 0.5 1.7 0.1l11.7-6.9"
        fill="#FF3A44"
      />
      <path
        d="M14.5 7.2L2.8 0.3C2.1-0.1 1.5 0 1.1 0.4l10.1 10.1 3.3-3.3z"
        fill="#00E676"
      />
    </svg>
  );
}

/** Neutral storefront glyph — only for platforms without a brand mark here. */
export function StoreGlyph({ title, ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="3.2" y="2.6" width="9.6" height="10.8" rx="1.2" />
      <path d="M6.4 2.6v3.2h3.2V2.6" />
    </svg>
  );
}
