import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from '../pages/Auth/Signup/Signup';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/signup" component={Signup} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
