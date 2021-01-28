import React from 'react';

export default function SolarSystem() {
  return (
    <div>
      <a-scene>
        <a-cylinder
          id="ground"
          src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          radius="32"
          height="0.1"
        />
      </a-scene>
    </div>
  );
}
