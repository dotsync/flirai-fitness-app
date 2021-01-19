import React from 'react';
import './ConceptReview.css';
import UserStatistics from '../UserStatistics/UserStatistics';
import FlashcardsList from '../FlashcardsList/FlashcardsList';
import CreateFlashcard from '../CreateFlashcard/CreateFlashcard';

export default function ConceptReview() {
  return (
    <div className="concept-review-row">
      <UserStatistics />
      <div className="flashcards-col">
        <FlashcardsList />
      </div>
      <CreateFlashcard />
    </div>
  );
}
