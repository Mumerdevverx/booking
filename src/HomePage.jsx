import React from "react";
import { FiSearch } from "react-icons/fi";

const properties = [
  {
    id: 1,
    name: "Cozy City Apartment",
    price: 120,
    availability: "Mon, Jul 1 - Fri, Jul 5",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Modern Loft",
    price: 150,
    availability: "Tue, Jul 2 - Sat, Jul 6",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a7f65b8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Beachside Villa",
    price: 200,
    availability: "Wed, Jul 3 - Sun, Jul 7",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a7f65b8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Mountain Retreat",
    price: 180,
    availability: "Thu, Jul 4 - Mon, Jul 8",
    image:
      "https://images.unsplash.com/photo-1600585154163-1c1be6a53c9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "City Penthouse",
    price: 250,
    availability: "Fri, Jul 5 - Tue, Jul 9",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Country House",
    price: 130,
    availability: "Sat, Jul 6 - Wed, Jul 10",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a7f65b8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Lake Cottage",
    price: 140,
    availability: "Sun, Jul 7 - Thu, Jul 11",
    image:
      "https://images.unsplash.com/photo-1600585154163-1c1be6a53c9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Downtown Studio",
    price: 110,
    availability: "Mon, Jul 8 - Fri, Jul 12",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a7f65b8e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];



export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF4F4] ">
      {/* Hero Section */}
      <section className="flex flex-col  shadow-sm md:flex-row items-center justify-between px-8 md:px-16 py-20">
        {/* Left Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Find Your Perfect Stay 
 with <span className="text-black">StaySphere</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Discover unique rental properties tailored to your needs. Book effortlessly, stay comfortably.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-md font-bold">
            Browse Properties
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 md:ml-12">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Apartment interior"
            className="rounded-md shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-12 text-center">
      <h2 className="text-2xl font-bold text-gray-900">
        Discover Your Next Getaway
      </h2>

      <div className="mt-6 flex justify-center gap-6">
        <div className="flex items-center border rounded-md shadow-sm overflow-hidden w-[30%] max-w-xl">
          
          {/* Search Icon */}
          <span className="pl-3 text-gray-400">
            <FiSearch className="h-5 w-5" />
          </span>

          {/* Input */}
          <input
            type="text"
            placeholder="Search by location, property type, or amenities..."
            className="flex-1 px-3 py-2 focus:outline-none text-gray-700"
          />

          {/* Button */}
          
        </div>
        <button className="px-6 py-2 text-white rounded-md bg-[#4B5470]">
            Search
          </button>
      </div>
    </section>
          
           <div className="min-h-screen bg-gray-50 p-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Featured Properties
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={property.image}
              alt={property.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {property.name}
                </h3>
                <span className="text-red-600 font-bold">${property.price}</span>
                <span className="text-sm text-gray-500">/night</span>
              </div>
              <div className="mt-3 p-3 bg-gray-100 rounded text-center text-sm text-gray-700">
                <p className="font-medium">Availability Preview</p>
                <p>{property.availability}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}
 