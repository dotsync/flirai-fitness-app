import './Login.css';
import React from 'react';
import Signup from '../../components/Auth/Signup/Signup';

export default function Login() {
  return (
    <div className="login-page">
      <div className="signup-container">
        <Signup />
      </div>
    </div>
  );
}
