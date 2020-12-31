import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <h1>I will be the sign in page</h1>
        </Route>
        <Route path="/signup">
          <h1>I will be the sign up page</h1>
        </Route>
        <Route path="/browse">
          <h1>I will be the browse page</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
