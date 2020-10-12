import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'

import { clearAlert } from './_actions/alertActions'

import { Snackbar } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const App = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(clearAlert())
  }

  return (
    <div>
      <Snackbar open={alert.open} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alert.severity} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>
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
    </div>
  )
}

export default App