/**
 * Redux alert reducer
 * @module
 */
import alertConstants from '../constants/alertConstants'

/**
 * alert reducer that controls alert state
 * @function
 * @param {Object} state - current state
 * @param {Object} action - dispatched action
 */
const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case alertConstants.SET:
      return {
        severity: action.severity,
        message: action.message,
        open: true
      }
    case alertConstants.CLEAR:
      return {
        ...state, open: false
      }
    default:
      return state
  }
}

export default alertReducer