import React from "react";
import "./Footer.css";

import logo from "../../assets/unisetlogo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            <FaMapMarkerAlt /> &nbsp; KAAS ColdStore, Oppsite NIB Bank Fishing
            Harbour.
          </p>
          <p>
            <FaPhoneAlt /> &nbsp; Phone: +233 243 111 222.
          </p>
          <p>
            <FaEnvelope /> &nbsp; Email: Info@Unisetstevedore.com Harbour.
          </p>
          <p>
            <FaGlobe /> &nbsp; Website: www.Unisetstevedore.com Harbour.
          </p>
        </div>

        <div className="footer-logo">
          <img src={logo} alt="logo" />
          <p className="u">&copy; Copyright 2022. Develop By Florent.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
