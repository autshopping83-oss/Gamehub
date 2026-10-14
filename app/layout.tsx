import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { organizationJsonLd, pageMetadata, SITE_NAME } from "@/lib/seo";
import "@/app/styles/tokens.css";
import "@/app/styles/site.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  ...pageMetadata({ title: SITE_NAME }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // suppressHydrationWarning: the inline script below adds `js` to <html>
  // before React hydrates, so the client className intentionally differs.
  return (
    <html lang="en" className={sans.variable} suppressHydrationWarning>
      <body>
        {/*
          Marks the document as script-capable before first paint. Scroll
          reveals only hide content under `.js`, so this has to run ahead of
          the body — if it never runs, every section stays visible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
