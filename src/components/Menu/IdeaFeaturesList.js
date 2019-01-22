import React from 'react'

const IdeaFeaturesList = ({ idea }) => {
  return (
    <div>
      {idea.features.map(feature => <p>- {feature}</p>)}
    </div>
  )
}

export default IdeaFeaturesList