import { AxiosResponse } from 'axios'

export type Service = (param?: any) => Promise<AxiosResponse<any>>
