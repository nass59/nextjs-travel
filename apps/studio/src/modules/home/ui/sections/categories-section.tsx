"use client";

import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { ErrorBoundary } from "react-error-boundary";

import { FilterCarousel } from "@/components/filter-carousel";
import { trpc } from "@/trpc/client";

type Props = {
  categoryId?: string;
};

const CategoriesSectionSuspense = ({ categoryId }: Props) => {
  const router = useRouter();
  const [categories] = trpc.categories.getMany.useSuspenseQuery();

  const data = categories.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  const onSelect = (value: string | null) => {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set("categoryId", value);
    } else {
      url.searchParams.delete("categoryId");
    }

    router.push(url.toString());
  };

  return <FilterCarousel onSelect={onSelect} value={categoryId} data={data} />;
};

const CategoriesSkeleton = () => {
  return <FilterCarousel isLoading onSelect={() => {}} data={[]} />;
};

export const CategoriesSection = ({ categoryId }: Props) => {
  return (
    <Suspense fallback={<CategoriesSkeleton />}>
      <ErrorBoundary fallback={<div>Error...</div>}>
        <CategoriesSectionSuspense categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};
