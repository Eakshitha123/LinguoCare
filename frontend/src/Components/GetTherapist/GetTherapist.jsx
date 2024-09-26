// /src/Components/GetTherapist/GetTherapist.js
import React from 'react';
import './GetTherapist.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GetTherapist = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFindTherapist = () => {
    navigate('/find-therapist'); // Redirect to FindTherapist page
  };

  return (
    <div className="get-therapist">
      <h2>Get Therapist</h2>
      <img className="pic1" src={assets.user1} alt="Get a Therapist" />
      <p>Browse our list of professional therapists and find the right one for you. Our matching system helps connect you with a therapist that fits your specific needs, ensuring personalized and effective support.</p>
      <button onClick={handleFindTherapist}>Find a Therapist</button>
    </div>
  );
};

export default GetTherapist;
