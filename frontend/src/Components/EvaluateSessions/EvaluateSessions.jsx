// /src/Components/EvaluateSessions/EvaluateSessions.js
import React from 'react';
import './EvaluateSessions.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { assets } from '../../assets/assets';

const EvaluateSessions = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleNavigation = () => {
    navigate('/evaluate-sessions'); // Navigate to EvaluateSessionsPage
  };

  return (
    <div className="evaluate-sessions">
      <h2>Evaluate Sessions</h2>
      <img className="pic4" src={assets.sup3} alt="Evaluate Sessions" />
      <p>
        Review and evaluate your therapy sessions. Gain insights into your progress and identify areas for improvement to enhance your therapeutic journey.
      </p>
      <button onClick={handleNavigation}>Evaluate Sessions</button> {/* Add navigation on button click */}
    </div>
  );
};

export default EvaluateSessions;
