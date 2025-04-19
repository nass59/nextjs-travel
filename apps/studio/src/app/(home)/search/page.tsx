import { DEFAULT_LIMIT } from "@/constants";
import { SearchView } from "@/modules/search/ui/views/search-view";
import { HydrateClient, trpc } from "@/trpc/server";

type PageProps = {
  searchParams: Promise<{
    query: string | undefined;
    categoryId: string | undefined;
  }>;
};

export default async function Page({ searchParams }: PageProps) {
  const { categoryId, query } = await searchParams;

  void trpc.categories.getMany.prefetch();
  void trpc.search.getMany.prefetchInfinite({
    query,
    categoryId,
    limit: DEFAULT_LIMIT,
  });

  return (
    <HydrateClient>
      <SearchView categoryId={categoryId} query={query} />
    </HydrateClient>
  );
}
