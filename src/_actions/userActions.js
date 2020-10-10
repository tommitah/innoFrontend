import userService from '../_services/userService'
import { saveUser } from '../_utils/storage'
import history from '../_utils/history'

export const login = (email, password, from) => {
  return async dispatch => {
    dispatch({
      type: 'LOGIN_REQUEST',
      user: email
    })
    try {
      const { data: user } = await userService.login({ email, password })
      dispatch({
        type: 'LOGIN_SUCCESS',
        user: user
      })
      saveUser(user)
      history.push(from)
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        error: error.response.data
      })
    }
  }
}