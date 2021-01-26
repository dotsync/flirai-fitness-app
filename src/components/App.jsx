import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { AuthProvider } from '../contexts/AuthContext';
import Signup from '../pages/Auth/Signup/Signup';
import Login from '../pages/Auth/Login/Login';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword';
import Dashboard from '../pages/Auth/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Homepage from '../pages/Homepage/Homepage';
import UpdateProfile from '../pages/Auth/UpdateProfile/UpdateProfile';

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/home" component={Homepage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
