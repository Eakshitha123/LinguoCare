import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <h1>Login / Sign Up</h1>
            <div className="login-options">
                <div className="login-box">
                    <h2>Login as User</h2>
                    <button onClick={() => window.location.href = '/user-login'}>Login</button>
                </div>
                <div className="login-box">
                    <h2>Login as Therapist</h2>
                    <button onClick={() => window.location.href = '/therapist-login'}>Login</button>
                </div>
                <div className="login-box">
                    <h2>Login as Supervisor</h2>
                    <button onClick={() => window.location.href = '/supervisor-login'}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
