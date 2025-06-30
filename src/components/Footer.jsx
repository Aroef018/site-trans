// src/components/Footer.jsx
import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"; // Import ikon yang dibutuhkan

function Footer() {
  return (
    <footer className="bg-darker-bg text-secondary-text py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl text-center">
        <img
          src="/logo-removebg-preview.png"
          alt="Site Trans Logo"
          className="h-24 mx-auto mb-6" // Logo lebih besar di footer
        />
        <p className="text-lg mb-4 leading-relaxed">
          Site Trans adalah pilihan terdepan untuk sewa mobil yang aman dan
          nyaman di Purwokerto.
        </p>
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://wa.me/62895380833859" // Ganti dengan nomor WA asli Anda (tanpa + atau spasi)
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-text hover:text-site-green text-4xl transition duration-300"
          >
            <FaWhatsapp /> {/* Menggunakan komponen ikon WhatsApp */}
          </a>
          {/* <a
            href="https://instagram.com/sitetrans" // Ganti dengan URL Instagram asli Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-text hover:text-site-blue text-4xl transition duration-300"
          >
            <FaInstagram /> 
          </a> */}
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-base">
            © {new Date().getFullYear()} Site Trans. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Kalimanggis Utara, Cilongok, Kec. Cilongok, Kabupaten Banyumas, Jawa
            Tengah
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
