// /src/Components/Progress/Progress.js
import React from 'react';
import './Progress.css';
import { assets } from '../../assets/assets';

const Progress = () => {
  return (
    <div className="progress-section">
      <h2>My Progress</h2>
      <img className="pic3" src={assets.user3} alt="Progress Tracker" />
      <p>Track your journey and achievements. View your therapy progress, goals, and milestones in one place to stay motivated.</p>
      <button>View My Progress</button>
    </div>
  );
};

export default Progress;
