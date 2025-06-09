// src/components/FleetSection.jsx
import React, { useState } from "react";
import FleetCard from "./FleetCard";
import { fleet } from "../data/fleetData";

function FleetSection() {
  const [filter, setFilter] = useState("all");

  const filteredFleet = fleet.filter((car) => {
    if (filter === "all") return true;
    return car.category === filter;
  });

  return (
    <section
      id="fleet"
      className="py-20 px-4 md:px-8 bg-dark-bg text-primary-text"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-site-green">
          Armada Kami
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12 flex-wrap gap-4">
          {" "}
          {/* flex-wrap dan gap untuk responsivitas */}
          <button
            onClick={() => setFilter("all")}
            className={`py-2 px-6 rounded-full text-lg font-semibold font-heading transition duration-300
              ${
                filter === "all"
                  ? "bg-site-blue text-white shadow-lg"
                  : "bg-gray-700 text-secondary-text hover:bg-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-site-blue focus:ring-opacity-50`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter("mobil kecil")}
            className={`py-2 px-6 rounded-full text-lg font-semibold font-heading transition duration-300
              ${
                filter === "mobil kecil"
                  ? "bg-site-blue text-white shadow-lg"
                  : "bg-gray-700 text-secondary-text hover:bg-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-site-blue focus:ring-opacity-50`}
          >
            Mobil Kecil
          </button>
          <button
            onClick={() => setFilter("minibus")}
            className={`py-2 px-6 rounded-full text-lg font-semibold font-heading transition duration-300
              ${
                filter === "minibus"
                  ? "bg-site-blue text-white shadow-lg"
                  : "bg-gray-700 text-secondary-text hover:bg-gray-600"
              } focus:outline-none focus:ring-2 focus:ring-site-blue focus:ring-opacity-50`}
          >
            Minibus
          </button>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((car) => (
            <FleetCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FleetSection;
