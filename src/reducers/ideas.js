import { SAVE_CATEGORY, SAVE_NAME, SAVE_DESCRIPTION, ADD_IDEA, ADD_IDEA_INFO } from 'actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_IDEA:
      return [
        ...state,
        {
          id: action.idea.id,
          category: action.idea.category,
        }
      ]
    case ADD_IDEA_INFO:
      return state.map(idea => {
        if (idea.id === action.id) {
          return {
            ...idea,
            name: action.updates.name,
            description: action.updates.description,
            target: action.updates.target
          }
        } else {
          return idea
        }
      })
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