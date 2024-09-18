// /src/Components/MessageT/MessageT.js
import React from 'react';
import './MessageT.css';
import { assets } from '../../assets/assets';

const MessageT = () => {
  return (
    <div className="message-therapist">
      <h2>Message Therapist</h2>
      <img className="pic2" src={assets.user2} alt="Message Therapist" />
      <p>Stay connected with your therapist anytime. Send secure messages to ask questions, share updates, or get advice.</p>
      <button>Message Your Therapist</button>
    </div>
  );
};

export default MessageT;
