import React, { useRef } from 'react';
import NavSupervisor from '../../Components/NavSupervisor/NavSupervisor';
import ManageT from '../../Components/ManageT/ManageT';
import ReviewPlan from '../../Components/ReviewPlan/ReviewPlan';
import EvaluateSessions from '../../Components/EvaluateSessions/EvaluateSessions';
import MessageTherapist from '../../Components/MessageTherapist/MessageTherapist';
import './Supervisor.css'; // Import the CSS for the Supervisor page
import Footer from '../../Components/Footer/Footer';

const Supervisor = () => {
  // Refs for smooth scrolling
  const manageTRef = useRef(null);
  const reviewPlanRef = useRef(null);
  const evaluateSessionsRef = useRef(null);

  // Function to handle smooth scrolling to a section
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="supervisor">
      <NavSupervisor 
        scrollToRef={scrollToRef} 
        refs={{ 
          manageT: manageTRef, 
          reviewPlan: reviewPlanRef, 
          evaluateSessions: evaluateSessionsRef
        }} 
      />
      <div className="supervisor-page">
        <div ref={manageTRef}>
          <ManageT />
        </div>
        <div ref={reviewPlanRef}>
          <ReviewPlan />
        </div>
        <div ref={evaluateSessionsRef}>
          <EvaluateSessions />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Supervisor;
