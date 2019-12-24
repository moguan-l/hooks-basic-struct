import { Action } from '../type'
import initialState, { LaboratoryState } from './state'

const reducer: (state: LaboratoryState, action: Action) => LaboratoryState = (state = initialState, action) => {
  switch (action.type) {
    case 'increase': {
      const { progress } = state
      return { ...state, progress: progress >= 100 ? progress : progress + 10 }
    }
    case 'decrease': {
      const { progress } = state
      return { ...state, progress: progress <= 0 ? progress : progress - 10 }
    }
    default:
      return state
  }
}

export default reducer
