import {
  ADD_STRATEGY,
  EDIT_STRATEGY,
  DELETE_STRATEGY,
  SET_STRATEGIES,
  UPDATE_STRATEGIES_AFTER_IDEA_DELETE
} from './types';

const endpoint = process.env.REACT_APP_ENDPOINT;
const strategiesAPIRoute = '/api/strategies';

export const addStrategy = (id, strategy) => ({
  type: ADD_STRATEGY,
  id,
  strategy
});

export const startAddStrategy = (ideaId, strategyData) => {
  return dispatch => {
    const { id, text } = strategyData;

    const configuration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id,
        text,
        idea_id: ideaId
      })
    };

    return fetch(`${endpoint + strategiesAPIRoute}/create`, configuration)
      .then(dispatch(addStrategy(ideaId, strategyData)))
      .catch(err => console.log(err));
  };
};

export const editStrategy = (id, updates) => ({
  type: EDIT_STRATEGY,
  id,
  updates
});

export const startEditStrategy = (ideaId, strategyUpdates) => {
  return dispatch => {
    const { id, text } = strategyUpdates;

    const configuration = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id,
        text
      })
    };

    return fetch(`${endpoint + strategiesAPIRoute}/update`, configuration)
      .then(dispatch(editStrategy(ideaId, strategyUpdates)))
      .catch(err => console.log(err));
  };
};

export const deleteStrategy = ({ id }) => ({
  type: DELETE_STRATEGY,
  id
});

export const startDeleteStrategy = ({ id }) => {
  return dispatch => {
    const configuration = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    };

    return fetch(`${endpoint + strategiesAPIRoute}/delete`, configuration)
      .then(dispatch(deleteStrategy({ id })))
      .catch(err => console.log(err));
  };
};

export const setStrategies = strategies => ({
  type: SET_STRATEGIES,
  strategies
});

export const startSetStrategies = () => {
  return dispatch => {
    const configuration = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      }
    };

    return fetch(`${endpoint + strategiesAPIRoute}/user`, configuration)
      .then(res => res.json())
      .then(json => dispatch(setStrategies(json)))
      .catch(err => console.log(err));
  };
};

export const updateStrategiesAfterIdeaDelete = id => ({
  type: UPDATE_STRATEGIES_AFTER_IDEA_DELETE,
  id
});

export const startUpdateStrategiesAfterIdeaDelete = id => {
  return dispatch => {
    const configuration = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    };

    return fetch(`${endpoint + strategiesAPIRoute}/clear`, configuration)
      .then(dispatch(updateStrategiesAfterIdeaDelete(id)))
      .catch(err => console.log(err));
  };
};
