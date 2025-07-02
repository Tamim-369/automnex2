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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
