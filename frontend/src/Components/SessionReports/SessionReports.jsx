// /src/Components/SessionReports/SessionReports.js
import React from 'react';
import './SessionReports.css';
import { assets } from '../../assets/assets';

const SessionReports = () => {
  return (
    <div className="session-reports">
      <h2>Session Reports</h2>
      <img className="pic4" src={assets.reports} alt="Session Reports" />
      <p>Review detailed reports of therapy sessions. Analyze progress, track key metrics, and adjust strategies to enhance the effectiveness of therapy.</p>
      <button>View Reports</button>
    </div>
  );
};

export default SessionReports;
