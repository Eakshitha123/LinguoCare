// /src/Components/Navbar/Navbar.js

import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToRef, refs }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>LinguoCare</h2>
      </div>

      <div className="link">
        <li onClick={() => scrollToRef(refs.header)}>Home</li>
        <li onClick={() => scrollToRef(refs.services)}>Services</li>
        <li onClick={() => scrollToRef(refs.about)}>About Us</li>
        <li onClick={() => scrollToRef(refs.faq)}>FAQs</li>
        <li onClick={() => scrollToRef(refs.team)}>Our Team</li>
        <li onClick={() => scrollToRef(refs.contact)}>Contact Us</li>
        <li><a href="/Login">Login/Sign Up</a></li>
      </div>
    </div>
  );
};

export default Navbar;
