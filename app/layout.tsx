import type { Metadata } from "next";
// import { Analytics } from "@vercel/analytics/react";
import { Inter, Roboto } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Jephthah Mbah",
  description: "This is my CV ",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>{children}</body>
      {/* <Analytics /> */}
    </html>
  );
}
