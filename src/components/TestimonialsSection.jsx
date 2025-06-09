// src/components/TestimonialsSection.jsx
import React from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Pelayanan Site Trans sangat profesional, mobilnya bersih dan sopirnya ramah. Perjalanan jadi nyaman!",
      author: "Budi Santoso",
      origin: "Yogyakarta",
    },
    {
      quote:
        "Sangat terbantu dengan layanan antar-jemput bandara Site Trans. Tepat waktu dan mobilnya selalu terawat. Rekomen!",
      author: "Siti Aminah",
      origin: "Jakarta",
    },
    {
      quote:
        "Untuk liburan keluarga di Purwokerto, Site Trans pilihan terbaik. Armadanya lengkap dan harganya bersahabat.",
      author: "Dewi Lestari",
      origin: "Bandung",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 md:px-8 bg-light-bg text-dark-text"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 text-site-blue">
          Apa Kata Mereka?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl flex flex-col justify-between transform hover:scale-102 transition duration-300 ease-in-out border border-gray-light"
            >
              <p className="text-gray-800 text-lg italic mb-6 leading-relaxed">
                <span className="text-site-green text-3xl font-bold mr-2">
                  "
                </span>
                {testimonial.quote}
                <span className="text-site-green text-3xl font-bold ml-2">
                  "
                </span>
              </p>
              <div>
                <p className="text-dark-text font-bold text-xl font-heading">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 text-sm">{testimonial.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
