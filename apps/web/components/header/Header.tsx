import { Button } from "@repo/design-system/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 px-4 py-4 lg:px-6">
      <div className="mx-auto max-w-7xl rounded-full bg-white/70 shadow-lg backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6">
          <Link className="flex items-center justify-center" href="#">
            <div className="relative h-12 w-32">
              <Image
                src="/next.svg"
                alt="Travelly"
                className="object-contain"
                fill
                priority
              />
            </div>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link
              className="font-medium text-sm transition-colors hover:text-[#FF6B6B]"
              href="/explore"
            >
              Explore
            </Link>
            <Link
              className="font-medium text-sm transition-colors hover:text-[#FF6B6B]"
              href="/destinations"
            >
              Destinations
            </Link>
            <Link
              className="font-medium text-sm transition-colors hover:text-[#FF6B6B]"
              href="#"
            >
              My Trips
            </Link>
            <Link
              className="font-medium text-sm transition-colors hover:text-[#FF6B6B]"
              href="#"
            >
              Community
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-[#FF6B6B]"
            >
              Sign In
            </Button>
            <Button className="bg-[#FF6B6B] text-white hover:bg-[#FF6B6B]/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
