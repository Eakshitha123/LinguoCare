// /src/Components/ManageT/ManageT.js
import React from 'react';
import './ManageT.css';
import { assets } from '../../assets/assets';

const ManageT = () => {
  return (
    <div className="manage-therapist">
      <h2>Manage Therapists</h2>
      <img className="pic2" src={assets.sup1} alt="Manage Therapist" />
      <p>Efficiently manage your list of therapists. Add, update, or remove therapists as needed to ensure you have the best team to support your clients.</p>
      <button>Manage Therapists</button>
    </div>
  );
};

export default ManageT;
