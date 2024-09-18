// /src/Components/Sessions/Sessions.js
import React from 'react';
import './Sessions.css';
import { assets } from '../../assets/assets';

const Sessions = () => {
  return (
    <div className="sessions-section">
      <h2>My Sessions</h2>
      <img className="pic4" src={assets.user4} alt="Therapy Sessions" />
      <p>Review your past and upcoming therapy sessions. Stay organized and prepared by keeping track of your scheduled appointments.</p>
      <button>View My Sessions</button>
    </div>
  );
};

export default Sessions;
