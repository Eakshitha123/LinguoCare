import React from 'react';
import './Login.css'; 
import { assets } from '../../assets/assets';
// Make sure this is the correct import path

const Login = () => {
    return (
        <div className="login-container">
            <h1>Login / Sign Up</h1>
            <div className="login-options">
                <div className="login-box">
                    <h2>Login as User</h2>
                    <div className="circle">
                        <img src={assets.loginuser} alt="User" />
                    </div>
                    <button onClick={() => window.location.href = '/user-login'}>Login</button>
                </div>
                <div className="login-box">
                    <h2>Login as Therapist</h2>
                    <div className="circle">
                        <img src={assets.logindoctor} alt="Therapist" /> {/* Therapist image */}
                    </div>
                    <button onClick={() => window.location.href = '/therapist-login'}>Login</button>
                </div>
                <div className="login-box">
                    <h2>Login as Supervisor</h2>
                    <div className="circle">
                        <img src={assets.loginsupervisor} alt="Supervisor" />
                    </div>
                    <button onClick={() => window.location.href = '/supervisor-login'}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
