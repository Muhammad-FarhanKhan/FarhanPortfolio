import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/ContactForm.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name) { alert("Please enter your name"); return; }
    if (!formData.email) { alert("Please enter your email"); return; }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) { alert("Please enter a valid email"); return; }
    if (!formData.subject) { alert("Please enter subject"); return; }
    if (!formData.message) { alert("Please write a message"); return; }

    // Prepare WhatsApp message
    const messageText = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const phoneNumber = "923175848648"; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${messageText}`;

    // Open WhatsApp in new tab
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact_container">
      <div className="contact_left">
        <h2>Let's Work Together</h2>
        <form className="contact_form" onSubmit={handleWhatsApp}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Enter subject"
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            placeholder="Write your message"
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="send_btn">
            SEND MESSAGE
          </button>
        </form>
      </div>

   <div className="contact_right">
  <div className="contact_info">
    <FaPhone style={{ color: "#25D366", marginRight: "8px" }} />
    <span>+92 323 2171866</span>
  </div>

  <div className="contact_info">
    <FaEnvelope style={{ color: "#D44638", marginRight: "8px" }} />
    <span>fk75120233@gmail.com</span>
  </div>

  <div className="contact_info">
    <FaMapMarkerAlt style={{ color: "#FF5722", marginRight: "8px" }} />
    <span>Rawalpindi/Islamabad, Pakistan</span>
  </div>

  <p className="contact_para">
    Feel free to contact me for any web development project, collaboration, or freelance work.
  </p>
</div>
    </div>
  );
}

export default ContactForm;