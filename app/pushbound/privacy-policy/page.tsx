import LegalDoc, { LegalCallout, type LegalSection } from "@/components/legal-doc";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pushbound Privacy Policy",
  description:
    "How Pushbound — the Android Sokoban puzzle game — handles information: no account, no personal-data collection by the game itself, device-only progress, and optional rewarded advertising through Google AdMob.",
  path: "/pushbound/privacy-policy",
});

/**
 * Official Pushbound Privacy Policy (Google Play Console link target).
 *
 * Everything stated here was verified against the SHIPPED release APK, not
 * inferred from intent:
 *  - account, analytics, crash reporting: none
 *  - progress in Android shared preferences (file "pushbound_progress")
 *  - android:allowBackup="true" → standard Android backup
 *  - Google AdMob is integrated, REWARDED FORMAT ONLY (unit Pushbound_Rewarded_Hint).
 *    There is no banner, interstitial, native or app-open unit in the product.
 *  - the permissions below are what the merged manifest of the built APK
 *    actually declares, read out of the artifact produced by CI:
 *      android.permission.INTERNET
 *      android.permission.ACCESS_NETWORK_STATE
 *      com.google.android.gms.permission.AD_ID
 *      android.permission.ACCESS_ADSERVICES_{AD_ID,ATTRIBUTION,TOPICS}
 *    Because of these, this document may NOT claim the app has "no network
 *    permission" — that stopped being true the moment AdMob was added. What it
 *    may honestly say instead is that Pushbound itself opens no connection and
 *    that only a player who explicitly chose to watch an ad triggers one.
 *
 * THE LINE THIS DOCUMENT MUST HOLD. Pushbound's own data practices and data
 * processed by the integrated Google AdMob SDK are kept visibly separate
 * throughout: the game collects nothing, Google processes something, and the
 * two are never blended into one claim.
 *
 * Google's own data practices are described by Google, in Google's words. This
 * document therefore names categories Google itself documents and links to
 * Google's official pages, rather than inventing a collection list, a retention
 * period, or a personalisation configuration the project has not established.
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
          the Pushbound application. Every part of the game that is not
          advertising works with no internet connection at all. Connectivity is
          used only if you choose to watch an optional rewarded advertisement.
        </p>
        <LegalCallout tone="now" title="What this policy describes">
          <p>
            Only the application as it exists today. Features that are planned
            but not yet built are labelled as such and are never described as
            current behaviour. Optional rewarded advertising, described under{" "}
            <a href="#advertising">Advertising</a>, is active in the current
            version and is therefore described as current behaviour.
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
        <p>The game itself does not ask for and does not collect:</p>
        <ul className="legal__list">
          <li>your name, e-mail address or phone number;</li>
          <li>your postal address or payment details;</li>
          <li>your contacts, photos, files or location;</li>
          <li>any account, login or profile of any kind;</li>
          <li>any other personal information.</li>
        </ul>
        <p>
          The game transmits nothing to us. There is no account system, no
          server of ours that the game talks to, and no analytics, so nothing
          you do in the game is reported to us.
        </p>
        <LegalCallout tone="now" title="In short">
          <p>
            Pushbound itself collects no personal information from you, and
            sends none to us.
          </p>
        </LegalCallout>
        <p>
          <strong>
            One thing is different, and it is kept separate on purpose.
          </strong>{" "}
          Pushbound includes the Google AdMob advertising service, described
          under <a href="#advertising">Advertising</a>. The game does not
          collect device or advertising identifiers. The advertising SDK that
          ships inside the application, however, may access your device&apos;s
          advertising identifier, and Google may process further information,
          for Google&apos;s own advertising purposes. That processing is
          performed by Google and not by us; we do not receive it, and it is not
          covered by the &quot;we collect nothing&quot; statements above.
        </p>
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
        <LegalCallout tone="now" title="Current version — optional rewarded ads">
          <p>
            Pushbound uses <strong>Google AdMob</strong> to offer{" "}
            <strong>rewarded advertisements</strong>. This is the only
            advertising format in the game. There are no banner ads, no
            interstitial ads, no native ads and no app-open ads — in any version
            of Pushbound.
          </p>
        </LegalCallout>
        <p>
          A rewarded advertisement is tied to the game&apos;s hint mechanic, and
          it is entirely optional:
        </p>
        <ul className="legal__list">
          <li>
            you ask for a hint, and the game offers you the choice of watching a
            short advertisement in exchange for one;
          </li>
          <li>
            before anything is loaded, the offer tells you what you will receive
            and that an advertisement will be shown;
          </li>
          <li>
            you decide whether to watch. A &quot;Not now&quot; option is always
            available, and declining costs you nothing;
          </li>
          <li>
            the reward is granted only once the advertising service confirms
            that the advertisement was earned. If you close it early, skip it,
            or do not complete it, no reward is given;
          </li>
          <li>
            the hint assists you — it never plays or completes the puzzle for
            you.
          </li>
        </ul>
        <p>
          An advertisement never appears on its own. You will not see one when
          you launch the game, while you are moving or pushing a crate, over the
          puzzle board without warning, immediately after finishing a level,
          after a failed attempt, between every level, or as a requirement to
          start or finish a level.
        </p>
        <p>
          Nothing in the game depends on advertising being available. If an
          advertisement cannot be loaded — because you are offline, because the
          advertising service has nothing to serve, or for any other reason —
          the game says so and continues exactly as before. You can play
          Pushbound, and finish it, without watching a single advertisement.
        </p>
        <p>
          <strong>Google AdMob is a third-party service.</strong> It is operated
          by Google, not by us. Pushbound does not receive the information
          Google processes in order to serve an advertisement.
        </p>
        <p>
          To provide, measure, protect and operate advertising, Google may
          process information such as device, advertising, diagnostic and usage
          information, in accordance with Google&apos;s applicable services and
          privacy documentation. We deliberately do not publish an exact list of
          what Google collects, because that description belongs to Google and
          changes with Google&apos;s own services. The accurate sources are:
        </p>
        <ul className="legal__list">
          <li>
            <a href="https://policies.google.com/privacy">
              Google&apos;s Privacy Policy
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/technologies/ads">
              Google&apos;s page on how it uses information from sites and apps
              that use its services
            </a>
          </li>
          <li>
            Google&apos;s advertising controls for users:{" "}
            <a href="https://adssettings.google.com/">Ads Settings</a> and{" "}
            <a href="https://myadcenter.google.com/">My Ad Center</a>
          </li>
        </ul>
        <p>
          Where Google&apos;s consent framework applies to you, the game shows
          Google&apos;s own consent form before it requests an advertisement,
          and you can refuse it. Whether an advertisement is personalised
          depends on that consent and on how Google serves the request; we do
          not claim a particular configuration here, and Google&apos;s controls
          above are where you manage the choice Google offers you.
        </p>
        <p>
          <strong>
            What the advertising SDK adds to the application on your device.
          </strong>{" "}
          Including an advertising service changes what the application declares
          to Android. The shipped game declares internet access and network
          state — used to fetch an advertisement only after you have chosen to
          watch one — an advertising-identifier permission, and, on Android 13
          and later, Android&apos;s advertising-services permissions.
        </p>
        <p>
          That is the honest form of the offline statement. The game itself
          never opens a network connection, and every part of Pushbound that is
          not advertising works with no connectivity at all. The permission
          exists so that a player who has explicitly chosen to watch an
          advertisement can be served one.
        </p>
      </>
    ),
  },
  {
    id: "planned",
    heading: "Planned features (not yet active)",
    body: (
      <>
        <p>
          Optional rewarded advertising is <strong>not</strong> in this list: it
          is already active and is described as current behaviour under{" "}
          <a href="#advertising">Advertising</a>. The following remain directions
          under consideration for Pushbound. None of them exists in the
          application today, so none of them affects your data now:
        </p>
        <ul className="legal__list">
          <li>
            a possible future one-time &quot;Remove Ads&quot; purchase through
            Google Play Billing — a single, non-consumable purchase, not a
            subscription. It is not implemented, and cannot be bought today;
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
          The Google AdMob integration described under{" "}
          <a href="#advertising">Advertising</a> is not an analytics or
          crash-reporting service. Pushbound does not use it to measure how you
          play, and we receive no such measurement from it. What Google may
          process through it for advertising purposes is Google&apos;s own
          processing, described in that section.
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
          <strong>Google AdMob</strong> is integrated into Pushbound to provide
          the optional rewarded advertisements described under{" "}
          <a href="#advertising">Advertising</a>. It is a third-party
          advertising service operated by Google. Pushbound does not operate it,
          does not receive what Google processes through it, and does not
          combine it with anything the game stores.
        </p>
        <p>
          Apart from that, the application contains no other third-party
          service — no analytics, no social SDKs, no sign-in and no cloud
          service.
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
          Pushbound offers no way for anyone — including a child — to submit
          personal information to us through the game. There is no sign-up, no
          chat, no contact form and no profile inside it, and the game collects
          no personal information from anyone. In that sense there is no
          personal data of children for us to collect or to know about.
        </p>
        <p>
          Advertising in the game is delivered by Google AdMob, which is a
          separate service with its own policies — including Google&apos;s own
          approach to content and audiences, and the consent framework it
          presents where it applies. That processing is Google&apos;s, not ours,
          and is described under <a href="#advertising">Advertising</a>. Nothing
          in this policy declares Pushbound to be directed at children, and no
          age rating or children-specific advertising setting is claimed here,
          because those are matters for the application&apos;s store listing and
          for Google&apos;s own configuration rather than for this document.
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
          These two kinds of data are handled differently, and it matters which
          one you are asking about.
        </p>
        <ul className="legal__list">
          <li>
            <strong>Pushbound&apos;s own data</strong> — your gameplay progress
            — is retained on your device for as long as the application is
            installed and you keep it. We retain no copy of it, because nothing
            is sent to us: there is no server of ours holding your data. It is
            removed when you clear the application&apos;s data or uninstall
            Pushbound.
          </li>
          <li>
            <strong>Information processed by Google AdMob</strong> for
            advertising purposes is held and controlled by Google, not by us. We
            neither set nor are able to describe a retention period for it, and
            we will not invent one. Google&apos;s own documentation and controls
            govern it — see the links under{" "}
            <a href="#advertising">Advertising</a>.
          </li>
        </ul>
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
          These actions remove everything <strong>Pushbound itself</strong>{" "}
          stores, permanently. They do not remove information that Google may
          hold for advertising purposes — that is governed by Google&apos;s own
          controls, listed under <a href="#advertising">Advertising</a>.
        </p>
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
          We hold no personal information about you, so there is nothing on{" "}
          <strong>our</strong> side for you to access, correct, export or erase
          — we would have no copy to act on.
        </p>
        <p>
          Control over the data that Pushbound itself holds rests with you: it
          lives in the application&apos;s storage on your device, and{" "}
          <a href="#deleting">Deleting your data</a> explains how to remove it.
        </p>
        <p>
          Information that may be processed by the integrated Google AdMob
          advertising service is processed by Google, not by us. Requests about
          that information go to Google, which provides its own settings and
          rights process — the relevant starting points are listed under{" "}
          <a href="#advertising">Advertising</a>. We cannot action a request on
          Google&apos;s behalf, but we will help you find the right place to
          make it.
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
      </>
    ),
  },
];

export default function PushboundPrivacyPolicyPage() {
  return (
    <LegalDoc
      overline="Pushbound · Legal"
      title="Privacy Policy"
      lede="What Pushbound stores, what it never collects, and how optional rewarded advertising through Google AdMob is handled. Written for the game as it exists today."
      updated="24 October 2026"
      dateTime="2026-10-24"
      backHref="/games/pushbound"
      backLabel="Pushbound"
      sections={SECTIONS}
    />
  );
}
