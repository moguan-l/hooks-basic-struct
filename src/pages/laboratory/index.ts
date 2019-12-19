import asyncLoad from '@/utils/async-load'

export const Progress = asyncLoad(() => import('./progress'))
