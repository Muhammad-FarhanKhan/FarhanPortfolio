import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="contact_info">
      <div className="info_item">
        <FaEnvelope className="icon" />
        <span>fk75120233@gmail.com</span>
      </div>

      <div className="info_item">
        <FaPhone className="icon" />
        <span>+92 323 2171866</span>
      </div>

      <div className="info_item">
        <FaMapMarkerAlt className="icon" />
        <span>Dhok Kashmiri, Rawalpindi, Pakistan</span>
      </div>
    </div>
  );
}