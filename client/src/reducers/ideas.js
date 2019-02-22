import { 
  ADD_IDEA, 
  ADD_IDEA_DESCRIPTION, 
  DELETE_IDEA, 
  SET_IDEAS 
} from 'actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_IDEA:
      return [
        ...state,
        {
          id: action.idea.id,
          category: action.idea.category,
          createdAt: action.idea.createdAt,
          lastEdited: action.idea.createdAt,
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
            lastEdited: action.updates.lastEdited
          }
        } else {
          return idea
        }
      })

    case DELETE_IDEA:
      return state.filter(({ id }) => id !== action.id)

    case SET_IDEAS:
      return action.ideas.map(({ id, category, name, description, target, last_edited, created_at, user_id }) => {
        return {
          id,
          category, 
          name,
          description,
          target,
          lastEdited: last_edited,
          createdAt: created_at,
          userId: user_id
        }
      })
      
    default:
      return state
  }
}