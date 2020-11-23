import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import LandingPage from './components/LandingPage'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import WorkersPage from './components/WorkersPage'
import PrivateRoute from './components/PrivateRoute'
import Drawer from './components/Drawer'
import AppBar from './components/AppBar'

import { clearAlert } from './_actions/alertActions'
import Role from './_utils/role'

import {
  CssBaseline,
  Snackbar,
  Toolbar,
  Grid
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'

/**
 * App component, main react component which acts as a container for all the other components.
 * @exports App
 */
const App = () => {
  const { loggedIn, data } = useSelector(state => state.user)
  const alert = useSelector(state => state.alert)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  const handleSnackbarClose = (_event, reason) => {
    if (reason !== 'clickaway') {
      dispatch(clearAlert())
    }
  }

  /**
   * Function for opening and closing drawer component.
   * Passed as prop to [AppBar]{@link module:components/AppBar} and
   * [Drawer]{@link module:components/Drawer}.
   * @function
   */
  const handleDrawer = () => {
    setOpen(prevOpen => !prevOpen)
  }

  // extra toolbar prevents content from going underneath appbar.
  return (
    <>
      <ScrollToTop />
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
            <HomePage />
          </Route>
          <PrivateRoute path="/profile" loggedIn={loggedIn}>
            <ProfilePage />
          </PrivateRoute>
          <PrivateRoute
            path="/workers"
            role={data.role}
            roles={[Role.Business, Role.Agency]}
            loggedIn={loggedIn}>
            <WorkersPage />
          </PrivateRoute>
          <Redirect from="*" to="/home" />
        </Switch>
      </Grid>
    </>
  )
}

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default App