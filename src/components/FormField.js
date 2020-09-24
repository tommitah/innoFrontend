import React from 'react'
import { useField } from 'formik'

import { TextField } from '@material-ui/core'

export const FormikTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  //viimenen tapa todennäköisesti paras

  /*return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={{ color: 'red' }} className="error">{meta.error}</div>
      ) : null}
    </>
  )*/
  /*return (
    <>
      <Field
        {...props}
        label={label}
        as={TextField}
        error={meta.touched && meta.error}
        helperText={<ErrorMessage name={props.name} />}
      />
    </>
  )*/
  return (
    <>
      <TextField
        {...field}
        {...props}
        label={label}
        error={meta.touched && meta.error ? true : false}
        helperText={meta.touched && meta.error ? meta.error : null}
      />
    </>
  )
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