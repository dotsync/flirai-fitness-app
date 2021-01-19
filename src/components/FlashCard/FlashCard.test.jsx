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
      expect(wrapper.text()).toBe('loading');
    });
  });
  // setup
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
  // Checks myFlashcard has buttons
  describe('It has buttons', () => {
    test('should have a button to delete the flashcard', () => {
      // console.log('SHOW', component.debug())
      wrapper = component.find('#flashcard-delete-btn');
      expect(wrapper.text()).toBe('delete');
    });
    test('Flashcard renders reveal answer button', () => {
      wrapper = component.find('#flashcard-answer-btn');
      expect(wrapper.length).toBe(1);
    });
  });
// API
// setup(mount?)
// describe('It renders a flashcard using an API', () => {
//   // let cardFromAPI
//   test('myFlashcard renders a category', () => {
//     const component = shallow(<Flashcard myFlashcards={cardFromAPI} />)
//     const wrapper = component.find('.makeStyles-category-8')
//     // exact match
//     expect(wrapper.text()).toBe('match the api')
//   });
//   test('myFlashcard renders a subject', () => {
//     const component = shallow(<Flashcard myFlashcards={cardFromAPI} />)
//     const wrapper = component.find('.makeStyles-subject-9')
//     expect(wrapper.text()).toBe('match the api')
//   });
//   test('myFlashcard renders a question', () => {
//     const component = shallow(<Flashcard myFlashcards={cardFromAPI} />)
//     const wrapper = component.find('.makeStyles-question-10')
//     expect(wrapper.text()).toBe('match the api')
//   });
});
