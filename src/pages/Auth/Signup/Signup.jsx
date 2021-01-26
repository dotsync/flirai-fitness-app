/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import './Signup.css';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    // validation checks
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // exit because error
      return setError('Passwords do not match');
    }
    try {
      setError('');
      // if loading, disable submit button
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // successful signup goes to dashboard
      history.push('/dashboard');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-form">
          <h2>Sign Up</h2>
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
            <label htmlFor="password-confirm">
              Password Confirmation
              <input
                name="password-confirm"
                type="password"
                id="password-confirm"
                required
                ref={passwordConfirmRef}
              />
            </label>
            <button className="signup-submit" type="submit" disabled={loading}>Submit</button>
          </form>
          <div className="signup-login">
            Already have an account?
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
