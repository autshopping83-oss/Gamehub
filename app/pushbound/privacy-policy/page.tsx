import LegalDoc, {
  LegalCallout,
  LegalPending,
  type LegalSection,
} from "@/components/legal-doc";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pushbound Privacy Policy",
  description:
    "How Pushbound — the Android Sokoban puzzle game — handles information: no account, no personal data collection, and game progress stored only on your device.",
  path: "/pushbound/privacy-policy",
});

/**
 * Official Pushbound Privacy Policy (Google Play Console link target).
 *
 * Everything stated here was verified against the shipped application:
 *  - no INTERNET permission, no third-party SDK (Compose/AndroidX only)
 *  - no account, no analytics, no crash reporting, no advertising SDK
 *  - local progress in Android shared preferences (file "pushbound_progress")
 *  - android:allowBackup="true" → standard Android backup
 * Unknown legal details are marked with <LegalPending>, never invented.
 */

const SECTIONS: LegalSection[] = [
  {
    id: "about",
    heading: "About this policy",
    body: (
      <>
        <p>
          Pushbound is a native Android puzzle game built around classic
          Sokoban mechanics: you move a character through maze-like
          environments and push wooden crates onto designated goals. The game
          is free to download and play, is intended for an international
          audience, and is distributed through Google Play.
        </p>
        <p>
          This Privacy Policy explains what the current version of Pushbound
          stores, what it does not collect, and how to reach us. It applies to
          the Pushbound application. The current version of the game plays
          entirely offline and does not require an internet connection.
        </p>
        <LegalCallout tone="now" title="What this policy describes">
          <p>
            Only the application as it exists today. Features that are planned
            but not yet built are labelled as such and are never described as
            current behaviour.
          </p>
        </LegalCallout>
      </>
    ),
  },
  {
    id: "information-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <p>
          Pushbound does not require an account and does not ask you to
          register, sign in, or identify yourself in any way.
        </p>
        <p>We do not ask for and do not collect:</p>
        <ul className="legal__list">
          <li>your name, e-mail address or phone number;</li>
          <li>your postal address or payment details;</li>
          <li>your contacts, photos, files or location;</li>
          <li>device advertising identifiers or other device identifiers;</li>
          <li>any other personal information.</li>
        </ul>
        <p>
          The current version of Pushbound does not transmit any information to
          us. It contains no account system, no server communication and no
          analytics, so nothing you do in the game is reported to us.
        </p>
        <LegalCallout tone="now" title="In short">
          <p>
            We directly collect no personal information from you through
            Pushbound.
          </p>
        </LegalCallout>
      </>
    ),
  },
  {
    id: "stored-on-device",
    heading: "Information stored on the device",
    body: (
      <>
        <p>
          All game data stays on your device, in the application&apos;s own
          storage, using standard Android app preferences. Nothing in this
          storage is sent anywhere.
        </p>
        <p>The current version stores exactly the following:</p>
        <ul className="legal__list">
          <li>the identifier of each level you have played;</li>
          <li>whether that level has been completed;</li>
          <li>your best result tier (medal) for that level;</li>
          <li>your best move count and best push count for that level.</li>
        </ul>
        <p>
          This is gameplay progress only. It contains no names, no contact
          details, no location and no identifiers.
        </p>
      </>
    ),
  },
  {
    id: "progress",
    heading: "Game progress and preferences",
    body: (
      <>
        <p>
          Progress is device-local. There is no account and no cloud
          synchronisation, which means your progress does not follow you: it is
          not restored automatically when you change device, and it is not
          copied to us.
        </p>
        <p>
          Any game preferences or settings are stored in the same way — locally
          on your device, in application storage — and are used only to make
          the game behave the way you left it.
        </p>
        <p>
          If you clear the application&apos;s data or uninstall Pushbound, the
          stored progress and preferences are deleted with it. See{" "}
          <a href="#deleting">Deleting your data</a>.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    heading: "Advertising",
    body: (
      <>
        <LegalCallout tone="now" title="Current version">
          <p>
            Pushbound contains no advertising. The current application does not
            include any advertising SDK, does not load ads, and does not use
            advertising identifiers. No ad is shown to you, and no advertising
            data is collected.
          </p>
        </LegalCallout>
        <LegalCallout tone="future" title="Planned, not active">
          <p>
            If advertising is ever introduced, our intention is for it to be
            optional or rewarded, and never required in order to play normal
            gameplay. Before any advertising becomes active in the game, this
            policy will be updated to name the advertising service used and to
            explain the data that service processes. Until that update is
            published, treat advertising in Pushbound as not existing.
          </p>
        </LegalCallout>
      </>
    ),
  },
  {
    id: "planned",
    heading: "Planned features (not yet active)",
    body: (
      <>
        <p>
          The following are directions under consideration for Pushbound. None
          of them exists in the application today, so none of them affects your
          data now:
        </p>
        <ul className="legal__list">
          <li>
            optional or rewarded advertising, never required for normal
            gameplay;
          </li>
          <li>
            a possible future one-time &quot;Remove Ads&quot; purchase through
            Google Play Billing — a single, non-consumable purchase, not a
            subscription;
          </li>
          <li>no virtual currency is planned.</li>
        </ul>
        <p>
          If any of these is implemented, this policy will be updated at that
          time to describe the actual data practices the feature introduces.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    heading: "Analytics and diagnostics",
    body: (
      <>
        <p>
          The current version of Pushbound includes no analytics and no crash
          or diagnostics reporting. We do not measure sessions, levels
          attempted, play time, errors or device performance, and we receive no
          telemetry of any kind from the game.
        </p>
        <p>
          If diagnostics or crash reporting are ever added, they will be
          identified by name in this policy before they become active.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    heading: "Third-party services",
    body: (
      <>
        <p>
          The Pushbound application itself contains no third-party service
          integrations — no analytics, no advertising, no social SDKs, no
          sign-in and no cloud service.
        </p>
        <p>
          <strong>Google Play</strong> is the distribution channel for the
          game. Google processes your data when you download or install an app
          under Google&apos;s own privacy policy; we do not receive your Google
          account information or your Play Store activity through Pushbound.
        </p>
        <p>
          <strong>This website</strong> — where this document is published, on
          the GameHub — is hosted by Vercel Inc. Delivering a web page
          typically involves basic connection data (such as your IP address,
          the time and the page requested) processed by the host to deliver and
          secure the site. The GameHub website uses no analytics scripts and no
          advertising or tracking cookies.
        </p>
      </>
    ),
  },
  {
    id: "children",
    heading: "Children's privacy",
    body: (
      <>
        <p>
          Because Pushbound collects no personal information from anyone, it
          does not knowingly collect personal data from children either. There
          is no sign-up, no chat, no contact form inside the game and no way
          for a child to submit personal information to us through it.
        </p>
        <p>
          If you believe a child has sent personal information to us through a
          contact channel listed below, contact us and we will delete it.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "Data security",
    body: (
      <>
        <p>
          Your progress is written to local storage on your device and is not
          transmitted by the game, so there is no data of yours in transit
          between Pushbound and us.
        </p>
        <p>
          The application allows Android&apos;s standard backup of application
          data. Whether anything is backed up — and where it is stored — is
          controlled by you through your device and your Android or Google
          account settings.
        </p>
        <p>
          Like any application, Pushbound cannot guarantee absolute security.
          Keeping your device locked and your system updated is the practical
          way to protect anything stored on it.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "Data retention",
    body: (
      <>
        <p>
          Progress and preferences are retained on your device for as long as
          the application is installed and you keep them. We retain no copy of
          anything, because nothing is sent to us: there is no server of ours
          holding your data.
        </p>
        <p>
          Data on your device is removed when you clear the application&apos;s
          data or uninstall Pushbound, in line with your device&apos;s own
          behaviour.
        </p>
      </>
    ),
  },
  {
    id: "deleting",
    heading: "Deleting your data",
    body: (
      <>
        <p>You can remove everything Pushbound stores at any time:</p>
        <ul className="legal__list">
          <li>
            <strong>Clear the data:</strong> open your device&apos;s Settings →
            Apps → Pushbound → Storage → <em>Clear data</em> (the exact wording
            varies by device and Android version);
          </li>
          <li>
            <strong>Uninstall the game:</strong> removing the application
            removes its local data as well.
          </li>
        </ul>
        <p>
          Both actions are permanent and cannot be undone — progress stored in
          the game is deleted with it, and it is not recoverable from us
          because we never received a copy. If you need help, contact us.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    heading: "Your privacy rights",
    body: (
      <>
        <p>
          Since we hold no personal information about you, there is nothing on
          our side for you to access, correct, export or erase — we would have
          no copy to act on.
        </p>
        <p>
          Control over the data that does exist rests with you: it lives in the
          application&apos;s storage on your device, and{" "}
          <a href="#deleting">Deleting your data</a> explains how to remove it.
        </p>
        <p>
          If you are in a region with specific data-protection rights — for
          example under the GDPR or the CCPA, where they apply to you — you are
          still welcome to contact us with any question or request. We will
          answer as required by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    heading: "Changes to this privacy policy",
    body: (
      <>
        <p>
          We update this policy when the application or the applicable
          requirements change — for example if a feature is introduced that
          alters how information is handled. When that happens, the effective
          date at the top of this page is revised.
        </p>
        <p>
          New data practices are described here before they take effect;
          features that are only planned remain labelled as planned. Review
          this page periodically to stay informed about the current state of
          the game.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    heading: "Contact us",
    body: (
      <>
        <p>
          For any question about this policy or about how Pushbound handles
          information, contact:
        </p>
        <div className="legal-contact">
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
        <LegalPending>
          Legal entity or trade name of the Pushbound publisher, and any postal
          address required in your jurisdiction, must be inserted here before
          this URL is submitted to Google Play Console.
        </LegalPending>
      </>
    ),
  },
];

export default function PushboundPrivacyPolicyPage() {
  return (
    <LegalDoc
      overline="Pushbound · Legal"
      title="Privacy Policy"
      lede="What Pushbound stores, what it never collects, and how to reach us. Written for the game as it exists today."
      updated="23 October 2026"
      dateTime="2026-10-23"
      backHref="/games/pushbound"
      backLabel="Pushbound"
      sections={SECTIONS}
    />
  );
}
