interface commonState {
  [propName: string]: any;
}

interface commonAction {
  type: string;
  [propName: string]: any;
}

interface commonContext {
  state: commonState;
  dispatch: any;
}

declare namespace App {
  interface state extends commonState {}

  interface context extends commonContext {}
}

declare namespace Laboratory {
  interface state extends commonState {
    progress: number;
  }

  interface context extends commonContext {
    state: state;
  }
}
