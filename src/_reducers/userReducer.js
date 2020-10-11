import { loadUser } from '../_utils/storage'
import userConstants from '../_constants/userConstants'

const user = loadUser()
const initialState = user ? { loggedIn: true, user } : {}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REQUEST:
      return {
        loggingIn: true,
      }
    case userConstants.SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      }
    case userConstants.FAILURE:
    case userConstants.LOGOUT:
      return {}
    default:
      return state
  }
}

export default userReducer