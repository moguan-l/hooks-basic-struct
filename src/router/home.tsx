import React from 'react'
import { Route } from 'react-router-dom'
import Home from '@/pages/home'

export default function Routes(): JSX.Element {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/index" component={Home} />
    </>
  )
}
