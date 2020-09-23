import React from 'react'
import { useField } from 'formik'

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={{ color: 'red' }} className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

export const SelectField = ({ options, label, ...props }) => {
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