interface SectionHeadingProps {
  overline: string;
  title: string;
  /** Right-aligned catalogue annotation. Keep it factual. */
  aside?: string;
  id?: string;
}

export default function SectionHeading({
  overline,
  title,
  aside,
  id,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <span className="section-heading__overline">{overline}</span>
        <h2 className="section-heading__title" id={id}>
          {title}
        </h2>
      </div>
      {aside ? <span className="section-heading__aside">{aside}</span> : null}
    </div>
  );
}
