import axios from 'axios'
import { baseURL } from '@/configs'

axios.defaults.baseURL = baseURL

axios.defaults.timeout = 30000

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
)
