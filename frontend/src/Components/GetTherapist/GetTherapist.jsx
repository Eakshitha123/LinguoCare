// /src/Components/GetTherapist/GetTherapist.js
import React from 'react';
import './GetTherapist.css';
import { assets } from '../../assets/assets';

const GetTherapist = () => {
  return (
    <div className="get-therapist">
      <h2>Get Therapist</h2>
      <img class="pic1" src={assets.user1}/>
      <p>Discover expert therapists tailored to your needs.</p>
      <button>Find a Therapist</button>
    </div>
  );
};

export default GetTherapist;
