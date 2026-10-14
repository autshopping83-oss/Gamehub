import GameCard from "@/components/game-card";
import SectionHeading from "@/components/section-heading";
import { games } from "@/lib/games";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Games",
  description: "The GAMEHUB catalogue. Entries appear as material is verified.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <>
      <header className="page-head">
        <div className="container">
          <h1 className="page-head__title">Games</h1>
          <p className="page-head__lede">
            The catalogue grows one verified entry at a time. Nothing is listed
            until it can be shown properly.
          </p>
        </div>
      </header>

      <section className="section" aria-labelledby="catalogue-title">
        <div className="container">
          <SectionHeading
            overline="Catalogue"
            title="All titles"
            aside={`${games.length} ${games.length === 1 ? "entry" : "entries"}`}
            id="catalogue-title"
          />

          <ul className="game-grid">
            {games.map((game) => (
              <li key={game.slug}>
                <GameCard game={game} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
