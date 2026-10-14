import SectionHeading from "@/components/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Gamehub is a modern game platform. Playable titles, real gameplay, clear installs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">About</h1>
          <p className="page-head__lede">
            Gamehub is a game platform — not a studio brochure. Games first,
            always.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="about-title">
        <div className="container">
          <SectionHeading overline="Platform" title="What this is" id="about-title" />

          <div className="statement__grid">
            <p className="statement__text">I found a place for games.</p>

            <div className="statement__body">
              <p>
                Gamehub collects playable mobile games in one place. Each entry
                leads with real gameplay video, a short hook, and a direct
                install link. No fake screenshots, no empty promises.
              </p>
              <p>
                TEMPOX is the first title. More games join the catalogue as
                they ship. Browse everything at{" "}
                <a href="/games">/games</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
