/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import './Flashcard.css';
import axios from 'axios';

export default function Flashcard({ myFlashcards }) {
  const handleRemoveFlashcard = () => {
    // console.log('myFlashcards.length', myFlashcards.length)
    axios.delete(`http://localhost:3001/flashcards/${myFlashcards._id}`,
      { _id: myFlashcards._id })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleRevealAnswerFlashcard = () => {
    console.log('REVEAL ANSWER BUTN CLICKED!');
  };

  return !myFlashcards ? <div>loading</div> : (
    <div id="flashcard-container">
      <div id="flashcard">
        <div id="flashcard-header">
          <h3 id="flashcard-catagory">{myFlashcards.catagory}</h3>
          <h5 id="flashcard-subject">{myFlashcards.subject}</h5>
          <h6 id="flashcard-topic">{myFlashcards.topic}</h6>
        </div>
        <div id="flashcard-body">
          <div id="flashcard-question">{myFlashcards.question}</div>
        </div>
        <button id="flashcard-delete-btn" type="submit" onClick={handleRemoveFlashcard}>delete</button>
        <button id="flashcard-answer-btn" type="submit" onClick={handleRevealAnswerFlashcard}>reveal</button>
      </div>
    </div>
  );
}
/*
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
RECURSION
What is an execution context and how does it relate to recursion?
->An execution context contains the variables within each ruecrisve function call.
-->Separate recursive calls each have their own variables stored in their own execution context.
When analyzing the Big O runtime of recursive functions, we count the ____.
->relationship of input to function calls.
What is the purpose of the base case in a recursive function?
->In the base case, there is no recursive function call.
Recursion is typically more efficient than iteration.
->False
A function will not recurse if the __ is reached.A function will not recurse if the __ is reached.
->Base case
*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
ASYMPTOTIC NOTATION?

*/
