import { loadUser } from '../_utils/storage'

const user = loadUser()
const initialState = user ? { loggedIn: true, user } : {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        loggingIn: true,
        user: action.user
      }
    case 'LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      }
    case 'LOGIN_FAILURE':
    case 'LOGOUT':
      return {}
    default:
      return state
  }
}

export default userReducer