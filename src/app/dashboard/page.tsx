
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

const DashboardPage = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
    }
  }, [session, isPending, router]);

  if (isPending || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-semibold text-gray-600">
          Loading Dashboard...
        </p>
      </div>
    );
  }

  const user = session.user;

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Dashboard!
          </h1>

          <p className="mt-2 text-gray-600">
            Manage your StudioSpace account.
          </p>

          <div className="mt-8 flex items-center gap-4">
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="h-16 w-16 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl font-bold text-orange-600">
                {user.name?.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <h2 className="text-xl font-bold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl bg-orange-50 p-6">
              <h3 className="font-semibold text-gray-700">
                My Bookings
              </h3>
              <p className="mt-2 text-3xl font-bold text-orange-500">0</p>
            </div>

            <div className="rounded-xl bg-blue-50 p-6">
              <h3 className="font-semibold text-gray-700">
                Saved Studios
              </h3>
              <p className="mt-2 text-3xl font-bold text-blue-500">0</p>
            </div>

            <div className="rounded-xl bg-green-50 p-6">
              <h3 className="font-semibold text-gray-700">
                Account Status
              </h3>
              <p className="mt-2 text-xl font-bold text-green-600">
                Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
