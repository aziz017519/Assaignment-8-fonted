
import Image from "next/image";
import Link from "next/link";

export const instant = false;

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

const categories = [
  {
    icon: "📸",
    name: "Photography Studios",
    slug: "photography",
    desc: "Perfect spaces for stunning shots",
  },
  {
    icon: "🎙️",
    name: "Podcast Rooms",
    slug: "podcast",
    desc: "Create your next great episode",
  },
  {
    icon: "🎵",
    name: "Music Studios",
    slug: "music",
    desc: "Make music that moves people",
  },
  {
    icon: "🎬",
    name: "Sound Stages",
    slug: "film",
    desc: "Bring your vision to the screen",
  },
  {
    icon: "🎨",
    name: "Art Workshops",
    slug: "art",
    desc: "Space to explore your creativity",
  },
];

type Studio = {
  _id: string;
  name: string;
  category: string;
  location: string;
  price: number;
  priceUnit: string;
  description: string;
  image: string;
  available: boolean;
};

async function getStudios(): Promise<Studio[]> {
  try {
    const response = await fetch(`${SERVER_URL}/api/studios`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch studios");
    }

    const result = await response.json();

    return result.success ? result.data : [];
  } catch (error) {
    console.error("Studio fetch error:", error);
    return [];
  }
}

export default async function HomePage() {
  const studios = await getStudios();

  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#202020]">

      <section className="relative overflow-hidden bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-8">

          <div>
            <span className="inline-flex rounded-full border border-orange-400/40 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
              ✦ Your Space. Your Creativity.
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Find Your Space.
              <span className="block text-orange-500">
                Create Something Amazing.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-gray-300">
              Discover inspiring photography studios, podcast rooms,
              music spaces and creative venues. Your next big idea
              deserves the perfect space.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/studios"
                className="rounded-xl bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Explore Studios →
              </Link>

              <Link
                href="/register"
                className="rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-black"
              >
                Host Your Space
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-10">
              <div>
                <h3 className="text-3xl font-extrabold">500+</h3>
                <p className="mt-1 text-sm text-gray-400">Creative Spaces</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold">2K+</h3>
                <p className="mt-1 text-sm text-gray-400">Happy Creators</p>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold">4.9★</h3>
                <p className="mt-1 text-sm text-gray-400">Average Rating</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-orange-500/20 blur-2xl" />

            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
              alt="Beautiful creative studio workspace"
              width={1200}
              height={800}
              priority
              className="relative h-full w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-5 left-5 rounded-2xl bg-white p-5 text-gray-900 shadow-xl md:left-[-25px]">
              <p className="text-sm font-medium text-gray-500">
                Find your inspiration
              </p>
              <p className="mt-1 font-bold">
                The perfect space awaits ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-orange-500">
            Explore By Category
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Find Your Creative Space
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Whatever you want to create, we have a space for it.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/studios?category=${category.slug}`}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-2 hover:border-orange-400 hover:shadow-xl"
            >
              <span className="text-4xl">{category.icon}</span>

              <h3 className="mt-5 font-bold group-hover:text-orange-500">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {category.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>


      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-bold uppercase tracking-widest text-orange-500">
                Handpicked For You
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Featured Studios
              </h2>

              <p className="mt-3 text-gray-500">
                Explore some amazing creative spaces.
              </p>
            </div>

            <Link
              href="/studios"
              className="font-bold text-orange-500 hover:text-orange-600"
            >
              View All Studios →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {studios.length > 0 ? (
              studios
                .filter((studio) => studio.available)
                .map((studio) => (
                  <article
                    key={studio._id}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative">
                      <Image
                        src={studio.image}
                        alt={studio.name}
                        width={600}
                        height={400}
                        unoptimized
                        className="h-60 w-full object-cover"
                      />

                      <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-green-600">
                        Available
                      </span>
                    </div>

                    <div className="p-6">
                      <p className="text-sm font-semibold text-orange-500">
                        {studio.category} Studio
                      </p>

                      <h3 className="mt-2 text-xl font-bold">
                        {studio.name}
                      </h3>

                      <p className="mt-3 text-sm text-gray-500">
                        📍 {studio.location}, Bangladesh
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-500">
                        {studio.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                        <p className="font-bold">
                          ৳{studio.price}
                          <span className="font-normal text-gray-500">
                            {" "}/ {studio.priceUnit}
                          </span>
                        </p>

                        <Link
                             href={`/studios/${studio._id}`}
                             className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600"
                            >
                              View Details →
                            </Link>
                      </div>
                    </div>
                  </article>
                ))
            ) : (
              <div className="col-span-full rounded-2xl bg-gray-50 p-10 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  No Studios Available
                </h3>

                <p className="mt-2 text-gray-500">
                  Please check again later.
                </p>
              </div>
            )}

          </div>
        </div>
      </section>

     
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-orange-500">
            Simple Process
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            How StudioSpace Works
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Discover Spaces",
              desc: "Find studios that match your creative vision.",
              icon: "🔎",
            },
            {
              number: "02",
              title: "Select Your Hours",
              desc: "Choose a convenient date and time.",
              icon: "📅",
            },
            {
              number: "03",
              title: "Book Your Studio",
              desc: "Submit your booking request with ease.",
              icon: "🔑",
            },
            {
              number: "04",
              title: "Create & Produce",
              desc: "Show up and bring your ideas to life.",
              icon: "✨",
            },
          ].map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100 text-4xl">
                {step.icon}
              </div>

              <p className="mt-6 text-sm font-bold text-orange-500">
                {step.number}
              </p>

              <h3 className="mt-2 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

     
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500 px-8 py-14 text-center text-white md:px-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Have a Creative Space?
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-orange-50">
            Turn your studio into an opportunity. List your space and
            connect with creators looking for their next inspiration.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-600 transition hover:bg-gray-100"
          >
            Become a Host →
          </Link>
        </div>
      </section>

    </main>
  );
}
