import { 
  ADD_IDEA, 
  ADD_IDEA_DESCRIPTION, 
  DELETE_IDEA,
  SET_IDEAS,
  FAVORITE_IDEA,
  ARCHIVE_IDEA
} from 'actions/types'

import { startUpdateFeaturesAfterIdeaDelete } from 'actions/features'

const endpoint = process.env.REACT_APP_ENDPOINT
const ideasAPIRoute = '/api/ideas'

export const addIdea = (idea) => ({
  type: ADD_IDEA,
  idea
})

export const startAddIdea = (ideaData = {}) => {
  return dispatch => {
    // eslint-disable-next-line
    const { id, category } = ideaData

    const configuration = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id,
        category
      })
    }

    return fetch(endpoint + ideasAPIRoute + '/create', configuration)
      .then(dispatch(addIdea(ideaData)))
      .catch(err => console.log(err))
  }
}

export const addIdeaDescription = (id, updates) => ({
  type: ADD_IDEA_DESCRIPTION,
  id,
  updates
})

export const startAddIdeaDescription = (ideaId = {}, descriptionData = {}) => {
  return dispatch => {
    const {
      name, 
      description, 
      target, 
      lastEdited, 
    } = descriptionData

    const configuration = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id: ideaId,
        name,
        description,
        target,
        last_edited: lastEdited,
      })
    }

    return fetch(endpoint + ideasAPIRoute + '/update', configuration)
      .then(dispatch(addIdeaDescription(ideaId, descriptionData)))
      .catch(err => console.log(err))
  }
}

export const deleteIdea = (id) => ({
  type: DELETE_IDEA,
  id
})

export const startDeleteIdea = (id) => {
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

    return dispatch(updateAfterIdeaDelete(id))
      .then(fetch(endpoint + ideasAPIRoute + '/delete', configuration))
      .then(dispatch(deleteIdea(id)))
      .catch(err => console.log(err))
  }
}

export const setIdeas = (ideas) => ({
  type: SET_IDEAS,
  ideas
})

export const startSetIdeas = () => {
  return dispatch => {
    const configuration = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      }
    }

    return fetch(endpoint + ideasAPIRoute + '/user', configuration)
      .then(res => res.json())
      .then(json => dispatch(setIdeas(json)))
      .catch(err => console.log(err))
  }
}

export const updateAfterIdeaDelete = (id) => {
  return dispatch => {
    return dispatch(startUpdateFeaturesAfterIdeaDelete(id))
      .then(console.log('startUpdateStrategiesAfterIdeaDelete'))
      .then(console.log('startUpdateCompetitorsAfterIdeaDelete'))
      .catch(err => console.log(err))
  }
}

export const favoriteIdea = (id) => ({
  type: FAVORITE_IDEA,
  payload: {
    id
  }
})

export const startFavoriteIdea = (id) => {
  return dispatch => {
    const configuration = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    }
    
    return fetch(endpoint + ideasAPIRoute + '/favorite', configuration)
      .then(dispatch(favoriteIdea(id)))
      .catch(err => console.log(err))
  }
}

export const archiveIdea = (id) => ({
  type: ARCHIVE_IDEA,
  payload: {
    id
  }
})

export const startArchiveIdea = (id) => {
  return dispatch => {
    const configuration = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
        id
      })
    }

    return fetch(endpoint + ideasAPIRoute + '/archive', configuration)
      .then(dispatch(archiveIdea(id)))
      .catch(err => console.log(err))
  }
}