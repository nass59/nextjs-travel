"use client";

import { Button } from "@repo/design-system/components/ui/button";
import { Card, CardContent } from "@repo/design-system/components/ui/card";
import { Input } from "@repo/design-system/components/ui/input";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { heroImages } from "./data";

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImageIndex].src}
            alt={heroImages[currentImageIndex].alt}
            className="object-cover"
            fill
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl space-y-8 text-center"
        >
          <h1 className="font-bold font-display text-5xl text-white drop-shadow-lg md:text-7xl lg:text-8xl">
            Wander. Explore. Share.
          </h1>
          <p className="font-light text-white/90 text-xl md:text-2xl">
            Your journey begins with a single step. Make it count.
          </p>
          <Card className="mx-auto w-full max-w-md border-0 bg-white/10 backdrop-blur-md">
            <CardContent className="p-2">
              <form className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Where's your next adventure?"
                  className="flex-1 border-0 bg-transparent text-white placeholder:text-white/70"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90"
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="-translate-y-1/2 absolute top-1/2 left-4 transform text-white hover:bg-white/20"
        onClick={prevImage}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="-translate-y-1/2 absolute top-1/2 right-4 transform text-white hover:bg-white/20"
        onClick={nextImage}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </section>
  );
};
