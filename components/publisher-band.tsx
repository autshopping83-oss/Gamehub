import Reveal from "@/components/reveal";

/**
 * Publisher statement — short, product-led, no manifesto.
 *
 * It exists to frame the catalogue above it, not to be read as an essay.
 */
export default function PublisherBand() {
  return (
    <section className="section publisher" aria-labelledby="publisher-title">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-heading__overline">Publisher</span>
            <h2 className="section-heading__title" id="publisher-title">
              Gamehub
            </h2>
          </div>
          <span className="section-heading__aside">Independent</span>
        </div>

        <Reveal>
          <div className="publisher__grid">
            <p className="publisher__lead">
              We publish a small number of games, and give each one the room it
              needs.
            </p>

            <ul className="publisher__points">
              <li>
                <span className="publisher__point-index">01</span>
                <span className="publisher__point-text">
                  Few titles at a time, so every release is presented properly.
                </span>
              </li>
              <li>
                <span className="publisher__point-index">02</span>
                <span className="publisher__point-text">
                  Gameplay first — you should understand a game before you read
                  about it.
                </span>
              </li>
              <li>
                <span className="publisher__point-index">03</span>
                <span className="publisher__point-text">
                  Nothing is listed until it can be shown honestly.
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
