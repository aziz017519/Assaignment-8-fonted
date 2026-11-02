
import Link from "next/link";

export const instant = false;

const steps = [
  {
    number: "01",
    title: "Explore Studios",
    description:
      "Browse our collection of creative studios and find a space that matches your project.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Choose Your Studio",
    description:
      "Check studio details, location, category, availability, and hourly pricing.",
    icon: "🏢",
  },
  {
    number: "03",
    title: "Book Your Time",
    description:
      "Select your preferred date, starting time, and booking duration.",
    icon: "📅",
  },
  {
    number: "04",
    title: "Enjoy Your Space",
    description:
      "Get ready to create something amazing in your selected studio.",
    icon: "🎨",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            SIMPLE BOOKING PROCESS
          </span>

          <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            How StudioSpace Works
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
            Finding and booking your perfect creative space is simple.
            Follow these four easy steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl bg-white p-7 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">{step.icon}</span>
                <span className="text-3xl font-bold text-orange-200">
                  {step.number}
                </span>
              </div>

              <h2 className="mt-7 text-xl font-bold text-gray-900">
                {step.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gray-900 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-bold">
            Ready to Find Your Studio?
          </h2>

          <p className="mt-4 text-gray-300">
            Explore creative spaces and start planning your next project.
          </p>

          <Link
            href="/studios"
            className="mt-7 inline-block rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Explore Studios
          </Link>
        </div>
      </div>
    </main>
  );
}