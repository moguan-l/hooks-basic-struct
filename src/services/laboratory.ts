import axios from 'axios'

export const getProgress: Common.Service = () => axios.get('/journalismApi')
