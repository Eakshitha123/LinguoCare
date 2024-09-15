import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets'; // Importing assets from assets.js

const Header = () => {
  return (
    <header className="header-container" style={{ backgroundImage: `url(${assets.header})` }}>
      <div className="header-content">
        <h1>Welcome to Our Website</h1>
        <p>
          Explore our services and solutions designed to meet your needs. We are here to help you grow!
        </p>
        <button className="get-started-button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
