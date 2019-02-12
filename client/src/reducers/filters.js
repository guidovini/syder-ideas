import { 
  SORT_BY_TITLE,
  SORT_BY_LAST_EDITED,
  SORT_BY_LAST_CREATED,
  SET_FILTER_TEXT 
} from 'actions/types'

const defaultFilterState = {
  sortBy: 'title',
  filterText: ''
}

export default (state = defaultFilterState, action) => {
  switch (action.type) {
    case SORT_BY_TITLE:
      return {
        ...state,
        sortBy: 'title'
      }

    case SORT_BY_LAST_EDITED:
      return {
        ...state,
        sortBy: 'lastEdited'
      }

    case SORT_BY_LAST_CREATED:
      return {
        ...state,
        sortBy: 'lastCreated'
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