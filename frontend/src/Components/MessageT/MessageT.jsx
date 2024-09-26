// /src/Components/MessageT/MessageT.js
import React from 'react';
import './MessageT.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

const MessageT = () => {
  const navigate = useNavigate();

  const handleMessageTherapist = () => {
    navigate('/message-therapist'); // Navigate to the MessageTherapist page
  };

  return (
    <div className="message-therapist">
      <h2>Message Therapist</h2>
      <img className="pic2" src={assets.user2} alt="Message Therapist" />
      <p>Stay connected with your therapist anytime. Send secure messages to ask questions, share updates, or get advice.</p>
      <button onClick={handleMessageTherapist}>Message Your Therapist</button>
    </div>
  );
};

export default MessageT;
