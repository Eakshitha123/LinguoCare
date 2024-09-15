import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './LoginPopup.css';

const LoginPopupS = ({ setShowLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Hook to navigate to another page

  // Handle Supervisor login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Supervisor Login Submitted');
    navigate('/supervisor'); // Redirect to Supervisor page on successful login
  };

  // Handle Supervisor signup
  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Supervisor Signup Submitted');
    navigate('/supervisor'); // Redirect to Supervisor page on successful signup
  };

  const loginForm = (
    <form onSubmit={handleLogin} className="login-form">
      <h2>Supervisor Login</h2>
      <input type="email" required placeholder="Enter your email" />
      <input type="password" required placeholder="Enter your password" />
      <button type="submit" className="form-button">Login</button>
      <p>
        Don't have an account?{' '}
        <span onClick={() => setIsLogin(false)} className="link1">
          Sign up here
        </span>
      </p>
    </form>
  );

  const signupForm = (
    <form onSubmit={handleSignup} className="signup-form">
      <h2>Supervisor Signup</h2>
      <input type="text" required placeholder="Enter your name" />
      <input type="email" required placeholder="Enter your email" />
      <input type="password" required placeholder="Create a password" />
      <button type="submit" className="form-button">Create Account</button>
      <p>
        Already have an account?{' '}
        <span onClick={() => setIsLogin(true)} className="link1">
          Login here
        </span>
      </p>
    </form>
  );

  return (
    <div className="loginpopup-overlay">
      <div className="loginpopup">
        <button className="close-button" onClick={() => setShowLogin(false)}>✖</button>
        {isLogin ? loginForm : signupForm}
      </div>
    </div>
  );
};

export default LoginPopupS;
