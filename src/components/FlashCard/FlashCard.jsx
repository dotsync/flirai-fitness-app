/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable react/prop-types */
import React from 'react';
import './Flashcard.css';
import axios from 'axios';

// const DUMMY_FLASH_CARD = {
//   title: 'Flashcard',
//   subject: 'Data Structures and',
//   topic: 'LinkedList',
//   question: 'What is 1 plus 1?',
//   answerOptions: [1, 2, 3, 4],
//   answer: 2,
// };

export default function Flashcard({ myFlashcards }) {
  const handleRemoveFlashcard = () => {
    // console.log('myFlashcards.length', myFlashcards.length)
    axios.delete(`http://localhost:3001/flashcards/${myFlashcards._id}`,
      { _id: myFlashcards._id })
      .then((data) => {
        console.log(data);
        // console.log('FLASHCARDS FROM DELETE CLIENT SHOULD BE ONE LESS', data)
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log('u clicked removed for this id', myFlashcards._id)
  };

  return !myFlashcards ? <div>loading</div> : (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="flashcard-header">
          <h3>{myFlashcards.catagory}</h3>
          <h5>{myFlashcards.subject}</h5>
        </div>
        <div className="flashcard-body">
          <div>{myFlashcards.question}</div>
        </div>
        <button type="submit" onClick={handleRemoveFlashcard}>delete</button>
      </div>
    </div>
  );
}
