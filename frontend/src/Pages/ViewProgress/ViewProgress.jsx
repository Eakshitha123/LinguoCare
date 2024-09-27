import React from 'react';

const ViewProgress = () => {
  const progress = JSON.parse(localStorage.getItem('progress')) || 'No progress recorded yet.';

  return (
    <div>
      <h2>View Progress</h2>
      <p>{progress}</p>
    </div>
  );
};

export default ViewProgress;
