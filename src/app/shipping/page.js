export default function Shipping() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Shipping <span className="text-blue-600">Information</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Everything you need to know about shipping and delivery
            on ShopSphere.
          </p>
        </div>

        {/* Shipping Overview */}
        <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Shipping Overview
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            ShopSphere aims to provide a simple and convenient shopping
            experience. Shipping and delivery information may vary depending
            on the order, product, and delivery location.
          </p>
        </div>

        {/* Shipping Process */}
        <div className="grid gap-6 sm:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              📦
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Order Processing
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              After an order is placed, the order details are reviewed and
              prepared for the next stage of the delivery process.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
              🚚
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Delivery
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Delivery time can depend on the product, availability, and
              delivery location.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
              📍
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Delivery Location
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Available delivery options may vary depending on the location
              entered during the shopping or checkout process.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
              🔎
            </div>

            <h2 className="text-lg font-bold text-gray-900">
              Order Tracking
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              If tracking information is available for an order, it can be
              used to follow the delivery progress.
            </p>
          </div>

        </div>

        {/* Shipping Charges */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Shipping Charges
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Shipping charges, if applicable, may depend on the order and
            delivery details. Any applicable charges should be displayed
            before completing the order.
          </p>
        </div>

        {/* Delivery Issues */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Delivery Issues
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            If your order is delayed, damaged, or you experience another
            delivery-related issue, please contact the ShopSphere support
            team for assistance.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 rounded-2xl bg-blue-600 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">
            Need More Help?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100">
            Have a question about shipping or delivery? Our support team
            is ready to help.
          </p>

          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Contact Us →
          </a>
        </div>

      </div>
    </main>
  );
}