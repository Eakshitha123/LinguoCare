// /src/Components/ReviewPlan/ReviewPlan.js
import React from 'react';
import './ReviewPlan.css';
import { assets } from '../../assets/assets';

const ReviewPlan = () => {
  return (
    <div className="review-plan">
      <h2>Review Therapy Plan</h2>
      <img className="pic3" src={assets.sup2} alt="Review Therapy Plan" />
      <p>Take a closer look at your therapy plan. Assess your progress, make necessary adjustments, and ensure you are on the right path to achieving your goals.</p>
      <button>Review Plan</button>
    </div>
  );
};

export default ReviewPlan;
