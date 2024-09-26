// /src/Components/ManageT/ManageT.js
import React from 'react';
import './ManageT.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { assets } from '../../assets/assets';

const ManageT = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleNavigation = () => {
    navigate('/manage-therapist'); // Navigate to ManageTherapistPage
  };

  return (
    <div className="manage-therapist">
      <h2>Manage Therapists</h2>
      <img className="pic2" src={assets.sup1} alt="Manage Therapist" />
      <p>
        Efficiently manage your list of therapists. Add, update, or remove therapists as needed to ensure you have the best team to support your clients.
      </p>
      <button onClick={handleNavigation}>Manage Therapists</button> {/* Add navigation on button click */}
    </div>
  );
};

export default ManageT;
