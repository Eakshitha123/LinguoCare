import React, { useRef } from 'react';
import NavTherapist from "../../Components/NavTherapist/NavTherapist";
import Footer from "../../Components/Footer/Footer"
// Temporarily comment out missing components
import CreatePlan from '../../Components/CreatePlan/CreatePlan';
import MessageS from '../../Components/MessageS/MessageS';
import AssignedCases from '../../Components/AssignedCases/AssignedCases';
import SessionReports from '../../Components/SessionReports/SessionReports';

const TherapistPage = () => {
  const refs = {
    createPlan: useRef(null),
    messageS: useRef(null),
    assignedCases: useRef(null),
    sessionReports: useRef(null),
  };

  const scrollToRef = (ref) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });

  return (
    <div>
      {/* Therapist Navbar */}
      <NavTherapist scrollToRef={scrollToRef} refs={refs} />

      {/* Comment out the components for now */}
      
      <div ref={refs.createPlan}>
        <CreatePlan />
      </div>
       
      <div ref={refs.messageS}>
        <MessageS />
      </div>
      
      <div ref={refs.assignedCases}>
        <AssignedCases />
      </div>
       
      <div ref={refs.sessionReports}>
        <SessionReports />
      </div>   
      
      <Footer/>
    </div>
  );
};

export default TherapistPage;
