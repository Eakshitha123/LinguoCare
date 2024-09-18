// /src/Components/EvaluateSessions/EvaluateSessions.js
import React from 'react';
import './EvaluateSessions.css';
import { assets } from '../../assets/assets';

const EvaluateSessions = () => {
  return (
    <div className="evaluate-sessions">
      <h2>Evaluate Sessions</h2>
      <img className="pic4" src={assets.sup3} alt="Evaluate Sessions" />
      <p>Review and evaluate your therapy sessions. Gain insights into your progress and identify areas for improvement to enhance your therapeutic journey.</p>
      <button>Evaluate Sessions</button>
    </div>
  );
};

export default EvaluateSessions;
