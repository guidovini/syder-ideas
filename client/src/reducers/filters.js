import { 
  SORT_ALPHABETICALLY,
  SORT_BY_LAST_UPDATED,
  SORT_BY_LAST_CREATED,
  FILTER_FAVORITED,
  FILTER_ARCHIVED,
  SET_FILTER_TEXT 
} from 'actions/types'
import { RESET_VISIBILITY } from '../actions/types';

const defaultFilterState = {
  sortBy: 'alphabetically',
  filterVisibility: 'all',
  filterText: ''
}

export default (state = defaultFilterState, action) => {
  switch (action.type) {
    case SORT_ALPHABETICALLY:
      return {
        ...state,
        sortBy: 'alphabetically'
      }

    case SORT_BY_LAST_UPDATED:
      return {
        ...state,
        sortBy: 'updated'
      }

    case SORT_BY_LAST_CREATED:
      return {
        ...state,
        sortBy: 'created'
      }
    
    case RESET_VISIBILITY:
      return {
        ...state,
        filterVisibility: 'all'
      }

    case FILTER_FAVORITED:
      return {
        ...state,
        filterVisibility: 'favorite'
      }

    case FILTER_ARCHIVED:
      return {
        ...state,
        filterVisibility: 'archive'
      }
    
    case SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload
      }

    default:
      return state
  }
}