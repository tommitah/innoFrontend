import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'

import { FormikTextField, FormikRadioField } from '../FormField'

import { Card, CardContent, Typography, Button, Box, CircularProgress } from '@material-ui/core'

const LogInForm = ({ loggingIn, submit }) => {
  const userOptions = [
    { value: 'worker', label: 'Worker' },
    { value: 'agency', label: 'Agency' },
    { value: 'business', label: 'Business' }
  ]

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h4">
          Log In
        </Typography>
        <Formik
          initialValues={{ email: '', password: '', user: '' }}
          validate={values => {
            const errors = {}
            const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            const requiredError = 'Field is required'
            if (!values.email) {
              errors.email = requiredError
            } else if (!emailRegExp.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            if (!values.password) {
              errors.password = requiredError
            }
            if (!values.user) {
              errors.user = requiredError
            }
            return errors
          }}
          onSubmit={(values) => {
            submit(values)
          }}>
          {({ isValid, dirty }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column">
                <FormikRadioField
                  label="User"
                  name="user"
                  options={userOptions}
                />
                <FormikTextField
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="test@test.com"
                />
                <FormikTextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="jorma123"
                />
                <Button
                  type="submit"
                  disabled={!dirty || !isValid || loggingIn}
                  variant="contained"
                  color="primary">
                  {loggingIn ? <CircularProgress size={24} /> : 'submit'}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

LogInForm.propTypes = {
  loggingIn: PropTypes.bool,
  submit: PropTypes.func.isRequired
}

export default LogInForm