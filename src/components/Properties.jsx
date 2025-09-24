import React, { useState } from "react";
import { Wifi, Car, Utensils, Snowflake } from "lucide-react";

// Custom Card Component
function Card({ children, className }) {
  return (
    <div className={`border rounded-2xl bg-white shadow-md p-6 ${className || ""}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`mt-2 ${className || ""}`}>{children}</div>;
}


export default function Properties() {
  const [guests, setGuests] = useState(1);

  return (
    <>
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col lg:flex-row gap-8">
      {/* Left Side - Images */}
      <div className="flex-1">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Main property"
            className="w-full h-[400px] object-cover"
          />
        </div>
        {/* Thumbnail Images */}
        <div className="flex gap-4 mt-4 overflow-x-auto">
          {[
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600585154163-1c1be6a53c9c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a7f65b8e2?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a7f65b8e2?auto=format&fit=crop&w=600&q=80",
          ].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Thumbnail ${idx}`}
              className="w- h-24 object-cover rounded-md cursor-pointer hover:opacity-80"
            />
          ))}
        </div>
      </div>

      {/* Right Side - Availability + Booking */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        {/* Availability Calendar (Static Mock) */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Availability</h2>
          <div className="grid grid-cols-7 text-center text-sm gap-1">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  i === 22 ? "bg-gray-300" : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>

          {/* Date Picker */}
          <label className="block text-gray-700 mb-2">Check-in / Check-out</label>
          <input
            type="date"
            className="w-full border rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Guests Selector */}
          <label className="block text-gray-700 mb-2">Number of Guests</label>
          <div className="flex items-center border rounded-md overflow-hidden mb-4">
            <button
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              onClick={() => setGuests(Math.max(1, guests - 1))}
            >
              -
            </button>
            <input
              type="text"
              value={guests}
              readOnly
              className="w-12 text-center border-x"
            />
            <button
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              onClick={() => setGuests(guests + 1)}
            >
              +
            </button>
          </div>

          {/* Book Now Button */}
          <button className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Card className="max-w-2xl w-full shadow-xl">
        <h1 className="text-2xl font-bold text-gray-900">Serene Coastal Villa</h1>
        <p className="text-gray-600">Malibu, California</p>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-red-500">★★★★★</span>
          <span className="text-gray-700 text-sm">4.8 / 5</span>
        </div>

        <p className="text-2xl font-semibold mt-2">
          $750 <span className="text-lg font-normal">/ night</span>
        </p>

        <CardContent>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            About this place
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            Experience unparalleled luxury at our Serene Coastal Villa, nestled
            on the stunning cliffs of Malibu. This exquisite property offers
            breathtaking ocean views from every room, providing a tranquil escape
            from the everyday. Designed with modern elegance and comfort in mind,
            the villa features expansive living spaces, a gourmet kitchen, and
            plush bedrooms. Enjoy direct access to a private beach, a sparkling
            infinity pool, and a beautifully landscaped garden perfect for
            relaxation and entertainment.
          </p>
        </CardContent>

        <CardContent>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            What this place offers
          </h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
              <Wifi className="h-5 w-5 text-gray-700" />
              <span>Free Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
              <Snowflake className="h-5 w-5 text-gray-700" />
              <span>Air Conditioning</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
              <Utensils className="h-5 w-5 text-gray-700" />
              <span>Fully Equipped Kitchen</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
              <Car className="h-5 w-5 text-gray-700" />
              <span>Free Parking</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </>
  );
}
 