import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from '../pages/Auth/Signup/Signup';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
