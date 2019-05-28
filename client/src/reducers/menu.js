import {
  CHANGE_TO_SUMMARY,
  CHANGE_TO_FEATURES,
  CHANGE_TO_STRATEGIES,
  CHANGE_TO_INSPIRATION,
  CHANGE_TO_BUSINESS_MODEL,
  CHANGE_TO_PLANNING,
  CHANGE_TO_RESOURCES
} from '../actions/types';

const menuReducerDefaultState = {
  option: 'summary',
  title: 'Idea Summary'
};

export default (state = menuReducerDefaultState, action) => {
  switch (action.type) {
    case CHANGE_TO_SUMMARY:
      return {
        ...state,
        option: 'summary',
        title: 'Idea Summary'
      };
    case CHANGE_TO_FEATURES:
      return {
        ...state,
        option: 'features',
        title: 'Features'
      };
    case CHANGE_TO_STRATEGIES:
      return {
        ...state,
        option: 'strategies',
        title: 'Strategies'
      };
    case CHANGE_TO_INSPIRATION:
      return {
        ...state,
        option: 'inspiration',
        title: 'Product Inspiration and Competitors'
      };
    case CHANGE_TO_BUSINESS_MODEL:
      return {
        ...state,
        option: 'business-model',
        title: 'Business Model'
      };
    case CHANGE_TO_PLANNING:
      return {
        ...state,
        option: 'planning',
        title: 'Timeline and Planning'
      };
    case CHANGE_TO_RESOURCES:
      return {
        ...state,
        option: 'resources',
        title: 'Resources'
      };
    default:
      return state;
  }
};
