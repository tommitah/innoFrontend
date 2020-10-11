import userService from '../_services/userService'
import { saveUser } from '../_utils/storage'
import history from '../_utils/history'
import userConstants from '../_constants/userConstants'

export const login = (email, password, from) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST,
    })
    try {
      const { data: user } = await userService.login({ email, password })
      dispatch({
        type: userConstants.SUCCESS,
        user: user
      })
      saveUser(user)
      history.push(from)
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
        error: error.response.data
      })
    }
  }
}

export const signup = (user) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST,
    })
    try {
      const { data: userData } = await userService.signup(user)
      dispatch({
        type: userConstants.SUCCESS,
        user: userData
      })
      saveUser(userData)
      history.push('/home')
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
        error: error.response.data
      })
    }
  }
}