// src/components/AboutSection.jsx

import React from "react";

function AboutSection() {
  const handleScrollTo = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 px-4 md:px-8 bg-darker-bg text-primary-text overflow-hidden"
    >
      {/* Background Gradien dengan Opacity Rendah */}
      <div
        className="absolute inset-0 z-0 opacity-10" // Opacity rendah untuk background halus
        style={{
          background:
            "linear-gradient(45deg, var(--tw-colors-site-blue), var(--tw-colors-site-green))",
        }}
      ></div>

      {/* Logo Site Trans di Background dengan Opacity */}
      <img
        src="/logo-removebg-preview.png"
        alt="Site Trans Logo Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-5" // Logo sebagai background samar
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-center mb-16 text-site-blue">
          Tentang Site Trans
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="md:w-1/2">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center h-full border-4 border-site-green">
              <img
                src="/logo-removebg-preview.png"
                alt="Site Trans Logo"
                className="h-40 md:h-64 object-contain mb-6"
              />
              <p className="text-site-green text-2xl md:text-3xl font-heading text-center leading-snug">
                "Kenyamanan & Kepercayaan di Setiap Perjalanan"
              </p>
            </div>
          </div>
          <div className="md:w-1/2 text-lg md:text-xl leading-relaxed text-secondary-text">
            <p className="mb-6 md:mb-8">
              Site Trans adalah penyedia layanan sewa mobil terpercaya yang
              berlokasi di Purwokerto, Jawa Tengah. Berkomitmen untuk memberikan
              pengalaman perjalanan yang nyaman, aman, dan efisien, kami hadir
              sebagai solusi transportasi Anda yang selalu prima.
            </p>
            <p className="mb-6 md:mb-8">
              Dengan armada kendaraan yang terawat prima dan beragam pilihan,
              mulai dari mobil keluarga hingga minibus eksekutif, kami siap
              menemani setiap perjalanan Anda. Baik untuk keperluan pribadi,
              bisnis, maupun wisata rombongan, kami memastikan armada yang tepat
              untuk kebutuhan Anda.
            </p>
            <p className="mb-6 md:mb-8">
              Kepuasan pelanggan adalah prioritas utama kami.Didukung oleh tim
              profesional dan sopir berpengalaman yang berlisensi, Site Trans
              selalu siap melayani Anda dengan sepenuh hati, memastikan setiap
              kilometer perjalanan Anda adalah pengalaman yang menyenangkan dan
              bebas khawatir.
            </p>
            <a
              href="#contact"
              className="inline-block bg-site-green hover:bg-green-700 text-white font-bold font-heading py-3 px-8 rounded-full
                         transition duration-300 text-lg shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-site-green focus:ring-opacity-50 mt-4"
              onClick={(event) => {
                // Mengubah 'e' menjadi 'event'
                event.preventDefault(); // Menggunakan 'event' untuk preventDefault
                handleScrollTo("contact"); // Kemudian memanggil handleScrollTo tanpa event object
              }}
            >
              Konsultasikan Perjalanan Anda
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
