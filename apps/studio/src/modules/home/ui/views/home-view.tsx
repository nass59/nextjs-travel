import { HomeVideosSection } from "@/modules/home/ui/sections/home-videos-section";

import { CategoriesSection } from "../sections/categories-section";

type Props = {
  categoryId?: string;
};

export const HomeView = ({ categoryId }: Props) => {
  return (
    <div className="mx-auto mb-10 flex max-w-[2400px] flex-col gap-y-6 px-4 pt-2.5">
      <CategoriesSection categoryId={categoryId} />
      <HomeVideosSection categoryId={categoryId} />
    </div>
  );
};
