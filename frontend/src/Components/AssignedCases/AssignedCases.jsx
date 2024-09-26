// /src/Components/AssignedCases/AssignedCases.js
import React from 'react';
import './AssignedCases.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const AssignedCases = () => {
  const navigate = useNavigate();

  const handleViewAssignedCases = () => {
    navigate('/assigned-cases-page');
  };

  return (
    <div className="assigned-cases">
      <h2>Assigned Cases</h2>
      <img className="pic2" src={assets.cases} alt="Assigned Cases" />
      <p>View and manage your assigned cases. Keep track of your clients, update their therapy plans, and ensure they are receiving the personalized support they need.</p>
      <button onClick={handleViewAssignedCases}>View Assigned Cases</button>
    </div>
  );
};

export default AssignedCases;
