import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Link as RouterLink } from 'react-router-dom'

import RegisterForm from './SignUpForm'
import LogInForm from './LogInForm'
import './landingPage.css'

import { Box, Button, Divider, Grid } from '@material-ui/core'

const LandingPage = () => {
  const [logInForm, setLogInForm] = useState(false)

  const registerSubmit = (user) => {
    console.log('register', user)
  }

  const loginSubmit = (user) => {
    console.log('login', user)
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
                <RegisterForm submit={registerSubmit} /> :
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
              onClick={() => setLogInForm(!logInForm)}>
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
    </div>
  )
}

export default LandingPage