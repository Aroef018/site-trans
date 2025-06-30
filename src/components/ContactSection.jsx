// src/components/ContactSection.jsx
import React from "react";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Untuk ikon profesional

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-dark-bg text-primary-text"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-site-green">
          Hubungi Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Informasi Kontak */}
          <div>
            <h3 className="text-3xl font-semibold font-heading mb-8 text-site-blue">
              Site Trans
            </h3>
            <div className="space-y-6 text-lg">
              <p className="flex items-center">
                <span className="text-site-green text-3xl mr-4">📞</span>{" "}
                {/* Ganti dengan <FaPhoneAlt /> */}
                <a href="tel:+62895380833859" className="hover:underline">
                  +62 895-3808-33859
                </a>
              </p>
              {/* <p className="flex items-center">
                <span className="text-site-green text-3xl mr-4">📧</span>{" "}
                
                <a href="mailto:info@sitetrans.com" className="hover:underline">
                  info@sitetrans.com
                </a>
              </p> */}
              <p className="flex items-center">
                <span className="text-site-green text-3xl mr-4">📍</span>{" "}
                Kalimanggis Utara,Cilongok, Kec. Cilongok, Kabupaten Banyumas,
                Jawa Tengah
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.2854340663326!2d109.1387335184362!3d-7.402321744079546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1749503797735!5m2!1sid!2sid"
                width="100%"
                height="350" // Tinggi peta lebih besar
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Formulir Kontak Sederhana */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
            <h3 className="text-3xl font-semibold font-heading mb-8 text-site-green">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-primary-text mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-primary-text focus:outline-none focus:ring-2 focus:ring-site-blue"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-primary-text mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-primary-text focus:outline-none focus:ring-2 focus:ring-site-blue"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium text-primary-text mb-2"
                >
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows="6" // Tinggi textarea lebih besar
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 text-primary-text focus:outline-none focus:ring-2 focus:ring-site-blue"
                  placeholder="Ketik pesan Anda di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-site-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-site-green focus:ring-opacity-50"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
