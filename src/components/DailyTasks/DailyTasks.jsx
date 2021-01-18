import React from 'react';
import './DailyTasks.css';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

export default function DailyTask() {
  return (
    <div className="daily-tasks-row">
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
      <ExerciseCard />
    </div>
  );
}
