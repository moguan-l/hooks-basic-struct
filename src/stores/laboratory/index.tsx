import React, { createContext, useReducer } from 'react'
import Router from '@/router/laboratory'
import initialState, { LaboratoryState } from './state'
import reducer from './reducer'

interface LaboratoryContext {
  state: LaboratoryState
  dispatch: any
}

export const context: React.Context<LaboratoryContext> = createContext({
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
