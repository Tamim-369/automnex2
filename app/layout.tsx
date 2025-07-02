import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Automnex – Software to Improve Lives",
  description: "Automnex builds software to improve people's lives. Discover Guard, our AI-powered NSFW blocker for Windows, and more innovative solutions.",
  openGraph: {
    title: "Automnex – Software to Improve Lives",
    description: "Automnex builds software to improve people's lives. Discover Guard, our AI-powered NSFW blocker for Windows, and more innovative solutions.",
    url: "https://automnex.com/",
    siteName: "Automnex",
    images: [
      {
        url: "/logo/Automnex.png",
        width: 800,
        height: 600,
        alt: "Automnex Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automnex – Software to Improve Lives",
    description: "Automnex builds software to improve people's lives. Discover Guard, our AI-powered NSFW blocker for Windows, and more innovative solutions.",
    images: ["/logo/Automnex.png"],
    creator: "@automnex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Automnex builds software to improve people's lives. Discover Guard, our AI-powered NSFW blocker for Windows, and more innovative solutions." />
        <meta name="google-site-verification" content="VH58kUrv42-15apewxi2IZ2tmnf1X3hK3aP0a33N7F8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://automnex.com/" />
        <meta name="theme-color" content="#18181b" />
        {/* Open Graph */}
        <meta property="og:title" content="Automnex – Software to Improve Lives" />
        <meta property="og:description" content="Automnex builds software to improve people's lives. Discover Guard, our AI-powered NSFW blocker for Windows, and more innovative solutions." />
        <meta property="og:image" content="/logo/Automnex.png" />
        <meta property="og:url" content="https://automnex.com/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Automnex – Software to Improve Lives" />
        <meta name="twitter:description" content="Automnex builds software to improve people's lives. Discover Guard, our AI-powered NSFW blocker for Windows, and more innovative solutions." />
        <meta name="twitter:image" content="/logo/Automnex.png" />
        <meta name="twitter:creator" content="@automnex" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
