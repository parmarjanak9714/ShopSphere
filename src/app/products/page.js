"use client";

import {Suspense, useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";

 function ProductsContent() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage]);
  
  useEffect(() => {
    setCurrentPage(1);
  const fetchProducts = async () => {
    
    
    try {
      setLoading(true);
      let url = "https://dummyjson.com/products";

      if (category) {
        url = `https://dummyjson.com/products/category/${category}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
    finally {
  setLoading(false);
}
  };

  fetchProducts();
}, [category]);
const filteredProducts = products.filter((product) => {
  const query = search.toLowerCase().trim();

  const matchesSearch =
    product.title?.toLowerCase().includes(query) ||
    product.category?.toLowerCase().includes(query) ||
    product.brand?.toLowerCase().includes(query) ||
    product.description?.toLowerCase().includes(query);

  const matchesPrice =
    maxPrice === "" || product.price <= Number(maxPrice);
    const matchesRating =
  minRating === "" || product.rating >= Number(minRating);

  return matchesSearch && matchesPrice && matchesRating;
});

const sortedProducts = [...filteredProducts].sort((a, b) => {
  if (sort === "price-low") {
    return a.price - b.price;
  }

  if (sort === "price-high") {
    return b.price - a.price;
  }

  if (sort === "rating") {
    return b.rating - a.rating;
  }

  return 0;
});
const totalPages = Math.ceil(
  sortedProducts.length / productsPerPage
);

const startIndex = (currentPage - 1) * productsPerPage;

const currentProducts = sortedProducts.slice(
  startIndex,
  startIndex + productsPerPage
);
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Shop All Products
      </h1>

<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  <input type="text" placeholder="Search products..." value={search} onChange={(e) => {setSearch(e.target.value); setCurrentPage(1)}}
    className="w-full max-w-xl h-11 px-5 rounded-full border border-gray-300 bg-white text-gray-900 outline-none focus:border-blue-500"/>

 <select value={sort} onChange={(e) => { setSort(e.target.value); setCurrentPage(1);}}
  className="h-10 rounded-full border border-gray-300 bg-white px-5 text-gray-700 outline-none focus:border-blue-500">
  <option value="default">Sort By: Featured</option>
  <option value="price-low">Price: Low to High</option>
  <option value="price-high">Price: High to Low</option>
  <option value="rating">Rating: High to Low</option>
</select>

<input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => { setMaxPrice(e.target.value); setCurrentPage(1);}}
  className="h-11 w-full rounded-full border border-gray-300 bg-white px-5 text-gray-700 outline-none focus:border-blue-500 sm:w-40"/>

  <select value={minRating} onChange={(e) => { setMinRating(e.target.value); setCurrentPage(1);}}
  className="h-11 w-full rounded-full border border-gray-300 bg-white px-5 text-gray-700 outline-none focus:border-blue-500 sm:w-40">
  <option value="">Rating: All</option>
  <option value="4">⭐ 4+ Rating</option>
  <option value="3">⭐ 3+ Rating</option>
  <option value="2">⭐ 2+ Rating</option>
</select>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (

  <div className="col-span-full flex min-h-[400px] items-center justify-center">
    <div className="flex flex-col items-center">

      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

      <p className="mt-4 text-sm font-medium text-gray-500">
        Loading products...
      </p>

    </div>
  </div>

) : filteredProducts.length === 0 ? (

  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
    <div className="text-5xl mb-4">
      🔍
    </div>

    <h2 className="text-xl font-semibold text-gray-900">
      No Products Found
    </h2>

    <p className="text-gray-500 mt-2">
      We couldn't find any product matching "{search}".
    </p>
  </div>

) : (

  currentProducts.map((product) => (

    <div key={product.id} className="bg-white rounded-xl p-4 shadow-sm">

      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-contain"/>

      <h2 className="font-semibold text-gray-900 mt-4">{product.title}</h2>

      <p className="text-blue-600 font-bold mt-2">₹{product.price} </p>

      <p className="text-sm text-gray-500 mt-1">⭐ {product.rating}</p>

      <button onClick={() => addToCart(product)}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition cursor-pointer">
        Add to Cart
      </button>

    </div>

  ))

)}
</div>
{!loading && totalPages > 1 && (
  <div className="mt-10 flex items-center justify-center gap-2">
    <p className="mb-3 text-center text-sm text-gray-500">
  Page <span className="font-semibold text-gray-900">{currentPage}</span>{" "}
  of <span className="font-semibold text-gray-900">{totalPages}</span>
</p>

    <button onClick={() => setCurrentPage((prev) => prev - 1)}
      disabled={currentPage === 1}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40">
      Previous
    </button>

    {Array.from({ length: totalPages }, (_, index) => (
      <button key={index + 1} onClick={() => setCurrentPage(index + 1)}
        className={`rounded-lg px-4 py-2 text-sm font-medium ${
          currentPage === index + 1
            ? "bg-blue-600 text-white"
            : "border border-gray-300 bg-white text-gray-700" }`}>
        {index + 1}
      </button>
    ))}

    <button
      onClick={() => setCurrentPage((prev) => prev + 1)}
      disabled={currentPage === totalPages}
      className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-40">
      Next
    </button>
  </div>
)}
    </main>
  );
}
export default function Products() {
  return (
    <Suspense fallback={null}>
      <ProductsContent />
    </Suspense>
  );
}