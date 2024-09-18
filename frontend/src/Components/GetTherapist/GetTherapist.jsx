// /src/Components/GetTherapist/GetTherapist.js
import React from 'react';
import './GetTherapist.css';
import { assets } from '../../assets/assets';

const GetTherapist = () => {
  return (
    <div className="get-therapist">
      <h2>Get Therapist</h2>
      <img class="pic1" src={assets.user1}/>
      <p>Browse our list of professional therapists and find the right one for you. Our matching system helps connect you with a therapist that fits your specific needs, ensuring personalized and effective support.</p>
      <button>Find a Therapist</button>
    </div>
  );
};

export default GetTherapist;
