import React from 'react'

import FeatureForm from './FeatureForm'
import FeaturesList from './FeaturesList'

export default function IdeaFeatures({ idea }) {
  return (
    <div>
      <FeatureForm idea={idea}/>
      <FeaturesList idea={idea}/>
    </div>
  )
}