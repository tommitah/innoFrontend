import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import { TextField, FormControl, InputLabel, Select, FormHelperText, MenuItem } from '@material-ui/core'

export const FormikTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.touched && meta.error ? meta.error : ''

  return (
    <TextField
      {...field}
      {...props}
      label={label}
      error={!!errorText}
      helperText={errorText}
      style={{ minHeight: '5rem' }}
    />
  )
}

FormikTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  placeholder: PropTypes.string.isRequired,
}

export const FormikSelectField = ({ options, label, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.touched && meta.error ? meta.error : ''

  return (
    <FormControl
      style={{ minHeight: '5rem', minWidth: 120 }}
      error={!!errorText}>
      <InputLabel id={props.id || props.name}>{label}</InputLabel>
      <Select {...field} >
        <MenuItem disabled value="">Select a value</MenuItem>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label || option.value}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  )
}

FormikSelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    label: PropTypes.string
  })).isRequired
}