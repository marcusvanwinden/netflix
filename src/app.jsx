import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <h1>I will be the sign in page</h1>
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <h1>I will be the sign up page</h1>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <h1>I will be the browse page</h1>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
