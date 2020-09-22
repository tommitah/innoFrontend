import React from 'react'
import PropTypes from 'prop-types'

const Calculator = ({ first, second }) => {
  const sum = first + second
  return (
    <div>
      <p>sum of {first} and {second} is {sum}</p>
    </div>
  )
}

Calculator.propTypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired
}

export default Calculator