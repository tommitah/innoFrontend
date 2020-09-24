import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'

const App = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  )
}

export default App
