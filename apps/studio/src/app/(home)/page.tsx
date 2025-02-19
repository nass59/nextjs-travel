import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { PageClient } from "@/app/(home)/client";
import { HydrateClient, trpc } from "@/trpc/server";

export default async function Home() {
  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback={<div>loading...</div>}>
          <PageClient />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
