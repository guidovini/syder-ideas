import { 
  SORT_BY_TITLE,
  SORT_BY_LAST_EDITED,
  SORT_BY_LAST_CREATED,
  SET_FILTER_TEXT 
} from 'actions/types'

export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
})

export const sortByLastEdited = () => ({
  type: SORT_BY_LAST_EDITED,
})

export const sortByLastCreated = () => ({
  type: SORT_BY_LAST_CREATED,
})

export const setFilterText = (payload) => ({
  type: SET_FILTER_TEXT,
  payload
})