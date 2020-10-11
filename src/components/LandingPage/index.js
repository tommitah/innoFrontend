import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, signup } from '../../_actions/userActions'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import './landingPage.css'

import { Box, Button, Divider, Grid, CircularProgress } from '@material-ui/core'

const LandingPage = () => {
  const [logInForm, setLogInForm] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const loggingIn = useSelector(state => state.user.loggingIn)

  const signupSubmit = (user) => {
    dispatch(signup({ username: user.name, email: user.email, password: user.password }))
  }

  const loginSubmit = (user) => {
    const { from } = location.state || { from: { pathname: '/home' } }
    dispatch(login(user.email, user.password, from))
  }

  const rootStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={rootStyle}>
      <Box
        display="flex"
        flexDirection="column"
        width="300px">
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={logInForm}
            addEndListener={(node, done) => {
              node.addEventListener('transitionend', done, false)
            }}
            classNames='fade'>
            <Box paddingBottom={2}>
              {logInForm ?
                <SignUpForm submit={signupSubmit} /> :
                <LogInForm submit={loginSubmit} />
              }
            </Box>
          </CSSTransition>
        </SwitchTransition>
        <Grid
          style={{ textAlign: 'center' }}
          container
          alignItems="center">
          <Grid item xs>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setLogInForm(prevLogInForm => !prevLogInForm)}>
              {logInForm ? 'Log In' : 'Sign Up'}
            </Button>
          </Grid>
          <Divider flexItem orientation="vertical" />
          <Grid item xs>
            <Button component={RouterLink} to="/home">
              go to main page
            </Button>
          </Grid>
        </Grid>
        {loggingIn && <CircularProgress />}
      </Box>
    </div>
  )
}

export default LandingPage