"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const cancelOrder = async (orderId) => {
  try {
    const response = await fetch("/api/orders", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    setOrders((currentOrders) =>
      currentOrders.filter((order) => order._id !== orderId)
    );

  } catch (error) {
    console.error("Cancel order error:", error);
    alert("Something went wrong");
  }
};

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");

        const data = await response.json();

        if (response.ok) {
          setOrders(data.orders);
        }
      } catch (error) {
        console.error("Orders error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Loading orders...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>

        <p className="mt-2 text-gray-500">View your order history</p>
        <Link
          href="/products"
          className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700"
        >
          ← Continue Shopping
        </Link>

        {orders.length === 0 ? (
          <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              No Orders Yet
            </h2>

            <p className="mt-2 text-gray-500">
              You have not placed any orders yet.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-5">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white rounded-2xl border border-gray-200 p-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>

                    <p className="font-semibold text-gray-900 break-all">
                      {order._id}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Order Date</p>

                    <p className="font-semibold text-gray-900">
                      {new Date(order.createdAt).toLocaleDateString("en-IN")}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Payment</p>

                    <p className="font-semibold text-gray-900 capitalize">
                      {order.paymentMethod === "cod"
                        ? "Cash on Delivery"
                        : "Online Payment"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Order Status</p>

                    <p className="font-semibold text-blue-600 capitalize">
                      {order.orderStatus}
                    </p>
                  </div>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-5">
                  <h3 className="font-semibold text-gray-900">Order Items</h3>

                  <div className="mt-4 space-y-4">
                    {order.items.map((item) => (
                      <div
                        key={item.productId}
                        className="flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="w-14 h-14 rounded-lg object-contain border border-gray-200"
                            />
                          )}

                          <div>
                            <p className="font-medium text-gray-900">
                              {item.title}
                            </p>

                            <p className="text-sm text-gray-500">
                              ₹{item.price} × {item.quantity}
                            </p>
                          </div>
                        </div>

                        <p className="font-semibold text-gray-900">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold text-gray-900">Total</span>

                    <span className="text-xl font-bold text-blue-600">
                      ₹{order.total}
                    </span>
                  </div>
                  {order.orderStatus !== "cancelled" &&
                    order.orderStatus !== "shipped" &&
                    order.orderStatus !== "delivered" && (
                      <button
                        type="button"
                        onClick={() => cancelOrder(order._id)}
                        className="mt-5 w-full rounded-xl border border-red-200 py-3 font-semibold text-red-600 hover:bg-red-50 transition"
                      >
                        Cancel Order
                      </button>
                    )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
