import initialState from './state';

const reducer: (state: App.state, action: commonAction) => App.state = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
