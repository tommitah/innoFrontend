import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)

  return (
    <Switch>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/home" /> : <LandingPage />}
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <PrivateRoute path="/profile" loggedIn={loggedIn}>
        <Profile />
      </PrivateRoute>
      <Redirect from="*" to="/home" />
    </Switch>
  )
}

export default App