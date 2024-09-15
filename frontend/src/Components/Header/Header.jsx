// /src/Components/Header/Header.js

import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './Header.css';
import { assets } from '../../assets/assets'; // Importing assets from assets.js

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGetStartedClick = () => {
    navigate('/Login'); // Navigate to the Login page
  };

  return (
    <header className="header-container" style={{ backgroundImage: `url(${assets.header})` }}>
      <div className="header-content">
        <h1>Welcome to LinguoCare</h1>
        <p>
          Unlock the power of speech with LinguoCare's expert therapy solutions. From personalized therapy plans to real-time progress tracking, we're here to help you speak with confidence and clarity. Start your journey to better communication today!
        </p>
        <button className="get-started-button" onClick={handleGetStartedClick}>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
