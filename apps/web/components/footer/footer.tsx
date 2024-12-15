import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-display font-semibold text-lg">
              About Travelly
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display font-semibold text-lg">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Travel Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display font-semibold text-lg">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Copyright Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-display font-semibold text-lg">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-[#FF6B6B]"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-gray-800 border-t pt-8 text-center">
          <p>&copy; 2024 Travelly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
