import React from 'react';

export interface reducerState {
  progress: number;
  [propName: string]: any;
}

export interface reducerAction {
  type: string;
  [propName: string]: any;
}

export interface context {
  state: reducerState;
  dispatch: any;
}

export const initialState: reducerState = {
  progress: 30,
};

export const reducer: (state: reducerState, action: reducerAction) => reducerState = (state = initialState, action) => {
  switch (action.type) {
    case 'increase': {
      const { progress } = state;
      return { ...state, progress: progress >= 100 ? progress : (progress + 10) };
    }
    case 'decrease': {
      const { progress } = state;
      return { ...state, progress: progress <= 0 ? progress : (progress - 10) };
    }
    default:
      return state;
  }
};

export const appContext: React.Context<context> = React.createContext({ state: initialState, dispatch: null });

export const Provider: React.ProviderExoticComponent<React.ProviderProps<context>> = appContext.Provider;
