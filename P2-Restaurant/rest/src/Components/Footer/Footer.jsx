import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Link } from "react-router-dom";
import { BsWhatsapp } from "react-icons/bs";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h1>MOON CAFE</h1>
        </div>
        <div className="footer-icons">
          <FaInstagram />
          <SiLinkedin />
          <BsWhatsapp />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span><Link to="/home">Home</Link></span>
          <span><Link to="/menu">Menu</Link></span>
          <span><Link to="#">Order</Link></span>
          <span><Link to="/about">About</Link></span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
