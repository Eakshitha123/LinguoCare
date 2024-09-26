// /src/Pages/ProfileUser/ProfileUser.jsx
import React from 'react';
import './ProfileUser.css'; // Make sure to create this CSS file for styling

const ProfileUser = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    age: 30,
    issues: ['Anxiety', 'Depression'],
    therapistName: 'Dr. Smith',
    ongoingSession: 'Session with Dr. Smith on 25th Sep',
  };

  return (
    <div className="profile-user">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Issues:</strong> {user.issues.join(', ')}</p>
      <p><strong>Therapist Name:</strong> {user.therapistName}</p>
      <p><strong>Ongoing Session:</strong> {user.ongoingSession}</p>
    </div>
  );
};

export default ProfileUser;
