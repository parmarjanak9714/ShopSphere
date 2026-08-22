export default function HelpCenter() {
  const helpItems = [
    {
      icon: "🛍️",
      title: "Shopping Help",
      description:
        "Learn how to search products, browse categories, and add products to your cart.",
    },
    {
      icon: "🔐",
      title: "Account & Login",
      description:
        "Get help with account access, login, registration, and account-related questions.",
    },
    {
      icon: "📦",
      title: "Orders & Shipping",
      description:
        "Find information about orders, delivery, shipping, and order-related issues.",
    },
    {
      icon: "↩️",
      title: "Returns & Refunds",
      description:
        "Learn about returns, refunds, and what to do if there is an issue with a product.",
    },
    {
      icon: "💳",
      title: "Payments",
      description:
        "Get information about checkout and payment-related questions.",
    },
    {
      icon: "📞",
      title: "Contact Support",
      description:
        "Still need help? Contact the ShopSphere support team for assistance.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Help <span className="text-blue-600">Center</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Find helpful information and answers to common questions
            about shopping on ShopSphere.
          </p>
        </div>

        {/* Help Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {item.icon}
              </div>

              <h2 className="text-lg font-bold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Support */}
        <div className="mt-12 rounded-2xl bg-blue-600 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">
            Still need help?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100">
            If you couldn't find the information you were looking for,
            our support team is here to help.
          </p>

          <a
            href="/contact"
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-white
              px-6
              py-3
              font-semibold
              text-blue-600
              transition
              hover:bg-blue-50
            "
          >
            Contact Us →
          </a>
        </div>

      </div>
    </main>
  );
}