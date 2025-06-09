// src/components/WhyChooseUsSection.jsx
import React from "react";

function WhyChooseUsSection() {
  const advantages = [
    {
      icon: "✔️",
      title: "Armada Terawat",
      description:
        "Semua kendaraan kami selalu dalam kondisi prima dan terawat secara rutin.",
    },
    {
      icon: "💲",
      title: "Harga Kompetitif",
      description:
        "Kami menawarkan harga sewa yang transparan dan bersaing di Purwokerto.",
    },
    {
      icon: "👨‍✈️",
      title: "Sopir Berpengalaman",
      description:
        "Didukung sopir profesional dan berlisensi yang mengutamakan keselamatan Anda.",
    },
    {
      icon: "⏰",
      title: "Pelayanan 24/7",
      description:
        "Siap melayani kebutuhan transportasi Anda kapanpun, dimanapun.",
    },
    {
      icon: "👍",
      title: "Fleksibel & Mudah",
      description:
        "Proses pemesanan yang cepat dan mudah sesuai dengan kebutuhan Anda.",
    },
    {
      icon: "🔒",
      title: "Prioritas Keamanan",
      description:
        "Keselamatan dan kenyamanan Anda adalah fokus utama perjalanan kami.",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 px-4 md:px-8 bg-dark-bg text-primary-text"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-site-green">
          Mengapa Memilih Site Trans?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-xl text-center transform hover:scale-102 transition duration-300 ease-in-out border border-gray-700"
            >
              <div className="text-5xl mb-4 text-site-blue">
                {advantage.icon}
              </div>{" "}
              {/* Warna ikon biru */}
              <h3 className="text-2xl font-semibold font-heading mb-2 text-primary-text">
                {advantage.title}
              </h3>
              <p className="text-secondary-text leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
