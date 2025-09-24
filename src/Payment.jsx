import React from 'react'

export default function Payment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
      {/* Error Icon */}
      <div className="h-16 w-16 flex items-center justify-center rounded-full bg-red-100 mb-4">
        <span className="text-red-600 text-3xl">⚠</span>
      </div>

      {/* Error Message */}
      <p className="text-gray-700 max-w-md mb-6 text-sm">
        This could be due to insufficient funds, an expired card, or a temporary network issue.
        <br />
        Please check your card details or try again.
      </p>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">
          Retry Payment
        </button>
        <button className="border border-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
          Modify Booking
        </button>
      </div>
    </div>
  );
}
