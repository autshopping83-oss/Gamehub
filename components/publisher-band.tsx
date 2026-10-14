import Reveal from "@/components/reveal";

/**
 * Short platform statement. One idea, no numbered manifesto —
 * the catalogue above already shows how the platform works.
 */
export default function PublisherBand() {
  return (
    <section className="platform-band" aria-labelledby="platform-title">
      <div className="container">
        <Reveal>
          <div className="platform-band__inner">
            <span className="section-heading__overline">The platform</span>
            <h2 className="platform-band__title" id="platform-title">
              A home for games.
            </h2>
            <p className="platform-band__copy">
              GAMEHUB is a growing catalogue of mobile games. Each title gets
              its own colour, its own trailer, and a clear path to install.
              Gameplay first — always.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
