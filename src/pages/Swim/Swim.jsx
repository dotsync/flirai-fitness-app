import React from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';

export default function Swim() {
  const DUMMY_EXERCISE_CARD = {
    // reducer(accumulator, currentValue){ accumulator + currentValue;},
    title: 'Endurance Swim',
    subject: 'Swim',
    description: 'A continuos easy-paced swim to develop your endurance',
    totalDistance: 1300,
    unit: 'meters',
    warmup: {
      type: ['freestyle'],
      amount: 100,
    },
    drills: {
      type: ['3stroke-6kick, fist, catch-up, zipper'],
      amount: 50,
    },
    mainset: {
      type: 'Endurance Swim',
      repetitions: [100, 200, 300, 400],
      sets: 4,
      perceivedExertion: 4,
      rest: 60,

    },
    cooldown: {
      type: ['freestyle'],
      amount: 100,
    },
    time: 90,
    completed: false,
  };
  return (
    <div>
      swim
      <ExerciseCard exerciseCard={DUMMY_EXERCISE_CARD} />
    </div>
  );
}
