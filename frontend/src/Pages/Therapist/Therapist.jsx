// /src/pages/Therapist/Therapist.jsx
import React, { useRef } from 'react';
import NavTherapist from '../../Components/NavTherapist/NavTherapist';
import AssignedCases from '../../Components/AssignedCases/AssignedCases';
import CreatePlan from '../../Components/CreatePlan/CreatePlan';
import SessionReports from '../../Components/SessionReports/SessionReports';
import MessageS from '../../Components/MessageS/MessageS';
import './Therapist.css'; // Import the CSS for the Therapist page
import Footer from '../../Components/Footer/Footer';

const Therapist = () => {
  // Refs for smooth scrolling
  const assignedCasesRef = useRef(null);
  const createPlanRef = useRef(null);
  const sessionReportsRef = useRef(null);
  const messageSRef = useRef(null);

  // Function to handle smooth scrolling to a section
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="therapist">
      <NavTherapist scrollToRef={scrollToRef} refs={{ assignedCases: assignedCasesRef, createPlan: createPlanRef, sessionReports: sessionReportsRef, messageS: messageSRef }} />
      <div className="therapist-page">
        <div ref={assignedCasesRef}>
          <AssignedCases />
        </div>
        <div ref={createPlanRef}>
          <CreatePlan />
        </div>
        <div ref={sessionReportsRef}>
          <SessionReports />
        </div>
        <div ref={messageSRef}>
          <MessageS />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Therapist;
