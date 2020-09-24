import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import Home from './components/Home'

import { Container } from '@material-ui/core'

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Container>
  )
}

export default App
