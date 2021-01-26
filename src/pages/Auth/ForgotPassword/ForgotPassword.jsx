/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import './ForgotPassword.css';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      // if loading, disable submit button
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  }

  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
        <div className="forgot-password-form">
          <h2>Reset Password</h2>
          {error && <Alert severity="error">{error}</Alert>}
          {message && <Alert severity="success">{message}</Alert>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              email
              <input
                name="email"
                type="email"
                id="email"
                required
                ref={emailRef}
              />
            </label>
            <button
              className="forgot-password-submit"
              type="submit"
              disabled={loading}
            >
              Reset Password
            </button>
          </form>
        </div>
        <div className="forgot-password-login">
          <Link to="/login">Login</Link>
        </div>
        <div className="forgot-password-signup">
          Need an account?
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
