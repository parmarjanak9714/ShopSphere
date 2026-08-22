"use client";

import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I search for products?",
      answer:
        "You can use the search bar in the navigation bar to search for products by name, category, brand, or related information.",
    },
    {
      question: "How can I browse products by category?",
      answer:
        "Open the Categories page and select the category you want to explore. You can then browse the available products in that category.",
    },
    {
      question: "How do I add a product to my cart?",
      answer:
        "Click the Add to Cart button on a product. The product will be added to your shopping cart, where you can manage the quantity.",
    },
    {
      question: "How can I view my cart?",
      answer:
        "Click the shopping cart icon in the navigation bar to open your cart and review the products you have added.",
    },
    {
      question: "How can I get help with an order?",
      answer:
        "For order-related questions, visit the Help Center or contact the ShopSphere support team through the Contact Us page.",
    },
    {
      question: "Where can I find shipping information?",
      answer:
        "Visit the Shipping Info page for information about order processing, delivery, shipping charges, tracking, and delivery-related issues.",
    },
    {
      question: "How can I request a return?",
      answer:
        "Visit the Returns page to review the return process and eligibility information. You can contact support if you need further assistance.",
    },
    {
      question: "What should I do if I receive a damaged or incorrect product?",
      answer:
        "Contact ShopSphere support and provide the relevant order information so the issue can be reviewed and an appropriate resolution can be provided.",
    },
    {
      question: "How can I contact ShopSphere?",
      answer:
        "You can contact the ShopSphere support team through the Contact Us page and submit your question or message.",
    },
    {
      question: "Can I use ShopSphere on mobile devices?",
      answer:
        "Yes. ShopSphere is designed with a responsive interface so you can browse and use the website on mobile, tablet, and desktop devices.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-4xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Find quick answers to common questions about shopping
            on ShopSphere.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span
                    className={`shrink-0 text-xl text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                    <p className="text-sm leading-6 text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support */}
        <div className="mt-10 rounded-2xl bg-blue-600 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">
            Still Have Questions?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100">
            If you couldn't find the answer you were looking for,
            our support team is here to help.
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