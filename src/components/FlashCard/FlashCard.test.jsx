/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FlashCard from './FlashCard';

describe('Flashcard Component Test Suite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FlashCard />);
  });

  test('should have a title', () => {
    expect(wrapper.exists('.flashcard-title')).toBe(true);
  });
  test('should have a question', () => {
    expect(wrapper.exists('.flashcard-question')).toBe(true);
  });
});
