"use client";

import Link from "next/link";

export default function OrderSuccess() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">

      <div className="w-full max-w-lg bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">

        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
          ✓
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Order Placed Successfully
        </h1>

        <p className="mt-3 text-gray-500">
          Thank you for your order. Your order has been successfully placed.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">

          <Link
            href="/orders"
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition"
          >
            View My Orders
          </Link>

          <Link
            href="/products"
            className="flex-1 rounded-xl border border-gray-300 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}