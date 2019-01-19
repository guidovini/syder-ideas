import { SAVE_TYPE, SAVE_NAME, SAVE_DESCRIPTION, SAVE_TARGET, ADD_IDEA } from 'actions/types'

export const addIdea = (idea) => ({
  type: ADD_IDEA,
  idea
})

export const startAddIdea = (ideaData = {}) => {
  return (dispatch, getState) => {
    
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

export const saveTarget = (target) => {
  return {
    type: SAVE_TARGET,
    target
  }
}