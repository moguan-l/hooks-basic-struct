import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../page';

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}
