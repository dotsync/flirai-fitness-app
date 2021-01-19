/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Flashcard from './Flashcard';

describe('Flashcard Component Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Flashcard />);
  });

  test('should have a title', () => {
    expect(wrapper.exists('.flashcard-title')).toBe(true);
  });
  test('should have a question', () => {
    expect(wrapper.exists('.flashcard-question')).toBe(true);
  });
});
