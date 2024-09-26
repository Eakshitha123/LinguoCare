// /src/Components/CreatePlan/CreatePlan.js
import React from 'react';
import './CreatePlan.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const CreatePlan = () => {
  const navigate = useNavigate();

  const handleCreatePlan = () => {
    navigate('/create-plan-page');
  };

  return (
    <div className="create-plan">
      <h2>Create Therapy Plan</h2>
      <img className="pic3" src={assets.createplan} alt="Create Therapy Plan" />
      <p>Design and customize therapy plans for your clients. Our tools allow you to set goals, track progress, and make adjustments to ensure effective treatment.</p>
      <button onClick={handleCreatePlan}>Create New Plan</button>
    </div>
  );
};

export default CreatePlan;
