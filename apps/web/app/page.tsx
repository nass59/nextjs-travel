import { Start } from "@/features/homepage/components/cta/start";
import { Destinations } from "@/features/homepage/components/destinations/destinations";
import { Featured } from "@/features/homepage/components/featured/featured";
import { Footer } from "@/features/homepage/components/footer/footer";
import { Header } from "@/features/homepage/components/header/header";
import { Hero } from "@/features/homepage/components/hero/hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Floating Header */}
      <Header />

      <main>
        {/* Hero Section with Dynamic Background */}
        <Hero />
        {/* Featured Experiences */}
        <Featured />
        {/* Popular Destinations */}
        <Destinations />
        {/* Call to Action */}
        <Start />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
