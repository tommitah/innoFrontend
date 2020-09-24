import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

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
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        <option disabled value=''>Select a value</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div style={{ color: 'red' }} className="error">{meta.error}</div>
      ) : null}
    </>
  )
}