/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Dashboard.css';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <div>
      <div className="user-profile">
        <h2>Profile</h2>
        {error && alert(error)}
        <strong>Email:</strong>
        {currentUser.email}
      </div>
      <Link to="/update-profile" className="update-profile">
        Update Profile
      </Link>
      <div className="signout-from-dash">
        <button type="submit" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}