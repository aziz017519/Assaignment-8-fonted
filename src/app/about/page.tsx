
import Link from "next/link";

export const instant = false;

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <section className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
              ABOUT STUDIOSPACE
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              A Better Space for Your Creativity
            </h1>

            <p className="mt-6 leading-8 text-gray-600">
              StudioSpace is a platform designed to help people discover
              creative spaces for photography, music, podcasting, and
              other creative projects.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our goal is to make finding and booking a suitable studio
              simple and convenient.
            </p>

            <Link
              href="/studios"
              className="mt-8 inline-block rounded-lg bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Studios
            </Link>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 p-10 text-white shadow-xl">
            <div className="text-7xl">🎬</div>

            <h2 className="mt-8 text-3xl font-bold">
              Create Without Limits
            </h2>

            <p className="mt-4 leading-8 text-orange-50">
              Discover a space where your ideas can become reality.
              Find the right environment for your creativity.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What We Offer
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="text-4xl">📸</div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Photography Studios
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Find spaces for photoshoots and creative photography.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="text-4xl">🎵</div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Music Studios
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Discover spaces for music production and recording.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md">
              <div className="text-4xl">🎙️</div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">
                Podcast Studios
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                Explore spaces for recording podcasts and audio content.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
