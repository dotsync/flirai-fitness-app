import React from 'react';
import './ExerciseCard.css';

const DUMMY_EXERCISE_CARD = {
  title: 'Endurance Swim',
};

export default function ExerciseCard() {
  return (
    <div className="card">
      <div className="container">
        <h2><b>{DUMMY_EXERCISE_CARD.title}</b></h2>
        <p>A continuos easy-paced swim to develop your endurance</p>
        <h3>Time</h3>
        <p>1hr 45min</p>
        <h3>Effort</h3>
        <p>4/10</p>
        <h3>Intervals</h3>
        <p>1x 2500m/y</p>
      </div>
    </div>
  );
}
