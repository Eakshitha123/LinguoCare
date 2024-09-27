import React from 'react';

const ViewSessions = () => {
  const sessions = JSON.parse(localStorage.getItem('sessions')) || [];

  return (
    <div>
      <h2>View Sessions</h2>
      {sessions.length > 0 ? (
        sessions.map((session, index) => (
          <div key={index}>
            <p>Session {index + 1}: {session.details}</p>
          </div>
        ))
      ) : (
        <p>No sessions available.</p>
      )}
    </div>
  );
};

export default ViewSessions;
