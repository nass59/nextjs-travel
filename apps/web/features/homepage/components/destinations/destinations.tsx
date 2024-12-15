import { Card } from "@repo/design-system/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import { popularDestinations } from "./data";

export const Destinations = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-bold font-display text-4xl">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {popularDestinations.map((destination) => (
            <Link
              href={`/destination/${destination.title.toLowerCase().replace(/ /g, "-")}`}
              key={destination.id}
            >
              <Card className="transform overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-80">
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <h3 className="mb-2 font-semibold text-2xl text-white">
                      {destination.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
