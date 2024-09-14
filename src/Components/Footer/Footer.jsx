// /src/components/Footer.js
import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css'; // Importing the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="footer-description">
          <p>© 2024 LinguoCare. All rights reserved.</p>
          <p>Designed to simplify speech-language therapy and documentation for therapists and supervisors.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
