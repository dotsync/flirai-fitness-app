import React from 'react';
import './Homepage.css';

export default function Homepage() {
  return (
    <div className="home-page">

      <a-scene>
        <a-entity environment="preset: egypt" />
        <a-assets>
          <a-asset-item
            id="character"
            src="codey.gltf"
          />
        </a-assets>
        <a-gltf-model
          src="#character"
          position="0 2 -4"
        />
      </a-scene>
    </div>
  );
}
