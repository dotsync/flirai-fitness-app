import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from '../pages/Auth/Signup/Signup';
import Login from '../pages/Auth/Login/Login';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
