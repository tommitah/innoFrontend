import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'

import { FormikTextField, FormikSelectField } from '../FormField'

import { Card, CardContent, Typography, Button, Box, CircularProgress } from '@material-ui/core'

const SignUpForm = ({ loggingIn, handleSubmit }) => {
  const roleOptions = [
    { value: 'worker', label: 'Worker' },
    { value: 'agency', label: 'Agency' },
    { value: 'business', label: 'Business' }
  ]

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography align="center" variant="h4">
          Sign Up
        </Typography>
        <Formik
          initialValues={{
            name: '', email: '', password: '', passwordConfirm: '', role: ''
          }}
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
            if (!values.name) {
              errors.name = requiredError
            } else if (values.name.length < 3) {
              errors.name = 'Invalid name'
            }
            if (!values.passwordConfirm) {
              errors.passwordConfirm = requiredError
            } else if (values.passwordConfirm !== values.password) {
              errors.passwordConfirm = 'Password does not match'
            }
            if (!values.role) {
              errors.role = requiredError
            }
            return errors
          }}
          // handleSubmit doesn't need password confirmation
          // eslint-disable-next-line no-unused-vars
          onSubmit={({ passwordConfirm, ...rest }) => {
            handleSubmit(rest)
          }}>
          {({ isValid, dirty }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column">
                <FormikTextField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="jarmo"
                />
                <FormikTextField
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="test@test.com"
                />
                <Box
                  display="flex"
                  flexDirection="row">
                  <Box paddingRight={1}>
                    <FormikTextField
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="jorma123"
                    />
                  </Box>
                  <FormikTextField
                    label="Confirm"
                    name="passwordConfirm"
                    type="password"
                    placeholder="jorma123"
                  />
                </Box>
                <FormikSelectField
                  label="Role"
                  name="role"
                  options={roleOptions}
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

SignUpForm.propTypes = {
  loggingIn: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
}

export default SignUpForm