import {
  ADD_INSPIRATION,
  EDIT_INSPIRATION,
  DELETE_INSPIRATION,
  SET_INSPIRATION,
  UPDATE_INSPIRATION_AFTER_IDEA_DELETE
} from '../actions/types';

const inspirationDefaultState = [];

export default (state = inspirationDefaultState, action) => {
  switch (action.type) {
    case ADD_INSPIRATION:
      return [
        ...state,
        {
          ideaId: action.id,
          id: action.inspiration.id,
          text: action.inspiration.text
        }
      ];

    case EDIT_INSPIRATION:
      return state.map(inspiration => {
        if (inspiration.id === action.updates.id) {
          return {
            ...inspiration,
            ...action.updates
          };
        }
        return inspiration;
      });

    case DELETE_INSPIRATION:
      return state.filter(({ id }) => id !== action.id);

    case SET_INSPIRATION:
      return action.inspiration.map(
        ({ id, text, lastEdited, createdAt, ideaId, userId }) => {
          return {
            id,
            text,
            lastEdited,
            createdAt,
            ideaId,
            userId
          };
        }
      );

    case UPDATE_INSPIRATION_AFTER_IDEA_DELETE:
      return state.filter(({ ideaId }) => ideaId !== action.id);

    default:
      return state;
  }
};
