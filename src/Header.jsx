import React from "react";
import logo from  "./assets/logo.svg"
import { Link } from "react-router-dom";

export default function Header() {
  return (
   <div className="bg-gray-50 fixed z-50 w-full ">
  {/* Header */}
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-16" />
        </div>

        {/* Navigation - Centered */}
        <nav className="flex-1 flex justify-center">
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-red-600 font-bold"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black  font-bold "
            >
              Properties
            </a>
            <a
              href="#"
              className="text-black font-bold "
            >
              Bookings
            </a>
            <a
              href="#"
              className="text-black font-bold"
            >
              About Us
            </a>
          </div>
        </nav>
      </div>
    </div>
  </header>



      {/* Hero Section */}
      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
       
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Perfect Stay with{" "}
              <span className="text-red-600">StaySphere</span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Discover unique rental properties tailored to your needs. Book
              effortlessly, stay comfortably.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium rounded-md transition-colors">
              Browse Properties
            </button>
          </div>

    
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://a0.muscache.com/im/pictures/miso/Hosting-784656741083002063/original/2c49a7ea-ad7e-449e-b7ce-0e085a6b8f9a.jpeg?im_w=240"
                alt="Modern living room with large windows and contemporary furniture"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main> */}
    </div>
  );
}
