import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../_reducers/userReducer'

const reducer = combineReducers({
  user: userReducer
})

export default createStore(reducer, applyMiddleware(thunk))