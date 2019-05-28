import {
  ADD_INSPIRATION,
  EDIT_INSPIRATION,
  DELETE_INSPIRATION,
  SET_INSPIRATION,
  UPDATE_INSPIRATION_AFTER_IDEA_DELETE
} from 'actions/types'

const endpoint = process.env.REACT_APP_ENDPOINT
const inspirationAPIRoute = '/api/inspiration'

export const addInspiration = (id, inspiration) => ({
  type: ADD_INSPIRATION,
  id,
  inspiration
})

export const startAddInspiration = (ideaId, inspirationData) => {
  return dispatch => {
    const { id, text } = inspirationData 

    const configuration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id,
        text,
        idea_id: ideaId
      })
    }

    return fetch(endpoint + inspirationAPIRoute + '/create', configuration)
      .then(dispatch(addInspiration(ideaId, inspirationData)))
      .catch(err => console.log(err))
  }
}

export const editInspiration = (id, updates) => ({
  type: EDIT_INSPIRATION,
  id,
  updates
})

export const startEditInspiration = (ideaId, inspirationUpdates) => {
  return dispatch => {
    const {id, text} = inspirationUpdates

    const configuration = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id,
        text
      })
    }

    return fetch(endpoint + inspirationAPIRoute + '/update', configuration)
      .then(dispatch(editInspiration(ideaId, inspirationUpdates)))
      .catch(err => console.log(err))
  }
}

export const deleteInspiration = ({ id }) => ({
  type: DELETE_INSPIRATION,
  id
})

export const startDeleteInspiration = ({ id }) => {
  return dispatch => {
    const configuration = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    }

    return fetch(endpoint + inspirationAPIRoute + '/delete', configuration)
      .then(dispatch(deleteInspiration({ id })))
      .catch(err => console.log(err))
  }
}

export const setInspiration = (inspiration) => ({
  type: SET_INSPIRATION,
  inspiration
})

export const startSetInspiration = () => {
  return dispatch => {
    const configuration = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }

    return fetch(endpoint + inspirationAPIRoute + '/user', configuration)
      .then(res => res.json())
      .then(json => dispatch(setInspiration(json)))
      .catch(err => console.log(err))
  }
}

export const updateInspirationAfterIdeaDelete = (id) => ({
  type: UPDATE_INSPIRATION_AFTER_IDEA_DELETE,
  id
})

export const startUpdateInspirationAfterIdeaDelete = (id) => {
  return dispatch => {
    const configuration = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    }

    return fetch(endpoint + inspirationAPIRoute + '/clear', configuration)
      .then(dispatch(updateInspirationAfterIdeaDelete(id)))
      .catch(err => console.log(err))
  }
}