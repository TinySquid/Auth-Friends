import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">


      <Route exact path="/" component={Login} />

      <PrivateRoute path="/profile">

      </PrivateRoute>
    </div>
  );
}

export default App;
