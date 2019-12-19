import initialState from './state'

const reducer: (state: Laboratory.State, action: Common.Action) => Laboratory.State = (
  state = initialState,
  action
) => {
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
