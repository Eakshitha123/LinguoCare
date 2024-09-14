import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="title">
        <h2>Questions? Call 444-555-888-111</h2>
      </div>
      <div className="links">
        <div className="b1">
          <a href="#">FAQ</a>
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Resources</a>
        </div>

        <div className="b1">
          <a href="#">Help Center</a>
          <a href="#">Careers</a>
          <a href="#">Cookie Settings</a>
          <a href="#">Legal Information</a>
        </div>

        <div className="b1">
          <a href="#">Client Portal</a>
          <a href="#">Treatment Options</a>
          <a href="#">Professional Info</a>
          <a href="#">Success Stories</a>
        </div>

        <div className="b1">
          <a href="#">Media Center</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="description">
          <p>Providing expert speech-language therapy services to help individuals of all ages improve communication skills and enhance quality of life. Our dedicated professionals offer personalized treatment plans to meet each client's unique needs.</p>
        </div>

        <div className="copyrighttext">
          &copy; {new Date().getFullYear()} Speech Therapy Center. All rights reserved.
        </div>
    </div>
  );
};

export default Footer;
