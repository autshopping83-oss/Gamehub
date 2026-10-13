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

/** Small neutral storefront glyph — deliberately abstract, not a brand logo. */
export function StoreGlyph({ title, ...props }: IconProps) {
  return (
    <svg {...base} {...props}>
      {title ? <title>{title}</title> : null}
      <rect x="3.2" y="2.6" width="9.6" height="10.8" rx="1.2" />
      <path d="M6.4 2.6v3.2h3.2V2.6" />
    </svg>
  );
}
