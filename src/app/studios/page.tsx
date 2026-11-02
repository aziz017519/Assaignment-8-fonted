
import Image from "next/image";
import Link from "next/link";

export const instant = false;

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://127.0.0.1:5000";

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
const response = await fetch(
`${SERVER_URL}/api/studios`,
{ cache: "no-store" }
);

if (!response.ok) {
throw new Error(`API Error: ${response.status}`);
}

const result = await response.json();
    return result.success ? result.data : [];
  } catch (error) {
    console.error("Studio fetch error:", error);
    return [];
  }
}

export default async function StudiosPage() {
  const studios = await getStudios();

return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 text-center text-4xl font-bold text-gray-900">
          Explore Studios
        </h1>

<p className="mb-10 text-center text-gray-600">
          Find the perfect creative space for your next project.
        </p>

{studios.length === 0 ? (
          <p className="text-center text-gray-600">
            No studios found.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studios.map((studio) => (
              <div
                key={studio._id}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <Image
                  src={studio.image}
                  alt={studio.name}
                  width={600}
                  height={400}
                  unoptimized
                  className="h-56 w-full object-cover"
                />

<div className="p-6">
                  <p className="text-sm font-semibold text-orange-500">
                    {studio.category}
                  </p>

<h2 className="mt-2 text-xl font-bold">
                    {studio.name}
                  </h2>

<p className="mt-2 text-gray-600">
                    Location: {studio.location}
                  </p>

<p className="mt-3 font-semibold">
                    Price: ৳{studio.price} / {studio.priceUnit}
                  </p>

<p className="mt-3 text-sm text-gray-600">
                    {studio.description}
                  </p>

    <Link
        href={`/studios/${studio._id}`}
        className="mt-5 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
        >
         View Details
    </Link>
   </div>
</div>
))}
 </div>
  )}
  </div>
</main>
)}