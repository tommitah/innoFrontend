import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../_reducers/userReducer'
import alertReducer from '../_reducers/alertReducer'

const reducer = combineReducers({
  user: userReducer,
  alert: alertReducer
})

export default createStore(reducer, applyMiddleware(thunk))