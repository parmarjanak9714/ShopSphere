"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const { cart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    paymentMethod: "cod",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const delivery = subtotal > 500 ? 0 : 50;

  const total = subtotal + delivery;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            productId: String(item.id),
            title: item.title,
            price: item.price,
            quantity: item.quantity,
            thumbnail: item.thumbnail,
          })),

          shippingAddress: {
            firstName: form.firstName,
            lastName: form.lastName,
            phone: form.phone,
            address: form.address,
            city: form.city,
            state: form.state,
            pincode: form.pincode,
          },

          paymentMethod: form.paymentMethod,

          subtotal,
          deliveryCharge: delivery,
          total,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Order placed successfully");

      router.push("/order-success");

  
    } catch (error) {
      console.error("Order error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>

        <p className="mt-2 text-gray-500">Complete your order</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ADDRESS */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Delivery Address
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Full Address"
                required
                rows={4}
                className="sm:col-span-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
              />

              <div className="sm:col-span-2 mt-4">
                <h2 className="text-lg font-bold text-gray-900">
                  Payment Method
                </h2>

                <div className="mt-3 space-y-3">
                  <label className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={form.paymentMethod === "cod"}
                      onChange={handleChange}
                    />

                    <span className="font-medium text-gray-900">
                      Cash on Delivery
                    </span>
                  </label>

                  <label className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={form.paymentMethod === "online"}
                      onChange={handleChange}
                    />

                    <span className="font-medium text-gray-900">
                      Online Payment
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="sm:col-span-2 w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white hover:bg-blue-700 transition cursor-pointer"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>

            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between gap-4">
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold text-gray-900">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-200 pt-5 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>

                <span className="font-medium">₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Delivery</span>

                <span className="font-medium">
                  {delivery === 0 ? "Free" : `₹${delivery}`}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-bold text-gray-900">Total</span>

                <span className="text-xl font-bold text-gray-900">
                  ₹{total}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
