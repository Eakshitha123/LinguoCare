import React, { useState } from 'react';

const FindTherapist = () => {
  const [therapists] = useState([
    { name: 'Therapist A', specialization: 'Speech Delay' },
    { name: 'Therapist B', specialization: 'Fluency Disorder' },
  ]);
  const handleSelect = (therapist) => {
    localStorage.setItem('selectedTherapist', JSON.stringify(therapist));
  };

  return (
    <div>
      <h2>Find a Therapist</h2>
      {therapists.map((therapist, index) => (
        <div key={index}>
          <h3>{therapist.name}</h3>
          <p>Specialization: {therapist.specialization}</p>
          <button onClick={() => handleSelect(therapist)}>Select</button>
        </div>
      ))}
    </div>
  );
};

export default FindTherapist;
