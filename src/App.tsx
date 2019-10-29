import React, { useReducer } from 'react';
import { Provider, initialState, reducer } from './store';
import Router from './router';

export default function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <Router />
    </Provider>
  )
}