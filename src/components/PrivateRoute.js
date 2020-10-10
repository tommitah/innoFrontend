import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ loggedIn, children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ?
          children :
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
      }
    />
  )
}

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PrivateRoute