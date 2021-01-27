import React from 'react';
import './Homepage.css';

export default function Homepage() {
  return (
    <div className="home-page">
      <a-scene>
        <a-entity environment="preset: starry" />
      </a-scene>
    </div>
  );
}
