import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

type OnboardingLayoutProps = {
  children: ReactNode;
};

export default async function OnboardingLayout({
  children,
}: OnboardingLayoutProps) {
  const user = await auth();

  if (user.sessionClaims?.metadata?.onboardingComplete) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
