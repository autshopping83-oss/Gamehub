import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__cols">
          <div>
            <h2 className="site-footer__heading">GAMEHUB</h2>
            <p style={{ color: "var(--ink-2)", maxWidth: "32ch" }}>
              A modern game platform. Playable titles, real gameplay, clear
              installs.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="site-footer__heading">Pages</h2>
            <ul className="site-footer__list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/games">Games</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="site-footer__heading">Get games</h2>
            <ul className="site-footer__list">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=cloud.bizflow.tempox"
                  rel="noopener noreferrer"
                >
                  TEMPOX on Google Play
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} GAMEHUB</span>
          <span>All game artwork remains property of its owners.</span>
        </div>
      </div>
    </footer>
  );
}
