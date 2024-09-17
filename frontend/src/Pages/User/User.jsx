// /src/pages/User/User.js
import React, { useRef } from 'react';
import NavUser from '../../Components/NavUser/NavUser';
import GetTherapist from '../../Components/GetTherapist/GetTherapist';
import MessageT from '../../Components/MessageT/MessageT';
import Progress from '../../Components/Progress/Progress';
import Sessions from '../../Components/Sessions/Sessions';
import './User.css'; // Import the CSS for the User page

const User = () => {
  // Refs for smooth scrolling
  const getTherapistRef = useRef(null);
  const messageTRef = useRef(null);
  const progressRef = useRef(null);
  const sessionsRef = useRef(null);

  // Function to handle smooth scrolling to a section
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
 <div className="user">
      <NavUser scrollToRef={scrollToRef} refs={{ getTherapist: getTherapistRef, messageT: messageTRef, progress: progressRef, sessions: sessionsRef }} />
      <div className="user-page">
        <div ref={getTherapistRef}>
          <GetTherapist />
        </div>
        <div ref={messageTRef}>
          <MessageT />
        </div>
        <div ref={progressRef}>
          <Progress />
        </div>
        <div ref={sessionsRef}>
          <Sessions />
        </div>
      </div>
      </div>
  );
};

export default User;
