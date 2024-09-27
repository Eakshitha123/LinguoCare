import React, { useState } from 'react';

const SessionReportPage = () => {
  const [report, setReport] = useState('');

  const handleSaveReport = () => {
    localStorage.setItem('progress', report);
    alert('Session report saved successfully.');
  };

  return (
    <div>
      <h2>Session Report</h2>
      <textarea value={report} onChange={(e) => setReport(e.target.value)} />
      <button onClick={handleSaveReport}>Save Report</button>
    </div>
  );
};

export default SessionReportPage;
