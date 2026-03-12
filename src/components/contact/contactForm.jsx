import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../../style/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact_container">

      {/* LEFT SIDE FORM */}
      <div className="contact_left">

        <h2>Let Work Together</h2>

        <form className="contact_form">

          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Subject</label>
          <input type="text" placeholder="Enter subject" />

          <label>Message</label>
          <textarea rows="5" placeholder="Write your message"></textarea>

          <button className="send_btn">SEND MESSAGE</button>

        </form>

      </div>

      {/* RIGHT SIDE INFO */}

      <div className="contact_right">

        <div className="contact_info">
          <FaPhone className="icon" />
          <span>+92 323 2171866</span>
        </div>

        <div className="contact_info">
          <FaEnvelope className="icon" />
          <span>fk75120233@gmail.com</span>
        </div>

        <div className="contact_info">
          <FaMapMarkerAlt className="icon" />
          <span>Rawalpindi/Islamabad, Pakistan</span>
        </div>

        <p className="contact_para">
          Feel free to contact me for any web development project,
          collaboration or freelance work. I will reply as soon as possible.
        </p>

      </div>

    </div>
  );
}

export default ContactForm;