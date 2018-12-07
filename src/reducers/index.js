import { combineReducers } from 'redux'
import AppReducer from './app_reducer'

export default combineReducers({
  appState: AppReducer,
})
