
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#faf9f6] px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl sm:p-10">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-bold text-white">
            S
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Account
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Join StudioSpace and discover creative spaces.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Photo URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/photo.jpg"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              minLength={6}
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white transition hover:bg-orange-600"
          >
            Create Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-orange-500 hover:text-orange-600"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
