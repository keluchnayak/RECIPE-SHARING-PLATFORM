import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="social-links">
          <a href="#" className="social-icon facebook">
            <FaFacebook />
          </a>
          <a href="#" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon twitter">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon youtube">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-info">
          <p><FaMapMarkerAlt /> Berhampur,Ganjam,Odisha,</p>
          <p><FaEnvelope /> support@swadshare.com</p>
          <p><FaPhone /> +91 321 456 9090</p>
        </div>

        <p className="footer-text">
          © 2025 <strong>SwadShare</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
