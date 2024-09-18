// /src/Components/MessageS/MessageS.js
import React from 'react';
import './MessageS.css';
import { assets } from '../../assets/assets';

const MessageS = () => {
  return (
    <div className="message-supervisor">
      <h2>Message My Supervisor</h2>
      <img className="pic5" src={assets.msgS} alt="Message My Supervisor" />
      <p>Communicate directly with your supervisor. Ask questions, share updates, and receive guidance to ensure your therapy plans are on track.</p>
      <button>Send a Message</button>
    </div>
  );
};

export default MessageS;
