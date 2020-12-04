import userService from '../services/userService'
import { saveUser, logoutUser } from '../utils/storage'
import history from '../utils/history'
import userConstants from '../constants/userConstants'
import { setAlert } from './alertActions'

export const login = (credentials, role, from) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST,
    })
    try {
      const { data } = await userService.login(credentials, role)
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        data
      })
      saveUser(data)
      history.push(from)
      dispatch(setAlert('login successful', 'success'))
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
      })
      dispatch(setAlert('login failed', 'error'))
    }
  }
}

export const signup = (user, role) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST,
    })
    try {
      const { data } = await userService.signup(user, role)
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        data
      })
      saveUser(data)
      history.push('/home')
      dispatch(setAlert('signup successful', 'success'))
    } catch (error) {
      dispatch({
        type: userConstants.FAILURE,
      })
      dispatch(setAlert('signup failed', 'error'))
    }
  }
}

export const logout = () => {
  return async dispatch => {
    logoutUser()
    dispatch({ type: userConstants.LOGOUT })
    history.push('/')
    dispatch(setAlert('user logged out'))
  }
}

export const me = (role) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST
    })
    try {
      const { data: profile } = await userService.me(role)
      dispatch({
        type: userConstants.PROFILE_SUCCESS,
        profile
      })
    } catch (error) {
      statusHandler(dispatch, error)
    }
  }
}

export const update = (updateData, role) => {
  return async dispatch => {
    dispatch({
      type: userConstants.REQUEST
    })
    try {
      const { data: profile } = await userService.update(updateData, role)
      dispatch({
        type: userConstants.PROFILE_SUCCESS,
        profile
      })
      dispatch(setAlert('User information updated'))
    } catch (error) {
      statusHandler(dispatch, error)
    }
  }
}

const statusHandler = (dispatch, response) => {
  if (!response || response.status === 401 || response.status === 500) {
    logoutUser()
    dispatch({ type: userConstants.FAILURE })
    dispatch(setAlert('invalid token', 'error'))
  } else {
    window.location.reload()
  }
}