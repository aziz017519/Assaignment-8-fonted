
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const instant = false;

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://127.0.0.1:5000";

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

type StudioResponse = {
  success: boolean;
  data: Studio;
  message?: string;
};

async function getStudio(id: string): Promise<Studio | null> {
  try {
    const response = await fetch(
      `${SERVER_URL}/api/studios/${encodeURIComponent(id)}`,
      {
        cache: "no-store",
      }
    );

    if (response.status === 404 || response.status === 400) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Studio API failed: ${response.status}`);
    }

    const result: StudioResponse = await response.json();

    if (!result.success || !result.data) {
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Studio fetch error:", error);
    throw error;
  }
}

export default async function StudioDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const studio = await getStudio(id);

  if (!studio) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
       <Link
             href={`/booking/${studio._id}`}
             className="inline-block rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
             >
             Book This Studio →
      </Link>

        {/* Studio Details Card */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-lg">

          {/* Studio Image */}
          <Image
            src={studio.image}
            alt={studio.name}
            width={1200}
            height={700}
            unoptimized
            priority
            className="h-[350px] w-full object-cover md:h-[480px]"
          />

          <div className="p-8 md:p-12">

            {/* Category and Availability */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
                {studio.category} Studio
              </span>

              <span
                className={`rounded-full px-4 py-2 text-sm font-bold ${
                  studio.available
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {studio.available ? "Available" : "Not Available"}
              </span>
            </div>

            {/* Studio Name */}
            <h1 className="mt-6 text-3xl font-extrabold text-gray-900 md:text-5xl">
              {studio.name}
            </h1>

            {/* Location */}
            <p className="mt-4 text-gray-500">
              📍 {studio.location}, Bangladesh
            </p>

            {/* Description */}
            <p className="mt-8 leading-8 text-gray-600">
              {studio.description}
            </p>

            {/* Price */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                Price
              </p>

              <p className="mt-2 text-3xl font-extrabold text-orange-500">
                ৳{studio.price.toLocaleString("en-BD")}
                <span className="text-base font-normal text-gray-500">
                  {" "}/ {studio.priceUnit}
                </span>
              </p>
            </div>

            {/* Booking Button */}
            <button
              disabled={!studio.available}
              className="mt-8 w-full rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {studio.available
                ? "Book This Studio →"
                : "Currently Unavailable"}
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}
