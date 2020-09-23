import React, { useState } from 'react'
import RegisterForm from './SignUpForm'
import LogInForm from './LogInForm'

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
      {
        logInForm ?
          <RegisterForm submit={registerSubmit} /> :
          <LogInForm submit={loginSubmit} />
      }
      <button onClick={() => setLogInForm(!logInForm)}>
        change to {logInForm ? 'Log In' : 'Sign Up'}
      </button>
    </div>
  )
}

export default LandingPage