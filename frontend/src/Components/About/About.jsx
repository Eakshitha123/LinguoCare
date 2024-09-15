// /src/Components/About/About.js

import React, { forwardRef } from 'react';
import './About.css'; // Ensure you create this CSS file for styling

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At LinguoCare, we are dedicated to transforming the field of speech and language therapy. Our goal is to provide personalized and effective therapy management solutions that cater to individual needs and foster meaningful progress.
        </p>
        <h3>Our Mission</h3>
        <p>
          Our mission is to empower individuals through innovative speech and language therapy solutions. We strive to enhance communication abilities, boost confidence, and improve the quality of life for our clients. Through cutting-edge technology and a compassionate approach, we are committed to supporting every step of their therapeutic journey.
        </p>
      </div>
    </section>
  );
});

export default About;
