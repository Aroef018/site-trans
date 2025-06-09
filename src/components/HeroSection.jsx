// src/components/HeroSection.jsx
import React from "react";

function HeroSection() {
  const handleScrollTo = (e, id) => {
    // Tambahkan 'e' di sini
    e.preventDefault(); // Tambahkan baris ini!
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center p-4 overflow-hidden"
      style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}
    >
      {/* Overlay yang sedikit lebih gelap untuk kontras maksimal */}
      <div className="absolute inset-0 bg-darker-bg opacity-75"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Judul Utama */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold font-heading text-primary-text leading-tight mb-4
                       animate-fade-in-up transform translate-y-8 opacity-0 animate-delay-200"
        >
          Perjalanan Anda, Kenyamanan Prioritas Kami
        </h1>

        {/* Sub-judul */}
        <p
          className="text-xl md:text-2xl lg:text-3xl text-secondary-text mb-12
                      animate-fade-in-up transform translate-y-8 opacity-0 animate-delay-500"
        >
          Sewa Mobil Terpercaya di Purwokerto dengan Pilihan Armada Lengkap
        </p>

        {/* Tombol Call to Action (CTA) */}
        <div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6
                        animate-fade-in-up transform translate-y-8 opacity-0 animate-delay-800"
        >
          <button
            onClick={() => handleScrollTo("fleet")}
            className="bg-site-green hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full
                       transition duration-300 text-xl shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-site-green focus:ring-opacity-50"
          >
            Lihat Armada Kami
          </button>
          <button
            onClick={() => handleScrollTo("contact")}
            className="border-2 border-site-blue text-site-blue hover:bg-site-blue hover:text-white font-bold py-4 px-10 rounded-full
                       transition duration-300 text-xl shadow-lg transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-site-blue focus:ring-opacity-50"
          >
            Hubungi Kami
          </button>
        </div>
      </div>

      {/* Efek Gradien di Bawah */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-darker-bg to-transparent z-0"></div>
    </section>
  );
}

export default HeroSection;
