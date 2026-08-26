"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  
  const {
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = useCart();

  // Total quantity
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-5 md:px-10">

      {/* HEADING */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <p className="text-gray-500 mt-2">
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
        </p>
      </div>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <div className="max-w-7xl mx-auto bg-white rounded-2xl p-12 text-center shadow-sm">
          <div className="text-6xl mb-5">
            🛒
          </div>

          <h2 className="text-2xl font-semibold text-gray-900">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-2">
            Add some products to your cart and they will appear here.
          </p>

          <a
            href="/products"
            className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition"
          >
            Continue Shopping
          </a>
        </div>
      ) : (

        /* CART CONTENT */
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* PRODUCTS */}
          <div className="lg:col-span-2 space-y-4">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row gap-5"
              >

                {/* IMAGE */}
                <div className="shrink-0 w-full sm:w-32 h-32 flex items-center justify-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex-1">

                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    ⭐ {item.rating}
                  </p>

                  <p className="text-blue-600 font-bold text-lg mt-3">
                    ₹{item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-4">

                    <button onClick={() => decreaseQuantity(item.id)}
                            className="cursor-pointer w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100">-</button>
                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button onClick={() => increaseQuantity(item.id)}
                            className=" cursor-pointer w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100">+
                    </button>
                  </div>
                </div>
                {/* REMOVE */}
                <button onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 font-medium self-start cursor-pointer">Remove</button>
              </div>
            ))}

          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">

            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="flex justify-between mt-6 text-gray-600">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between mt-3 text-gray-600">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mt-3 text-gray-600">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">
                FREE
              </span>
            </div>

            <div className="border-t border-gray-200 my-5" />

            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <button
            onClick={() => router.push("/checkout")}
              className="cursor-pointer w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-full transition"
            >
              Proceed to Checkout
            </button>

            <a
              href="/products"
              className="block text-center text-blue-600 hover:text-blue-700 font-medium mt-4"
            >
              Continue Shopping
            </a>

          </div>

        </div>
      )}

    </main>
  );
}