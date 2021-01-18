import React from 'react';
import './ExerciseCard.css';

const DUMMY_EXERCISE_CARD = {
  title: 'Endurance Swim',
  subject: 'Swim',
  description: 'A continuos easy-paced swim to develop your endurance',
  time: 90,
  Complete: true,
};

export default function ExerciseCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2><b>{DUMMY_EXERCISE_CARD.title}</b></h2>
        </div>
        <div className="card-description">
          <p>{DUMMY_EXERCISE_CARD.description}</p>
        </div>
        <div className="card-details">
          <h3>Time(minutes)</h3>
          <p>{DUMMY_EXERCISE_CARD.time}</p>
          <h3>Effort</h3>
          <p>4/10</p>
          <h3>Intervals</h3>
          <p>1x 2500m/y</p>
        </div>
      </div>
    </div>
  );
}
