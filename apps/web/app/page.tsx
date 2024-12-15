import { Start } from "@/components/cta/Start";
import { Destinations } from "@/components/destinations/Destinations";
import { Featured } from "@/components/featured/Featured";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";

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
