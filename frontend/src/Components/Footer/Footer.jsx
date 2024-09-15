import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
      <div className="footer-content-left">
          <h3>LinguoCare</h3>
          <p>Providing expert speech-language therapy services to help individuals of all ages improve communication skills and enhance quality of life. Our dedicated professionals offer personalized treatment plans to meet each client's unique needs.</p>
      </div>

      <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Privacy Policy</li>
          </ul>
      </div>

      <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>123-456-34533</li>
            <li>linguocare@gmail.com</li>
          </ul>
        </div>
      </div>

        <div className="copyrighttext">
          &copy; {new Date().getFullYear()} LinguoCare. All rights reserved.
        </div>
    </div>
  );
};

export default Footer;
