import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, signup } from '../../_actions/userActions'

import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import './landingPage.css'

import { Box, Button, Divider, Grid } from '@material-ui/core'

const LandingPage = () => {
  const [logInForm, setLogInForm] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const loggingIn = useSelector(state => state.user.loading)

  const signupSubmit = ({ role, ...user }) => {
    dispatch(signup(user, role))
  }

  const loginSubmit = ({ role, ...credentials }) => {
    const { from } = location.state || { from: { pathname: '/home' } }
    dispatch(login(credentials, role, from))
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="320px">
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={logInForm}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames='fade'>
          <Box paddingBottom={2}>
            {logInForm ?
              <SignUpForm loggingIn={loggingIn} handleSubmit={signupSubmit} /> :
              <LogInForm loggingIn={loggingIn} handleSubmit={loginSubmit} />
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
    </Box>
  )
}

export default LandingPage