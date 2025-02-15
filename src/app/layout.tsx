import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yapper Time",
  description: "Discover the art of meaningful conversations with timed discussion prompts. Perfect for social gatherings, team building, and deeper connections.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🗣️</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Yapper Time",
    description: "Discover the art of meaningful conversations with timed discussion prompts. Perfect for social gatherings, team building, and deeper connections.",
    images: [{
      url: 'https://res.cloudinary.com/dk9mn4cvz/image/upload/v1732164419/YapperTime-Conversation-Starters-Mariana-Oka_lwmdth.jpg',
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}