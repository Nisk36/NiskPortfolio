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
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-[var(--line)]">
            <div className="container flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/" className="text-lg font-semibold no-underline">
                Nisk Portfolio
              </Link>
              <nav className="flex flex-wrap gap-4 text-sm text-[var(--muted)]">
                <Link href="/" className="hover:text-[var(--text)] no-underline">
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-[var(--text)] no-underline"
                >
                  Blog
                </Link>
                <Link
                  href="/works"
                  className="hover:text-[var(--text)] no-underline"
                >
                  Works
                </Link>
                <a
                  href="#contact"
                  className="hover:text-[var(--text)] no-underline"
                >
                  Contact
                </a>
              </nav>
            </div>
          </header>
          <div className="flex-1">{children}</div>
          <footer id="contact" className="border-t border-[var(--line)]">
            <div className="container py-10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-[var(--muted)]">Contact</p>
                  <p className="text-base font-medium">Get in touch</p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href="mailto:hello@example.com">hello@example.com</a>
                  <a href="https://github.com/">GitHub</a>
                  <a href="https://x.com/">X (Twitter)</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
