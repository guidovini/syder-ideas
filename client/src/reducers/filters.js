import { 
  SORT_ALPHABETICALLY,
  SORT_BY_LAST_UPDATED,
  SORT_BY_LAST_CREATED,
  SET_FILTER_TEXT 
} from 'actions/types'

const defaultFilterState = {
  sortBy: 'alphabetically',
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
    
    case SET_FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload
      }

    default:
      return state
  }
}