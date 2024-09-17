
import React from 'react';
import './NavUser.css';
import { Link } from 'react-router-dom';

const NavUser = ({ scrollToRef, refs }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>LinguoCare</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
        <li onClick={() => scrollToRef(refs.getTherapist)}>Get Therapist</li>
        <li onClick={() => scrollToRef(refs.messageT)}>Message Therapist</li>
        <li onClick={() => scrollToRef(refs.progress)}>My Progress</li>
        <li onClick={() => scrollToRef(refs.sessions)}>My Sessions</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default NavUser;
