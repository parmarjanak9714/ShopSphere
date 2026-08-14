"use client";

import Link from "next/link";
import {
  Code2,
  ShoppingBag,
  Search,
  Layers,
  ShoppingCart,
  Moon,
  Smartphone,
  Database,
  GitBranch,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* ================= HERO ================= */}
      <section className="bg-gray-900 text-white px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            About ShopSphere
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            A Modern E-Commerce
            <span className="block text-blue-400">
              Shopping Experience
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
            ShopSphere is a modern e-commerce web application built to
            demonstrate a real-world online shopping experience with
            dynamic products, categories, search, deals, cart management,
            responsive design, and theme switching.
          </p>

        </div>
      </section>


      {/* ================= ABOUT PROJECT ================= */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                About The Project
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                Built to understand real-world e-commerce development
              </h2>

              <p className="mt-5 text-gray-600 leading-relaxed">
                ShopSphere was developed as a practical e-commerce project
                to understand how a modern shopping website works from the
                user interface to API integration and application state
                management.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                The application uses dynamic product and category data from
                the DummyJSON API and presents it through a responsive
                interface built with Next.js, React, and Tailwind CSS.
              </p>

            </div>


            {/* PROJECT HIGHLIGHT CARD */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm">

              <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShoppingBag className="w-7 h-7" />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                What ShopSphere Includes
              </h3>

              <div className="mt-5 space-y-3">

                {[
                  "Dynamic product browsing",
                  "Category-based shopping",
                  "Product search and filtering",
                  "Deals and discounted products",
                  "Global shopping cart",
                  "Responsive user interface",
                  "Light and dark theme",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= TECHNOLOGIES ================= */}
      <section className="bg-white border-y border-gray-200 px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Technology Stack
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Technologies Used
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              The project combines modern frontend technologies with API
              integration and shared application state.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* NEXT.JS */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <Code2 className="w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold text-lg">
                Next.js
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Used as the main framework with the App Router and
                file-based page structure.
              </p>
            </div>


            {/* REACT */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <Layers className="w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold text-lg">
                React
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Used to build reusable components and interactive
                user interfaces.
              </p>
            </div>


            {/* TAILWIND */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <Smartphone className="w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold text-lg">
                Tailwind CSS
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Used for responsive layouts, styling, spacing,
                typography, and UI design.
              </p>
            </div>


            {/* API */}
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition">
              <Database className="w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold text-lg">
                DummyJSON API
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                Provides dynamic product and category data for
                the shopping experience.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Core Features
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              What Users Can Do
            </h2>

          </div>


          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* SEARCH */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Search className="w-8 h-8 text-blue-600" />

              <h3 className="mt-5 text-xl font-bold">
                Product Search
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                Users can search products using information such as
                product title, category, brand, and description.
              </p>
            </div>


            {/* CATEGORIES */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Layers className="w-8 h-8 text-blue-600" />

              <h3 className="mt-5 text-xl font-bold">
                Categories
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                Products are organized into categories so users can
                quickly discover products related to their interests.
              </p>
            </div>


            {/* DEALS */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <ShoppingBag className="w-8 h-8 text-blue-600" />

              <h3 className="mt-5 text-xl font-bold">
                Deals & Offers
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                The Deals section displays products with discount
                information and original and discounted prices.
              </p>
            </div>


            {/* CART */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <ShoppingCart className="w-8 h-8 text-blue-600" />

              <h3 className="mt-5 text-xl font-bold">
                Shopping Cart
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                Users can add products to a shared shopping cart
                from different sections of the application.
              </p>
            </div>


            {/* THEME */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Moon className="w-8 h-8 text-blue-600" />

              <h3 className="mt-5 text-xl font-bold">
                Light & Dark Theme
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                A theme switching system allows users to change
                between light and dark visual modes.
              </p>
            </div>


            {/* RESPONSIVE */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <Smartphone className="w-8 h-8 text-blue-600" />

              <h3 className="mt-5 text-xl font-bold">
                Responsive Design
              </h3>

              <p className="mt-3 text-gray-500 leading-relaxed">
                The interface adapts to mobile, tablet, and desktop
                screen sizes using responsive layouts.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CHALLENGES ================= */}
      <section className="bg-gray-900 text-white px-6 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Development Journey
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Challenges & Solutions
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-400">
              Building the application involved solving practical
              problems related to APIs, state management, navigation,
              responsiveness, and UI behaviour.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* API */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6">
              <Database className="w-7 h-7 text-blue-400" />

              <h3 className="mt-4 text-xl font-bold">
                API Integration
              </h3>

              <p className="mt-3 text-gray-400 leading-relaxed">
                Product and category data is fetched dynamically from
                an external API. Loading and error states are handled
                so the interface does not remain blank while data is
                being requested.
              </p>
            </div>


            {/* CART */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6">
              <ShoppingCart className="w-7 h-7 text-blue-400" />

              <h3 className="mt-4 text-xl font-bold">
                Global Cart State
              </h3>

              <p className="mt-3 text-gray-400 leading-relaxed">
                Cart information needs to be available across multiple
                pages. Context API is used to share cart state and
                cart actions throughout the application.
              </p>
            </div>


            {/* SEARCH */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6">
              <Search className="w-7 h-7 text-blue-400" />

              <h3 className="mt-4 text-xl font-bold">
                Search & Filtering
              </h3>

              <p className="mt-3 text-gray-400 leading-relaxed">
                The search functionality was designed to look through
                multiple product fields instead of relying only on
                the product title.
              </p>
            </div>


            {/* RESPONSIVE */}
            <div className="border border-white/10 bg-white/5 rounded-2xl p-6">
              <Smartphone className="w-7 h-7 text-blue-400" />

              <h3 className="mt-4 text-xl font-bold">
                Responsive Interface
              </h3>

              <p className="mt-3 text-gray-400 leading-relaxed">
                Different screen sizes require different layouts.
                Responsive Tailwind CSS utilities were used to keep
                the interface usable across devices.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= APPLICATION FLOW ================= */}
      <section className="px-6 py-16">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Application Flow
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            How ShopSphere Works
          </h2>


          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-5">

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Database className="mx-auto w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold">
                API
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Product data comes from the DummyJSON API.
              </p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Code2 className="mx-auto w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold">
                React State
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                API data is stored and managed using React state.
              </p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <Layers className="mx-auto w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold">
                Components
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Reusable components display and manage the data.
              </p>
            </div>


            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <ShoppingBag className="mx-auto w-8 h-8 text-blue-600" />

              <h3 className="mt-4 font-bold">
                User Experience
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Users interact with products, deals, categories and cart.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= DEVELOPER ================= */}
      <section className="bg-white border-t border-gray-200 px-6 py-16">

        <div className="max-w-4xl mx-auto text-center">

          <GitBranch className="mx-auto w-10 h-10 text-blue-600" />

          <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Project Developer
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Built & Designed by Janak Parmar
          </h2>

          <p className="mt-5 text-gray-500 leading-relaxed max-w-2xl mx-auto">
            This project was developed as a practical learning and
            portfolio project to understand modern web development,
            API integration, state management, responsive UI
            development, and real-world e-commerce application structure.
          </p>


          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
              href="https://github.com/parmarjanak9714"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
            >
              View GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/janak-parmar08111997"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              LinkedIn Profile
            </a>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-blue-600 px-6 py-16 text-white text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Explore ShopSphere?
        </h2>

        <p className="mt-4 text-blue-100 max-w-xl mx-auto">
          Browse products, discover deals, and experience the
          ShopSphere shopping interface.
        </p>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 mt-7 px-7 py-3 rounded-lg bg-white text-blue-600 font-bold hover:bg-gray-100 transition"
        >
          Start Shopping
          <ArrowRight className="w-5 h-5" />
        </Link>

      </section>

    </main>
  );
}