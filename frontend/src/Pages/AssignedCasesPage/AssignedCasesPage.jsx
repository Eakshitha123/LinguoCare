import React, { useState } from 'react';

const AssignedCasesPage = () => {
  const [cases] = useState([
    { user: 'User 1', caseDetails: 'Speech Delay' },
    { user: 'User 2', caseDetails: 'Fluency Disorder' },
  ]);

  return (
    <div>
      <h2>Assigned Cases</h2>
      {cases.map((assignedCase, index) => (
        <div key={index}>
          <h3>{assignedCase.user}</h3>
          <p>{assignedCase.caseDetails}</p>
        </div>
      ))}
    </div>
  );
};

export default AssignedCasesPage;
