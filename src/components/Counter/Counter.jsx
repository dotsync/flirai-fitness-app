import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>This is a counter app</h1>
      <div id="counter-value">{count}</div>
      <button
        type="button"
        id="increment-btn"
        onClick={() => { setCount(count + 1); }}
      >
        Increment
      </button>
      <button
        type="button"
        id="decrement-btn"
        onClick={() => { setCount(count - 1); }}
      >
        decrement
      </button>
    </div>
  );
}
