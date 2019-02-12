import { combineReducers } from 'redux'

import ideasReducer from 'reducers/ideas'
import menuReducer from 'reducers/menu'
import featuresReducer from 'reducers/features'
import filtersReducer from 'reducers/filters'

export default combineReducers({
  ideas: ideasReducer,
  menu: menuReducer,
  features: featuresReducer,
  filters: filtersReducer
})