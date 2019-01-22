import { combineReducers } from 'redux'
import ideasReducer from 'reducers/ideas'
import menuReducer from 'reducers/menu'

export default combineReducers({
  ideas: ideasReducer,
  menu: menuReducer
})