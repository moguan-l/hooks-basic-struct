import axios from 'axios'

export const getNews: Common.Service = params => axios.get('/getWangYiNews', { params })
