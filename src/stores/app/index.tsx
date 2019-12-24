import React, { createContext, useReducer } from 'react'
import Router from '@/router'
import initialState, { AppState } from './state'
import reducer from './reducer'

interface AppContext {
  state: AppState
  dispatch: any
}

export const context: React.Context<AppContext> = createContext({
  state: initialState,
  dispatch: null,
})

const Provider = context.Provider

export function Store(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Provider value={{ state, dispatch }}>
      <Router />
    </Provider>
  )
}
