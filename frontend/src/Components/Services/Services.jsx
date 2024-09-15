// /src/Components/Services/Services.js

import React, { forwardRef } from 'react';
import './Services.css';
import { assets } from '../../assets/assets';

const Services = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="service">
      <h1>Our Services</h1>
      <div>
        <div className="features">
          <div className="box1">
            <div className="text">
              <h2>Therapy Management</h2>
              <p>Seamlessly manage therapy sessions with tools for scheduling, progress tracking, and collaboration between therapists and patients. Keep treatment plans up-to-date and ensure consistent patient care.</p>
            </div>
            <div className="pic">
              <img src={assets.picture1} alt="Feature 1" />
            </div>
          </div>

          <div className="box1">
            <div className="pic">
              <img src={assets.picture2} alt="Feature 2" />
            </div>
            <div className="text">
              <h2>Progress Tracking</h2>
              <p>Easily track patient progress over time with visual data. Utilize interactive charts, graphs, and reports to analyze improvements and adjust treatment plans accordingly.</p>
            </div>
          </div>

          <div className="box1">
            <div className="text">
              <h2>Supervisor Tools</h2>
              <p>Empower supervisors with a comprehensive toolset to manage and oversee teams. This includes task assignment, performance reviews, and real-time activity tracking, ensuring that the entire care process is efficient and transparent.</p>
            </div>
            <div className="pic">
              <img src={assets.picture3} alt="Feature 3" />
            </div>
          </div>

          <div className="box1">
            <div className="pic">
              <img src={assets.picture4} alt="Feature 4" />
            </div>
            <div className="text">
              <h2>Digital Documentation</h2>
              <p>Revolutionize documentation by transitioning from paper to fully digital records. Capture patient details, treatment plans, and assessments electronically, enabling fast access, secure storage, and easy sharing between medical professionals.</p>
            </div>
          </div>

          <div className="box1">
            <div className="text">
              <h2>Case Allocation</h2>
              <p>Automate and streamline the case allocation process, ensuring that patients are matched with the right specialist or therapist based on their specific needs and preferences. Maximize resource efficiency while improving patient outcomes.</p>
            </div>
            <div className="pic">
              <img src={assets.picture5} alt="Feature 5" />
            </div>
          </div>

          <div className="box1">
            <div className="pic">
              <img src={assets.picture6} alt="Feature 6" />
            </div>
            <div className="text">
              <h2>Clinical Rating</h2>
              <p>Collect and analyze clinical ratings from patients and other medical professionals to measure the effectiveness of treatments. Use these insights to make informed decisions and improve the overall quality of care.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Services;
