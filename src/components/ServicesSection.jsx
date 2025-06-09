// src/components/ServicesSection.jsx
import React from "react";
// Opsional: Instal react-icons untuk ikon yang lebih profesional
// import { FaCar, FaPlaneDeparture, FaMapMarkedAlt, FaBuilding } from 'react-icons/fa';

function ServicesSection() {
  const services = [
    {
      icon: "🚗", // Ganti dengan <FaCar /> jika menggunakan react-icons
      title: "Sewa Harian / Mingguan",
      description:
        "Fleksibilitas sewa mobil untuk kebutuhan harian, mingguan, atau lebih lama.",
    },
    {
      icon: "✈️", // Ganti dengan <FaPlaneDeparture />
      title: "Antar-Jemput Bandara",
      description:
        "Layanan antar-jemput yang nyaman dan tepat waktu ke/dari bandara.",
    },
    {
      icon: "🗺️", // Ganti dengan <FaMapMarkedAlt />
      title: "Paket Wisata",
      description:
        "Rencanakan perjalanan wisata Anda dengan paket mobil dan sopir.",
    },
    {
      icon: "🏢", // Ganti dengan <FaBuilding />
      title: "Sewa Jangka Panjang",
      description:
        "Solusi transportasi terintegrasi untuk kebutuhan bisnis dan korporat.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 md:px-8 bg-light-bg text-dark-text"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-site-blue">
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl text-center transform hover:scale-102 transition duration-300 ease-in-out border border-gray-light"
            >
              <div className="text-5xl mb-4 text-site-green">
                {service.icon}
              </div>{" "}
              {/* Warna ikon hijau */}
              <h3 className="text-2xl font-semibold font-heading mb-2 text-dark-text">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
