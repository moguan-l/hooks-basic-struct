import axios from 'axios'
import { Service } from './type'

export const getProgress: Service = () => axios.get('/journalismApi')
