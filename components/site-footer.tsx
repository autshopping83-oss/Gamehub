import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__cols">
          <div>
            <h2 className="site-footer__heading">Gamehub</h2>
            <p style={{ color: "var(--ink-2)", maxWidth: "32ch" }}>
              An independent game publisher. The website is the frame; the
              gameplay is the art.
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
            <h2 className="site-footer__heading">Status</h2>
            <ul className="site-footer__list">
              <li>Catalogue in progress</li>
              <li>Media pending verification</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__legal">
          <span>© {new Date().getFullYear()} Gamehub</span>
          <span>All game artwork remains property of its owners.</span>
        </div>
      </div>
    </footer>
  );
}
