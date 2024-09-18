import React from 'react';
import './NavSupervisor.css';
import { Link } from 'react-router-dom';

const NavSupervisor = ({ scrollToRef, refs }) => {
  return (
    <div className="navSupervisor">
      <div className="logo">
        <h2>LinguoCare</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
        <li onClick={() => scrollToRef(refs.manageT)}>Manage Therapists</li>
        <li onClick={() => scrollToRef(refs.reviewPlan)}>Review Therapy Plans</li>
        <li onClick={() => scrollToRef(refs.evaluateSessions)}>Evaluate Sessions</li>
        <li onClick={() => scrollToRef(refs.messageTherapist)}>Message My Therapists</li>
        <li>Profile</li>
      </ul>
    </div>
  );
};

export default NavSupervisor;
