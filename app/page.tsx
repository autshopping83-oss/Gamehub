import HeroGame from "@/components/hero-game";
import SectionHeading from "@/components/section-heading";

export default function HomePage() {
  return (
    <>
      <HeroGame />

      <section className="section statement" aria-labelledby="publisher-title">
        <div className="container">
          <SectionHeading
            overline="Publisher"
            title="A quiet frame"
            id="publisher-title"
          />

          <div className="statement__grid">
            <p className="statement__text">
              We publish few games, and we show them properly.
            </p>

            <div className="statement__body">
              <p>
                Gamehub is an independent game publisher. This site is built the
                way a catalogue is built: one plate at a time, with room to look.
              </p>
              <p>
                Nothing on this page is pretending to be finished. The featured
                entry above is an in-development title, and its media is an
                honest placeholder until verified gameplay exists.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
