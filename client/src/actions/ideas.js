import { 
  ADD_IDEA, 
  ADD_IDEA_DESCRIPTION, 
  DELETE_IDEA,
  SET_IDEAS,
} from 'actions/types'

const endpoint = process.env.REACT_APP_ENDPOINT

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
        target: 'No target'
      })
    }

    return fetch(endpoint + '/create/idea', configuration)
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
    const { name='Undefined Idea', description='No description', target='No target' } = descriptionData

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
        idea_id: ideaId
      })
    }

    return fetch(endpoint + '/create/description', configuration)
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

    return fetch(endpoint + '/delete/idea', configuration)
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
    
    return fetch(endpoint + '/api/ideas', configuration)
      .then(res => res.json())
      .then(json => dispatch(setIdeas(json)))
  }
}