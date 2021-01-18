import React from 'react';
import './Homepage.css';
import DailyTasks from '../../components/DailyTasks/DailyTasks';
import ConceptReview from '../../components/ConceptReview/ConceptReview';

export default function Homepage() {
  return (
    <div className="home-page">
      <DailyTasks />
      <br />
      <ConceptReview />
    </div>
  );
}
