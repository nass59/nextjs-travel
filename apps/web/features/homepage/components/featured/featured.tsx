import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/design-system/components/ui/avatar";
import { Card } from "@repo/design-system/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import { featuredExperiences } from "./data";

export const Featured = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-bold font-display text-4xl">
          Featured Experiences
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredExperiences.map((experience) => (
            <Link
              href={`/experience/${experience.title.toLowerCase().replace(/ /g, "-")}`}
              key={experience.id}
            >
              <Card className="transform overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative h-80">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute right-0 bottom-0 left-0 p-6">
                    <h3 className="mb-2 font-semibold text-2xl text-white">
                      {experience.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {experience.location}
                    </p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Avatar className="border-2 border-white">
                      <AvatarImage
                        src={experience.avatar}
                        alt={experience.user}
                      />
                      <AvatarFallback>{experience.user[0]}</AvatarFallback>
                    </Avatar>
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
