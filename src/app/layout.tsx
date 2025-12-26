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
      </body>
    </html>
  );
};

export default RootLayout;
