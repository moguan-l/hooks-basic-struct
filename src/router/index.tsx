import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Store as LaboratoryRouter } from '@/store/laboratory';
import Home from '@/page/index';

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <LaboratoryRouter />
      </Switch>
    </Router>
  );
}
