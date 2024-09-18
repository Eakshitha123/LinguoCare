import React from 'react';
import './NavTherapist.css'; // Import CSS file for therapist navbar
import { Link } from 'react-router-dom';

const NavTherapist = ({ scrollToRef, refs }) => {
  return (
    <div className="navTherapist">
      <div className="logo">
        <h2>LinguoCare</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
        <li onClick={() => scrollToRef(refs.createPlan)}>Create Plan</li>
        <li onClick={() => scrollToRef(refs.messageS)}>Message Supervisor</li>
        <li onClick={() => scrollToRef(refs.assignedCases)}>Assigned Cases</li>
        <li onClick={() => scrollToRef(refs.sessionReports)}>Session Reports</li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default NavTherapist;
