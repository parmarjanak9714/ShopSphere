"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products/categories"
      );

      const data = await response.json();

      const formattedCategories = data.map((category) => ({
  name: category.name,
  slug: category.slug,
  description: `Explore our ${category.name} collection`,
  icon:
    category.slug === "smartphones"
      ? "📱"
      : category.slug === "laptops"
      ? "💻"
      : category.slug === "mens-shirts" ||
        category.slug === "womens-dresses"
      ? "👕"
      : category.slug === "mens-shoes" ||
        category.slug === "womens-shoes"
      ? "👟"
      : category.slug === "beauty"
      ? "💄"
      : category.slug === "groceries"
      ? "🛒"
      : "🛍️",
}));

      setCategories(formattedCategories);
    } catch (error) {
      console.log("Category fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCategories();
}, []);
  return (
  <main className="min-h-screen bg-gray-50 dark:bg-gray-950">

    {loading ? (
      <div className="flex min-h-60 items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">
          Loading categories...
        </p>
      </div>
    ) : (
      <>
        {/* PAGE HEADER */}
        <section className="px-6 py-16 md:py-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            ShopSphere Categories
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Explore Our Categories
          </h1>

          <p className="mt-4 mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Discover products across a wide range of categories,
            carefully selected to make your shopping experience better.
          </p>

        </section>


        {/* CATEGORY CARDS */}
        <section className="px-6 pb-20">

          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {categories.map((category) => (

              <Link
                key={category.slug}
                href={`/products?category=${encodeURIComponent(
                  category.slug
                )}`}
                className="group"
              >

                <div
                  className="
                    bg-white
                    dark:bg-gray-900
                    border border-gray-200
                    dark:border-gray-800
                    rounded-2xl
                    p-7
                    min-h-55
                    flex flex-col
                    justify-between
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl">

                  {/* ICON */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-blue-100
                      dark:bg-gray-800
                      flex
                      items-center
                      justify-center
                      text-3xl
                      transition-transform
                      duration-300
                      group-hover:scale-110">
                    {category.icon}
                  </div>


                  {/* CONTENT */}
                  <div className="mt-6">

                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h2>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>

                  </div>


                  {/* LINK */}
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      font-semibold
                      text-blue-600
                      group-hover:gap-3
                      transition-all
                    "
                  >
                    Explore Category
                    <span>→</span>
                  </div>

                </div>

              </Link>

            ))}

          </div>

        </section>
      </>
    )}

  </main>
);
}