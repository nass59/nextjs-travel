import { fonts } from "@repo/design-system/lib/fonts";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

import "@repo/design-system/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Travelly - Share Your Journey, Inspire the World",
  description:
    "Discover, explore, and share your travel experiences with fellow adventurers on Travelly.",
};

type RootLayoutProperties = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProperties) {
  return (
    <html lang="en" className={fonts}>
      <body className={`${poppins.variable} font-sans`}>{children}</body>
    </html>
  );
}
