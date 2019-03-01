import { 
  SORT_ALPHABETICALLY,
  SORT_BY_LAST_UPDATED,
  SORT_BY_LAST_CREATED,
  RESET_VISIBILITY,
  FILTER_FAVORITED,
  FILTER_ARCHIVED,
  SET_FILTER_TEXT 
} from 'actions/types'

export const sortAlphabetically = () => ({
  type: SORT_ALPHABETICALLY,
})

export const sortByLastUpdated = () => ({
  type: SORT_BY_LAST_UPDATED,
})

export const sortByLastCreated = () => ({
  type: SORT_BY_LAST_CREATED,
})

export const resetVisibilityFilter = () => ({
  type: RESET_VISIBILITY
})

export const filterFavorited = () => ({
  type: FILTER_FAVORITED
})

export const filterArchived = () => ({
  type: FILTER_ARCHIVED
})

export const setFilterText = (payload) => ({
  type: SET_FILTER_TEXT,
  payload
})