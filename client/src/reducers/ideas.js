import { 
  ADD_IDEA, 
  ADD_IDEA_DESCRIPTION, 
  DELETE_IDEA, 
  SET_IDEAS,
  FAVORITE_IDEA,
  ARCHIVE_IDEA 
} from 'actions/types'

const INITIAL_STATE = [
  {
    id: '',
    category: '',
    createdAt: '',
    lastEdited: '',
    name: '',
    description: '',
    target: '',
    favorite: false,
    archive: false
  }
]

export default (state = INITIAL_STATE, action) => {
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
      return action.ideas.map((idea) => {
        return {
          id: idea.id,
          category: idea.category, 
          name: idea.name,
          description: idea.description,
          target: idea.target,
          lastEdited: idea.last_edited,
          createdAt: idea.created_at,
          userId: idea.user_id
        }
      })

    case FAVORITE_IDEA:
      return state.map(idea => {
        if (idea.id === action.payload.id) {
          return {
            ...idea,
            favorite: !idea.favorite
          }
        } else {
          return idea 
        }
      })
    
    case ARCHIVE_IDEA:
      return state.map(idea => {
        if (idea.id === action.payload.id) {
          return {
            ...idea,
            archive: !idea.archive
          }
        } else {
          return idea
        }
      })
      
    default:
      return state
  }
}