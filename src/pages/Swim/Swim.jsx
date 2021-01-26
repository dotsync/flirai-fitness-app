import React from 'react';
import ExerciseCard from '../../components/ExerciseCard/ExerciseCard';

export default function Swim() {
  const DUMMY_EXERCISE_CARD = {
    // reducer(accumulator, currentValue){ accumulator + currentValue;},
    title: 'Swim',
    description: 'An easy swim workout with drills to focuse on technique',
    cardImage: '../../../public/static/images/cards/poolside.jpg',
    cardImageTitle: 'Swimming pool',
    totalDistance: 1300,
    totalTime: 60,
    unit: 'meters',
    warmup: {
      type: ['freestyle'],
      amount: 100,
    },
    drills: {
      type: ['3stroke-6kick', 'fist', 'catch-up', 'zipper'],
      amount: 50,
    },
    mainset: {
      type: 'Technique Swim',
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
      <ExerciseCard exerciseCard={DUMMY_EXERCISE_CARD} />
    </div>
  );
}
