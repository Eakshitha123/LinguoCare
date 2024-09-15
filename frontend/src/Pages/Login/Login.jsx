import React, { useState } from 'react';

import { assets } from '../../assets/assets';
import "./Login.css";

import LoginPopupU from "../../Components/LoginPopup/LoginPopupU.jsx";
import LoginPopupT from "../../Components/LoginPopup/LoginPopupT.jsx";
import LoginPopupS from "../../Components/LoginPopup/LoginPopupS.jsx";

const Login = () => {
  // States to control the visibility of the login popups
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [showTherapistLogin, setShowTherapistLogin] = useState(false);
  const [showSupervisorLogin, setShowSupervisorLogin] = useState(false);

  return (
    <div className="login-container">
      <div className="login-options">
        {/* User Login Box */}
        <div className="login-box">
          <h2>User</h2>
          <div className="circle">
            <img src={assets.loginuser} alt="User" />
          </div>
          <button onClick={() => setShowUserLogin(true)}>Login</button> {/* Show user login popup */}
        </div>

        {/* Therapist Login Box */}
        <div className="login-box">
          <h2>Therapist</h2>
          <div className="circle">
            <img src={assets.logindoctor} alt="Therapist" /> {/* Therapist image */}
          </div>
          <button onClick={() => setShowTherapistLogin(true)}>Login</button> {/* Show therapist login popup */}
        </div>

        {/* Supervisor Login Box */}
        <div className="login-box">
          <h2>Supervisor</h2>
          <div className="circle">
            <img src={assets.loginsupervisor} alt="Supervisor" />
          </div>
          <button onClick={() => setShowSupervisorLogin(true)}>Login</button> {/* Show supervisor login popup */}
        </div>
      </div>

      {/* Conditionally render popups */}
      {showUserLogin && <LoginPopupU setShowLogin={setShowUserLogin} />} {/* User login popup */}
      {showTherapistLogin && <LoginPopupT setShowLogin={setShowTherapistLogin} />} {/* Therapist login popup */}
      {showSupervisorLogin && <LoginPopupS setShowLogin={setShowSupervisorLogin} />} {/* Supervisor login popup */}
    </div>
  );
};

export default Login;
