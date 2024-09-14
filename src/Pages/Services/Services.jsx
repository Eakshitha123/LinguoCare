import React from 'react';
import './Services.css'; // Import the CSS file for styling
import { assets } from '../../assets/assets';
const Services = () => {
  return (
    <div className="features">
      <div className="box1">
        <div className="text">
          <h2>Enjoy on your TV.</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="pic">
          <img src={assets.picture1} />
        </div>
      </div>

      <div className="box1">
        <div className="pic">
          <img src="images/feature-2.png" alt="Feature 2" />
        </div>
        <div className="text">
          <h2>Enjoy on your TV.</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
      </div>

      <div className="box1">
        <div className="text">
          <h2>Enjoy on your TV.</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className="pic">
          <img src="images/feature-3.png" alt="Feature 3" />
        </div>
      </div>

      <div className="box1">
        <div className="pic">
          <img src="images/feature-4.png" alt="Feature 4" />
        </div>
        <div className="text">
          <h2>Enjoy on your TV.</h2>
          <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
