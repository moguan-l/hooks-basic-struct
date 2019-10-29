import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Progress } from '@/page/laboratory';

export default function Router(): JSX.Element {
  return (
    <Switch>
      <Route path="/laboratory/progress" component={Progress} />
    </Switch>
  )
}