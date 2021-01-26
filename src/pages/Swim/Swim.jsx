import React from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';

export default function Swim() {
  const DUMMY_EXERCISE_CARD = {
    title: 'Endurance Swim',
    subject: 'Swim',
    description: 'A continuos easy-paced swim to develop your endurance',
    time: 90,
    Complete: true,
  };
  return (
    <div>
      swim
      <ExerciseCard exerciseCard={DUMMY_EXERCISE_CARD} />
    </div>
  );
}
