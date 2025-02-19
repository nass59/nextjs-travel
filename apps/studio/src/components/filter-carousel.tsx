import { useEffect, useState } from "react";

import { Badge } from "@workspace/design-system/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@workspace/design-system/components/ui/carousel";
import { Skeleton } from "@workspace/design-system/components/ui/skeleton";
import { cn } from "@workspace/design-system/lib/utils";

type Props = {
  value?: string | null;
  isLoading?: boolean;
  onSelect: (value: string | null) => void;
  data: {
    value: string;
    label: string;
  }[];
};

export const FilterCarousel = ({ value, isLoading, onSelect, data }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative w-full">
      {/* Left fade */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 left-12 top-0 z-10 hidden w-12 bg-gradient-to-r from-white to-transparent",
          current > 1 && "flex"
        )}
      />

      <Carousel
        setApi={setApi}
        opts={{ align: "start", dragFree: true }}
        className="w-full px-12"
      >
        <CarouselContent className="-ml-3">
          {isLoading &&
            Array.from({ length: 14 }).map((_, index) => (
              <CarouselItem key={index} className="basis-auto pl-3">
                <Skeleton className="w-[100px] rounded-lg px-3 py-1 text-sm font-semibold">
                  &nbsp;
                </Skeleton>
              </CarouselItem>
            ))}
          {!isLoading && (
            <CarouselItem
              className="basis-auto pl-3"
              onClick={() => onSelect(null)}
            >
              <Badge
                variant={!value ? "default" : "secondary"}
                className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-1 text-sm"
              >
                All
              </Badge>
            </CarouselItem>
          )}
          {!isLoading &&
            data.map(({ value: itemValue, label }) => (
              <CarouselItem
                key={itemValue}
                className="basis-auto pl-3"
                onClick={() => onSelect(itemValue)}
              >
                <Badge
                  variant={value === itemValue ? "default" : "secondary"}
                  className="cursor-pointer whitespace-nowrap rounded-lg px-3 py-1 text-sm"
                >
                  {label}
                </Badge>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-20" />
        <CarouselNext className="right-0 z-20" />
      </Carousel>

      {/* Right fade */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 right-12 top-0 z-10 w-12 bg-gradient-to-l from-white to-transparent",
          current === count && "hidden"
        )}
      />
    </div>
  );
};
