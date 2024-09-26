// /src/Components/ReviewPlan/ReviewPlan.js
import React from 'react';
import './ReviewPlan.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { assets } from '../../assets/assets';

const ReviewPlan = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleNavigation = () => {
    navigate('/review-plan'); // Navigate to ReviewPlanPage
  };

  return (
    <div className="review-plan">
      <h2>Review Therapy Plan</h2>
      <img className="pic3" src={assets.sup2} alt="Review Therapy Plan" />
      <p>
        Take a closer look at your therapy plan. Assess your progress, make necessary adjustments, and ensure you are on the right path to achieving your goals.
      </p>
      <button onClick={handleNavigation}>Review Plan</button> {/* Add navigation on button click */}
    </div>
  );
};

export default ReviewPlan;
