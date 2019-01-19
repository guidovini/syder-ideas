import uuid from 'uuid/v4'
const id = uuid()

import { SAVE_TYPE, SAVE_NAME, SAVE_DESCRIPTION, ADD_IDEA } from 'actions/types'


export const addIdea = (idea) => ({
  type: ADD_IDEA,
  idea
})

export const startAddIdea = (ideaData = {}) => {
  return (dispatch) => {
    const { 
      type = '', 
      name = '', 
      description = '', 
      target = '' 
    } = ideaData
    const idea = { type, name, description, target }

    return dispatch(addIdea({
      id,
      ...idea
    }))
  }
}

export const saveType = (idea_type) => {
  return {
    type: SAVE_TYPE,
    idea_type
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