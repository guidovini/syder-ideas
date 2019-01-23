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
  DELETE_FEATURE
} from 'actions/types'

export const addIdea = (idea) => ({
  type: ADD_IDEA,
  idea
})

export const addIdeaDescription = (id, updates) => ({
  type: ADD_IDEA_DESCRIPTION,
  id,
  updates
})

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

export const editFeature = (id, updates) => ({
  type: EDIT_FEATURE,
  id,
  updates
})

export const deleteFeature = ({ id }) => ({
  type: DELETE_FEATURE,
  id
})