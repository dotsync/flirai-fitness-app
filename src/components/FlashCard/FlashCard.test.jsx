/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Flashcard from './Flashcard';

describe('Flashcard Component Test Suite', () => {
  let wrapper;
  const testCard = {
    flashcardId: '99',
    createdAt: 'Sun Sep 99 2020 08:51:54 GMT-0600 (Mountain Daylight Time)',
    catagory: 'Frontend',
    subject: 'CSS',
    question: 'How do you add multiple classes to a class attribute',
    answer: 'With a space in the middle of the two classes',
    amountOfFlips: '0',
  };
  describe('It renders without a flashcard prop', () => {
    test('It renders loading message', () => {
      const component = shallow(<Flashcard />);
      // console.log(component.debug());
      wrapper = component.find('div');
      expect(wrapper.text()).toBe('loading flashcard');
    });
  });
  // setup props
  const setUp = (props = {}) => {
    // passes a dummy to myFlashcards prop
    const component = shallow(<Flashcard myFlashcards={testCard} />);
    return component;
  };
  // pre drill
  let component;
  beforeEach(() => {
    component = setUp();
  });
  // start tests
  describe('It renders a complete Flashcard using dummy myFlashcard', () => {
    test('myFlashcard renders a catagory', () => {
      wrapper = component.find('#flashcard-catagory');
      expect(wrapper.text()).toBe(testCard.catagory);
    });
    test('myFlashcard renders a subject', () => {
      wrapper = component.find('#flashcard-subject');
      expect(wrapper.text()).toBe(testCard.subject);
    });
    test('myFlashcard renders a question', () => {
      wrapper = component.find('#flashcard-question');
      expect(wrapper.text()).toBe(`${testCard.question}`);
    });
  });
  // Checks flashcard has buttons
  describe('It has buttons', () => {
    // delete
    test('should have a button to delete the flashcard', () => {
      wrapper = component.find('#flashcard-delete-btn');
      expect(wrapper.text()).toBe('delete');
    });
    // reveal answer
    test('Flashcard renders reveal answer button', () => {
      wrapper = component.find('#flashcard-answer-btn');
      expect(wrapper.length).toBe(1);
    });
  });
});
