import React from "react";

export default function ContactForm() {
  return (
    <form className="contact_form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="6" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
}