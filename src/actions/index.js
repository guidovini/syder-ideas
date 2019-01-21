import uuid from 'uuid/v4'
import { SAVE_CATEGORY, SAVE_NAME, SAVE_DESCRIPTION, ADD_IDEA } from 'actions/types'

export const addIdea = (idea) => ({
    type: ADD_IDEA,
    idea
})

export const startAddIdea = (ideaData = {}) => {
  return (dispatch, getState) => {
    const id = uuid()
    const { 
      category = '', 
      name = '', 
      description = '', 
      target = '' 
    } = ideaData
    const idea = { category, name, description, target }

    return dispatch(addIdea({
      id,
      ...idea
    }))
  }
}

export const saveCategory = (category) => {
  return {
    type: SAVE_CATEGORY,
    category
  }
}

export const saveName = (name) => {
  return {
    type: SAVE_NAME,
    name
  }
}

export const saveDescription = (description, target) => {
  return {
    type: SAVE_DESCRIPTION,
    description,
    target
  }
}