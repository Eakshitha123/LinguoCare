import React from 'react';
import './AssignedCases.css'; // Make sure to create a corresponding CSS file
import { assets } from '../../assets/assets'; // Ensure the asset import is correct

const AssignedCases = () => {
  return (
    <div className="assigned-cases">
      <h2>Assigned Cases</h2>
      <img className="t3" src={assets.cases} alt="Assigned Cases" /> {/* Update the image source */}
      <p>View and manage your assigned cases. Keep track of progress, update statuses, and ensure timely completion.</p>
      <button>View Assigned Cases</button>
    </div>
  );
};

export default AssignedCases;
