import React from 'react';
import './SessionReports.css'; // Ensure to create a corresponding CSS file
import { assets } from '../../assets/assets'; // Ensure the asset import is correct

const SessionReports = () => {
  return (
    <div className="session-reports">
      <h2>Session Reports</h2>
      <img className="t4" src={assets.reports} alt="Session Reports" /> {/* Update the image source */}
      <p>Review and analyze session reports. Gain insights into progress, performance, and areas for improvement to enhance your overall performance.</p>
      <button>View Session Reports</button>
    </div>
  );
};

export default SessionReports;
