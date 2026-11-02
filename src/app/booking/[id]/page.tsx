
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BookingPage() {
  const { id } = useParams<{ id: string }>();

  const [bookingDate, setBookingDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState("1");
  const [message, setMessage] = useState("");

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      studioId: id,
      bookingDate,
      startTime,
      duration: Number(duration),
    });

    setMessage("Booking form submitted successfully!");
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-12">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-lg">
        <Link
          href={`/studios/${id}`}
          className="font-semibold text-orange-500"
        >
          Back to Studio
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Book Your Studio
        </h1>

        <p className="mt-2 text-gray-600">
          Fill in the details to reserve your studio.
        </p>

        <form onSubmit={handleBooking} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block font-medium">
              Booking Date
            </label>
            <input
              type="date"
              required
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Start Time
            </label>
            <input
              type="time"
              required
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Duration
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3"
            >
              <option value="1">1 Hour</option>
              <option value="2">2 Hours</option>
              <option value="3">3 Hours</option>
              <option value="4">4 Hours</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Confirm Booking
          </button>

          {message && (
            <p className="text-center font-medium text-green-600">
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
