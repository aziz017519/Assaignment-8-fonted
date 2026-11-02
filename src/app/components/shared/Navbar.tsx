
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore Studios", href: "/studios" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: session, isPending } = useSession();
  const user = session?.user;

  const handleLogout = async () => {
    try {
      await signOut();
      setMenuOpen(false);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
            S
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Studio<span className="text-orange-500">Space</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition hover:text-orange-500 ${
                pathname === link.href
                  ? "text-orange-500"
                  : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {user && (
            <Link
              href="/dashboard"
              className={`text-sm font-semibold transition hover:text-orange-500 ${
                pathname === "/dashboard"
                  ? "text-orange-500"
                  : "text-gray-600"
              }`}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {isPending ? (
            <span className="text-sm text-gray-400">Loading...</span>
          ) : user ? (
            <>
              <div className="flex items-center gap-2">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-9 w-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                    {user.name?.charAt(0).toUpperCase()}
                  </div>
                )}

                <span className="font-semibold text-gray-700">
                  {user.name}
                </span>
              </div>

              <button
                onClick={handleLogout}
                className="rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 font-semibold text-gray-700 transition hover:text-orange-500"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-lg bg-orange-500 px-5 py-2.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-xl text-gray-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-md md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-semibold ${
                  pathname === link.href
                    ? "text-orange-500"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user && (
              <Link
                href="/dashboard"
                onClick={() => setMenuOpen(false)}
                className={`font-semibold ${
                  pathname === "/dashboard"
                    ? "text-orange-500"
                    : "text-gray-700"
                }`}
              >
                Dashboard
              </Link>
            )}

            <hr className="border-gray-100" />

            {isPending ? (
              <span className="text-sm text-gray-400">Loading...</span>
            ) : user ? (
              <>
                <div className="flex items-center gap-3">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <span className="font-semibold text-gray-700">
                    {user.name}
                  </span>
                </div>

                <button
                  onClick={handleLogout}
                  className="rounded-lg bg-orange-500 px-5 py-3 text-center font-semibold text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-gray-700"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg bg-orange-500 px-5 py-3 text-center font-semibold text-white"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
