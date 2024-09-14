

import React from 'react';
import './Header.css'; // Importing the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>LinguoCare</h1>
      </div>
      <div className="description">
        <p>
          Streamlining speech-language therapy with digital solutions for case management,
          clinical rating, and progress documentation. Helping therapists and supervisors
          provide efficient care.
        </p>
      </div>
    </header>
  );
};

export default Header;
