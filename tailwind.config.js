/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-blue": "#4FC0D0", // Warna biru dari logo
        "site-green": "#6DE15C", // Warna hijau dari logo
        "dark-bg": "#1a1a1a", // Warna gelap untuk background utama
        "darker-bg": "#121212", // Sedikit lebih gelap untuk footer/spesifik
        "light-bg": "#f5f5f5", // Latar belakang terang
        "primary-text": "#ffffff", // Putih untuk teks utama
        "secondary-text": "#e0e0e0", // Abu-abu terang untuk teks sekunder
        "dark-text": "#333333", // Teks gelap di latar belakang terang
        "gray-light": "#D1D5DB", // Abu-abu muda untuk border/dividers
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Default font untuk paragraf
        heading: ["Poppins", "sans-serif"], // Font untuk judul
      },
    },
  },
  plugins: [],
};
