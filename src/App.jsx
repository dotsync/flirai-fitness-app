import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <h1>This is a counter app</h1>
      <div id="counter-value">{count}</div>
      <button type="button" id="increment-btn">Increment</button>
    </div>
  );
}

export default App;
