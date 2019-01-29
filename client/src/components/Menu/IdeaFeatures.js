import React from 'react'

import IdeaFeaturesForm from 'components/Menu/IdeaFeaturesForm'
import IdeaFeaturesList from 'components/Menu/IdeaFeaturesList';

export default function IdeaFeatures({ idea }) {
  return (
    <div>
      <IdeaFeaturesForm idea={idea}/>
      <IdeaFeaturesList idea={idea}/>
    </div>
  )
}