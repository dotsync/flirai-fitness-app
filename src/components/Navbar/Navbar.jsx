import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        flirai
      </Link>
      <div className="navbar-options">
        <div className="player-score">
          player score
        </div>
      </div>
    </div>
  );
}
