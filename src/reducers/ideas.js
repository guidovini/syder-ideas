import uuid from 'uuid/v4'

import { SAVE_CATEGORY, SAVE_NAME, SAVE_DESCRIPTION, ADD_IDEA } from 'actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_IDEA:
      return [
        ...state,
        {
          id: uuid(),
          category: action.idea.category,
          name: action.idea.name,
          description: action.idea.description,
          target: action.idea.target
        }
      ]
    case SAVE_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    case SAVE_NAME:
      return {
        ...state,
        name: action.name
      }
    case SAVE_DESCRIPTION:
      return {
        ...state,
        description: action.description,
        target: action.target
      }
    default:
      return state
  }
}