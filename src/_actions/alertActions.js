import alertConstants from '../_constants/alertConstants'

let timeoutId

export const setAlert = (message, severity = 'info', duration = 5) => {
  return async dispatch => {
    dispatch({
      type: alertConstants.SET,
      message,
      severity
    })

    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      dispatch({
        type: alertConstants.CLEAR
      })
    }, duration * 1000)
  }
}

export const clearAlert = () => {

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  return {
    type: alertConstants.CLEAR,
  }
}