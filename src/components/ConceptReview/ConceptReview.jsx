import React from 'react';
import './ConceptReview.css';
import FlashCard from '../FlashCard/FlashCard';
import UserStatistics from '../UserStatistics/UserStatistics';

export default function ConceptReview() {
  return (
    <div className="concept-review-row">
      <UserStatistics />
      <div className="flashcards-col">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>
    </div>
  );
}
