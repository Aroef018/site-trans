// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (e, id) => {
    e.preventDefault(); // PASTIKAN BARIS INI ADA!
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`py-4 px-6 fixed w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-darker-bg bg-opacity-95 shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Site Trans */}
        <a
          href="#home"
          onClick={(e) => handleNavLinkClick(e, "home")}
          className="flex items-center"
        >
          <img
            src="/logo-removebg-preview.png"
            alt="Site Trans Logo"
            className="h-14"
          />{" "}
          {/* Logo lebih besar */}
        </a>

        {/* Navigasi Desktop */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            onClick={(e) => handleNavLinkClick(e, "home")}
            className="text-primary-text hover:text-site-blue transition duration-300 text-lg font-heading font-medium"
          >
            Beranda
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavLinkClick(e, "about")}
            className="text-primary-text hover:text-site-blue transition duration-300 text-lg font-heading font-medium"
          >
            Tentang Kami
          </a>
          <a
            href="#fleet"
            onClick={(e) => handleNavLinkClick(e, "fleet")}
            className="text-primary-text hover:text-site-blue transition duration-300 text-lg font-heading font-medium"
          >
            Armada
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavLinkClick(e, "services")}
            className="text-primary-text hover:text-site-blue transition duration-300 text-lg font-heading font-medium"
          >
            Layanan
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className="text-primary-text hover:text-site-blue transition duration-300 text-lg font-heading font-medium"
          >
            Kontak
          </a>
        </div>

        {/* Tombol Mobile Menu */}
        <button
          className="md:hidden text-primary-text text-3xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-darker-bg bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavLinkClick(e, "home")}
          className="text-primary-text text-4xl hover:text-site-blue transition duration-300 font-heading"
        >
          Beranda
        </a>
        <a
          href="#about"
          onClick={(e) => handleNavLinkClick(e, "about")}
          className="text-primary-text text-4xl hover:text-site-blue transition duration-300 font-heading"
        >
          Tentang Kami
        </a>
        <a
          href="#fleet"
          onClick={(e) => handleNavLinkClick(e, "fleet")}
          className="text-primary-text text-4xl hover:text-site-blue transition duration-300 font-heading"
        >
          Armada
        </a>
        <a
          href="#services"
          onClick={(e) => handleNavLinkClick(e, "services")}
          className="text-primary-text text-4xl hover:text-site-blue transition duration-300 font-heading"
        >
          Layanan
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavLinkClick(e, "contact")}
          className="text-primary-text text-4xl hover:text-site-blue transition duration-300 font-heading"
        >
          Kontak
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
