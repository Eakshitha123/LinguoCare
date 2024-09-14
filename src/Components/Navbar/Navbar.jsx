// /src/components/Header.js

import React from 'react';
//  import { Link } from 'react-router-dom';
import './Navbar.css'; // Importing the CSS file

const Header = () => {
  return (
    <header className="header">
      
      <nav>
         <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login-Sign Up</li>
        </ul> 

       
      </nav>
    </header>
  );
};

export default Header;
