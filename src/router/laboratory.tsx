import React from 'react';
import { Route } from 'react-router-dom';
import { Progress } from '@/pages/laboratory';

export default function Routes(): JSX.Element {
  return (
    <>
      <Route path="/laboratory/progress" component={Progress} />
    </>
  );
}
