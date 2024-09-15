// /src/Components/Navbar/Navbar.js

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToRef, refs }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      <div className="logo" onClick={scrollToTop}>
        <h2>LinguoCare</h2>
      </div>

      <div className="link">
        <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
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
