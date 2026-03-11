import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/footer";
import ContactForm from "../components/home/ContactForm";
import ContactInfo from "../components/home/ContactInfo";
import "../style/App.css";
import "../Contact.css"; // CSS import, ya alag Contact.css bana ke import karo

export default function Contact() {
  return (
    <div id="contactus" className="contact_page">
      <Navbar />

      <section id="contact" className="contact_section">
        <h2>Contact Me</h2>
        <p className="contact_intro">
          I am always open to discussing new projects or opportunities. You can reach me using the form or my contact details below.
        </p>

        <div className="contact_container">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <Footer />
    </div>
  );
}