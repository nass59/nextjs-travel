import { CategoriesSection } from "@/modules/home/ui/sections/categories-section";

import { ResultSection } from "../sections/results-section";

type Props = {
  query: string | undefined;
  categoryId: string | undefined;
};

export const SearchView = ({ query, categoryId }: Props) => {
  return (
    <div className="mx-auto mb-10 flex max-w-[1300px] flex-col gap-y-6 px-4 pt-2.5">
      <CategoriesSection categoryId={categoryId} />
      <ResultSection query={query} categoryId={categoryId} />
    </div>
  );
};
