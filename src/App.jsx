// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FleetSection from "./components/FleetSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    // Menggunakan font-sans (Open Sans) sebagai default, dan warna teks/bg default
    <div className="min-h-screen bg-light-bg text-dark-text font-sans scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FleetSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
