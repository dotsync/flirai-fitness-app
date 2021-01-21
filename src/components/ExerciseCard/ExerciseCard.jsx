/* eslint-disable react/prop-types */
import React from 'react';
import './ExerciseCard.css';

const DUMMY_EXERCISE_CARD = {
  title: 'Endurance Swim',
  subject: 'Swim',
  description: 'A continuos easy-paced swim to develop your endurance',
  time: 90,
  Complete: true,
};

export default function ExerciseCard({ exerciseCard }) {
  return !exerciseCard ? <div className="loading">loading</div> : (
    <div className="exercisecard-container">
      <div className="exercisecard">
        <div className="exercisecard-title">
          <h2><b>{DUMMY_EXERCISE_CARD.title}</b></h2>
        </div>
        <div className="exercisecard-description">
          <p>{DUMMY_EXERCISE_CARD.description}</p>
        </div>
        <div className="exercisecard-details">
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
