import { combineReducers } from 'redux'
import ideasReducer from 'reducers/ideas'

export default combineReducers({
  ideas: ideasReducer
})