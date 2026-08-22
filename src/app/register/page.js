"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }
        alert("Account created successfully!");

        window.location.href = "/login";
    } catch (error) {
      console.error("Register error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-md">

        {/* BRAND */}
        <div className="text-center mb-8">

          <Link
            href="/"
            className="text-3xl font-extrabold text-blue-600">
            ShopSphere
          </Link>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Create Your Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join ShopSphere and start shopping today
          </p>

        </div>


        {/* REGISTER CARD */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-7 sm:p-9">

          <form onSubmit={handleRegister} className="space-y-5">

            {/* ERROR */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* SUCCESS */}
            {success && (
              <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-600">
                {success}
              </div>
            )}


            {/* NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required/>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required
                />
              </div>

            </div>


            {/* EMAIL */}
            <div>

              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                required/>

            </div>


            {/* PASSWORD */}
            <div>

              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="relative mt-2">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required/>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 cursor-pointer">
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}
            <div>

              <label className="block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <div className="relative mt-2">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  required/>

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 cursor-pointer">
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700 transition disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer">
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>


          {/* LOGIN LINK */}
          <div className="mt-7 border-t border-gray-200 pt-6 text-center">

            <p className="text-sm text-gray-500 cursor-pointer">
              Already have an account?{" "}

              <Link
                href="/login"
                className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">
                Login
              </Link>

            </p>

          </div>

        </div>


        {/* HOME */}
        <div className="mt-6 text-center">

          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-700">
            ← Back to ShopSphere
          </Link>

        </div>

      </div>

    </main>
  );
}