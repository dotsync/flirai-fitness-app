/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import './Login.css';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      // if loading, disable submit button
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      // successful login goes to dashboard
      history.push('/dashboard');
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form">
          <h2>Log In</h2>
          {error && <Alert severity="error">{error}</Alert>}
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
            <label htmlFor="password">
              Password
              <input
                name="password"
                type="password"
                id="password"
                required
                ref={passwordRef}
              />
            </label>
            <button className="login-submit" type="submit" disabled={loading}>Login</button>
          </form>
        </div>
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="login-signup">
          Need an account?
          <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
