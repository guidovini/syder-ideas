import React from 'react'

import IdeaFeaturesForm from 'components/Menu/IdeaFeaturesForm'
import IdeaFeaturesList from 'components/Menu/IdeaFeaturesList';

export default function IdeaFeatures({ idea }) {
  return (
    <div>
      These are the features
      <IdeaFeaturesList idea={idea}/>
      <IdeaFeaturesForm idea={idea}/>
    </div>
  )
}