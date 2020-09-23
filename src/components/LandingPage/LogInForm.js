import React from 'react'
import { Formik, Form } from 'formik'
import { TextField } from '../FormField'

const LogInForm = ({ submit }) => {
  return (
    <div>
      <p>Log in</p>
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
            <TextField
              label="Email"
              name="email"
              type="text"
              placeholder="test@test.com"
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              placeholder="jorma123"
            />
            <button type="submit" disabled={!dirty || !isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div >
  )
}

export default LogInForm