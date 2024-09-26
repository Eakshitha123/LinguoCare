// /src/Components/MessageTherapist/MessageTherapist.js
import React from 'react';
import './MessageTherapist.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { assets } from '../../assets/assets';

const MessageTherapist = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleNavigation = () => {
    navigate('/message-t-page'); // Navigate to MessageTPage
  };

  return (
    <div className="message-therapist">
      <h2>Message My Therapist</h2>
      <img className="pic5" src={assets.sup4} alt="Message Therapist" />
      <p>
        Stay connected with your therapist. Send messages, ask questions, and share your thoughts to enhance your therapy experience.
      </p>
      <button onClick={handleNavigation}>Send Message</button> {/* Add navigation on button click */}
    </div>
  );
};

export default MessageTherapist;
