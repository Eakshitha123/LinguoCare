import React from 'react';
import './MessageS.css'; // Make sure to create a corresponding CSS file
import { assets } from '../../assets/assets'; // Ensure the asset import is correct

const MessageS = () => {
  return (
    <div className="message-supervisor">
      <h2>Message Supervisor</h2>
      <img className="t2" src={assets.msgS} alt="Message Supervisor" /> {/* Update the image source */}
      <p>Connect with your supervisor to discuss progress, share updates, or ask for guidance. Maintain open communication to ensure smooth collaboration.</p>
      <button>Message Your Supervisor</button>
    </div>
  );
};

export default MessageS;
