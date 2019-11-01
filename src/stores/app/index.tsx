import React, { createContext, useReducer } from 'react';
import Router from '@/router';
import initialState from './state';
import reducer from './reducer';

export const context: React.Context<App.Context> = createContext({
  state: initialState,
  dispatch: null
});

const Provider = context.Provider;

export function Store(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <Router />
    </Provider>
  );
}
