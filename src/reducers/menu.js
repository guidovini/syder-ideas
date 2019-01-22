import { CHANGE_TO_SUMMARY, CHANGE_TO_FEATURES, CHANGE_TO_STRATEGIES, CHANGE_TO_INSPIRATION, CHANGE_TO_BUSINESS_MODEL, CHANGE_TO_PLANNING, CHANGE_TO_RESOURCES } from 'actions/types'

const menuReducerDefaultState = {
  option: 'summary'
}

export default (state = menuReducerDefaultState, action) => {
  switch(action.type) {
    case CHANGE_TO_SUMMARY:
      return {
        ...state,
        option: 'summary'
      }
    case CHANGE_TO_FEATURES:
      return {
        ...state,
        option: 'features'
      }
    case CHANGE_TO_STRATEGIES:
      return {
        ...state,
        option: 'strategies'
      }
    case CHANGE_TO_INSPIRATION:
      return {
        ...state,
        option: 'inspiration'
      }
    case CHANGE_TO_BUSINESS_MODEL:
      return {
        ...state,
        option: 'business-model'
      }
    case CHANGE_TO_PLANNING:
      return {
        ...state,
        option: 'planning'
      }
    case CHANGE_TO_RESOURCES:
      return {
        ...state,
        option: 'resources'
      }
    default:
      return state
  }
}