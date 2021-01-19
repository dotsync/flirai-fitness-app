/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import Flashcard from '../Flashcard/Flashcard';

export default function FlashcardsList() {
  const [myFlashcards, setMyFlashcards] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('http://localhost:3001/flashcards/list');
        console.log('response', response);
        const flashcards = await response.json();
        setMyFlashcards(flashcards);
      } catch (err) {
        console.log(`Uh-oh there was an error trying to receive the flashcards list: ${err}`);
      }
    }
    fetchReviews();
  }, []);
  console.log('myFlashcards', myFlashcards);
  return (
    <div>
      {!myFlashcards ? console.log('loading myFlashcards') : myFlashcards.map((card, i) => (
        // generate a GridListTile for each flashcard
        <div key={`card#${i}`}>
          <Flashcard myFlashcards={card} />
        </div>
      ))}
    </div>
  );
}
