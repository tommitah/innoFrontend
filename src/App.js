import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
import Drawer from './components/Drawer'
import AppBar from './components/AppBar'

import { clearAlert } from './_actions/alertActions'

import {
  CssBaseline,
  Snackbar,
  Toolbar,
  Grid
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

const App = () => {
  const loggedIn = useSelector(state => state.user.loggedIn)
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleSnackbarClose = (_event, reason) => {
    if (reason !== 'clickaway') {
      dispatch(clearAlert())
    }
  }

  const handleDrawer = () => {
    setOpen(prevOpen => !prevOpen)
  }

  // extra toolbar prevents content from going underneath appbar.
  return (
    <div>
      <CssBaseline />
      <AppBar handleDrawer={handleDrawer} />
      <Toolbar />
      <Drawer open={open} handleDrawer={handleDrawer} loggedIn={loggedIn} />
      <Snackbar open={alert.open} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={alert.severity} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>
      <Grid
        container
        justify="center"
        spacing={0}
        alignItems="center"
        style={{ minHeight: '100vh' }}>
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
      </Grid>
    </div>
  )
}

export default App