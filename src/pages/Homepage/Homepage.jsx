import React from 'react';
import './Homepage.css';
import DailyTasks from '../../components/DailyTasks/DailyTasks';

export default function Homepage() {
  return (
    <div className="home-page">
      <DailyTasks />
    </div>
  );
}
