import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Store as LaboratoryRoutes } from '@/stores/laboratory'

import HomeRoute from './home'

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <HomeRoute />
      <LaboratoryRoutes />
    </Router>
  )
}
