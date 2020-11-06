import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'

import { FormikTextField } from '../FormField'

import { Card, CardContent, Typography, Button, Box, FormControlLabel, Switch } from '@material-ui/core'

const WorkerProfile = ({ profile, handleSubmit }) => {
  const [edit, setEdit] = useState(true)

  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          paddingBottom={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between">
          <Typography align="center" variant="h4">
            Profile
          </Typography>
          <FormControlLabel
            control={<Switch
              size="small"
              checked={!edit}
              onChange={() => setEdit(prevEdit => !prevEdit)}
            />}
            label="edit"
          />
        </Box>
        <Formik
          initialValues={{
            name: profile.name,
            phonenumber: profile.phonenumber || '',
          }}
          validate={values => {
            const errors = {}
            const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g
            const requiredError = 'Field is required'
            if (!values.name) {
              errors.name = requiredError
            } else if (values.name.length < 3) {
              errors.name = 'Invalid name'
            }
            if (!values.phonenumber) {
              errors.phonenumber = requiredError
            } else if (!phoneRegExp.test(values.phonenumber)) {
              errors.phonenumber = 'Invalid phone number'
            }
            return errors
          }}
          onSubmit={(values) => {
            setEdit(prevEdit => !prevEdit)
            handleSubmit(values)
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
                  disabled={edit}
                />
                <FormikTextField
                  label="Phone number"
                  name="phonenumber"
                  type="text"
                  placeholder="12342"
                  disabled={edit}
                />
                <Button
                  type="submit"
                  disabled={!dirty || !isValid || edit}
                  variant="contained"
                  color="primary">
                  submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

WorkerProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phonenumber: PropTypes.string
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default WorkerProfile