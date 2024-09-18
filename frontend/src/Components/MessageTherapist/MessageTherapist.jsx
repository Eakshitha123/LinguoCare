// /src/Components/MessageTherapist/MessageTherapist.js
import React from 'react';
import './MessageTherapist.css';
import { assets } from '../../assets/assets';

const MessageTherapist = () => {
  return (
    <div className="message-therapist">
      <h2>Message My Therapist</h2>
      <img className="pic5" src={assets.sup4} alt="Message Therapist" />
      <p>Stay connected with your therapist. Send messages, ask questions, and share your thoughts to enhance your therapy experience.</p>
      <button>Send Message</button>
    </div>
  );
};

export default MessageTherapist;
