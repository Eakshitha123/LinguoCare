// /src/components/Header.js

import React from 'react';
//  import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        {/* <img src={""}/> */}
        <h2>LinguoCare</h2>
      </div>

      <div className="links">
      
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li> 
          <li>Login/Sign Up</li>
          
      </div>
    </div>
    </>
  );
};

export default Navbar;