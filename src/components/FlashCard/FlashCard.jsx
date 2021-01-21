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
