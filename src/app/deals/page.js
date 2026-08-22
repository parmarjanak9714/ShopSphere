"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function Deals() {
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=20"
        );

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Deals fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDeals();
  }, []);

  useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 0) {
        return 24 * 60 * 60;
      }

      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);
const hours = Math.floor(timeLeft / 3600);
const minutes = Math.floor((timeLeft % 3600) / 60);
const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white px-6 py-20 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Limited Time Offers
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
          Deals & Offers
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          Discover amazing products at special prices and grab the
          best deals before they are gone.
        </p>
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-blue-400">
  Hurry! Deals End In
</p>

        <div className="mt-8 flex justify-center gap-3">
  <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
    <div className="text-2xl font-bold">
      {String(hours).padStart(2, "0")}
    </div>
    <div className="text-xs text-gray-400">
      Hours
    </div>
  </div>

  <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
    <div className="text-2xl font-bold">
      {String(minutes).padStart(2, "0")}
    </div>
    <div className="text-xs text-gray-400">
      Minutes
    </div>
  </div>

  <div className="rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
    <div className="text-2xl font-bold">
      {String(seconds).padStart(2, "0")}
    </div>
    <div className="text-xs text-gray-400">
      Seconds
    </div>
  </div>
</div>

      </section>


      {/* ================= DEALS SECTION ================= */}
      <section className="px-6 py-14">

        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADING */}
          <div className="mb-10">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Today's Deals
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Best Offers For You
            </h2>

          </div>


          {/* LOADING */}
          {loading ? (

            <div className="flex justify-center py-20">
              <p className="text-gray-500">
                Loading deals...
              </p>
            </div>

          ) : (

            /* PRODUCT GRID */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="
                    relative
                    bg-white
                    rounded-2xl
                    border border-gray-200
                    p-4
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >

                  {/* ================= DISCOUNT BADGE ================= */}
                  <div className="
                    absolute
                    top-4
                    left-4
                    z-10
                    bg-red-500
                    text-white
                    text-xs
                    font-bold
                    px-3
                    py-1
                    rounded-full
                  ">
                    {Math.round(product.discountPercentage || 20)}% OFF
                  </div>


                  {/* ================= PRODUCT IMAGE ================= */}
                  <div className="h-52 flex items-center justify-center">

                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />

                  </div>


                  {/* ================= PRODUCT INFORMATION ================= */}
                  <div className="mt-4">

                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                      {product.title}
                    </h3>


                    {/* PRICE */}
                    <div className="flex items-center gap-2 mt-3">

                      <span className="text-lg font-bold text-gray-900">
                        ₹
                        {Math.round(
                          product.price -
                          (product.price *
                            (product.discountPercentage || 20)) /
                            100
                        )}
                      </span>

                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.price}
                      </span>

                    </div>


                    {/* RATING */}
                    <p className="text-sm text-gray-500 mt-2">
                      ⭐ {product.rating}
                    </p>


                    {/* ADD TO CART */}
                    <button
                      onClick={() => addToCart(product)}
                      className="
                        w-full
                        mt-4
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        font-semibold
                        py-2.5
                        rounded-lg
                        transition
                        cursor-pointer
                      "
                    >
                      Add to Cart
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}