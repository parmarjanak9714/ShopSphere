export default function Returns() {
  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Returns <span className="text-blue-600">& Refunds</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Learn about returns, refunds, and what to do if you
            experience an issue with your order.
          </p>
        </div>

        {/* Return Overview */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Return Policy
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            ShopSphere aims to provide a smooth and reliable shopping
            experience. If you experience an issue with a product or order,
            please review the return information and contact our support team
            for assistance.
          </p>
        </div>

        {/* Return Steps */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
              1️⃣
            </div>

            <h2 className="font-bold text-gray-900">
              Check Eligibility
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Review whether your product or order is eligible for a return.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-2xl">
              2️⃣
            </div>

            <h2 className="font-bold text-gray-900">
              Contact Us
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Contact the ShopSphere support team and provide your order
              details and the reason for the return.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
              3️⃣
            </div>

            <h2 className="font-bold text-gray-900">
              Return Review
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              The return request can be reviewed according to the applicable
              return conditions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
              4️⃣
            </div>

            <h2 className="font-bold text-gray-900">
              Resolution
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Once the request is approved, the applicable resolution or
              refund process can be initiated.
            </p>
          </div>

        </div>

        {/* Eligible Items */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Return Eligibility
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            Return eligibility can depend on the product, its condition,
            and the circumstances of the request. Products should be kept
            in appropriate condition when requesting a return.
          </p>
        </div>

        {/* Damaged Product */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Damaged or Incorrect Product
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            If you receive a damaged, defective, or incorrect product,
            contact ShopSphere support with the relevant order information
            so the issue can be reviewed.
          </p>
        </div>

        {/* Refund */}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Refund Information
          </h2>

          <p className="mt-3 leading-7 text-gray-600">
            If a refund is applicable and the return request is approved,
            the refund process will depend on the applicable payment and
            order conditions.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-10 rounded-2xl bg-blue-600 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">
            Need Help With a Return?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100">
            If you have questions about a return or refund, contact our
            support team.
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