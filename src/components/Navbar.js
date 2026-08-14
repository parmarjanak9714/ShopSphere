"use client";

import { ShoppingCart, User, Search, MoreVertical,Sun,Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useSearchParams } from "next/navigation";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
const [search, setSearch] = useState("");
  const { cart} = useCart();
  const searchParams = useSearchParams();
const category = searchParams.get("category");

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0b0f14]/95 backdrop-blur-xl border-b border-white/10 shadow-sm">
      <div className="h-16 px-6 md:px-10 lg:px-14 flex items-center justify-between">
  
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/janak.png"
            alt="ShopSphere Logo"
            width={130}
            height={55}
            priority
            className="w-24 sm:w-28 md:w-32 h-auto object-contain"/>
        </Link>

        
        <div className="hidden md:flex relative w-72 lg:w-96">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e)=> setSearch(e.target.value)}
            onKeyDown={(e) => {
  if (e.key === "Enter" && search.trim()) {
    const query = search.trim().toLowerCase();
const categoryKeywords = {
  smartphone: "smartphones",
  smartphones: "smartphones",
  phone: "smartphones",
  phones: "smartphones",
  mobile: "smartphones",
  mobiles: "smartphones",

  laptop: "laptops",
  laptops: "laptops",

  tablet: "tablets",
  tablets: "tablets",

  shirt: "mens-shirts",
  shirts: "mens-shirts",

  shoes: "mens-shoes",
  shoe: "mens-shoes",

  beauty: "beauty",
  cosmetics: "beauty",

  grocery: "groceries",
  groceries: "groceries",
};

    const matchedCategory = categoryKeywords[query];

if (matchedCategory) {
  router.push(
    `/products?category=${encodeURIComponent(matchedCategory)}&search=${encodeURIComponent(search)}`
  );
} else {
  const url = category
    ? `/products?category=${encodeURIComponent(category)}&search=${encodeURIComponent(search)}`
    : `/products?search=${encodeURIComponent(search)}`;

  router.push(url);
}
  }
}}
  className="w-full h-10 pl-5 pr-11 rounded-full bg-white/5 border border-white/10 text-[13px] text-white placeholder:text-gray-400 outline-none
           focus:bg-white/10 focus:border-blue-500/60 transition-all"/>
          <Search
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              w-4.5
              h-4.5
              text-gray-300"/>
        </div>
        <button type="button" onClick={toggleTheme}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Toggle theme">
                 {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
              ) : (
                 <Moon className="w-5 h-5" />
               )}
          </button>

        
        <div className="flex items-center gap-4 md:gap-6">
          
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/products"
              className="text-[14px] font-semibold text-white hover:text-blue-400 transition"
            >
              Shop
            </Link>

            <Link
              href="/categories"
              className="hidden lg:block text-[14px] font-semibold text-white hover:text-blue-400 transition"
            >
              Categories
            </Link>

            <Link
              href="/deals"
              className="hidden lg:block text-[14px] font-semibold text-white hover:text-blue-400 transition"
            >
              Deals
            </Link>

            <Link
              href="/about"
              className="hidden lg:block text-[14px] font-semibold text-white hover:text-blue-400 transition"
            >
              About
            </Link>
          </div>

        
          <div className="relative md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white hover:text-blue-400 transition"
              aria-label="Open menu"
            >
              <MoreVertical className="w-5 h-5" />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-8 w-36 rounded-md bg-[#252c34] border border-white/10 py-2 shadow-lg">
                <Link
                  href="/products"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Shop
                </Link>

                <Link
                  href="/categories"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Categories
                </Link>

                <Link
                  href="/deals"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Deals
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  About
                </Link>
              </div>
            )}
          </div>

          
          <div className="hidden md:block w-px h-6 bg-white/10" />

          
          <Link
            href="/login"
            className="flex items-center gap-1.5 text-white hover:text-blue-400 transition"
          >
            <User className="w-4.5 h-4.5" />

            <span className="hidden sm:block text-[14px] font-medium">
              Login
            </span>
          </Link>

        
          <div className="hidden md:block w-px h-6 bg-white/10" />

          
          <Link
            href="/cart"
            className="relative text-white hover:text-blue-400 transition"
          >
            <ShoppingCart className="w-5.25b h-5.25" />

            <span
              className="
                absolute
                -top-2
                -right-2
                w-3.75
                h-3.75
                rounded-full
                bg-blue-600
                text-white
                text-[9px]
                font-bold
                flex
                items-center
                justify-center">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
