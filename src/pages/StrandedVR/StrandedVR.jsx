/* eslint-disable react/self-closing-comp */
import React from 'react';

export default function SolarSystem() {
  return (
    <div>
      <a-scene>
        <a-assets>
          <img alt="groundTexture" id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg" />
          <img alt="skyTexture" id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg" />
        </a-assets>
        <a-cylinder
          id="ground"
          src="#groundTexture"
          radius="32"
          height="0.1"
        />
        <a-sky
          id="background"
          src="#skyTexture"
          theta-length="90"
          radius="30"
        >
        </a-sky>
      </a-scene>
    </div>
  );
}
