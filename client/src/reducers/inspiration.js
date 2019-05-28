import {
  ADD_INSPIRATION,
  EDIT_INSPIRATION,
  DELETE_INSPIRATION,
  SET_INSPIRATION,
  UPDATE_INSPIRATION_AFTER_IDEA_DELETE
} from 'actions/types'

const inspirationDefaultState = []

export default (state = inspirationDefaultState, action) => {
  switch(action.type) {
    case ADD_INSPIRATION:
      return [
        ...state,
        {
          ideaId: action.id,
          id: action.inspiration.id,
          text: action.inspiration.text
        }
      ]

    case EDIT_INSPIRATION:
      return state.map(inspiration => {
        if (inspiration.id === action.updates.id) {
          return {
            ...inspiration,
            ...action.updates
          }
        } else {
          return inspiration
        }
      })

    case DELETE_INSPIRATION:
      return state.filter(({ id }) => id !== action.id)

    case SET_INSPIRATION:
      return action.inspiration.map(({ id, text, last_edited, created_at, idea_id, user_id }) => {
        return {
          id, 
          text,
          lastEdited: last_edited,
          createdAt: created_at,
          ideaId: idea_id,
          userId: user_id
        }
      })

    case UPDATE_INSPIRATION_AFTER_IDEA_DELETE:
      return state.filter(({ ideaId }) => ideaId !== action.id)

    default:
      return state
  }
}