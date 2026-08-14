"use client";

import {Suspense, useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useSearchParams } from "next/navigation";

 function ProductsContent() {
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
  const fetchProducts = async () => {
    try {
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
  };

  fetchProducts();
}, [category]);
const filteredProducts = products.filter((product) => {
  const query = search.toLowerCase().trim();

  return (
    product.title?.toLowerCase().includes(query) ||
    product.category?.toLowerCase().includes(query) ||
    product.brand?.toLowerCase().includes(query) ||
    product.description?.toLowerCase().includes(query)
  );
});
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Shop All Products
      </h1>

      <div className="mb-8">
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full max-w-xl h-11 px-5 rounded-full border border-gray-300 bg-white text-gray-900 outline-none focus:border-blue-500"/>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {filteredProducts.length === 0 ? (

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

  filteredProducts.map((product) => (

    <div
      key={product.id}
      className="bg-white rounded-xl p-4 shadow-sm"
    >

      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain"
      />

      <h2 className="font-semibold text-gray-900 mt-4">
        {product.title}
      </h2>

      <p className="text-blue-600 font-bold mt-2">
        ₹{product.price}
      </p>

      <p className="text-sm text-gray-500 mt-1">
        ⭐ {product.rating}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition cursor-pointer"
      >
        Add to Cart
      </button>

    </div>

  ))
)}
      </div>
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