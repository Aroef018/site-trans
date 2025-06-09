// src/components/FleetCard.jsx
import React from "react";

function FleetCard({ car }) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-102 transition duration-300 ease-in-out border border-gray-light">
      <img
        src={car.imageUrl}
        alt={car.name}
        className="w-full h-56 object-cover object-center" // Tinggi gambar lebih besar
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold font-heading text-site-blue mb-3">
          {car.name}
        </h3>
        <div className="text-gray-700 text-base mb-4 space-y-1">
          <p>
            <span className="font-semibold">Kategori:</span>{" "}
            {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
          </p>
          <p>
            <span className="font-semibold">Kapasitas:</span> {car.capacity}
          </p>
          <p>
            <span className="font-semibold">Transmisi:</span> {car.transmission}
          </p>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-gray-700 text-lg block mb-1">
            Fitur Utama:
          </span>
          <ul className="list-disc list-inside text-gray-600 text-sm">
            {car.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="text-site-green text-2xl font-bold font-heading mb-4">
          {car.price}
        </div>
        <button className="w-full bg-site-green hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-site-green focus:ring-opacity-50">
          Sewa Sekarang
        </button>
      </div>
    </div>
  );
}

export default FleetCard;
