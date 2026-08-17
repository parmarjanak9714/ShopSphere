"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const heroImages = [
    "/hero_section.png",
    "/hero_section2.png",
    "/hero_section3.png",
    "/hero_kichten.png",
    "/hero_man.png",
    "/hero_dress.png",
    "/hero_shoose.png"
  ];

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
    <section className="text-gray-600 body-font   bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
     
<div className="relative mx-auto w-fit p-[2px] overflow-hidden rounded-xl">

  {/* Moving border */}
  <div className="absolute inset-[-100%] animate-border-spin">
    <div className="absolute left-1/2 top-0 h-1/2 w-1/2 bg-blue-600 blur-[1px]" />
  </div>

  {/* H1 */}
  <h1 className="
    relative
    z-10
    rounded-[10px]
    bg-white
    px-5
    pt-4
    pb-3
    text-center
    text-3xl
    font-extrabold
    tracking-tight
    text-gray-900
    sm:text-4xl
    md:text-5xl
  ">
    Shop
    <span className="text-blue-600">
      Sphere
    </span>
  </h1>

</div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <Swiper
    modules={[Autoplay]}
    slidesPerView={1}
    loop={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: false,
    }}
    speed={800}
    className="w-full">

    {heroImages.map((image, index) => (
      <SwiperSlide key={index}>
        <div className="flex items-center justify-center">
          <Image
            src={image}
            alt={`ShopSphere product ${index + 1}`}
            width={720}
            height={600}
            priority={index === 0}
            className="
              w-full
              h-auto
              rounded-2xl
              object-contain
              object-center"/>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
   
   <div ref={textRef} className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <div className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-3.5
          py-2
          rounded-full
         bg-blue-500
        shadow-[0_0_10px_rgba(59,130,246,0.8)]">
    <span className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-shadow-black-300
            sm:text-xs">
            ShopSphere • Modern Shopping
          </span>
          </div>

      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">  Everything you need.
        <br className="hidden lg:inline-block"/>All in one place.
      </h1>
      <p className="mb-8 leading-relaxed">
        Discover quality products, everyday essentials and
          great finds — all in one simple shopping experience.
        </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop Now</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Explore Categories</button>
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