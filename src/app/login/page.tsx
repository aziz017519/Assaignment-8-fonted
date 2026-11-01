
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-[#faf9f6] px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl sm:p-10">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-bold text-white">
            S
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome Back!
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Login to continue your creative journey.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <div className="mb-2 flex justify-between">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <Link
                href="/login"
                className="text-sm font-semibold text-orange-500 hover:text-orange-600"
              >
                Forgot password?
              </Link>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white transition hover:bg-orange-600"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          type="button"
          className="w-full rounded-xl border border-gray-200 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-orange-500 hover:text-orange-600"
          >
            Create Account
          </Link>
        </p>
      </div>
    </main>
  );
}
