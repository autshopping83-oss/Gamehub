import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/icons";

/**
 * Shared shell for permanent legal/documentation pages (Pushbound Privacy
 * Policy, Terms of Use).
 *
 * These pages live in the GameHub app router, so they inherit the site
 * header, footer, typography and light theme automatically — no second
 * website, no separate styling system. The layout is a two-column document:
 * a section index on the left (stacked above the text on small screens) and
 * the legal text at a comfortable reading measure on the right.
 */

export interface LegalSection {
  /** Stable anchor id — linked from the contents list. */
  id: string;
  heading: string;
  body: ReactNode;
}

interface LegalDocProps {
  /** Micro-label above the title, e.g. "Pushbound · Legal". */
  overline: string;
  title: string;
  lede: string;
  /** Human-readable effective date shown to the reader. */
  updated: string;
  /** ISO date for the <time> element. */
  dateTime: string;
  /** Where "back" points — the Pushbound section of the GameHub. */
  backHref: string;
  backLabel: string;
  sections: LegalSection[];
}

export default function LegalDoc({
  overline,
  title,
  lede,
  updated,
  dateTime,
  backHref,
  backLabel,
  sections,
}: LegalDocProps) {
  return (
    <>
      <header className="page-head legal-head">
        <div className="container">
          <p className="legal-head__crumbs">
            <Link className="link-arrow" href={backHref}>
              <ArrowIcon style={{ transform: "rotate(180deg)" }} />
              {backLabel}
            </Link>
          </p>

          <p className="legal-head__overline">{overline}</p>
          <h1 className="page-head__title">{title}</h1>
          <p className="page-head__lede">{lede}</p>

          <p className="legal-head__meta">
            Effective date: <time dateTime={dateTime}>{updated}</time>
          </p>
        </div>
      </header>

      <section className="section legal">
        <div className="container legal__grid">
          <nav className="legal__toc" aria-label="Document sections">
            <p className="legal__toc-title">Contents</p>
            <ol className="legal__toc-list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="legal__body">
            {sections.map((section) => (
              <section
                className="legal__section"
                key={section.id}
                aria-labelledby={section.id}
              >
                <h2 id={section.id}>{section.heading}</h2>
                {section.body}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Distinct callout used to separate what the app does TODAY from what is
 * only planned. `tone="now"` marks current behaviour; `tone="future"` marks
 * something that does not exist yet in the shipped application.
 */
export function LegalCallout({
  tone,
  title,
  children,
}: {
  tone: "now" | "future";
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="legal-callout" data-tone={tone}>
      <p className="legal-callout__title">{title}</p>
      <div className="legal-callout__body">{children}</div>
    </aside>
  );
}

/**
 * Clearly marked manual-completion slot. Used instead of inventing a legal
 * detail (entity name, address, jurisdiction) that is not available in the
 * project. Must be reviewed before the URL is submitted anywhere.
 */
export function LegalPending({ children }: { children: ReactNode }) {
  return (
    <aside className="legal-pending">
      <span className="legal-pending__label">
        To be completed before publication
      </span>
      <span className="legal-pending__body">{children}</span>
    </aside>
  );
}
