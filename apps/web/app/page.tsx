import { Start } from "@/components/cta/start";
import { Destinations } from "@/components/destinations/destinations";
import { Featured } from "@/components/featured/featured";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";

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
