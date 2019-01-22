import { ADD_IDEA, ADD_IDEA_DESCRIPTION, ADD_FEATURE } from 'actions/types'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_IDEA:
      return [
        ...state,
        {
          id: action.idea.id,
          category: action.idea.category,
          createdAt: action.idea.createdAt,
          modifiedAt: action.idea.createdAt,
          features: [],
        }
      ]
    case ADD_IDEA_DESCRIPTION:
      return state.map(idea => {
        if (idea.id === action.id) {
          return {
            ...idea,
            name: action.updates.name,
            description: action.updates.description,
            target: action.updates.target,
            modifiedAt: action.updates.modifiedAt
          }
        } else {
          return idea
        }
      })
    case ADD_FEATURE:
      return state.map(idea => {
        if (idea.id === action.id) {
          return {
            ...idea,
            features: [
              ...idea.features,
              action.feature
            ]
          }
        } else {
          return state
        }
      })
    default:
      return state
  }
}