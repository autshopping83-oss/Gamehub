import SectionHeading from "@/components/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Gamehub is an independent game publisher. A quiet frame for finished and in-development work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">About</h1>
          <p className="page-head__lede">
            An independent game publisher. Phase one of the site is the frame,
            not the whole picture.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="about-title">
        <div className="container">
          <SectionHeading overline="Studio" title="How we work" id="about-title" />

          <div className="statement__grid">
            <p className="statement__text">Few titles. Shown properly.</p>

            <div className="statement__body">
              <p>
                This page is a placeholder for the studio statement. It will be
                replaced with the real text once the founding story, the team,
                and the contact details exist — none of which will be invented
                in the meantime.
              </p>
              <p>
                If you are press or a platform partner, the catalogue at{" "}
                <a
                  href="/games"
                  style={{
                    color: "var(--accent)",
                    fontWeight: "var(--weight-semibold)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  /games
                </a>{" "}
                is the current source of truth for what we are shipping.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
