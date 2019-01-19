import { SAVE_TYPE, SAVE_NAME, SAVE_DESCRIPTION, ADD_IDEA } from 'actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_IDEA:
      return [
        ...state,
        action.idea
      ]
    case SAVE_TYPE:
      return {
        ...state,
        type: action.idea_type
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