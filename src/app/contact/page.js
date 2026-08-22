"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you! Your message has been submitted.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-16">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Contact <span className="text-blue-600">Us</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-500">
            Have a question or need help? We'd love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Left */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">

            <h2 className="text-2xl font-bold text-gray-900">
              Get in Touch
            </h2>

            <p className="mt-3 leading-7 text-gray-500">
              Whether you have a question about our products, shopping
              experience, or anything else, feel free to contact us.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="font-semibold text-gray-900">
                  Email
                </h3>
                <p className="mt-1 text-gray-500">
                  support@shopsphere.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Support
                </h3>
                <p className="mt-1 text-gray-500">
                  We're here to help with your shopping experience.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  Business Hours
                </h3>
                <p className="mt-1 text-gray-500">
                  Monday - Saturday, 10:00 AM - 6:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
          >

            <div className="grid gap-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 cursor-pointer"
              >
                Send Message
              </button>

            </div>
          </form>

        </div>
      </div>
    </main>
  );
}