import updateReducer from './forceUpdate'
import loggedReducer from './isLogged'
import shoppingCartReducer from './shoppingCart'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  forceUpdate: updateReducer,
  isLogged: loggedReducer,
  shoppingCart: shoppingCartReducer 
})

export default allReducers