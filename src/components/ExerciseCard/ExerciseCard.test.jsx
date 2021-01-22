/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ExerciseCard from './ExerciseCard';

describe('ExerciseCard component test suite', () => {
  const testCard = {
    title: 'Endurance Swim',
    subject: 'Swim',
    description: 'A continuos easy-paced swim to develop your endurance',
    time: 90,
    Complete: true,
  };

  const setUp = (props = {}) => {
    const component = shallow(<ExerciseCard exerciseCard={testCard} />);
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
      expect(wrapper.text()).toBe('loading');
    });
  });
  // has prop card
  describe('ExerciseCard has prop', () => {
    test('should have a title', () => {

    });
  });
});
