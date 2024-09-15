import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets'; // Importing assets from assets.js

const Header = () => {
  return (
    <header className="header-container" style={{ backgroundImage: `url(${assets.header})` }}>
      <div className="header-content">
        <h1>Welcome to LinguoCare</h1>
        <p>
        Unlock the power of speech with LinguoCare's expert therapy solutions. From personalized therapy plans to real-time progress tracking, we're here to help you speak with confidence and clarity. Start your journey to better communication today!
        </p>
        <button className="get-started-button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
