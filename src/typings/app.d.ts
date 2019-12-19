namespace Common {
  interface State {
    [propName: string]: any
  }

  interface Action {
    type: string
    [propName: string]: any
  }

  interface Context {
    state: State
    dispatch: any
  }
}

namespace App {
  interface State extends Common.State {}

  interface Context extends Common.Context {}
}

namespace Laboratory {
  interface State extends Common.State {
    progress: number
  }

  interface Context extends Common.Context {
    state: State
  }
}