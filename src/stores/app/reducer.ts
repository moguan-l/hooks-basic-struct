import initialState from './state'

const reducer: (state: App.State, action: Common.Action) => App.State = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
