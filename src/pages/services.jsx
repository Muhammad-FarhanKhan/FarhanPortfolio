import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/footer.jsx";
import About from "../components/home/about"
import Service from "../components/services/service";

function Services() {
  return (
    <>
      <Navbar />
      <About />
      
      <Service />

      <Footer />
    </>
  );
}

export default Services;