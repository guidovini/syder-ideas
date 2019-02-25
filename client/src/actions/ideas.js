import { 
  ADD_IDEA, 
  ADD_IDEA_DESCRIPTION, 
  DELETE_IDEA,
  SET_IDEAS
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
    const { id, category, createdAt } = ideaData

    const configuration = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        category,
        name: 'Undefined Idea',
        description: 'No description',
        target: 'No target',
        created_at: createdAt
      })
    }

    return fetch(endpoint + ideasAPIRoute + '/create', configuration)
      .then(
        dispatch(addIdea(ideaData))
      )
  }
}

export const addIdeaDescription = (id, updates) => ({
  type: ADD_IDEA_DESCRIPTION,
  id,
  updates
})

export const startAddIdeaDescription = (ideaId = {}, descriptionData = {}) => {
  return dispatch => {
    const { name='Undefined Idea', description='No description', target='No target', lastEdited } = descriptionData

    const configuration = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        description,
        target,
        idea_id: ideaId,
        last_edited: lastEdited
      })
    }

    return fetch(endpoint + ideasAPIRoute + '/update', configuration)
      .then(dispatch(addIdeaDescription(ideaId, descriptionData)))
  }
}

export const deleteIdea = (id) => ({
  type: DELETE_IDEA,
  id
})

export const startDeleteIdea = (id) => {
  return dispatch => {
    const configuration = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id
      })
    }

    return dispatch(updateAfterIdeaDelete(id))
      .then(fetch(endpoint + ideasAPIRoute + '/delete', configuration))
      .then(dispatch(deleteIdea(id)))
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
        'Content-Type': 'application/json'
      }
    }
    
    return fetch(endpoint + ideasAPIRoute + '/', configuration)
      .then(res => res.json())
      .then(json => dispatch(setIdeas(json)))
  }
}

export const updateAfterIdeaDelete = (id) => {
  return dispatch => {
    return dispatch(startUpdateFeaturesAfterIdeaDelete(id))
      .then(console.log('startUpdateStrategiesAfterIdeaDelete'))
      .then(console.log('startUpdateCompetitorsAfterIdeaDelete'))
  }
}