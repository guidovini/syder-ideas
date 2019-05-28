import {
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE,
  SET_FEATURES,
  UPDATE_FEATURES_AFTER_IDEA_DELETE
} from '../actions/types';

const featuresInitialState = [];

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
      ];

    case EDIT_FEATURE:
      return state.map(feature => {
        if (feature.id === action.updates.id) {
          return {
            ...feature,
            ...action.updates
          };
        }
        return feature;
      });

    case DELETE_FEATURE:
      return state.filter(({ id }) => id !== action.id);

    case SET_FEATURES:
      return action.features.map(
        // eslint-disable-next-line camelcase
        ({ id, text, last_edited, created_at, idea_id, user_id }) => {
          return {
            id,
            text,
            lastEdited: last_edited,
            createdAt: created_at,
            ideaId: idea_id,
            userId: user_id
          };
        }
      );

    case UPDATE_FEATURES_AFTER_IDEA_DELETE:
      return state.filter(({ ideaId }) => ideaId !== action.id);

    default:
      return state;
  }
};
