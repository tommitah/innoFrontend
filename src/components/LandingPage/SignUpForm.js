import React from 'react'
import { Formik, Form } from 'formik'
import { FormikTextField, FormikSelectField } from '../FormField'


const SignUpForm = ({ submit }) => {
  const userOptions = [
    { value: 'worker', label: 'Worker' },
    { value: 'company', label: 'Company' },
    { value: 'other', label: 'Other' }
  ]

  return (
    <div>
      <p>Sign Up</p>
      <Formik
        initialValues={{
          name: '', email: '', password: '', passwordAgain: '', user: ''
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
          if (!values.passwordAgain) {
            errors.passwordAgain = requiredError
          } else if (values.passwordAgain !== values.password) {
            errors.passwordAgain = 'Password does not match'
          }
          if (!values.user) {
            errors.user = requiredError
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
            <FormikTextField
              label="Password"
              name="password"
              type="password"
              placeholder="jorma123"
            />
            <FormikTextField
              label="Password Again"
              name="passwordAgain"
              type="password"
              placeholder="jorma123"
            />
            <FormikSelectField
              label="User"
              name="user"
              options={userOptions}
            />
            <button type="submit" disabled={!dirty || !isValid}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignUpForm