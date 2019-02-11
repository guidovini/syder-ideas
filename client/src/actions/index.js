import { 
  ADD_IDEA, 
  ADD_IDEA_DESCRIPTION, 
  CHANGE_TO_SUMMARY, 
  CHANGE_TO_FEATURES, 
  CHANGE_TO_STRATEGIES, 
  CHANGE_TO_INSPIRATION, 
  CHANGE_TO_BUSINESS_MODEL, 
  CHANGE_TO_PLANNING, 
  CHANGE_TO_RESOURCES,
  ADD_FEATURE,
  EDIT_FEATURE,
  DELETE_FEATURE, 
  DELETE_IDEA,
  SET_IDEAS,
  SET_FEATURES
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


export const changeToSummary = () => ({
  type: CHANGE_TO_SUMMARY
})

export const changeToFeatures = () => ({
  type: CHANGE_TO_FEATURES
})

export const changeToStrategies = () => ({
  type: CHANGE_TO_STRATEGIES
})

export const changeToInspiration = () => ({
  type: CHANGE_TO_INSPIRATION
})

export const changeToBusinessModel = () => ({
  type: CHANGE_TO_BUSINESS_MODEL
})

export const changeToPlanning = () => ({
  type: CHANGE_TO_PLANNING
})

export const changeToResources = () => ({
  type: CHANGE_TO_RESOURCES
})

export const addFeature = (id, feature) => ({
  type: ADD_FEATURE,
  id,
  feature
})

export const startAddFeature = (ideaId, featureData) => {
  return dispatch => {
    const { id, text } = featureData 

    const configuration = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        text,
        idea_id: ideaId
      })
    }

    return fetch(endpoint + '/create/feature', configuration)
      .then(dispatch(addFeature(ideaId, featureData)))
  }
}

export const editFeature = (id, updates) => ({
  type: EDIT_FEATURE,
  id,
  updates
})

export const startEditFeature = (ideaId, featureUpdates) => {
  return dispatch => {
    const {id, text} = featureUpdates

    const configuration = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        text
      })
    }

    return fetch(endpoint + '/edit/feature', configuration)
      .then(dispatch(editFeature(ideaId, featureUpdates)))
  }
}

export const deleteFeature = ({ id }) => ({
  type: DELETE_FEATURE,
  id
})

export const startDeleteFeature = ({ id }) => {
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

    return fetch(endpoint + '/delete/feature', configuration)
      .then(dispatch(deleteFeature({ id })))
  }
}

export const setFeatures = (features) => ({
  type: SET_FEATURES,
  features
})

export const startSetFeatures = () => {
  return dispatch => {
    const configuration = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    return fetch(endpoint + '/api/features', configuration)
      .then(res => res.json())
      .then(json => dispatch(setFeatures(json)))
  }
}