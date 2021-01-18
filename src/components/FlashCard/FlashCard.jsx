import React from 'react';
import './FlashCard.css';

const DUMMY_FLASH_CARD = {
  title: 'FlashCard',
  subject: 'Math',
  question: 'What is 1 plus 1?',
  answerOptions: [1, 2, 3, 4],
  answer: 2,
};

export default function FlashCard() {
  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="flashcard-title">
          <h2><b>{DUMMY_FLASH_CARD.title}</b></h2>
        </div>
        <div className="flashcard-question">
          <p>{DUMMY_FLASH_CARD.question}</p>
        </div>
        <div className="flashcard-answer">
          <ul>
            {DUMMY_FLASH_CARD.answerOptions.map((option, i) => (
              <li key={`Option#${i + 1}`}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
