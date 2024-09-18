import React from 'react';
import './CreatePlan.css'; // Ensure this path is correct
import { assets } from '../../assets/assets'; // Make sure the asset import is correct

const CreatePlan = () => {
  return (
    <div className="create-plan">
      <h2>Create Plan</h2>
      <img className="t1" src={assets.createplan} alt="Create Plan" /> {/* Use className and add alt attribute */}
      <p>Design a personalized treatment plan tailored to your client’s specific needs. Fill out the necessary details and assign tasks that will help guide the therapy process.</p>
      <button>Create New Plan</button>
    </div>
  );
};

export default CreatePlan;
