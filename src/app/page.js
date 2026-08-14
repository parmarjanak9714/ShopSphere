"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    tl.fromTo(
      buttonRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );
  }, []);

  return (
    <main className="">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-122.5 overflow-hidden bg-[#202124]">

        {/* RIGHT SIDE IMAGE */}
        <div className="absolute top-0 right-0 w-[68%] h-full">

          <Image
            src="/section.png"
            alt="ShopSphere Hero Background"
            fill
            priority
            sizes="68vw"
            className="object-cover object-center"
          />

          {/* IMAGE LEFT BLEND */}
          <div className="absolute inset-0 bg-linear-to-r from-[#202124] via-[#202124]/50 via-22% to-transparent" />

        </div>


        {/* LEFT DARK BACKGROUND */}
        <div className="absolute left-0 top-0 w-[45%] h-full bg-[#202124]" />


        {/* LEFT TO RIGHT BLEND */}
<div className="absolute inset-0 bg-linear-to-r from-[#202124] via-[#202124]/70 via-40% to-transparent z-1" />


        {/* HERO CONTENT */}
        <div className="relative z-2 container mx-auto px-6 md:px-12 h-full flex items-center">

          <div
            ref={textRef}
            className="w-full max-w-150 space-y-5"
          >

            {/* BADGE */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm">

              <span className="text-blue-400 text-sm font-semibold">
                PREMIUM QUALITY
              </span>

              <span className="text-gray-400 mx-2">
                •
              </span>

              <span className="text-blue-400 text-sm font-semibold">
                BEST PRICES
              </span>

            </div>


            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Elevate Your
              <br />
              <span className="text-blue-500">
                Shopping Sphere
              </span>
            </h1>


            {/* DESCRIPTION */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              Explore a world of premium products curated just for you.
              <br />
              Fast delivery, secure payments, and a seamless experience.
            </p>
            {/* BUTTONS */}
            <div
              ref={buttonRef}
              className="flex flex-wrap items-center gap-4">
              <button
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-bold
                  py-3.5
                  px-8
                  rounded-full
                  transition-all
                  duration-300
                  shadow-lg
                  hover:shadow-blue-500/50
                  hover:-translate-y-1">
                Shop Now
                <span className="ml-2">
                  →
                </span>
              </button>
              <button
                className="
                  border
                  border-white/70
                  text-white
                  font-semibold
                  py-3.5
                  px-8
                  rounded-full
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300">
                Explore Collection
              </button>
            </div>

            {/* HERO FEATURES */}
            <div className="flex flex-wrap items-center gap-8 md:gap-10 pt-4">
              {/* FREE DELIVERY */}
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">
                  🏷️ 
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">
                    1000+ Products
                  </p>
                  <p className="text-gray-400 text-xs">
                    Explore wide collection
                  </p>
                </div>
              </div>
 

              {/* SECURE PAYMENT */}
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">
                  🔥 
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Daily Deals
                  </p>
                  <p className="text-gray-400 text-xs">
                    Fresh offers every day
                  </p>
                </div>
              </div>


              {/* SUPPORT */}
              <div className="flex items-center gap-3">
                <span className="text-blue-400 text-2xl">
                  ⭐ 
                </span>
                <div>
                  <p className="text-white text-sm font-semibold">
                    Top Rated
                  </p>
                  <p className="text-gray-400 text-xs">
                    Loved by our customers
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS SLIDER */}
<section className="w-full bg-gray-50 border-y border-gray-200 overflow-hidden py-5 shadow-sm">
  <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-7xl">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      speed={4500}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 25 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 35 },
      }}
      className="w-full !pb-0 !mb-0">
      {/* FREE SHIPPING */}
      <SwiperSlide>
  <div className="h-full flex items-center gap-4 justify-center md:justify-start px-4 py-2">
    <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-500 text-xl">
      🏷️
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 text-[15px]">
        New Arrivals
      </h3>

      <p className="text-xs text-gray-500 mt-0.5">
        Discover the latest products
      </p>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="h-full flex items-center gap-4 justify-center md:justify-start px-4 py-2">
    <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-500 text-xl">
      🔥
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 text-[15px]">
        Trending Now
      </h3>

      <p className="text-xs text-gray-500 mt-0.5">
        Most loved products this week
      </p>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="h-full flex items-center gap-4 justify-center md:justify-start px-4 py-2">
    <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-500 text-xl">
      💰
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 text-[15px]">
        Best Deals
      </h3>

      <p className="text-xs text-gray-500 mt-0.5">
        Amazing prices every day
      </p>
    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="h-full flex items-center gap-4 justify-center md:justify-start px-4 py-2">
    <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-500 text-xl">
      🎁
    </div>

    <div>
      <h3 className="font-semibold text-gray-900 text-[15px]">
        Special Offers
      </h3>

      <p className="text-xs text-gray-500 mt-0.5">
        Limited-time discounts
      </p>
    </div>
  </div>
</SwiperSlide>
    </Swiper>
  </div>
</section>
{/* WHY CHOOSE SHOPSPHERE */}
<section className="bg-white py-14 sm:py-16 md:py-20">
  <div className="container mx-auto px-5 sm:px-6 md:px-12">

    {/* SECTION HEADING */}
    <div className="flex flex-col w-full mb-10 sm:mb-12 items-center text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
        Why Choose <span className="text-blue-600">ShopSphere?</span>
      </h2>

      <p className="w-full max-w-2xl text-sm sm:text-base text-gray-500 leading-relaxed">
        Everything you need for a smooth, secure, and enjoyable shopping
        experience.
      </p>
    </div>

    {/* FEATURES */}
    <div className="flex flex-wrap -m-3 sm:-m-4">

      {/* FAST DELIVERY */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4">
        <div className="h-full border border-gray-200 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300">

          <div className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4 text-xl sm:text-2xl">
            🚚
          </div>

          <h3 className="text-lg text-gray-900 font-bold mb-2">
            Fast Delivery
          </h3>

          <p className="leading-relaxed text-sm sm:text-base text-gray-500">
            Get your favorite products delivered quickly and safely to your
            doorstep.
          </p>

        </div>
      </div>


      {/* SECURE PAYMENT */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4">
        <div className="h-full border border-gray-200 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300">

          <div className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center rounded-full bg-purple-50 text-purple-600 mb-4 text-xl sm:text-2xl">
            🔒
          </div>

          <h3 className="text-lg text-gray-900 font-bold mb-2">
            Secure Payment
          </h3>

          <p className="leading-relaxed text-sm sm:text-base text-gray-500">
            Your payment information is protected with secure and trusted
            checkout.
          </p>

        </div>
      </div>


      {/* EASY RETURNS */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4">
        <div className="h-full border border-gray-200 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300">

          <div className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center rounded-full bg-green-50 text-green-600 mb-4 text-xl sm:text-2xl">
            ↩
          </div>

          <h3 className="text-lg text-gray-900 font-bold mb-2">
            Easy Returns
          </h3>

          <p className="leading-relaxed text-sm sm:text-base text-gray-500">
            Shop with confidence with our simple and customer-friendly return
            policy.
          </p>

        </div>
      </div>


      {/* PREMIUM QUALITY */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4">
        <div className="h-full border border-gray-200 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300">

          <div className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center rounded-full bg-orange-50 text-orange-600 mb-4 text-xl sm:text-2xl">
            ⭐
          </div>

          <h3 className="text-lg text-gray-900 font-bold mb-2">
            Premium Quality
          </h3>

          <p className="leading-relaxed text-sm sm:text-base text-gray-500">
            Carefully selected products that meet our quality standards.
          </p>

        </div>
      </div>


      {/* 24/7 SUPPORT */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4">
        <div className="h-full border border-gray-200 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300">

          <div className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-4 text-xl sm:text-2xl">
            🎧
          </div>

          <h3 className="text-lg text-gray-900 font-bold mb-2">
            24/7 Support
          </h3>

          <p className="leading-relaxed text-sm sm:text-base text-gray-500">
            Our support team is always ready to help whenever you need us.
          </p>

        </div>
      </div>


      {/* EASY CHECKOUT */}
      <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4">
        <div className="h-full border border-gray-200 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-gray-300 transition-all duration-300">

          <div className="w-11 h-11 sm:w-12 sm:h-12 inline-flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4 text-xl sm:text-2xl">
            💳
          </div>

          <h3 className="text-lg text-gray-900 font-bold mb-2">
            Easy Checkout
          </h3>

          <p className="leading-relaxed text-sm sm:text-base text-gray-500">
            Enjoy a simple and smooth checkout process from cart to
            confirmation.
          </p>

        </div>
      </div>

    </div>
  </div>
</section>

   </main>
  );
}