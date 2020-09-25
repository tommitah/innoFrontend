import React, { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'

import RegisterForm from './SignUpForm'
import LogInForm from './LogInForm'
import './landingPage.css'

const LandingPage = () => {
  const [logInForm, setLogInForm] = useState(false)

  const registerSubmit = (user) => {
    console.log('register', user)
  }

  const loginSubmit = (user) => {
    console.log('login', user)
  }

  return (
    <div>
      <p>this is a landing page</p>
      <SwitchTransition mode='out-in'>
        <CSSTransition
          key={logInForm}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false)
          }}
          classNames='fade'
        >
          {logInForm ?
            <div><RegisterForm submit={registerSubmit} /></div> :
            <div><LogInForm submit={loginSubmit} /></div>
          }
        </CSSTransition>
      </SwitchTransition>
      <button onClick={() => setLogInForm(!logInForm)}>
        change to {logInForm ? 'Log In' : 'Sign Up'}
      </button>
      <Link to="/home">
        <p>go to main page</p>
      </Link>
    </div>
  )
}

export default LandingPage