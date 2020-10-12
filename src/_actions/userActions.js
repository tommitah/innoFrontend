import userService from '../_services/userService'
import { saveUser } from '../_utils/storage'
import history from '../_utils/history'
import userConstants from '../_constants/userConstants'
import { setAlert } from './alertActions'

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
      dispatch(setAlert('login successful', 'success'))
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
        error: error.response.data
      })
      dispatch(setAlert('login failed', 'error'))
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
      dispatch(setAlert('signup successful', 'success'))
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
        error: error.response.data
      })
      dispatch(setAlert('signup failed', 'error'))
    }
  }
}

export const me = () => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST
    })
    try {
      const { data: info } = await userService.me()
      dispatch({
        type: userConstants.ME,
        info
      })
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
        error: error.response.data
      })
    }
  }
}