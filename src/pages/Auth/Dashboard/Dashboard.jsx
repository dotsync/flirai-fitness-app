/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Dashboard.css';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../../../contexts/AuthContext';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    // clear error
    setError('');
    try {
      // await logout
      await logout();
      history.push('/login');
    } catch {
      // set error failed to logout
      setError('Failed to log out');
    }
  }

  return (
    <div>
      <div>
        <h2>Profile</h2>
        {error && <Alert severity="error">{error}</Alert>}
        <strong>Email: </strong>
        {currentUser.email}
        <br />
        <Link to="/update-profile">
          Update Profile
        </Link>
        <div>
          <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}
