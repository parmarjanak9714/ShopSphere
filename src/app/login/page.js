"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/");


    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-5 py-12">

      <div className="w-full max-w-md">

        {/* LOGO / BRAND */}
        <div className="text-center mb-8">

          <Link
            href="/"
            className="text-3xl font-extrabold text-blue-600">
            ShopSphere
          </Link>

          <h1 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to continue shopping with ShopSphere
          </p>

        </div>


        {/* LOGIN CARD */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-7 sm:p-9">

          <form onSubmit={handleLogin} className="space-y-5">

            {/* ERROR */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}


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
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  bg-white
                  px-4
                  py-3
                  text-gray-900
                  outline-none
                  transition
                  focus:border-blue-600
                  focus:ring-2
                  focus:ring-blue-100"required/>
            </div>


            {/* PASSWORD */}
            <div>

              <div className="flex items-center justify-between">

                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer">
                  Forgot Password?
                </button>
              </div>


              <div className="relative mt-2">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-3
                    pr-20
                    text-gray-900
                    outline-none
                    transition
                    focus:border-blue-600
                    focus:ring-2
                    focus:ring-blue-100"required/>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    font-semibold
                    text-blue-600
                    hover:text-blue-700 cursor-pointer">
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-blue-600
                py-3.5
                font-semibold
                text-white
                transition
                hover:bg-blue-700
                disabled:cursor-not-allowed
                disabled:opacity-60 cursor-pointer">
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>


          {/* REGISTER LINK */}
          <div className="mt-7 border-t border-gray-200 pt-6 text-center">

            <p className="text-sm text-gray-500 cursor-pointer">
              Don't have an account?{" "}

              <Link
                href="/register"
                className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Create an account
              </Link>

            </p>

          </div>

        </div>


        {/* BACK HOME */}
        <div className="mt-6 text-center">

          <Link
            href="/"
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            ← Back to ShopSphere
          </Link>

        </div>

      </div>

    </main>
  );
}