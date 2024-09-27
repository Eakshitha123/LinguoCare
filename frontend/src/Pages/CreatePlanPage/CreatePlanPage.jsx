import React, { useState } from 'react';

const CreatePlanPage = () => {
  const [plan, setPlan] = useState('');
  
  const handleSavePlan = () => {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    sessions.push({ details: plan });
    localStorage.setItem('sessions', JSON.stringify(sessions));
    alert('Therapy plan saved successfully.');
  };

  return (
    <div>
      <h2>Create Therapy Plan</h2>
      <textarea value={plan} onChange={(e) => setPlan(e.target.value)} />
      <button onClick={handleSavePlan}>Save Plan</button>
    </div>
  );
};

export default CreatePlanPage;
