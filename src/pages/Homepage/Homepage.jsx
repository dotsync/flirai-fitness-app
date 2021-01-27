import React from 'react';
import './Homepage.css';

export default function Homepage() {
  return (
    <div className="home-page">
      <a-scene background="color: midnightblue">
        <a-box
          color="#F5C85D"
          position="0 0 -5"
          rotation="33 45 0"
          scale="2 1 2"
        />
      </a-scene>
    </div>
  );
}
