import React from 'react'

import FeatureForm from 'components/IdeaComponents/Features/FeatureForm'
import FeaturesList from 'components/IdeaComponents/Features/FeaturesList'

export default function IdeaFeatures({ idea }) {
  return (
    <div>
      <FeatureForm idea={idea}/>
      <FeaturesList idea={idea}/>
    </div>
  )
}