import { combineReducers } from 'redux';

import ideasReducer from './ideas';
import menuReducer from './menu';
import featuresReducer from './features';
import filtersReducer from './filters';
import authReducer from './auth';
import strategiesReducer from './strategies';
import inspirationReducer from './inspiration';

export default combineReducers({
  ideas: ideasReducer,
  menu: menuReducer,
  features: featuresReducer,
  filters: filtersReducer,
  auth: authReducer,
  strategies: strategiesReducer,
  inspiration: inspirationReducer
});
