import counterReducer from './counter'
import loggedReducer from './isLogged'
import shoppingCartReducer from './shoppingCart'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  shoppingCart: shoppingCartReducer 
})

export default allReducers