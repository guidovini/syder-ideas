import {
  ADD_STRATEGY,
  EDIT_STRATEGY,
  DELETE_STRATEGY,
  SET_STRATEGIES,
  UPDATE_STRATEGIES_AFTER_IDEA_DELETE
} from '../actions/types';

const strategiesDefaultState = [];

export default (state = strategiesDefaultState, action) => {
  switch (action.type) {
    case ADD_STRATEGY:
      return [
        ...state,
        {
          ideaId: action.id,
          id: action.strategy.id,
          text: action.strategy.text
        }
      ];

    case EDIT_STRATEGY:
      return state.map(strategy => {
        if (strategy.id === action.updates.id) {
          return {
            ...strategy,
            ...action.updates
          };
        }
        return strategy;
      });

    case DELETE_STRATEGY:
      return state.filter(({ id }) => id !== action.id);

    case SET_STRATEGIES:
      return action.strategies.map(
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

    case UPDATE_STRATEGIES_AFTER_IDEA_DELETE:
      return state.filter(({ ideaId }) => ideaId !== action.id);

    default:
      return state;
  }
};
