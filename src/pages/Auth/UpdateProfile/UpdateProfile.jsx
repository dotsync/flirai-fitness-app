/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import './UpdateProfile.css';
import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    // validation checks
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      // exit because error
      return setError('Passwords do not match');
    }

    const promises = [];
    setLoading(true);
    setError('');
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises).then(() => {
      history.push('/');
    }).catch(() => {
      setError('Failed to update account');
    }).finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="update-profile">
      <div className="update-profile-container">
        <div className="update-profile-form">
          <h2>Update Profile</h2>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              email
              <input
                name="email"
                type="email"
                id="email"
                required
                defaultValue={currentUser.email}
                ref={emailRef}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                name="password"
                type="password"
                id="password"
                ref={passwordRef}
                placeHolder="Leave blank to keep the same"
              />
            </label>
            <label htmlFor="password-confirm">
              Password Confirmation
              <input
                name="password-confirm"
                type="password"
                id="password-confirm"
                ref={passwordConfirmRef}
                placeHolder="Leave blank to keep the same"
              />
            </label>
            <button className="update-profile-submit" type="submit" disabled={loading}>Submit</button>
          </form>
          <div className="update-profile-login">
            <Link to="/dashboard">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
