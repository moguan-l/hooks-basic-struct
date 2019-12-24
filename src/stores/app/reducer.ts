import { Action } from '../type'
import initialState, { AppState } from './state'

const reducer: (state: AppState, action: Action) => AppState = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
