import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import { FormikTextField } from '../FormField'
import { Card, CardContent, Typography, Button, Box, FormControlLabel, Switch } from '@material-ui/core'

const CompanyProfile = ({ profile, handleSubmit }) => {
  const [edit, setEdit] = useState(true)

  return (

    <Card variant="outlined">
      <CardContent>

        {/* Container for profile information */}
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
            label="edit information"
          />
        </Box>


        <Formik
          // Establish initial values from the profile
          initialValues={{
            name: profile.name
            /* Todo: Contacts - What and why does it contain?
            contacts: profile.contacts || '', */
            ,securityOfficer: profile.securityOfficer || ''
            ,phonenumber: profile.phonenumber || ''
            ,address: profile.address || ''
            ,postnumber: profile.postnumber || ''
            ,city: profile.city || ''
          }}

          // Validate textfield values
          validate={values => {
            const errors = {}
            const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g
            const postnumRegExp = /(^\d{5}$)|(^\d{5}-\d{4}$)/g
            const requiredError = 'Field is required'

            // Todo: Loop required fields check
            if (!values.name) {
              errors.name = requiredError
            } else if (values.name.length < 3) {
              errors.name = 'Invalid name'
            }
            if (values.phonenumber && !phoneRegExp.test(values.phonenumber)) {
              errors.phonenumber = 'Invalid phone number'
            }
            if (values.postnumber && !postnumRegExp.test(values.postnumber)) {
              errors.postnumber = 'Invalid postnumber'
            }
            return errors
          }}

          // Set values
          onSubmit={(values) => {
            setEdit(prevEdit => !prevEdit)
            handleSubmit(values)
          }}>

          {/* Display values if edit is enabled*/}
          {({ isValid, dirty }) => (
            <Form>
              <Box
                display="flex"
                flexDirection="column">
                <FormikTextField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Company Name"
                  disabled={edit}
                />
                {/* Todo: Contacts - What and why does it contain?
                 <FormikTextField
                  label="Contacts"
                  name="contacts"
                  type="text"
                  placeholder="Contacts"
                  disabled={edit}
                /> */}
                <FormikTextField
                  label="Security Officer"
                  name="securityOfficer"
                  type="text"
                  placeholder="Jarmo Testaaja jarmo.testaaja@company.com"
                  disabled={edit}
                />
                <FormikTextField
                  label="Phone Number"
                  name="phonenumber"
                  type="text"
                  placeholder="+35850 5050505"
                  disabled={edit}
                />
                <FormikTextField
                  label="Address"
                  name="address"
                  type="text"
                  placeholder="Kivakuja 5K 105"
                  disabled={edit}
                />
                <FormikTextField
                  label="Post number / Zip code"
                  name="postnumber"
                  type="text"
                  placeholder="00920"
                  disabled={edit}
                />
                <FormikTextField
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Helsinki"
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

// Pass on the informaton to the database
CompanyProfile.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired
    /* Todo: Contacts - What and why does it contain?
    ,contacts: PropTypes.string */
    ,securityOfficer: PropTypes.string
    ,phonenumber: PropTypes.string
    ,address: PropTypes.string
    ,postnumber: PropTypes.string
    ,city: PropTypes.string
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CompanyProfile