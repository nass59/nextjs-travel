import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { fonts } from "@repo/design-system/lib/fonts";

import "@repo/design-system/styles/globals.css";

export const metadata: Metadata = {
  title: "Travelly - Share Your Journey, Inspire the World",
  description:
    "Discover, explore, and share your travel experiences on Travelly.",
};

type RootLayoutProps = {
  readonly children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider>
      <html lang="en" className={fonts}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
