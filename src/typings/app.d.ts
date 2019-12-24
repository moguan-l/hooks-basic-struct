declare namespace Common {
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

  type Service = (param?: any) => Promise<AxiosResponse<any>>
}

declare namespace App {
  interface State extends Common.State {
    [propName: string]: any
  }

  interface Context extends Common.Context {
    state: State
  }
}

declare namespace Laboratory {
  interface State extends Common.State {
    progress: number
  }

  interface Context extends Common.Context {
    state: State
  }
}
