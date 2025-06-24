import React from "react";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

import icon from "../assets/icon.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Brand */}
        <div className="footer-brand">
          <img src={icon} alt="Logo" />
        </div>

        {/* Information */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contacts</h4>
          <ul>
            <li>
              <FaMapMarkerAlt /> 1234 Sample Street
              <br /> Austin Texas 78704
            </li>
            <li>
              <FaPhoneAlt /> 512.333.2222
            </li>
            <li>
              <FaEnvelope /> sampleemail@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="footer-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p>&copy; 2025 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
