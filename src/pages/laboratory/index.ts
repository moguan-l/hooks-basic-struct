import asyncLoad from '@/utils/async-load'

export const Progress = asyncLoad(() => import('./progress'))
export const News = asyncLoad(() => import('./news'))
