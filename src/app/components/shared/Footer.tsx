"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8">

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
                S
              </div>

              <span className="text-2xl font-extrabold text-white">
                Studio<span className="text-orange-500">Space</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Discover inspiring creative spaces and bring your ideas to life.
              Find the perfect studio for your next big project.
            </p>

            <div className="mt-5 flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold text-white transition hover:bg-orange-500"
                aria-label="Facebook">
                f
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold text-white transition hover:bg-orange-500"
                aria-label="Instagram">
                ◎
              </a>

              <a href="https://x.com" target="_blank" rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-bold text-white transition hover:bg-orange-500"
                aria-label="X">
                𝕏
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="transition hover:text-orange-500">Home</Link></li>
              <li><Link href="/studios" className="transition hover:text-orange-500">Explore Studios</Link></li>
              <li><Link href="/how-it-works" className="transition hover:text-orange-500">How It Works</Link></li>
              <li><Link href="/about" className="transition hover:text-orange-500">About Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Popular Categories
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="/studios?category=photography" className="transition hover:text-orange-500">Photography Studios</Link></li>
              <li><Link href="/studios?category=podcast" className="transition hover:text-orange-500">Podcast Rooms</Link></li>
              <li><Link href="/studios?category=music" className="transition hover:text-orange-500">Music Studios</Link></li>
              <li><Link href="/studios?category=art" className="transition hover:text-orange-500">Art Workshops</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-white">
              Stay Inspired
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-400">
              Get creative space inspiration and the latest updates.
            </p>

            <form
             
             onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3"
>
            
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-orange-500"
              />

              <button
                type="submit"
                className="rounded-lg bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-sm sm:flex-row sm:items-center">
          <p className="text-gray-500">
            © 2026 StudioSpace. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="transition hover:text-orange-500">
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition hover:text-orange-500">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
