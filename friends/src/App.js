import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import UserProfile from './components/UserProfile';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* Redirect to profile if already logged in */}
      {
        sessionStorage.getItem('token') ? <Redirect to="/profile" /> : null
      }

      <Switch>
        <PrivateRoute path="/profile">
          <UserProfile />
        </PrivateRoute>

        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
