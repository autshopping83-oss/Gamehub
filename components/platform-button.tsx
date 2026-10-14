import { StoreGlyph } from "@/components/icons";
import { isLiveLink, platformLabel, type StoreLink } from "@/lib/platforms";

interface PlatformButtonProps {
  link: StoreLink;
}

const GOOGLE_PLAY_ICON = "/icons/google-play.png";

function PlatformGlyph({ platform }: { platform: StoreLink["platform"] }) {
  if (platform === "google-play") {
    return (
      <img
        className="platform-btn__icon"
        src={GOOGLE_PLAY_ICON}
        alt=""
        width={18}
        height={20}
        decoding="async"
      />
    );
  }
  return <StoreGlyph />;
}

/**
 * Native <a> when a real destination exists; a disabled-looking chip
 * (never a clickable div) when the storefront is not live yet.
 * Google Play uses the supplied brand PNG.
 */
export default function PlatformButton({ link }: PlatformButtonProps) {
  const label = platformLabel(link.platform);

  if (isLiveLink(link)) {
    return (
      <a className="platform-btn" href={link.href} rel="noopener noreferrer">
        <PlatformGlyph platform={link.platform} />
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
      <PlatformGlyph platform={link.platform} />
      {label}
      <span className="platform-btn__note">· soon</span>
    </span>
  );
}
