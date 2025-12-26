import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  ),
  alternates: {
    canonical: "/",
  },
  title: "My Portfolio",
  description: "A personal portfolio showcasing projects and experience.",
  openGraph: {
    title: "My Portfolio",
    description: "A personal portfolio showcasing projects and experience.",
    url: "/",
    siteName: "My Portfolio",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "My Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "A personal portfolio showcasing projects and experience.",
    images: ["/api/og"],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b">
          <nav className="mx-auto flex max-w-5xl gap-6 px-6 py-4 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/works">Works</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer id="contact" className="mt-16 border-t bg-muted/20">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm">
            <div>
              <h2 className="text-base font-semibold">Contact</h2>
              <p className="mt-1 text-muted-foreground">
                お問い合わせは以下の連絡先からお願いします（仮置きです）。
              </p>
            </div>
            <div className="flex flex-col gap-2 text-muted-foreground">
              <span>
                Mail:{" "}
                <a className="underline" href="mailto:contact@example.com">
                  contact@example.com
                </a>
              </span>
              <span>
                SNS:{" "}
                <a
                  className="underline"
                  href="https://sns.example.com/placeholder"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://sns.example.com/placeholder
                </a>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
