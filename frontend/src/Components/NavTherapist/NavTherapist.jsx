// /src/Components/NavTherapist/NavTherapist.jsx
import React from 'react';
import './NavTherapist.css';
import { Link } from 'react-router-dom';

const NavTherapist = ({ scrollToRef, refs }) => {
  return (
    <div className="navTherapist">
      <div className="logo">
        <h2>LinguoCare</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
        <li onClick={() => scrollToRef(refs.assignedCases)}>Assigned Cases</li>
        <li onClick={() => scrollToRef(refs.createPlan)}>Create Therapy Plan</li>
        <li onClick={() => scrollToRef(refs.sessionReports)}>Session Reports</li>
        <li onClick={() => scrollToRef(refs.messageS)}>Message My Supervisor</li>
        <li><Link to="/therapist-profile">Profile</Link></li>
      </ul>
    </div>
  );
};

export default NavTherapist;
