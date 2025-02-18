import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PageClient } from "@/app/(home)/client";
import { HydrateClient, trpc } from "@/trpc/server";

export default async function Home() {
  void trpc.hello.prefetch({ text: "world" });

  return (
    <HydrateClient>
      <Suspense fallback={<div>loading...</div>}>
        <ErrorBoundary fallback={<div>error</div>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
