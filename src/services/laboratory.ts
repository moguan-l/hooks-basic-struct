import axios from 'axios'
import { Service } from './type'

export const getNews: Service = params => axios.get('/getWangYiNews', { params })
