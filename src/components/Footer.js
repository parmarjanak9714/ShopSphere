import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-[#0b0f14] body-font border-t border-white/10">
      <div className="container px-5 py-16 md:py-20 mx-auto flex md:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        
        {/* ડાબો ભાગ: લોગો અને સ્લોગન */}
        <div className="w-64 shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            
            <img src="/janak.png" alt="ShopSphere Logo" className="w-36 sm:w-40 h-auto object-contain" />
          </Link>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed">
            Your modern destination for quality products, great prices, and a seamless shopping experience.
          </p>
        </div>

        {/* જમણો ભાગ: ૪ કેટેગરીઝ કોલમ ગ્રીડ */}
        <div className="grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          
          {/* કોલમ ૧ */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white font-semibold tracking-[0.15em] text-xs mb-4">CATEGORIES</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition text-sm">Electronics</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition text-sm">Fashion</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition text-sm">Home & Living</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition text-sm">Beauty</Link></li>
            </nav>
          </div>

          {/* કોલમ ૨ */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white font-semibold tracking-[0.15em] text-xs mb-4">SHOP</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link href="/products" className="text-gray-400 hover:text-white transition text-sm">All Products</Link></li>
              <li><Link href="/deals" className="text-gray-400 hover:text-white transition text-sm">Deals</Link></li>
              <li><Link href="/cart" className="text-gray-400 hover:text-white transition text-sm">My Cart</Link></li>
              <li><Link href="/categories" className="text-gray-400 hover:text-white transition text-sm">Categories</Link></li>
            </nav>
          </div>

          {/* કોલમ ૩ */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white font-semibold tracking-[0.15em] text-xs mb-4">COMPANY</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition text-sm">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Our Story</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Privacy Policy</Link></li>
            </nav>
          </div>

          {/* કોલમ ૪ */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-white font-semibold tracking-[0.15em] text-xs mb-4">SUPPORT</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Shipping Info</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">Returns</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition text-sm">FAQs</Link></li>
            </nav>
          </div>

        </div>
      </div>

      {/* બોટમ પટ્ટો: કોપીરાઇટ અને સોશિયલ આઇકોન્સ */}
      <div className="bg-[#080b0f] border-t border-white/10">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">
          © {new Date().getFullYear()} ShopSphere. All rights reserved.
         </p>
          
          {/* સોશિયલ આઇકોન્સ */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-3">
            <a className="text-gray-400 hover:text-blue-500 transition cursor-pointer">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-blue-400 transition cursor-pointer">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-pink-500 transition cursor-pointer">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="text-gray-400 hover:text-blue-600 transition cursor-pointer">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
