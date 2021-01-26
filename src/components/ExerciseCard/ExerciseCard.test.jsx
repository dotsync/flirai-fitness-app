/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ExerciseCard from './ExerciseCard';

describe('ExerciseCard component test suite', () => {
  const DUMMY_EXERCISE_TEST_CARD = {
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

  const setUp = (props = {}) => {
    const component = shallow(<ExerciseCard exerciseCard={DUMMY_EXERCISE_TEST_CARD} />);
    return component;
  };
  let component;
  beforeEach(() => {
    component = setUp();
  });
  // has no prop card
  describe('ExerciseCard has no prop so renders a loading div', () => {
    test('should render loading message', () => {
      component = shallow(<ExerciseCard />);
      const wrapper = component.find('.loading');
      expect(wrapper.text()).toBe('loading exercise card');
    });
  });
  // has prop card
  describe('ExerciseCard has prop', () => {
    test('should have a title', () => {

    });
  });
});
