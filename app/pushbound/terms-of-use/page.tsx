import LegalDoc, { LegalCallout, type LegalSection } from "@/components/legal-doc";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pushbound Terms of Use",
  description:
    "Terms of Use for Pushbound, the free Android Sokoban puzzle game: licence, ownership of the game and its levels, prohibited activities, optional rewarded advertising through Google AdMob, and what is only planned for the future.",
  path: "/pushbound/terms-of-use",
});

/**
 * Official Pushbound Terms of Use.
 *
 * Current implementation facts this document relies on:
 *  - free to play, distributed through Google Play (application id com.pushbound.game)
 *  - optional REWARDED advertising through Google AdMob (unit Pushbound_Rewarded_Hint),
 *    tied to the hint mechanic; no banner, interstitial, native or app-open unit
 *  - the game itself opens no network connection; connectivity is used only to
 *    fetch an advertisement the player explicitly chose to watch
 *  - no accounts, no in-app purchases of any kind; "Remove Ads" is PLANNED ONLY
 *  - progress stored only on the device (no cloud sync)
 * Legal details that do not exist in the project are marked with
 * <LegalPending> instead of being invented. Governing law and publisher are
 * factual and must not be altered.
 */

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    heading: "Introduction",
    body: (
      <>
        <p>
          These Terms of Use govern your use of <strong>Pushbound</strong>, a
          native Android puzzle game built around classic Sokoban mechanics:
          you move a character through maze-like environments and push wooden
          crates onto designated goals, planning your moves to complete each
          level.
        </p>
        <p>
          Pushbound is free to download and play, is intended for an
          international audience, and is distributed through Google Play.
          Every part of the game that is not advertising works entirely
          offline and needs no internet connection. If you choose to watch an
          optional rewarded advertisement, that request uses your connection.
        </p>
        <p>
          This document is the official Terms of Use for Pushbound and is
          published at a permanent address intended for reference from the
          game&apos;s distribution listing.
        </p>
      </>
    ),
  },
  {
    id: "acceptance",
    heading: "Acceptance of these terms",
    body: (
      <>
        <p>
          By downloading, installing, accessing or playing Pushbound, you agree
          to these Terms of Use. If you do not agree, do not use the game.
        </p>
        <p>
          These Terms apply to the game itself. Downloading an app from Google
          Play is also governed by Google&apos;s own terms that apply to that
          store; where those terms cover the act of acquiring the app through
          the store, they apply in addition to these Terms.
        </p>
        <p>
          If the law of your country requires you to be of a certain age to
          enter into a binding agreement, you confirm that you meet that
          requirement, or that a parent or legal guardian has approved your use
          of the game.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    heading: "Eligibility and acceptable use",
    body: (
      <>
        <p>
          Pushbound is offered for personal, non-commercial entertainment. You
          may play it for your own enjoyment on a device you are authorised to
          use.
        </p>
        <p>
          The game is intended for a general, international audience. You are
          responsible for making sure that your use of Pushbound is lawful in
          the place where you live and where you use it.
        </p>
      </>
    ),
  },
  {
    id: "licence",
    heading: "Licence to use the game",
    body: (
      <>
        <p>
          Pushbound is licensed to you, not sold to you. The developer or
          publisher of the game grants you a limited, personal,
          non-exclusive, non-transferable and revocable licence to install and
          play Pushbound on devices you own or control, for your own personal
          use, for as long as these Terms remain in effect.
        </p>
        <p>
          This licence does not give you any ownership of the game, and it may
          be terminated if you break these Terms. The rights not granted here
          are reserved by the game&apos;s owner.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    heading: "Intellectual property",
    body: (
      <>
        <p>
          Pushbound — including its name, logo, branding, artwork, game assets,
          software, source code, level designs, puzzle designs, written text
          and audiovisual materials — is protected by copyright and other
          intellectual property laws.
        </p>
        <p>
          All of that material belongs to the developer or publisher of
          Pushbound, or is used by them under a licence that allows it to be
          part of the game. Nothing in these Terms transfers ownership of that
          material to you beyond the limited licence described above.
        </p>
        <p>
          Material belonging to third parties — for example store logos used
          to indicate where an app is distributed — remains the property of its
          respective owners and is not claimed here.
        </p>
      </>
    ),
  },
  {
    id: "content",
    heading: "Game content and levels",
    body: (
      <>
        <p>
          The levels, puzzles, mechanics, characters, visuals and sound that
          make up Pushbound form part of the game&apos;s protected content.
          Your licence is to play that content in the versions of the game you
          receive, not to extract, reuse or republish it.
        </p>
        <p>
          The catalogue of levels may grow, change or be rebalanced over time.
          A level that exists in one version may be adjusted or replaced in a
          later one.
        </p>
        <p>
          Your progress is stored on your device only. There is no account and
          no cloud backup, so clearing the app&apos;s data, uninstalling the
          game, moving to another device or a loss of the device itself can
          permanently reset your progress.
        </p>
      </>
    ),
  },
  {
    id: "prohibited",
    heading: "Prohibited activities",
    body: (
      <>
        <p>You must not:</p>
        <ul className="legal__list">
          <li>copy, reproduce or redistribute Pushbound or any of its files;</li>
          <li>
            distribute the game, its builds, its assets or its levels to anyone
            else;
          </li>
          <li>
            modify, adapt, translate, reverse engineer or create derivative
            works from the game, except where such a restriction is prohibited
            by the law that applies to you;
          </li>
          <li>
            tamper with the application, its data or its behaviour, or attempt
            to bypass technical protections;
          </li>
          <li>
            extract game assets — artwork, audio, code, level data or other
            files — for use outside the game;
          </li>
          <li>
            cheat, manipulate scores or progress, or interfere with the game or
            with another player&apos;s experience of it;
          </li>
          <li>
            use Pushbound for any unlawful purpose, or in a way that infringes
            anyone else&apos;s rights;
          </li>
          <li>
            remove or alter copyright, trademark or ownership notices from the
            game.
          </li>
        </ul>
        <p>
          These restrictions apply only to the extent the law of your
          jurisdiction allows them.
        </p>
      </>
    ),
  },
  {
    id: "updates",
    heading: "Updates and changes",
    body: (
      <>
        <p>
          Pushbound may be updated over time. Updates can include:
        </p>
        <ul className="legal__list">
          <li>bug fixes and stability improvements;</li>
          <li>performance and compatibility improvements;</li>
          <li>gameplay improvements and new features;</li>
          <li>new levels or campaign content;</li>
          <li>balancing changes;</li>
          <li>visual and audio improvements.</li>
        </ul>
        <p>
          An update may change the game&apos;s behaviour, interface or content.
          Where an update is distributed through Google Play, your device may
          install it automatically according to your store settings. A version
          that is no longer supported may stop working, and you may be required
          to install the current version to continue playing.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    heading: "Advertising",
    body: (
      <>
        <LegalCallout tone="now" title="Current version — optional rewarded ads">
          <p>
            Pushbound may display <strong>optional rewarded advertisements</strong>{" "}
            provided through <strong>Google AdMob</strong>. This is the only
            advertising format used. There are no banner ads, no interstitial
            ads, no native ads and no app-open ads.
          </p>
        </LegalCallout>
        <p>
          Rewarded advertising in Pushbound is connected to the game&apos;s hint
          mechanic. If you have used the hints available for an attempt, the
          game may offer you the choice of watching a short advertisement in
          exchange for one further hint. The offer tells you what you will
          receive and that an advertisement will be shown, before anything is
          loaded.
        </p>
        <p>
          Watching is always your decision. You can decline with the
          &quot;Not now&quot; option at no cost, and you are never required to
          watch an advertisement in order to play, to start a level or to finish
          a level. The hint a rewarded advertisement grants is an assist — it
          does not solve the puzzle for you.
        </p>
        <p>
          An advertisement is never shown on its own initiative: not when the
          game launches, not while you are moving or pushing a crate, not over
          the board without warning, not immediately after completing a level,
          and not after every failed attempt.
        </p>
        <p>
          <strong>
            We do not guarantee that an advertisement will be available.
          </strong>{" "}
          Serving one depends on your network connectivity and on the
          availability of a third-party advertising service that we do not
          control. If an advertisement cannot be loaded, or if you do not
          complete it, no reward is granted — the reward is given only when the
          advertising service confirms it has been earned. Either way the game
          continues unchanged, and it remains fully playable without watching a
          rewarded advertisement.
        </p>
        <p>
          Google AdMob is a third-party service operated by Google, subject to
          Google&apos;s own terms and policies. Our{" "}
          <a href="/pushbound/privacy-policy">Privacy Policy</a> explains how it
          differs from what the game itself stores, and links to Google&apos;s
          official privacy information.
        </p>
      </>
    ),
  },
  {
    id: "purchases",
    heading: "Future in-app purchases",
    body: (
      <>
        <LegalCallout tone="now" title="Current version">
          <p>
            Pushbound currently has no in-app purchases. Nothing inside the
            game can be bought today, and no payment is processed by the game.
            Watching a rewarded advertisement costs no money, and there is no
            way to spend money inside Pushbound.
          </p>
        </LegalCallout>
        <p>
          Should a purchase option be introduced, the direction under
          consideration is a single, one-time &quot;Remove Ads&quot; purchase
          processed through Google Play Billing — a one-off, non-consumable
          purchase, not a subscription.
        </p>
        <ul className="legal__list">
          <li>
            No subscription is planned for removing advertising.
          </li>
          <li>
            No virtual currency is planned for Pushbound.
          </li>
          <li>
            Any future purchase would be handled by Google Play Billing and
            would also be subject to Google&apos;s billing terms and to the
            account settings of your store account.
          </li>
        </ul>
        <LegalCallout tone="future" title="Not available today">
          <p>
            &quot;Remove Ads&quot; does not exist in the current game and cannot
            be purchased. Treat it as an intention only; it becomes real, and
            these Terms become accurate about it, when it is actually released.
          </p>
        </LegalCallout>
      </>
    ),
  },
  {
    id: "third-parties",
    heading: "Third-party services",
    body: (
      <>
        <p>
          Google Play distributes Pushbound and provides the framework for any
          purchase that may be added later. Your relationship with the store —
          including your Google account, downloads, refunds and billing — is
          governed by Google&apos;s terms and policies, not by us.
        </p>
        <p>
          Apart from the Google AdMob advertising service described above, the
          game contains no other third-party service, analytics provider or
          sign-in service.
        </p>
        <p>
          Our <a href="/pushbound/privacy-policy">Privacy Policy</a> explains
          what the game stores and what it does not collect.
        </p>
      </>
    ),
  },
  {
    id: "availability",
    heading: "Availability and changes to the service",
    body: (
      <>
        <p>
          Pushbound is provided as it exists in the version you have installed.
          The game itself works offline: playing, moving, pushing crates and
          completing levels need no internet connection, and no connectivity is
          required to reach us, because the game does not communicate with a
          server of ours.
        </p>
        <p>
          The one part of the game that does use the network is loading a
          rewarded advertisement, and only after you have chosen to watch one.
          Advertising additionally depends on a third-party service we do not
          control, so its availability is not guaranteed and may vary — but that
          never affects your ability to play.
        </p>
        <p>
          Content, levels or features may be added, changed or withdrawn. We
          may also modify, suspend or discontinue the game, in whole or in
          part, including ending its availability, without prior notice where
          the law permits it.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    heading: "Disclaimer of warranties",
    body: (
      <>
        <p>
          To the extent permitted by applicable law, Pushbound is provided
          &quot;as is&quot; and &quot;as available&quot;, without warranties of
          any kind beyond those that cannot be excluded by law.
        </p>
        <p>
          In particular, we do not promise that the game will be uninterrupted,
          error-free or compatible with every device, or that it will always be
          available in the form you currently have. Games can contain bugs,
          may be interrupted for maintenance or updates, and may behave
          differently after an update.
        </p>
        <p>
          Because progress is stored only on your device, we are not
          responsible for the loss of progress caused by clearing app data,
          uninstalling the game, changing device, a device failure or any other
          loss of local storage.
        </p>
        <p>
          Some jurisdictions do not allow certain warranty exclusions; in
          those cases this section applies only to the maximum extent
          permitted by law, and your mandatory rights remain unaffected.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    body: (
      <>
        <p>
          To the extent permitted by applicable law, and subject to the
          mandatory rights you have as a consumer where you live, we will not be
          liable for losses that were not reasonably foreseeable, such as loss
          of progress, loss of enjoyment, lost opportunity or any indirect or
          consequential loss arising from your use of, or inability to use,
          Pushbound.
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot be
          excluded or limited under applicable law — including liability for
          fraud, for fraudulent misrepresentation, or for death or personal
          injury caused by negligence — nor does it remove any right you have
          that the law says cannot be waived.
        </p>
        <p>
          Where consumer protection law grants you guarantees that we cannot
          limit, those guarantees apply in full and these Terms operate subject
          to them.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to these terms",
    body: (
      <>
        <p>
          These Terms may be updated when the game, its features or the
          applicable requirements change. The date at the top of the page shows
          when this document was last updated.
        </p>
        <p>
          Continuing to use Pushbound after an update means you accept the
          revised Terms. If you do not accept them, stop using the game and
          uninstall it. Where the law requires it, we will give notice of
          material changes on this page before they take effect.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact information",
    body: (
      <>
        <p>Questions about these Terms of Use can be sent to:</p>
        <div className="legal-contact">
          <p className="legal-contact__item">
            <span className="legal-contact__label">Publisher</span>
            <span>Elias Chanisso — publisher and responsible person for Pushbound</span>
          </p>
          <p className="legal-contact__item">
            <span className="legal-contact__label">E-mail</span>
            <a href="mailto:eliaschanisso83@gmail.com">
              eliaschanisso83@gmail.com
            </a>
          </p>
          <p className="legal-contact__item">
            <span className="legal-contact__label">Phone</span>
            <a href="tel:+258840636794">+258 840 636 794</a>
          </p>
          <p className="legal-contact__item">
            <span className="legal-contact__label">Product</span>
            <span>Pushbound — Android</span>
          </p>
        </div>
        <p>
          <strong>Governing law.</strong> These Terms of Use are governed by
          the laws of the Republic of Mozambique. This does not limit any
          mandatory consumer protection that applies to you under the law of
          the country where you live.
        </p>
      </>
    ),
  },
];

export default function PushboundTermsOfUsePage() {
  return (
    <LegalDoc
      overline="Pushbound · Legal"
      title="Terms of Use"
      lede="The rules for using Pushbound: what you may do, what belongs to whom, how optional rewarded advertising works, and what is only planned for later."
      updated="24 October 2026"
      dateTime="2026-10-24"
      backHref="/games/pushbound"
      backLabel="Pushbound"
      sections={SECTIONS}
    />
  );
}
