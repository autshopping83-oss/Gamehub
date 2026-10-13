import { STATUS_LABEL, type Game } from "@/lib/games";

/**
 * Exhibition-catalogue style rows: label/value pairs, museum wall label tone.
 */
export default function GameMetadata({ game }: { game: Game }) {
  const rows = [
    { key: "Status", value: STATUS_LABEL[game.status] },
    { key: "Category", value: game.category },
    { key: "Platforms", value: game.platforms.join(", ") || "—" },
    ...(game.releaseYear
      ? [{ key: "Year", value: String(game.releaseYear) }]
      : []),
  ];

  return (
    <dl className="wall-label__rows">
      {rows.map((row) => (
        <div className="wall-label__row" key={row.key}>
          <dt className="wall-label__key">{row.key}</dt>
          <dd className="wall-label__value">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
