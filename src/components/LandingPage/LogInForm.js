import React from 'react'
import { Formik, Form } from 'formik'

import { FormikTextField } from '../FormField'

import { Card, CardContent, Typography, Button } from '@material-ui/core'

const LogInForm = ({ submit }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">Log In</Typography>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {}
            const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            if (!values.email) {
              errors.email = 'Required'
            } else if (!emailRegExp.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            if (!values.password) {
              errors.password = 'Required'
            }
            return errors
          }}
          onSubmit={(values) => {
            submit(values)
          }}
        >
          {({ isValid, dirty }) => (
            <Form>
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
                disabled={!dirty || !isValid}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

export default LogInForm