import React, { createContext, useReducer } from 'react';
import Router from '@/router/laboratory';
import initialState from './state';
import reducer from './reducer';

export const context: React.Context<Laboratory.Context> = createContext({
  state: initialState,
  dispatch: null
});

const Provider: React.ProviderExoticComponent<
  React.ProviderProps<Laboratory.Context>
> = context.Provider;

export function Store(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider value={{ state, dispatch }}>
      <Router />
    </Provider>
  );
}
