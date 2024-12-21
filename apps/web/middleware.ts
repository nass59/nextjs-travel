import { NextResponse, type NextMiddleware } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isOnboardingRoute = createRouteMatcher(["/onboarding"]);
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);

const middleware: NextMiddleware = clerkMiddleware(async (auth, request) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // For users visiting /onboarding, don't try to redirect.
  if (userId && isOnboardingRoute(request)) {
    return NextResponse.next();
  }

  // If the user isn't signed in and the route is private, redirect to sign-in
  if (!userId && !isPublicRoute(request)) {
    return redirectToSignIn({ returnBackUrl: request.url });
  }

  // Catch users who do not have `onboardingComplete: true` in their publicMetadata
  // Redirect them to the /onboading route to complete onboarding
  if (userId && !sessionClaims.metadata.onboardingComplete) {
    const onboardingUrl = new URL("/onboarding", request.url);
    return NextResponse.redirect(onboardingUrl);
  }

  // If the user is signed in and the route is private, allow access
  if (userId && !isPublicRoute(request)) {
    return NextResponse.next();
  }
});

export default middleware;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
