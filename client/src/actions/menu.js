import { 
  CHANGE_TO_SUMMARY, 
  CHANGE_TO_FEATURES, 
  CHANGE_TO_STRATEGIES, 
  CHANGE_TO_INSPIRATION, 
  CHANGE_TO_BUSINESS_MODEL, 
  CHANGE_TO_PLANNING, 
  CHANGE_TO_RESOURCES,
} from 'actions/types'

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
