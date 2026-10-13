import { StoreGlyph } from "@/components/icons";
import { isLiveLink, platformLabel, type StoreLink } from "@/lib/platforms";

interface PlatformButtonProps {
  link: StoreLink;
}

/**
 * Native <a> when a real destination exists; a disabled-looking chip
 * (never a clickable div) when the storefront is not live yet.
 */
export default function PlatformButton({ link }: PlatformButtonProps) {
  const label = platformLabel(link.platform);

  if (isLiveLink(link)) {
    return (
      <a className="platform-btn" href={link.href} rel="noopener noreferrer">
        <StoreGlyph />
        {label}
      </a>
    );
  }

  return (
    <span
      className="platform-btn"
      role="status"
      aria-disabled="true"
      aria-label={`${label}: coming soon`}
    >
      <StoreGlyph />
      {label}
      <span className="platform-btn__note">· soon</span>
    </span>
  );
}
