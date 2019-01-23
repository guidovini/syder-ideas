import { 
  ADD_FEATURE, 
  EDIT_FEATURE, 
  DELETE_FEATURE 
} from 'actions/types'

const featuresInitialState = []

export default (state = featuresInitialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return [
        ...state,
        {
          ideaId: action.id,
          id: action.feature.id,
          text: action.feature.text
        }
      ]

  case EDIT_FEATURE:
      return state.map(feature => {
        if (feature.id === action.updates.id) {
          return {
            ...feature,
            ...action.updates
          }
        } else {
          return feature
        }
      })

  case DELETE_FEATURE: 
      return state.filter(({ id }) => id !== action.id)

  default:
    return state
  }
}