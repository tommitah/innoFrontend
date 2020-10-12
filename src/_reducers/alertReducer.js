import alertConstants from '../_constants/alertConstants'

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