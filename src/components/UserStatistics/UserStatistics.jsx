import React from 'react';
import './UserStatistics.css';

export default function Statistics() {
  const DUMMY_USER_STATISTICS = {
    // out of 100 possible points
    typing: 50,
    linkedList: 50,
    arrays: 50,
    hashtables: 50,
  };

  return (
    <div className="user-statistics-col">
      <h4>
        typing:
        {DUMMY_USER_STATISTICS.typing}
      </h4>
      <h4>
        linkedlist:
        {DUMMY_USER_STATISTICS.linkedList}
      </h4>
      <h4>
        arrays
        {DUMMY_USER_STATISTICS.arrays}
      </h4>
      <h4>
        hashtables
        {DUMMY_USER_STATISTICS.hashtables}
      </h4>
    </div>
  );
}
