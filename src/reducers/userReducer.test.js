import userReducer from './userReducer'
import userConstants from '../constants/userConstants'

import deepFreeze from 'deep-freeze'

describe('alertReducer', () => {
  test('Should return default state', () => {
    const newState = userReducer(undefined, {})
    expect(newState).toEqual({ loggedIn: false, data: {} })
  })

  test('returns a new state with action USER_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT and USER_FAILURE', () => {
    const state = {}
    const action = {
      type: userConstants.REQUEST
    }

    deepFreeze(state)
    const requestState = userReducer(state, action)

    expect(requestState.loading).toBe(true)

    deepFreeze(requestState)
    const loginState = userReducer(requestState, { type: userConstants.LOGIN_SUCCESS })

    expect(loginState.loggedIn).toBe(true)

    deepFreeze(loginState)
    const logoutState = userReducer(loginState, { type: userConstants.LOGOUT })
    const failureState = userReducer(loginState, { type: userConstants.FAILURE })
    expect(logoutState.loggedIn).toBe(false)
    expect(failureState.loggedIn).toBe(false)
  })

})