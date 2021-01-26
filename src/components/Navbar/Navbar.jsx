import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="navbar-logo" to="/home">
        flirai
      </Link>
      <div className="navbar-options">
        <div className="navbar-dashboard">
          <Link to="/dashboard">dashboard</Link>
        </div>
        <div className="navbar-player-score">
          player score
        </div>
      </div>
    </div>
  );
}
