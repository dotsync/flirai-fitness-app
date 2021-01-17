import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
