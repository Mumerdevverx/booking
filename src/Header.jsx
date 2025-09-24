import React from "react";
import logo from "./assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gray-50 fixed z-50 w-full">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={logo} alt="Logo" className="w-16" />
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex justify-center">
              <div className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-red-600 font-bold hover:text-red-700 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/properties"
                  className="text-black font-bold hover:text-gray-700 transition-colors"
                >
                  Properties
                </Link>
                <Link
                  to="/booking"
                  className="text-black font-bold hover:text-gray-700 transition-colors"
                >
                  Bookings
                </Link>
                <Link
                  to="/Payment"
                  className="text-black font-bold hover:text-gray-700 transition-colors"
                >
                  About Us
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
